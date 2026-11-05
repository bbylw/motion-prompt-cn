import { catalogPacks, catalogElements } from './catalog';

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}

export function stripBase(pathname: string): string {
  const stripped = pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname;
  return stripped.replace(/\/+$/, '') || '/';
}

export const siteStats = {
  total: catalogElements.length,
  packCount: catalogPacks.length,
  perPack: catalogPacks[0]?.count ?? 0,
  languages: catalogPacks[0]?.langs.length ?? 0,
};

export function packRange(id: string): string {
  const items = catalogElements.filter((element) => element.pack === id);
  if (items.length === 0) return '';
  return `${items[0].id}–${items[items.length - 1].id}`;
}

export function packExamples(id: string, limit = 2): string[] {
  return catalogElements
    .filter((element) => element.pack === id)
    .slice(0, limit)
    .map((element) => element.nameEn);
}

export const marqueeNames = catalogElements
  .filter((_, index) => index % 12 === 0)
  .map((element) => element.nameEn);

export const storyNames = ['motion', 'camera', 'ui', 'photo'].map((id) => {
  const element = catalogElements.find((item) => item.pack === id);
  const pack = catalogPacks.find((item) => item.id === id);
  if (!element || !pack) throw new Error(`缺少分组数据：${id}`);
  return {
    id: element.id,
    name: element.name,
    nameEn: element.nameEn,
    pack: pack.name,
    packId: id,
  };
});
