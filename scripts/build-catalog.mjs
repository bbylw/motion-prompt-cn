import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = path.join(root, 'data/motion-prompt-catalog.js');
const outputPath = path.join(root, 'src/data/catalog.ts');

const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(sourcePath, 'utf8'), sandbox, { filename: sourcePath });
const catalog = sandbox.window.MP_CATALOG;

if (!catalog?.elements?.length || !catalog?.packs?.length) {
  throw new Error('官方 catalog 数据为空或格式不符');
}

const zh = (value) => (typeof value === 'string' ? value : (value?.['zh-Hans'] || value?.en || ''));

const packs = catalog.packs.map((pack) => ({
  id: pack.pack,
  order: pack.order,
  name: zh(pack.title),
  count: pack.count,
  langs: pack.langs ?? [],
  width: pack.width,
  height: pack.height,
  cycle: pack.cycle,
  categories: pack.categories.map((category) => ({
    slug: category.slug,
    name: zh(category),
  })),
}));

const elements = catalog.elements.map((element) => ({
  id: element.id,
  pack: element.pack,
  no: element.no,
  slug: element.slug,
  name: zh(element.name),
  nameEn: element.name?.en ?? '',
  meaning: zh(element.meaning),
  tags: element.tags ?? [],
}));

const source = `// Auto-generated from data/motion-prompt-catalog.js by scripts/build-catalog.mjs — do not edit manually
export interface CatalogElement {
  id: string;
  pack: string;
  no: string;
  slug: string;
  name: string;
  nameEn: string;
  meaning: string;
  tags: string[];
}

export interface CatalogPack {
  id: string;
  order: number;
  name: string;
  count: number;
  langs: string[];
  width: number;
  height: number;
  cycle: number;
  categories: { slug: string; name: string }[];
}

export const catalogPacks: CatalogPack[] = ${JSON.stringify(packs, null, 2)};

export const catalogElements: CatalogElement[] = ${JSON.stringify(elements, null, 2)};
`;

fs.writeFileSync(outputPath, source);
console.log(`已生成 ${path.relative(root, outputPath)}：${packs.length} 组 / ${elements.length} 个名称`);
