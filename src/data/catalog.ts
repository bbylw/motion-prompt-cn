// Auto-generated from data/motion-prompt-catalog.js by scripts/build-catalog.mjs — do not edit manually
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

export const catalogPacks: CatalogPack[] = [
  {
    "id": "motion",
    "order": 1,
    "name": "动态图形",
    "count": 24,
    "langs": [
      "en",
      "es",
      "ja",
      "zh-Hans",
      "zh-Hant"
    ],
    "width": 539,
    "height": 208,
    "cycle": 4.7,
    "categories": [
      {
        "slug": "entrances-text",
        "name": "入场与文字"
      },
      {
        "slug": "motion-polish",
        "name": "运动细节"
      },
      {
        "slug": "transitions-highlights",
        "name": "转场与强调"
      }
    ]
  },
  {
    "id": "camera",
    "order": 2,
    "name": "镜头运动与转场",
    "count": 24,
    "langs": [
      "en",
      "es",
      "ja",
      "zh-Hans",
      "zh-Hant"
    ],
    "width": 539,
    "height": 208,
    "cycle": 9.4,
    "categories": [
      {
        "slug": "camera-movement",
        "name": "镜头运动"
      },
      {
        "slug": "shooting-style-time",
        "name": "拍摄方式与时间效果"
      },
      {
        "slug": "transitions",
        "name": "转场"
      }
    ]
  },
  {
    "id": "ui",
    "order": 3,
    "name": "UI 组件",
    "count": 24,
    "langs": [
      "en",
      "es",
      "ja",
      "zh-Hans",
      "zh-Hant"
    ],
    "width": 542,
    "height": 191,
    "cycle": 4.5,
    "categories": [
      {
        "slug": "open-overlay",
        "name": "浮层与展开"
      },
      {
        "slug": "select-switch",
        "name": "切换与输入"
      },
      {
        "slug": "navigate-status",
        "name": "导航与状态反馈"
      }
    ]
  },
  {
    "id": "lp",
    "order": 4,
    "name": "落地页与网页效果",
    "count": 24,
    "langs": [
      "en",
      "es",
      "ja",
      "zh-Hans",
      "zh-Hant"
    ],
    "width": 539,
    "height": 208,
    "cycle": 4.8,
    "categories": [
      {
        "slug": "scroll",
        "name": "滚动效果"
      },
      {
        "slug": "hover-click",
        "name": "悬停与点击交互"
      },
      {
        "slug": "loading-loops",
        "name": "加载、导航与循环动效"
      }
    ]
  },
  {
    "id": "photo",
    "order": 5,
    "name": "摄影效果、光线与风格",
    "count": 24,
    "langs": [
      "en",
      "es",
      "ja",
      "zh-Hans",
      "zh-Hant"
    ],
    "width": 539,
    "height": 208,
    "cycle": 5,
    "categories": [
      {
        "slug": "lighting",
        "name": "布光与时段"
      },
      {
        "slug": "lens-camera",
        "name": "镜头与相机效果"
      },
      {
        "slug": "tone-finish",
        "name": "色调与后期风格"
      }
    ]
  },
  {
    "id": "motion2",
    "order": 6,
    "name": "动态图形（第 2 弹）",
    "count": 24,
    "langs": [
      "en",
      "es",
      "ja",
      "zh-Hans",
      "zh-Hant"
    ],
    "width": 539,
    "height": 208,
    "cycle": 4.7,
    "categories": [
      {
        "slug": "techniques",
        "name": "动效技巧"
      },
      {
        "slug": "text-shapes",
        "name": "文字与图形"
      },
      {
        "slug": "transitions-highlights",
        "name": "转场与强调"
      }
    ]
  },
  {
    "id": "lp2",
    "order": 7,
    "name": "落地页与网页效果（第 2 弹）",
    "count": 24,
    "langs": [
      "en",
      "es",
      "ja",
      "zh-Hans",
      "zh-Hant"
    ],
    "width": 539,
    "height": 208,
    "cycle": 9.4,
    "categories": [
      {
        "slug": "scroll",
        "name": "滚动效果"
      },
      {
        "slug": "mouse-input",
        "name": "鼠标与输入交互"
      },
      {
        "slug": "showcase",
        "name": "亮点展示"
      }
    ]
  },
  {
    "id": "camera2",
    "order": 8,
    "name": "镜头运动与转场（第 2 弹）",
    "count": 24,
    "langs": [
      "en",
      "es",
      "ja",
      "zh-Hans",
      "zh-Hant"
    ],
    "width": 539,
    "height": 208,
    "cycle": 9.4,
    "categories": [
      {
        "slug": "camera-movement",
        "name": "镜头运动"
      },
      {
        "slug": "angles-framing",
        "name": "角度与构图"
      },
      {
        "slug": "transitions-editing",
        "name": "转场与剪辑"
      }
    ]
  }
];

export const catalogElements: CatalogElement[] = [
  {
    "id": "001",
    "pack": "motion",
    "no": "01",
    "slug": "pop-in",
    "name": "弹性入场",
    "nameEn": "Pop-in",
    "meaning": "元素弹跳着出现",
    "tags": [
      "pop",
      "pop-in",
      "spring",
      "bounce",
      "scale",
      "icon",
      "badge",
      "entrance"
    ]
  },
  {
    "id": "002",
    "pack": "motion",
    "no": "02",
    "slug": "stagger",
    "name": "交错动画",
    "nameEn": "Stagger",
    "meaning": "多个元素错开时间依次出现",
    "tags": [
      "stagger",
      "sequence",
      "delay",
      "cascade",
      "bar-chart",
      "list",
      "entrance"
    ]
  },
  {
    "id": "003",
    "pack": "motion",
    "no": "03",
    "slug": "burst",
    "name": "放射爆发",
    "nameEn": "Burst",
    "meaning": "元素出现时向外迸出线条和圆点",
    "tags": [
      "burst",
      "explosion",
      "radial",
      "like",
      "heart",
      "celebrate",
      "accent",
      "sparkle"
    ]
  },
  {
    "id": "004",
    "pack": "motion",
    "no": "04",
    "slug": "line-draw",
    "name": "线条描绘",
    "nameEn": "Line draw",
    "meaning": "线条像被画出来一样逐渐延伸",
    "tags": [
      "line-draw",
      "trim-path",
      "stroke",
      "draw-on",
      "chart",
      "path",
      "write-on"
    ]
  },
  {
    "id": "005",
    "pack": "motion",
    "no": "05",
    "slug": "mask-reveal",
    "name": "遮罩显现",
    "nameEn": "Mask reveal",
    "meaning": "文字从不可见的边界后移出",
    "tags": [
      "mask",
      "reveal",
      "clip",
      "wipe",
      "title",
      "text",
      "slide-up",
      "headline"
    ]
  },
  {
    "id": "006",
    "pack": "motion",
    "no": "06",
    "slug": "typewriter",
    "name": "打字机效果",
    "nameEn": "Typewriter",
    "meaning": "文字像打字一样逐字出现",
    "tags": [
      "typewriter",
      "typing",
      "text",
      "cursor",
      "input",
      "prompt",
      "chat",
      "type-on"
    ]
  },
  {
    "id": "007",
    "pack": "motion",
    "no": "07",
    "slug": "count-up",
    "name": "数字递增",
    "nameEn": "Count-up",
    "meaning": "数字快速增长到目标值",
    "tags": [
      "count-up",
      "counter",
      "number",
      "odometer",
      "stats",
      "kpi",
      "progress"
    ]
  },
  {
    "id": "008",
    "pack": "motion",
    "no": "08",
    "slug": "kinetic-typography",
    "name": "动态排版",
    "nameEn": "Kinetic typography",
    "meaning": "文字随含义和节奏移动、缩放与旋转",
    "tags": [
      "kinetic-typography",
      "text",
      "typography",
      "lyric",
      "word",
      "bounce",
      "spin",
      "slam"
    ]
  },
  {
    "id": "009",
    "pack": "motion",
    "no": "09",
    "slug": "easing",
    "name": "缓动",
    "nameEn": "Easing",
    "meaning": "动作通过加减速变化而非匀速移动",
    "tags": [
      "easing",
      "ease-in-out",
      "cubic-bezier",
      "linear",
      "timing",
      "curve",
      "acceleration"
    ]
  },
  {
    "id": "010",
    "pack": "motion",
    "no": "10",
    "slug": "overshoot",
    "name": "过冲回弹",
    "nameEn": "Overshoot",
    "meaning": "越过目标后回到目标位置并停稳",
    "tags": [
      "overshoot",
      "spring",
      "bounce",
      "settle",
      "elastic",
      "gauge",
      "meter",
      "needle"
    ]
  },
  {
    "id": "011",
    "pack": "motion",
    "no": "11",
    "slug": "squash-and-stretch",
    "name": "挤压与拉伸",
    "nameEn": "Squash & stretch",
    "meaning": "通过压扁和拉长表现弹性",
    "tags": [
      "squash",
      "stretch",
      "squash-and-stretch",
      "bounce",
      "character",
      "ball",
      "animation-principle"
    ]
  },
  {
    "id": "012",
    "pack": "motion",
    "no": "12",
    "slug": "shape-morph",
    "name": "形状变形",
    "nameEn": "Shape morph",
    "meaning": "一种形状平滑变成另一种",
    "tags": [
      "morph",
      "morphing",
      "shape",
      "path",
      "interpolate",
      "transform",
      "icon"
    ]
  },
  {
    "id": "013",
    "pack": "motion",
    "no": "13",
    "slug": "liquid-motion",
    "name": "液态动效",
    "nameEn": "Liquid motion",
    "meaning": "形状像液体一样流动和融合",
    "tags": [
      "liquid",
      "blob",
      "goo",
      "gooey",
      "metaball",
      "fluid",
      "organic",
      "drip"
    ]
  },
  {
    "id": "014",
    "pack": "motion",
    "no": "14",
    "slug": "motion-trail",
    "name": "运动拖尾",
    "nameEn": "Motion trail",
    "meaning": "运动物体身后留下逐渐淡去的轨迹",
    "tags": [
      "trail",
      "motion-trail",
      "echo",
      "afterimage",
      "ghost",
      "path",
      "speed"
    ]
  },
  {
    "id": "015",
    "pack": "motion",
    "no": "15",
    "slug": "particles",
    "name": "粒子效果",
    "nameEn": "Particles",
    "meaning": "大量小碎片喷出并散开",
    "tags": [
      "particles",
      "confetti",
      "emitter",
      "fountain",
      "gravity",
      "celebration",
      "sparks"
    ]
  },
  {
    "id": "016",
    "pack": "motion",
    "no": "16",
    "slug": "parallax",
    "name": "视差",
    "nameEn": "Parallax",
    "meaning": "远近图层以不同速度移动形成纵深",
    "tags": [
      "parallax",
      "depth",
      "layers",
      "pan",
      "2.5d",
      "background",
      "landscape"
    ]
  },
  {
    "id": "017",
    "pack": "motion",
    "no": "17",
    "slug": "mask-transition",
    "name": "遮罩转场",
    "nameEn": "Mask transition",
    "meaning": "扩大的形状内部显现下一场景",
    "tags": [
      "mask",
      "transition",
      "iris",
      "wipe",
      "shape-wipe",
      "reveal",
      "scene-change"
    ]
  },
  {
    "id": "018",
    "pack": "motion",
    "no": "18",
    "slug": "shape-transition",
    "name": "图形转场",
    "nameEn": "Shape transition",
    "meaning": "图形覆盖画面后揭示下一场景",
    "tags": [
      "shape-transition",
      "transition",
      "wipe",
      "bands",
      "stripes",
      "cover",
      "scene-change"
    ]
  },
  {
    "id": "019",
    "pack": "motion",
    "no": "19",
    "slug": "liquid-transition",
    "name": "液态转场",
    "nameEn": "Liquid transition",
    "meaning": "液体流入画面并替换场景",
    "tags": [
      "liquid",
      "transition",
      "drip",
      "paint",
      "goo",
      "fluid",
      "wipe",
      "scene-change"
    ]
  },
  {
    "id": "020",
    "pack": "motion",
    "no": "20",
    "slug": "zoom-through",
    "name": "穿越缩放",
    "nameEn": "Zoom through",
    "meaning": "放大并穿过物体进入下一场景",
    "tags": [
      "zoom",
      "zoom-through",
      "transition",
      "push-in",
      "scale",
      "tunnel",
      "scene-change"
    ]
  },
  {
    "id": "021",
    "pack": "motion",
    "no": "21",
    "slug": "flip",
    "name": "翻转",
    "nameEn": "Flip",
    "meaning": "像卡片翻面一样展示另一侧",
    "tags": [
      "flip",
      "card",
      "3d",
      "rotate",
      "turn",
      "reveal",
      "question-answer"
    ]
  },
  {
    "id": "022",
    "pack": "motion",
    "no": "22",
    "slug": "light-sweep",
    "name": "扫光",
    "nameEn": "Light sweep",
    "meaning": "光带扫过物体表面",
    "tags": [
      "light-sweep",
      "shine",
      "sheen",
      "glint",
      "highlight",
      "logo",
      "badge",
      "premium"
    ]
  },
  {
    "id": "023",
    "pack": "motion",
    "no": "23",
    "slug": "glitch",
    "name": "故障效果",
    "nameEn": "Glitch",
    "meaning": "画面像发生故障一样错位和分色",
    "tags": [
      "glitch",
      "rgb-split",
      "chromatic-aberration",
      "distortion",
      "digital",
      "error",
      "slice"
    ]
  },
  {
    "id": "024",
    "pack": "motion",
    "no": "24",
    "slug": "impact-shake",
    "name": "冲击震动",
    "nameEn": "Impact shake",
    "meaning": "物体落下时带动整个画面震动",
    "tags": [
      "shake",
      "impact",
      "camera-shake",
      "slam",
      "drop",
      "thud",
      "headline",
      "emphasis"
    ]
  },
  {
    "id": "025",
    "pack": "camera",
    "no": "01",
    "slug": "pan",
    "name": "水平摇镜头",
    "nameEn": "Pan",
    "meaning": "机位固定，向左或右转动镜头",
    "tags": [
      "pan",
      "panning",
      "yaw",
      "rotate",
      "horizontal",
      "camera move",
      "reveal"
    ]
  },
  {
    "id": "026",
    "pack": "camera",
    "no": "02",
    "slug": "tilt",
    "name": "垂直摇镜头",
    "nameEn": "Tilt",
    "meaning": "机位固定，向上或下转动镜头",
    "tags": [
      "tilt",
      "tilt up",
      "pitch",
      "vertical",
      "look up",
      "camera move"
    ]
  },
  {
    "id": "027",
    "pack": "camera",
    "no": "03",
    "slug": "dolly-in",
    "name": "推镜头",
    "nameEn": "Dolly in",
    "meaning": "相机整体向主体靠近",
    "tags": [
      "dolly",
      "dolly in",
      "push in",
      "track in",
      "move forward",
      "parallax",
      "camera move"
    ]
  },
  {
    "id": "028",
    "pack": "camera",
    "no": "04",
    "slug": "zoom-in",
    "name": "变焦推近",
    "nameEn": "Zoom in",
    "meaning": "相机不动，通过镜头变焦放大",
    "tags": [
      "zoom",
      "zoom in",
      "focal length",
      "lens",
      "magnify",
      "telephoto",
      "camera move"
    ]
  },
  {
    "id": "029",
    "pack": "camera",
    "no": "05",
    "slug": "tracking-shot",
    "name": "跟拍",
    "nameEn": "Tracking shot",
    "meaning": "相机随主体一起移动",
    "tags": [
      "tracking",
      "tracking shot",
      "follow",
      "truck",
      "lateral",
      "sideways",
      "parallax",
      "walk"
    ]
  },
  {
    "id": "030",
    "pack": "camera",
    "no": "06",
    "slug": "orbit-arc-shot",
    "name": "环绕镜头",
    "nameEn": "Orbit (Arc shot)",
    "meaning": "相机绕主体移动",
    "tags": [
      "orbit",
      "arc shot",
      "circle",
      "360",
      "rotate around",
      "revolve",
      "camera move"
    ]
  },
  {
    "id": "031",
    "pack": "camera",
    "no": "07",
    "slug": "crane-up",
    "name": "升镜头",
    "nameEn": "Crane up",
    "meaning": "相机整体向上升起",
    "tags": [
      "crane",
      "crane up",
      "jib",
      "boom up",
      "rise",
      "high angle",
      "camera move"
    ]
  },
  {
    "id": "032",
    "pack": "camera",
    "no": "08",
    "slug": "dolly-zoom-vertigo",
    "name": "滑动变焦",
    "nameEn": "Dolly zoom (Vertigo)",
    "meaning": "主体大小不变，背景发生透视变化",
    "tags": [
      "dolly zoom",
      "vertigo",
      "zolly",
      "push pull",
      "background stretch",
      "unease",
      "camera move"
    ]
  },
  {
    "id": "033",
    "pack": "camera",
    "no": "09",
    "slug": "rack-focus",
    "name": "焦点转移",
    "nameEn": "Rack focus",
    "meaning": "在近处与远处之间切换对焦",
    "tags": [
      "rack focus",
      "focus pull",
      "pull focus",
      "depth of field",
      "blur",
      "bokeh",
      "foreground"
    ]
  },
  {
    "id": "034",
    "pack": "camera",
    "no": "10",
    "slug": "handheld",
    "name": "手持镜头",
    "nameEn": "Handheld",
    "meaning": "像手持相机一样轻微晃动",
    "tags": [
      "handheld",
      "camera shake",
      "shaky",
      "documentary",
      "wobble",
      "noise",
      "realism"
    ]
  },
  {
    "id": "035",
    "pack": "camera",
    "no": "11",
    "slug": "fpv-drone-shot",
    "name": "FPV 穿越机镜头",
    "nameEn": "FPV drone shot",
    "meaning": "以第一人称快速穿越场景",
    "tags": [
      "fpv",
      "drone",
      "fly through",
      "first person",
      "banking",
      "speed",
      "aerial"
    ]
  },
  {
    "id": "036",
    "pack": "camera",
    "no": "12",
    "slug": "dutch-angle",
    "name": "荷兰角",
    "nameEn": "Dutch angle",
    "meaning": "倾斜相机，使地平线呈对角线",
    "tags": [
      "dutch angle",
      "dutch tilt",
      "canted angle",
      "oblique",
      "roll",
      "tension",
      "tilted horizon"
    ]
  },
  {
    "id": "037",
    "pack": "camera",
    "no": "13",
    "slug": "slow-motion",
    "name": "慢动作",
    "nameEn": "Slow motion",
    "meaning": "放慢动作的播放速度",
    "tags": [
      "slow motion",
      "slow-mo",
      "slomo",
      "high frame rate",
      "120fps",
      "time stretch",
      "jump"
    ]
  },
  {
    "id": "038",
    "pack": "camera",
    "no": "14",
    "slug": "speed-ramp",
    "name": "速度渐变",
    "nameEn": "Speed ramp",
    "meaning": "在同一镜头中改变播放速度",
    "tags": [
      "speed ramp",
      "time remap",
      "ramping",
      "fast to slow",
      "variable speed",
      "velocity"
    ]
  },
  {
    "id": "039",
    "pack": "camera",
    "no": "15",
    "slug": "time-lapse",
    "name": "延时摄影",
    "nameEn": "Time-lapse",
    "meaning": "把数小时压缩成几秒",
    "tags": [
      "time-lapse",
      "timelapse",
      "fast forward",
      "time compression",
      "sun",
      "clouds",
      "day to night"
    ]
  },
  {
    "id": "040",
    "pack": "camera",
    "no": "16",
    "slug": "freeze-frame",
    "name": "定格",
    "nameEn": "Freeze frame",
    "meaning": "让动作暂停片刻",
    "tags": [
      "freeze frame",
      "still frame",
      "pause",
      "hold",
      "stop motion",
      "highlight"
    ]
  },
  {
    "id": "041",
    "pack": "camera",
    "no": "17",
    "slug": "jump-cut",
    "name": "跳切",
    "nameEn": "Jump cut",
    "meaning": "构图不变，跳过一段时间",
    "tags": [
      "jump cut",
      "cut",
      "time skip",
      "same framing",
      "vlog",
      "ellipsis",
      "edit"
    ]
  },
  {
    "id": "042",
    "pack": "camera",
    "no": "18",
    "slug": "match-cut",
    "name": "匹配剪辑",
    "nameEn": "Match cut",
    "meaning": "利用相似形状或动作衔接镜头",
    "tags": [
      "match cut",
      "graphic match",
      "shape match",
      "cut",
      "transition",
      "edit"
    ]
  },
  {
    "id": "043",
    "pack": "camera",
    "no": "19",
    "slug": "whip-pan",
    "name": "甩镜头转场",
    "nameEn": "Whip pan",
    "meaning": "快速横摇形成模糊并切入下一镜头",
    "tags": [
      "whip pan",
      "swish pan",
      "motion blur",
      "fast pan",
      "transition",
      "energy"
    ]
  },
  {
    "id": "044",
    "pack": "camera",
    "no": "20",
    "slug": "cross-dissolve",
    "name": "交叉溶解",
    "nameEn": "Cross dissolve",
    "meaning": "两个镜头逐渐叠化切换",
    "tags": [
      "cross dissolve",
      "dissolve",
      "crossfade",
      "fade",
      "opacity",
      "blend",
      "transition"
    ]
  },
  {
    "id": "045",
    "pack": "camera",
    "no": "21",
    "slug": "wipe",
    "name": "划像转场",
    "nameEn": "Wipe",
    "meaning": "移动的边界逐步替换画面",
    "tags": [
      "wipe",
      "linear wipe",
      "reveal",
      "clip",
      "edge",
      "left to right",
      "transition"
    ]
  },
  {
    "id": "046",
    "pack": "camera",
    "no": "22",
    "slug": "smash-cut",
    "name": "突切",
    "nameEn": "Smash cut",
    "meaning": "突然切到反差强烈的场景",
    "tags": [
      "smash cut",
      "hard cut",
      "abrupt",
      "contrast",
      "quiet to loud",
      "comedy",
      "transition"
    ]
  },
  {
    "id": "047",
    "pack": "camera",
    "no": "23",
    "slug": "j-cut",
    "name": "J 型剪辑",
    "nameEn": "J-cut",
    "meaning": "下一场景的声音先于画面进入",
    "tags": [
      "j-cut",
      "j cut",
      "split edit",
      "audio lead",
      "sound first",
      "audio transition",
      "edit"
    ]
  },
  {
    "id": "048",
    "pack": "camera",
    "no": "24",
    "slug": "l-cut",
    "name": "L 型剪辑",
    "nameEn": "L-cut",
    "meaning": "前一场景的声音延续到下一画面",
    "tags": [
      "l-cut",
      "l cut",
      "split edit",
      "audio lag",
      "sound carries over",
      "audio transition",
      "edit"
    ]
  },
  {
    "id": "049",
    "pack": "ui",
    "no": "01",
    "slug": "modal-dialog",
    "name": "模态对话框",
    "nameEn": "Modal dialog",
    "meaning": "打开浮窗并暂时阻止操作背景",
    "tags": [
      "modal",
      "modal-dialog",
      "dialog",
      "popup",
      "overlay",
      "backdrop",
      "lightbox",
      "confirm"
    ]
  },
  {
    "id": "050",
    "pack": "ui",
    "no": "02",
    "slug": "drawer",
    "name": "抽屉面板",
    "nameEn": "Drawer (Off-canvas)",
    "meaning": "从屏幕侧边滑出的面板",
    "tags": [
      "drawer",
      "off-canvas",
      "offcanvas",
      "side-menu",
      "navigation-drawer",
      "sheet",
      "sidebar",
      "slide-in"
    ]
  },
  {
    "id": "051",
    "pack": "ui",
    "no": "03",
    "slug": "bottom-sheet",
    "name": "底部面板",
    "nameEn": "Bottom sheet",
    "meaning": "从屏幕底部升起的面板",
    "tags": [
      "bottom-sheet",
      "sheet",
      "modal-sheet",
      "mobile",
      "slide-up",
      "drag-to-dismiss",
      "panel"
    ]
  },
  {
    "id": "052",
    "pack": "ui",
    "no": "04",
    "slug": "accordion",
    "name": "折叠面板",
    "nameEn": "Accordion",
    "meaning": "点击标题展开或收起内容",
    "tags": [
      "accordion",
      "collapsible",
      "expand",
      "collapse",
      "disclosure",
      "faq",
      "details"
    ]
  },
  {
    "id": "053",
    "pack": "ui",
    "no": "05",
    "slug": "dropdown-menu",
    "name": "下拉选择框",
    "nameEn": "Dropdown (select)",
    "meaning": "点击字段展开选项列表",
    "tags": [
      "dropdown",
      "dropdown-menu",
      "select",
      "picker",
      "combobox",
      "options",
      "form"
    ]
  },
  {
    "id": "054",
    "pack": "ui",
    "no": "06",
    "slug": "tooltip",
    "name": "文字提示",
    "nameEn": "Tooltip",
    "meaning": "悬停时显示简短说明",
    "tags": [
      "tooltip",
      "hint",
      "hover",
      "help",
      "info",
      "title"
    ]
  },
  {
    "id": "055",
    "pack": "ui",
    "no": "07",
    "slug": "popover",
    "name": "气泡卡片",
    "nameEn": "Popover",
    "meaning": "点击后显示指向触发按钮的小面板",
    "tags": [
      "popover",
      "popup",
      "callout",
      "bubble",
      "flyout",
      "overlay"
    ]
  },
  {
    "id": "056",
    "pack": "ui",
    "no": "08",
    "slug": "toast",
    "name": "轻提示",
    "nameEn": "Toast notification",
    "meaning": "短消息出现后自动消失",
    "tags": [
      "toast",
      "snackbar",
      "notification",
      "alert",
      "message",
      "auto-dismiss"
    ]
  },
  {
    "id": "057",
    "pack": "ui",
    "no": "09",
    "slug": "tabs",
    "name": "标签页",
    "nameEn": "Tabs",
    "meaning": "点击标签切换内容面板",
    "tags": [
      "tabs",
      "tab-bar",
      "tabbed",
      "navigation",
      "switch-view",
      "underline"
    ]
  },
  {
    "id": "058",
    "pack": "ui",
    "no": "10",
    "slug": "carousel",
    "name": "轮播图",
    "nameEn": "Carousel",
    "meaning": "横向滑动切换展示项",
    "tags": [
      "carousel",
      "slider",
      "slideshow",
      "gallery",
      "swipe",
      "paging-dots"
    ]
  },
  {
    "id": "059",
    "pack": "ui",
    "no": "11",
    "slug": "toggle-switch",
    "name": "开关",
    "nameEn": "Toggle switch",
    "meaning": "切换设置的开启与关闭状态",
    "tags": [
      "toggle",
      "switch",
      "toggle-switch",
      "on-off",
      "boolean",
      "settings"
    ]
  },
  {
    "id": "060",
    "pack": "ui",
    "no": "12",
    "slug": "segmented-control",
    "name": "分段控制器",
    "nameEn": "Segmented control",
    "meaning": "一排相连按钮用于切换视图",
    "tags": [
      "segmented-control",
      "segmented-button",
      "button-group",
      "toggle-group",
      "switcher",
      "view-switch"
    ]
  },
  {
    "id": "061",
    "pack": "ui",
    "no": "13",
    "slug": "filter-chips",
    "name": "筛选标签",
    "nameEn": "Filter chips",
    "meaning": "点击小标签组合筛选条件",
    "tags": [
      "chips",
      "filter-chips",
      "tags",
      "filter",
      "facets",
      "pills"
    ]
  },
  {
    "id": "062",
    "pack": "ui",
    "no": "14",
    "slug": "range-slider",
    "name": "范围滑块",
    "nameEn": "Range slider",
    "meaning": "双滑块选择最小值与最大值",
    "tags": [
      "range-slider",
      "slider",
      "dual-thumb",
      "min-max",
      "price-filter",
      "range"
    ]
  },
  {
    "id": "063",
    "pack": "ui",
    "no": "15",
    "slug": "stepper",
    "name": "步进器",
    "nameEn": "Stepper (+/−)",
    "meaning": "通过加减按钮逐次修改数值",
    "tags": [
      "stepper",
      "quantity",
      "number-input",
      "increment",
      "decrement",
      "plus-minus",
      "spin-button"
    ]
  },
  {
    "id": "064",
    "pack": "ui",
    "no": "16",
    "slug": "pagination",
    "name": "分页",
    "nameEn": "Pagination",
    "meaning": "通过页码切换列表页面",
    "tags": [
      "pagination",
      "pager",
      "page-numbers",
      "paging",
      "next-prev",
      "navigation"
    ]
  },
  {
    "id": "065",
    "pack": "ui",
    "no": "17",
    "slug": "hamburger-menu",
    "name": "汉堡菜单",
    "nameEn": "Hamburger menu",
    "meaning": "三横线图标点击后展开菜单",
    "tags": [
      "hamburger-menu",
      "hamburger",
      "menu-icon",
      "nav-toggle",
      "mobile-menu",
      "menu"
    ]
  },
  {
    "id": "066",
    "pack": "ui",
    "no": "18",
    "slug": "breadcrumbs",
    "name": "面包屑导航",
    "nameEn": "Breadcrumbs",
    "meaning": "显示页面层级位置的链接路径",
    "tags": [
      "breadcrumbs",
      "breadcrumb",
      "trail",
      "hierarchy",
      "navigation",
      "path"
    ]
  },
  {
    "id": "067",
    "pack": "ui",
    "no": "19",
    "slug": "mega-menu",
    "name": "巨型菜单",
    "nameEn": "Mega menu",
    "meaning": "主导航展开的宽幅分组链接面板",
    "tags": [
      "mega-menu",
      "megamenu",
      "dropdown-navigation",
      "navigation",
      "header-menu",
      "multi-column"
    ]
  },
  {
    "id": "068",
    "pack": "ui",
    "no": "20",
    "slug": "step-indicator",
    "name": "步骤指示器",
    "nameEn": "Step indicator",
    "meaning": "显示流程的当前步骤与进度",
    "tags": [
      "step-indicator",
      "stepper",
      "steps",
      "progress-steps",
      "wizard",
      "multi-step",
      "checkout"
    ]
  },
  {
    "id": "069",
    "pack": "ui",
    "no": "21",
    "slug": "skeleton-screen",
    "name": "骨架屏",
    "nameEn": "Skeleton screen",
    "meaning": "加载时以灰色块预示内容布局",
    "tags": [
      "skeleton",
      "skeleton-screen",
      "placeholder",
      "shimmer",
      "loading",
      "ghost-content"
    ]
  },
  {
    "id": "070",
    "pack": "ui",
    "no": "22",
    "slug": "spinner",
    "name": "加载转圈",
    "nameEn": "Spinner",
    "meaning": "旋转圆环表示等待",
    "tags": [
      "spinner",
      "loading",
      "loader",
      "activity-indicator",
      "progress-circle",
      "busy"
    ]
  },
  {
    "id": "071",
    "pack": "ui",
    "no": "23",
    "slug": "badge",
    "name": "徽标",
    "nameEn": "Badge",
    "meaning": "用小圆点或数字显示数量",
    "tags": [
      "badge",
      "notification-badge",
      "counter",
      "count",
      "dot",
      "unread"
    ]
  },
  {
    "id": "072",
    "pack": "ui",
    "no": "24",
    "slug": "empty-state",
    "name": "空状态",
    "nameEn": "Empty state",
    "meaning": "列表没有内容时显示的界面",
    "tags": [
      "empty-state",
      "no-data",
      "zero-state",
      "blank-state",
      "no-results",
      "onboarding"
    ]
  },
  {
    "id": "073",
    "pack": "lp",
    "no": "01",
    "slug": "parallax-scrolling",
    "name": "视差滚动",
    "nameEn": "Parallax scrolling",
    "meaning": "滚动时背景层比内容移动得慢",
    "tags": [
      "parallax",
      "parallax-scrolling",
      "scroll",
      "depth",
      "layers",
      "hero",
      "background"
    ]
  },
  {
    "id": "074",
    "pack": "lp",
    "no": "02",
    "slug": "fade-in-on-scroll",
    "name": "滚动淡入",
    "nameEn": "Fade-in on scroll",
    "meaning": "元素进入视口时逐渐出现",
    "tags": [
      "fade-in",
      "scroll-reveal",
      "reveal-on-scroll",
      "intersection-observer",
      "aos",
      "entrance",
      "scroll"
    ]
  },
  {
    "id": "075",
    "pack": "lp",
    "no": "03",
    "slug": "sticky-header",
    "name": "吸顶页头",
    "nameEn": "Sticky header",
    "meaning": "滚动时页头停留在屏幕顶部",
    "tags": [
      "sticky",
      "sticky-header",
      "fixed-header",
      "position-sticky",
      "navigation",
      "header",
      "scroll"
    ]
  },
  {
    "id": "076",
    "pack": "lp",
    "no": "04",
    "slug": "pinning",
    "name": "滚动固定",
    "nameEn": "Pinning",
    "meaning": "区块固定，滚动推动内部内容变化",
    "tags": [
      "pin",
      "pinning",
      "scrolltrigger",
      "gsap",
      "scroll-driven",
      "steps",
      "storytelling"
    ]
  },
  {
    "id": "077",
    "pack": "lp",
    "no": "05",
    "slug": "horizontal-scroll",
    "name": "横向滚动",
    "nameEn": "Horizontal scroll",
    "meaning": "纵向滚动驱动内容横移",
    "tags": [
      "horizontal-scroll",
      "sideways",
      "scrolltrigger",
      "pin",
      "gallery",
      "portfolio",
      "scroll"
    ]
  },
  {
    "id": "078",
    "pack": "lp",
    "no": "06",
    "slug": "scroll-snap",
    "name": "滚动吸附",
    "nameEn": "Scroll snap",
    "meaning": "滚动结束时自动对齐区块",
    "tags": [
      "scroll-snap",
      "snap",
      "full-page",
      "sections",
      "css",
      "mandatory",
      "scroll"
    ]
  },
  {
    "id": "079",
    "pack": "lp",
    "no": "07",
    "slug": "scroll-progress-bar",
    "name": "滚动进度条",
    "nameEn": "Scroll progress bar",
    "meaning": "顶部条显示阅读进度",
    "tags": [
      "progress-bar",
      "reading-progress",
      "scroll-progress",
      "indicator",
      "scroll-driven",
      "article"
    ]
  },
  {
    "id": "080",
    "pack": "lp",
    "no": "08",
    "slug": "highlighter-animation",
    "name": "荧光笔标记动画",
    "nameEn": "Highlighter animation",
    "meaning": "重点文字下方逐渐画出色带",
    "tags": [
      "highlighter",
      "marker",
      "text-highlight",
      "emphasis",
      "scroll-reveal",
      "copy",
      "underline"
    ]
  },
  {
    "id": "081",
    "pack": "lp",
    "no": "09",
    "slug": "hover-lift",
    "name": "悬停抬升",
    "nameEn": "Hover lift",
    "meaning": "悬停时元素抬高并加深阴影",
    "tags": [
      "hover",
      "lift",
      "float",
      "card",
      "shadow",
      "translatey",
      "interaction"
    ]
  },
  {
    "id": "082",
    "pack": "lp",
    "no": "10",
    "slug": "image-zoom-on-hover",
    "name": "悬停图片放大",
    "nameEn": "Image zoom on hover",
    "meaning": "图片在固定边框内放大",
    "tags": [
      "hover",
      "zoom",
      "image",
      "scale",
      "overflow-hidden",
      "thumbnail",
      "gallery"
    ]
  },
  {
    "id": "083",
    "pack": "lp",
    "no": "11",
    "slug": "cursor-follower",
    "name": "光标跟随",
    "nameEn": "Cursor follower",
    "meaning": "图形略带延迟地跟随指针",
    "tags": [
      "cursor",
      "custom-cursor",
      "cursor-follower",
      "mouse-follow",
      "lerp",
      "trail",
      "interaction"
    ]
  },
  {
    "id": "084",
    "pack": "lp",
    "no": "12",
    "slug": "magnetic-button",
    "name": "磁吸按钮",
    "nameEn": "Magnetic button",
    "meaning": "按钮向附近光标偏移",
    "tags": [
      "magnetic",
      "magnetic-button",
      "hover",
      "cursor",
      "elastic",
      "cta",
      "interaction"
    ]
  },
  {
    "id": "085",
    "pack": "lp",
    "no": "13",
    "slug": "ripple-effect",
    "name": "涟漪效果",
    "nameEn": "Ripple effect",
    "meaning": "从点击位置扩散的圆形波纹",
    "tags": [
      "ripple",
      "ink-ripple",
      "material",
      "click",
      "tap",
      "feedback",
      "button"
    ]
  },
  {
    "id": "086",
    "pack": "lp",
    "no": "14",
    "slug": "underline-animation",
    "name": "下划线动画",
    "nameEn": "Underline animation",
    "meaning": "悬停时链接下划线从左展开",
    "tags": [
      "underline",
      "hover",
      "link",
      "navigation",
      "menu",
      "text-link",
      "scalex"
    ]
  },
  {
    "id": "087",
    "pack": "lp",
    "no": "15",
    "slug": "before-after-slider",
    "name": "前后对比滑块",
    "nameEn": "Before/after slider",
    "meaning": "拖动分隔线比较处理前后",
    "tags": [
      "before-after",
      "image-comparison",
      "slider",
      "drag",
      "compare",
      "clip",
      "photo"
    ]
  },
  {
    "id": "088",
    "pack": "lp",
    "no": "16",
    "slug": "exit-intent-popup",
    "name": "离站挽留弹窗",
    "nameEn": "Exit-intent popup",
    "meaning": "访客准备离开时出现的弹窗",
    "tags": [
      "exit-intent",
      "popup",
      "mouseleave",
      "coupon",
      "conversion",
      "retention",
      "lp"
    ]
  },
  {
    "id": "089",
    "pack": "lp",
    "no": "17",
    "slug": "preloader",
    "name": "预加载画面",
    "nameEn": "Preloader",
    "meaning": "页面加载期间显示的过渡界面",
    "tags": [
      "preloader",
      "loading-screen",
      "loader",
      "percentage",
      "intro",
      "splash",
      "curtain"
    ]
  },
  {
    "id": "090",
    "pack": "lp",
    "no": "18",
    "slug": "lazy-loading",
    "name": "懒加载",
    "nameEn": "Lazy loading",
    "meaning": "图片接近视口时才开始加载",
    "tags": [
      "lazy-loading",
      "lazy-load",
      "images",
      "placeholder",
      "performance",
      "spinner",
      "gallery"
    ]
  },
  {
    "id": "091",
    "pack": "lp",
    "no": "19",
    "slug": "infinite-scroll",
    "name": "无限滚动",
    "nameEn": "Infinite scroll",
    "meaning": "滚动到底部时自动加载更多条目",
    "tags": [
      "infinite-scroll",
      "endless-scroll",
      "load-more",
      "feed",
      "pagination",
      "spinner",
      "list"
    ]
  },
  {
    "id": "092",
    "pack": "lp",
    "no": "20",
    "slug": "page-transition",
    "name": "页面转场",
    "nameEn": "Page transition",
    "meaning": "连接两个页面的过渡动画",
    "tags": [
      "page-transition",
      "transition",
      "view-transitions",
      "navigation",
      "wipe",
      "barba",
      "spa"
    ]
  },
  {
    "id": "093",
    "pack": "lp",
    "no": "21",
    "slug": "smooth-scroll",
    "name": "平滑滚动",
    "nameEn": "Smooth scroll",
    "meaning": "页内链接平滑移动到目标位置",
    "tags": [
      "smooth-scroll",
      "scroll-behavior",
      "anchor-link",
      "in-page-link",
      "back-to-top",
      "navigation"
    ]
  },
  {
    "id": "094",
    "pack": "lp",
    "no": "22",
    "slug": "marquee",
    "name": "跑马灯",
    "nameEn": "Marquee",
    "meaning": "文字或标志组成连续滚动带",
    "tags": [
      "marquee",
      "ticker",
      "infinite-loop",
      "scrolling-text",
      "logo-strip",
      "band",
      "loop"
    ]
  },
  {
    "id": "095",
    "pack": "lp",
    "no": "23",
    "slug": "animated-gradient",
    "name": "动态渐变",
    "nameEn": "Animated gradient",
    "meaning": "背景颜色持续移动和交融",
    "tags": [
      "gradient",
      "animated-gradient",
      "mesh-gradient",
      "background",
      "hero",
      "ambient",
      "loop"
    ]
  },
  {
    "id": "096",
    "pack": "lp",
    "no": "24",
    "slug": "floating-animation",
    "name": "悬浮动画",
    "nameEn": "Floating animation",
    "meaning": "元素轻柔地上下浮动",
    "tags": [
      "floating",
      "float",
      "bob",
      "hover-animation",
      "keyframes",
      "translatey",
      "decoration",
      "loop"
    ]
  },
  {
    "id": "097",
    "pack": "photo",
    "no": "01",
    "slug": "backlighting",
    "name": "逆光",
    "nameEn": "Backlighting",
    "meaning": "光源位于主体后方",
    "tags": [
      "backlighting",
      "backlit",
      "contre-jour",
      "sun behind",
      "haze",
      "glow",
      "halo"
    ]
  },
  {
    "id": "098",
    "pack": "photo",
    "no": "02",
    "slug": "rim-light",
    "name": "轮廓光",
    "nameEn": "Rim light",
    "meaning": "后侧光勾勒主体边缘",
    "tags": [
      "rim light",
      "rim lighting",
      "edge light",
      "backlight",
      "kicker",
      "outline",
      "studio"
    ]
  },
  {
    "id": "099",
    "pack": "photo",
    "no": "03",
    "slug": "silhouette",
    "name": "剪影",
    "nameEn": "Silhouette",
    "meaning": "主体成为明亮背景前的深色轮廓",
    "tags": [
      "silhouette",
      "backlit",
      "sunset",
      "contre-jour",
      "black shape",
      "underexposed"
    ]
  },
  {
    "id": "100",
    "pack": "photo",
    "no": "04",
    "slug": "split-lighting",
    "name": "分割光",
    "nameEn": "Split lighting",
    "meaning": "侧面光让脸一半明亮、一半阴暗",
    "tags": [
      "split lighting",
      "side light",
      "portrait lighting",
      "half face",
      "dramatic",
      "chiaroscuro"
    ]
  },
  {
    "id": "101",
    "pack": "photo",
    "no": "05",
    "slug": "rembrandt-lighting",
    "name": "伦勃朗光",
    "nameEn": "Rembrandt lighting",
    "meaning": "侧上方光在背光脸颊留下亮三角",
    "tags": [
      "rembrandt lighting",
      "portrait lighting",
      "triangle",
      "45 degree light",
      "chiaroscuro",
      "painterly"
    ]
  },
  {
    "id": "102",
    "pack": "photo",
    "no": "06",
    "slug": "butterfly-lighting",
    "name": "蝴蝶光",
    "nameEn": "Butterfly lighting",
    "meaning": "正面高位光在鼻下形成蝶形阴影",
    "tags": [
      "butterfly lighting",
      "paramount lighting",
      "beauty lighting",
      "portrait lighting",
      "overhead light",
      "glamour"
    ]
  },
  {
    "id": "103",
    "pack": "photo",
    "no": "07",
    "slug": "golden-hour",
    "name": "黄金时刻",
    "nameEn": "Golden hour",
    "meaning": "日出后或日落前的低角度暖光",
    "tags": [
      "golden hour",
      "magic hour",
      "sunset light",
      "warm light",
      "long shadows",
      "low sun"
    ]
  },
  {
    "id": "104",
    "pack": "photo",
    "no": "08",
    "slug": "blue-hour",
    "name": "蓝调时刻",
    "nameEn": "Blue hour",
    "meaning": "日落后或日出前的深蓝天空时段",
    "tags": [
      "blue hour",
      "twilight",
      "dusk",
      "night city",
      "cityscape",
      "deep blue sky"
    ]
  },
  {
    "id": "105",
    "pack": "photo",
    "no": "09",
    "slug": "bokeh",
    "name": "散景",
    "nameEn": "Bokeh",
    "meaning": "失焦光点化为柔和光斑",
    "tags": [
      "bokeh",
      "shallow depth of field",
      "background blur",
      "wide aperture",
      "f/1.4",
      "out of focus",
      "lights"
    ]
  },
  {
    "id": "106",
    "pack": "photo",
    "no": "10",
    "slug": "tilt-shift",
    "name": "移轴效果",
    "nameEn": "Tilt-shift",
    "meaning": "通过选择性模糊让实景像微缩模型",
    "tags": [
      "tilt-shift",
      "miniature",
      "miniature effect",
      "fake miniature",
      "selective focus",
      "toy town",
      "focus band"
    ]
  },
  {
    "id": "107",
    "pack": "photo",
    "no": "11",
    "slug": "long-exposure",
    "name": "长曝光",
    "nameEn": "Long exposure",
    "meaning": "延长快门时间，让移动光源留下轨迹",
    "tags": [
      "long exposure",
      "light trails",
      "slow shutter",
      "night photography",
      "car trails",
      "motion"
    ]
  },
  {
    "id": "108",
    "pack": "photo",
    "no": "12",
    "slug": "panning-shot",
    "name": "追随拍摄",
    "nameEn": "Panning shot",
    "meaning": "跟随运动主体，使背景产生拖影",
    "tags": [
      "panning",
      "panning shot",
      "motion blur",
      "speed",
      "sports photography",
      "slow shutter"
    ]
  },
  {
    "id": "109",
    "pack": "photo",
    "no": "13",
    "slug": "lens-flare",
    "name": "镜头眩光",
    "nameEn": "Lens flare",
    "meaning": "强光在镜头内产生光环和光斑",
    "tags": [
      "lens flare",
      "flare",
      "ghosting",
      "sun flare",
      "starburst",
      "cinematic"
    ]
  },
  {
    "id": "110",
    "pack": "photo",
    "no": "14",
    "slug": "fisheye-lens",
    "name": "鱼眼镜头",
    "nameEn": "Fisheye lens",
    "meaning": "超广角使中心鼓起、直线弯曲",
    "tags": [
      "fisheye",
      "fisheye lens",
      "barrel distortion",
      "ultra wide",
      "8mm",
      "distortion"
    ]
  },
  {
    "id": "111",
    "pack": "photo",
    "no": "15",
    "slug": "chromatic-aberration",
    "name": "色差",
    "nameEn": "Chromatic aberration",
    "meaning": "高反差边缘出现不同颜色的色边",
    "tags": [
      "chromatic aberration",
      "color fringing",
      "rgb split",
      "lens aberration",
      "fringe",
      "glitch"
    ]
  },
  {
    "id": "112",
    "pack": "photo",
    "no": "16",
    "slug": "vignette",
    "name": "暗角",
    "nameEn": "Vignette",
    "meaning": "画面四角变暗，视线集中到中央",
    "tags": [
      "vignette",
      "vignetting",
      "dark corners",
      "edge darkening",
      "lens falloff",
      "focus"
    ]
  },
  {
    "id": "113",
    "pack": "photo",
    "no": "17",
    "slug": "high-key",
    "name": "高调",
    "nameEn": "High-key",
    "meaning": "整体明亮、接近白色且阴影很浅",
    "tags": [
      "high-key",
      "high key",
      "bright",
      "white background",
      "airy",
      "low contrast"
    ]
  },
  {
    "id": "114",
    "pack": "photo",
    "no": "18",
    "slug": "low-key",
    "name": "低调",
    "nameEn": "Low-key",
    "meaning": "以暗色为主，只突出受光部分",
    "tags": [
      "low-key",
      "low key",
      "dark",
      "black background",
      "moody",
      "dramatic",
      "chiaroscuro"
    ]
  },
  {
    "id": "115",
    "pack": "photo",
    "no": "19",
    "slug": "black-and-white",
    "name": "黑白",
    "nameEn": "Black and white",
    "meaning": "去除颜色，仅保留明暗",
    "tags": [
      "black and white",
      "monochrome",
      "b&w",
      "grayscale",
      "desaturated",
      "classic"
    ]
  },
  {
    "id": "116",
    "pack": "photo",
    "no": "20",
    "slug": "duotone",
    "name": "双色调",
    "nameEn": "Duotone",
    "meaning": "用一种颜色映射暗部，另一种映射亮部",
    "tags": [
      "duotone",
      "two-tone",
      "gradient map",
      "color overlay",
      "poster",
      "graphic"
    ]
  },
  {
    "id": "117",
    "pack": "photo",
    "no": "21",
    "slug": "teal-and-orange",
    "name": "青橙色调",
    "nameEn": "Teal and orange",
    "meaning": "阴影偏青，肤色与高光偏橙",
    "tags": [
      "teal and orange",
      "orange and teal",
      "cinematic",
      "color grading",
      "blockbuster",
      "film look"
    ]
  },
  {
    "id": "118",
    "pack": "photo",
    "no": "22",
    "slug": "film-grain",
    "name": "胶片颗粒",
    "nameEn": "Film grain",
    "meaning": "画面覆盖细微胶片质感颗粒",
    "tags": [
      "film grain",
      "grain",
      "noise",
      "analog",
      "35mm film",
      "texture",
      "warm tone"
    ]
  },
  {
    "id": "119",
    "pack": "photo",
    "no": "23",
    "slug": "light-leak",
    "name": "漏光",
    "nameEn": "Light leak",
    "meaning": "红橙色光像漏入胶片一样侵入画面",
    "tags": [
      "light leak",
      "film leak",
      "vintage",
      "analog",
      "lomo",
      "warm glow"
    ]
  },
  {
    "id": "120",
    "pack": "photo",
    "no": "24",
    "slug": "double-exposure",
    "name": "双重曝光",
    "nameEn": "Double exposure",
    "meaning": "两幅影像叠合在同一画面",
    "tags": [
      "double exposure",
      "multiple exposure",
      "blend",
      "silhouette",
      "surreal",
      "composite"
    ]
  },
  {
    "id": "121",
    "pack": "motion2",
    "no": "01",
    "slug": "anticipation",
    "name": "预备动作",
    "nameEn": "Anticipation",
    "meaning": "运动前先向反方向稍稍蓄力",
    "tags": [
      "anticipation",
      "wind-up",
      "squash",
      "character",
      "jump",
      "dash",
      "animation-principle"
    ]
  },
  {
    "id": "122",
    "pack": "motion2",
    "no": "02",
    "slug": "follow-through",
    "name": "跟随动作",
    "nameEn": "Follow-through",
    "meaning": "主体停下后，局部仍延迟摆动",
    "tags": [
      "follow-through",
      "overlapping-action",
      "secondary-motion",
      "spring",
      "drag",
      "character",
      "animation-principle"
    ]
  },
  {
    "id": "123",
    "pack": "motion2",
    "no": "03",
    "slug": "bounce",
    "name": "弹跳",
    "nameEn": "Bounce",
    "meaning": "落下后越弹越低直至停下",
    "tags": [
      "bounce",
      "drop",
      "gravity",
      "ball",
      "physics",
      "landing",
      "easing"
    ]
  },
  {
    "id": "124",
    "pack": "motion2",
    "no": "04",
    "slug": "wiggle",
    "name": "随机抖动",
    "nameEn": "Wiggle",
    "meaning": "小幅、随机地持续晃动",
    "tags": [
      "wiggle",
      "jitter",
      "shake",
      "random",
      "noise",
      "bell",
      "notification"
    ]
  },
  {
    "id": "125",
    "pack": "motion2",
    "no": "05",
    "slug": "pulse",
    "name": "脉冲动画",
    "nameEn": "Pulse",
    "meaning": "像心跳一样有节奏地缩放",
    "tags": [
      "pulse",
      "heartbeat",
      "throb",
      "scale",
      "loop",
      "like",
      "attention"
    ]
  },
  {
    "id": "126",
    "pack": "motion2",
    "no": "06",
    "slug": "motion-path",
    "name": "运动路径",
    "nameEn": "Motion path",
    "meaning": "沿设定的曲线移动",
    "tags": [
      "motion-path",
      "path",
      "curve",
      "trajectory",
      "follow-path",
      "orient-to-path",
      "loop"
    ]
  },
  {
    "id": "127",
    "pack": "motion2",
    "no": "07",
    "slug": "ping-pong-loop",
    "name": "往返循环",
    "nameEn": "Ping-pong loop",
    "meaning": "正放后倒放，反复来回",
    "tags": [
      "ping-pong",
      "loop",
      "boomerang",
      "yoyo",
      "reverse",
      "back-and-forth",
      "loader"
    ]
  },
  {
    "id": "128",
    "pack": "motion2",
    "no": "08",
    "slug": "stop-motion-style",
    "name": "定格动画风格",
    "nameEn": "Stop-motion style",
    "meaning": "抽帧后动作一顿一顿",
    "tags": [
      "stop-motion",
      "choppy",
      "frame-rate",
      "on-twos",
      "jitter",
      "handmade",
      "claymation"
    ]
  },
  {
    "id": "129",
    "pack": "motion2",
    "no": "09",
    "slug": "text-scramble",
    "name": "文字乱码效果",
    "nameEn": "Text scramble",
    "meaning": "字符随机变换后定格为正确文字",
    "tags": [
      "text-scramble",
      "scramble",
      "decode",
      "shuffle",
      "random",
      "text",
      "hacker"
    ]
  },
  {
    "id": "130",
    "pack": "motion2",
    "no": "10",
    "slug": "wave-text",
    "name": "波浪文字",
    "nameEn": "Wave text",
    "meaning": "文字像波浪一样依次上下起伏",
    "tags": [
      "wave-text",
      "wave",
      "text",
      "letters",
      "stagger",
      "bounce",
      "kinetic-type"
    ]
  },
  {
    "id": "131",
    "pack": "motion2",
    "no": "11",
    "slug": "text-on-a-path",
    "name": "路径文字",
    "nameEn": "Text on a path",
    "meaning": "文字沿线条或曲线流动",
    "tags": [
      "text-on-path",
      "path-text",
      "curved-text",
      "text",
      "marquee",
      "wave",
      "scroll"
    ]
  },
  {
    "id": "132",
    "pack": "motion2",
    "no": "12",
    "slug": "variable-font-animation",
    "name": "可变字体动画",
    "nameEn": "Variable font animation",
    "meaning": "文字粗细平滑变化",
    "tags": [
      "variable-font",
      "font-weight",
      "typography",
      "text",
      "weight",
      "kinetic-type"
    ]
  },
  {
    "id": "133",
    "pack": "motion2",
    "no": "13",
    "slug": "text-mask",
    "name": "文字遮罩",
    "nameEn": "Text mask",
    "meaning": "镂空成文字形状，透出内部画面",
    "tags": [
      "text-mask",
      "mask",
      "clipping-mask",
      "knockout",
      "text",
      "typography",
      "title"
    ]
  },
  {
    "id": "134",
    "pack": "motion2",
    "no": "14",
    "slug": "repeater",
    "name": "中继器",
    "nameEn": "Repeater",
    "meaning": "复制图形并排列旋转",
    "tags": [
      "repeater",
      "duplicate",
      "radial",
      "array",
      "clone",
      "pattern",
      "loader"
    ]
  },
  {
    "id": "135",
    "pack": "motion2",
    "no": "15",
    "slug": "kaleidoscope",
    "name": "万花筒",
    "nameEn": "Kaleidoscope",
    "meaning": "像万花筒一样对称展开",
    "tags": [
      "kaleidoscope",
      "symmetry",
      "mirror",
      "mandala",
      "pattern",
      "radial",
      "psychedelic"
    ]
  },
  {
    "id": "136",
    "pack": "motion2",
    "no": "16",
    "slug": "line-boil",
    "name": "线条抖动",
    "nameEn": "Line boil",
    "meaning": "手绘线条逐帧轻微抖动",
    "tags": [
      "line-boil",
      "boil",
      "hand-drawn",
      "wobble",
      "jitter",
      "sketch",
      "frame-by-frame"
    ]
  },
  {
    "id": "137",
    "pack": "motion2",
    "no": "17",
    "slug": "push-transition",
    "name": "推入转场",
    "nameEn": "Push transition",
    "meaning": "下一画面把当前画面推出",
    "tags": [
      "push",
      "push-transition",
      "slide",
      "transition",
      "scene-change",
      "carousel"
    ]
  },
  {
    "id": "138",
    "pack": "motion2",
    "no": "18",
    "slug": "blinds-transition",
    "name": "百叶窗转场",
    "nameEn": "Blinds transition",
    "meaning": "从细条缝隙中打开下一画面",
    "tags": [
      "blinds",
      "venetian-blinds",
      "stripes",
      "transition",
      "wipe",
      "scene-change"
    ]
  },
  {
    "id": "139",
    "pack": "motion2",
    "no": "19",
    "slug": "cube-transition",
    "name": "立方体转场",
    "nameEn": "Cube transition",
    "meaning": "像立方体旋转一样切换画面",
    "tags": [
      "cube",
      "cube-transition",
      "3d",
      "rotate",
      "transition",
      "perspective"
    ]
  },
  {
    "id": "140",
    "pack": "motion2",
    "no": "20",
    "slug": "page-curl",
    "name": "翻页转场",
    "nameEn": "Page curl",
    "meaning": "像纸张一样卷起，翻到下一页",
    "tags": [
      "page-curl",
      "page-turn",
      "page-peel",
      "paper",
      "book",
      "transition"
    ]
  },
  {
    "id": "141",
    "pack": "motion2",
    "no": "21",
    "slug": "pixelate",
    "name": "像素化转场",
    "nameEn": "Pixelate",
    "meaning": "马赛克逐渐变粗后切换画面",
    "tags": [
      "pixelate",
      "mosaic",
      "pixel",
      "transition",
      "retro",
      "8-bit",
      "scene-change"
    ]
  },
  {
    "id": "142",
    "pack": "motion2",
    "no": "22",
    "slug": "shatter",
    "name": "玻璃碎裂",
    "nameEn": "Shatter",
    "meaning": "像玻璃一样碎裂，碎片飞散",
    "tags": [
      "shatter",
      "glass-break",
      "broken-glass",
      "shards",
      "crack",
      "transition",
      "impact"
    ]
  },
  {
    "id": "143",
    "pack": "motion2",
    "no": "23",
    "slug": "exploded-view",
    "name": "爆炸图",
    "nameEn": "Exploded view",
    "meaning": "零件分离，展示内部结构",
    "tags": [
      "exploded-view",
      "explode",
      "layers",
      "isometric",
      "product",
      "breakdown",
      "explainer"
    ]
  },
  {
    "id": "144",
    "pack": "motion2",
    "no": "24",
    "slug": "split-screen",
    "name": "分屏",
    "nameEn": "Split screen",
    "meaning": "分割画面，同时展示多个场景",
    "tags": [
      "split-screen",
      "multi-screen",
      "panels",
      "side-by-side",
      "comparison",
      "layout"
    ]
  },
  {
    "id": "145",
    "pack": "lp2",
    "no": "01",
    "slug": "timeline-on-scroll",
    "name": "滚动时间轴",
    "nameEn": "Timeline on scroll",
    "meaning": "滚动时时间轴的线条随之延伸",
    "tags": [
      "timeline",
      "scroll",
      "history",
      "milestones",
      "scroll-driven",
      "progress-line"
    ]
  },
  {
    "id": "146",
    "pack": "lp2",
    "no": "02",
    "slug": "scroll-text-reveal",
    "name": "滚动文字显现",
    "nameEn": "Scroll text reveal",
    "meaning": "随着阅读，文字逐字变深",
    "tags": [
      "scroll",
      "text-reveal",
      "scroll-driven",
      "typography",
      "opacity",
      "storytelling"
    ]
  },
  {
    "id": "147",
    "pack": "lp2",
    "no": "03",
    "slug": "stacking-cards",
    "name": "堆叠卡片",
    "nameEn": "Stacking cards",
    "meaning": "滚动时卡片层层叠起",
    "tags": [
      "stacking-cards",
      "sticky",
      "scroll",
      "cards",
      "position-sticky",
      "steps"
    ]
  },
  {
    "id": "148",
    "pack": "lp2",
    "no": "04",
    "slug": "background-color-change",
    "name": "滚动切换背景色",
    "nameEn": "Background color change on scroll",
    "meaning": "按区块切换页面背景色",
    "tags": [
      "background-color",
      "scroll",
      "section",
      "color-transition",
      "scroll-driven",
      "storytelling"
    ]
  },
  {
    "id": "149",
    "pack": "lp2",
    "no": "05",
    "slug": "hide-on-scroll-header",
    "name": "滚动隐藏页头",
    "nameEn": "Hide-on-scroll header",
    "meaning": "向下滚动时隐藏，向上滚动时出现",
    "tags": [
      "header",
      "hide-on-scroll",
      "headroom",
      "navigation",
      "sticky-header",
      "scroll-direction"
    ]
  },
  {
    "id": "150",
    "pack": "lp2",
    "no": "06",
    "slug": "scrollspy",
    "name": "滚动监听",
    "nameEn": "Scrollspy",
    "meaning": "目录高亮当前阅读的章节",
    "tags": [
      "scrollspy",
      "table-of-contents",
      "toc",
      "navigation",
      "active-state",
      "scroll"
    ]
  },
  {
    "id": "151",
    "pack": "lp2",
    "no": "07",
    "slug": "back-to-top-button",
    "name": "回到顶部按钮",
    "nameEn": "Back-to-top button",
    "meaning": "往下滚动后出现，点击回到顶部",
    "tags": [
      "back-to-top",
      "scroll-to-top",
      "button",
      "navigation",
      "floating-button",
      "smooth-scroll"
    ]
  },
  {
    "id": "152",
    "pack": "lp2",
    "no": "08",
    "slug": "zoom-on-scroll",
    "name": "滚动放大",
    "nameEn": "Zoom on scroll",
    "meaning": "图片随滚动放大至铺满屏幕",
    "tags": [
      "zoom",
      "scroll",
      "image",
      "scale",
      "scroll-driven",
      "hero",
      "fullscreen"
    ]
  },
  {
    "id": "153",
    "pack": "lp2",
    "no": "09",
    "slug": "3d-tilt",
    "name": "3D 倾斜",
    "nameEn": "3D tilt on hover",
    "meaning": "卡片随光标方向立体倾斜",
    "tags": [
      "tilt",
      "3d",
      "hover",
      "perspective",
      "card",
      "glare",
      "parallax"
    ]
  },
  {
    "id": "154",
    "pack": "lp2",
    "no": "10",
    "slug": "spotlight-hover",
    "name": "聚光灯悬停",
    "nameEn": "Spotlight hover",
    "meaning": "只有光标周围变亮",
    "tags": [
      "spotlight",
      "hover",
      "glow",
      "cursor",
      "radial-gradient",
      "dark-mode",
      "card"
    ]
  },
  {
    "id": "155",
    "pack": "lp2",
    "no": "11",
    "slug": "image-swap-on-hover",
    "name": "悬停切换图片",
    "nameEn": "Image swap on hover",
    "meaning": "悬停时换成另一张照片",
    "tags": [
      "image-swap",
      "hover",
      "crossfade",
      "product-card",
      "ecommerce",
      "thumbnail"
    ]
  },
  {
    "id": "156",
    "pack": "lp2",
    "no": "12",
    "slug": "text-roll-on-hover",
    "name": "悬停文字翻滚",
    "nameEn": "Text roll on hover",
    "meaning": "文字向上翻转并替换",
    "tags": [
      "text-roll",
      "hover",
      "menu",
      "link",
      "stagger",
      "typography"
    ]
  },
  {
    "id": "157",
    "pack": "lp2",
    "no": "13",
    "slug": "hover-image-reveal",
    "name": "悬停图片预览",
    "nameEn": "Hover image reveal",
    "meaning": "悬停列表项时显示对应照片",
    "tags": [
      "hover",
      "image-reveal",
      "list",
      "cursor-follow",
      "preview",
      "portfolio"
    ]
  },
  {
    "id": "158",
    "pack": "lp2",
    "no": "14",
    "slug": "floating-label",
    "name": "浮动标签",
    "nameEn": "Floating label",
    "meaning": "开始输入时标签上移",
    "tags": [
      "floating-label",
      "form",
      "input",
      "label",
      "focus",
      "material-design"
    ]
  },
  {
    "id": "159",
    "pack": "lp2",
    "no": "15",
    "slug": "inline-validation",
    "name": "实时校验",
    "nameEn": "Inline validation",
    "meaning": "输入时即时显示对错",
    "tags": [
      "validation",
      "form",
      "inline-validation",
      "error-message",
      "input",
      "feedback"
    ]
  },
  {
    "id": "160",
    "pack": "lp2",
    "no": "16",
    "slug": "loading-button",
    "name": "加载按钮",
    "nameEn": "Loading button",
    "meaning": "点击后在按钮内显示加载中到完成",
    "tags": [
      "loading-button",
      "button",
      "spinner",
      "submit",
      "success-state",
      "microinteraction"
    ]
  },
  {
    "id": "161",
    "pack": "lp2",
    "no": "17",
    "slug": "view-transition",
    "name": "视图过渡",
    "nameEn": "View transition (shared element)",
    "meaning": "列表中的照片直接展开为详情页",
    "tags": [
      "view-transition",
      "shared-element",
      "page-transition",
      "morph",
      "gallery",
      "navigation"
    ]
  },
  {
    "id": "162",
    "pack": "lp2",
    "no": "18",
    "slug": "lightbox",
    "name": "灯箱",
    "nameEn": "Lightbox",
    "meaning": "点击图片后在变暗的背景上放大",
    "tags": [
      "lightbox",
      "modal",
      "gallery",
      "image",
      "overlay",
      "zoom"
    ]
  },
  {
    "id": "163",
    "pack": "lp2",
    "no": "19",
    "slug": "hotspots",
    "name": "图片热点",
    "nameEn": "Hotspots",
    "meaning": "点击图片上的圆点显示说明",
    "tags": [
      "hotspots",
      "image",
      "tooltip",
      "pulse",
      "product",
      "interactive-image"
    ]
  },
  {
    "id": "164",
    "pack": "lp2",
    "no": "20",
    "slug": "countdown-timer",
    "name": "倒计时",
    "nameEn": "Countdown timer",
    "meaning": "显示距截止时间的剩余时间并递减",
    "tags": [
      "countdown",
      "timer",
      "deadline",
      "campaign",
      "flip",
      "urgency"
    ]
  },
  {
    "id": "165",
    "pack": "lp2",
    "no": "21",
    "slug": "animated-shape-divider",
    "name": "动态形状分隔线",
    "nameEn": "Animated shape divider",
    "meaning": "持续摆动的波浪形区块分隔线",
    "tags": [
      "shape-divider",
      "wave",
      "section-divider",
      "svg",
      "ambient",
      "loop"
    ]
  },
  {
    "id": "166",
    "pack": "lp2",
    "no": "22",
    "slug": "like-button-animation",
    "name": "点赞动画",
    "nameEn": "Like button animation",
    "meaning": "点击后爱心迸发弹出",
    "tags": [
      "like-button",
      "heart",
      "microinteraction",
      "burst",
      "favorite",
      "counter"
    ]
  },
  {
    "id": "167",
    "pack": "lp2",
    "no": "23",
    "slug": "scroll-down-cue",
    "name": "向下滚动提示",
    "nameEn": "Scroll-down cue",
    "meaning": "持续循环、引导向下滚动的动画",
    "tags": [
      "scroll-cue",
      "scroll-indicator",
      "scroll-down",
      "hero",
      "arrow",
      "loop"
    ]
  },
  {
    "id": "168",
    "pack": "lp2",
    "no": "24",
    "slug": "background-video",
    "name": "背景视频",
    "nameEn": "Background video",
    "meaning": "首屏背景中播放视频",
    "tags": [
      "background-video",
      "hero",
      "video",
      "autoplay",
      "loop",
      "first-view"
    ]
  },
  {
    "id": "169",
    "pack": "camera2",
    "no": "01",
    "slug": "pedestal",
    "name": "垂直升降镜头",
    "nameEn": "Pedestal",
    "meaning": "相机整体垂直上下平移",
    "tags": [
      "pedestal",
      "boom",
      "vertical move",
      "rise",
      "elevate",
      "camera move",
      "no tilt"
    ]
  },
  {
    "id": "170",
    "pack": "camera2",
    "no": "02",
    "slug": "barrel-roll",
    "name": "横滚镜头",
    "nameEn": "Barrel roll",
    "meaning": "相机绕镜头光轴旋转一整圈",
    "tags": [
      "barrel roll",
      "roll",
      "360",
      "rotate",
      "spin",
      "aerial",
      "camera move"
    ]
  },
  {
    "id": "171",
    "pack": "camera2",
    "no": "03",
    "slug": "hyperlapse",
    "name": "移动延时",
    "nameEn": "Hyperlapse",
    "meaning": "相机边移动边拍的延时摄影",
    "tags": [
      "hyperlapse",
      "time-lapse",
      "moving timelapse",
      "fast forward",
      "travel",
      "city",
      "camera move"
    ]
  },
  {
    "id": "172",
    "pack": "camera2",
    "no": "04",
    "slug": "long-take",
    "name": "长镜头",
    "nameEn": "Long take",
    "meaning": "不切换，一个镜头连续拍到底",
    "tags": [
      "long take",
      "oner",
      "one shot",
      "continuous",
      "no cut",
      "sequence shot",
      "camera move"
    ]
  },
  {
    "id": "173",
    "pack": "camera2",
    "no": "05",
    "slug": "steadicam",
    "name": "斯坦尼康",
    "nameEn": "Steadicam",
    "meaning": "消除抖动，平稳流畅地移动",
    "tags": [
      "steadicam",
      "gimbal",
      "stabilizer",
      "smooth",
      "glide",
      "floating",
      "camera move"
    ]
  },
  {
    "id": "174",
    "pack": "camera2",
    "no": "06",
    "slug": "follow-shot",
    "name": "背后跟拍",
    "nameEn": "Follow shot",
    "meaning": "跟在主体身后移动",
    "tags": [
      "follow shot",
      "follow",
      "behind",
      "third person",
      "trail",
      "walk",
      "camera move"
    ]
  },
  {
    "id": "175",
    "pack": "camera2",
    "no": "07",
    "slug": "locked-off-shot",
    "name": "固定镜头",
    "nameEn": "Locked-off shot",
    "meaning": "相机固定不动，只有主体移动",
    "tags": [
      "locked-off",
      "locked off",
      "static shot",
      "fixed camera",
      "tripod",
      "static",
      "still camera"
    ]
  },
  {
    "id": "176",
    "pack": "camera2",
    "no": "08",
    "slug": "fly-through",
    "name": "穿越镜头",
    "nameEn": "Fly-through",
    "meaning": "穿过窗户或门进入下一个空间",
    "tags": [
      "fly-through",
      "flythrough",
      "through the window",
      "pass through",
      "drone",
      "interior",
      "camera move"
    ]
  },
  {
    "id": "177",
    "pack": "camera2",
    "no": "09",
    "slug": "low-angle",
    "name": "低角度镜头",
    "nameEn": "Low angle",
    "meaning": "从低处向上拍",
    "tags": [
      "low angle",
      "worm's eye",
      "look up",
      "from below",
      "power",
      "heroic",
      "angle"
    ]
  },
  {
    "id": "178",
    "pack": "camera2",
    "no": "10",
    "slug": "high-angle",
    "name": "高角度镜头",
    "nameEn": "High angle",
    "meaning": "从高处向下拍",
    "tags": [
      "high angle",
      "look down",
      "from above",
      "overhead",
      "vulnerable",
      "angle"
    ]
  },
  {
    "id": "179",
    "pack": "camera2",
    "no": "11",
    "slug": "pov-shot",
    "name": "POV 镜头",
    "nameEn": "POV shot",
    "meaning": "以角色的视线观看",
    "tags": [
      "pov",
      "point of view",
      "first person",
      "subjective",
      "eyes",
      "hands",
      "angle"
    ]
  },
  {
    "id": "180",
    "pack": "camera2",
    "no": "12",
    "slug": "over-the-shoulder",
    "name": "过肩镜头",
    "nameEn": "Over-the-shoulder",
    "meaning": "越过一人的肩膀拍另一人",
    "tags": [
      "over-the-shoulder",
      "ots",
      "dialogue",
      "conversation",
      "shoulder",
      "two shot",
      "angle"
    ]
  },
  {
    "id": "181",
    "pack": "camera2",
    "no": "13",
    "slug": "birds-eye-view",
    "name": "鸟瞰镜头",
    "nameEn": "Bird's-eye view",
    "meaning": "从正上方垂直向下拍",
    "tags": [
      "bird's-eye",
      "birds eye",
      "top-down",
      "overhead",
      "straight down",
      "aerial",
      "angle"
    ]
  },
  {
    "id": "182",
    "pack": "camera2",
    "no": "14",
    "slug": "deep-focus",
    "name": "深焦镜头",
    "nameEn": "Deep focus",
    "meaning": "从近处到远处全部清晰",
    "tags": [
      "deep focus",
      "depth of field",
      "everything sharp",
      "f/16",
      "small aperture",
      "pan focus",
      "focus"
    ]
  },
  {
    "id": "183",
    "pack": "camera2",
    "no": "15",
    "slug": "establishing-shot",
    "name": "定场镜头",
    "nameEn": "Establishing shot",
    "meaning": "开场交代地点的远景",
    "tags": [
      "establishing shot",
      "wide shot",
      "location",
      "opening",
      "scene setting",
      "aerial",
      "framing"
    ]
  },
  {
    "id": "184",
    "pack": "camera2",
    "no": "16",
    "slug": "extreme-close-up",
    "name": "大特写",
    "nameEn": "Extreme close-up",
    "meaning": "只放大眼睛或指尖等局部",
    "tags": [
      "extreme close-up",
      "ecu",
      "close-up",
      "eye",
      "detail",
      "macro",
      "framing"
    ]
  },
  {
    "id": "185",
    "pack": "camera2",
    "no": "17",
    "slug": "insert-shot",
    "name": "插入镜头",
    "nameEn": "Insert shot",
    "meaning": "插入同一场景中的细节",
    "tags": [
      "insert shot",
      "insert",
      "detail",
      "close-up",
      "cut in",
      "prop",
      "edit"
    ]
  },
  {
    "id": "186",
    "pack": "camera2",
    "no": "18",
    "slug": "morph-cut",
    "name": "变形剪切",
    "nameEn": "Morph cut",
    "meaning": "平滑衔接相同构图的两段画面",
    "tags": [
      "morph cut",
      "morph",
      "seamless",
      "interview",
      "talking head",
      "edit",
      "transition"
    ]
  },
  {
    "id": "187",
    "pack": "camera2",
    "no": "19",
    "slug": "fade-to-black",
    "name": "淡出到黑场",
    "nameEn": "Fade to black",
    "meaning": "画面逐渐变暗直至全黑",
    "tags": [
      "fade to black",
      "fade out",
      "fade in",
      "black",
      "ending",
      "transition"
    ]
  },
  {
    "id": "188",
    "pack": "camera2",
    "no": "20",
    "slug": "iris-out",
    "name": "圈出",
    "nameEn": "Iris out",
    "meaning": "圆形窗口收拢，画面变黑",
    "tags": [
      "iris out",
      "iris in",
      "iris wipe",
      "circle",
      "old film",
      "cartoon",
      "transition"
    ]
  },
  {
    "id": "189",
    "pack": "camera2",
    "no": "21",
    "slug": "cutaway",
    "name": "切出镜头",
    "nameEn": "Cutaway",
    "meaning": "切到其他对象后再切回",
    "tags": [
      "cutaway",
      "reaction shot",
      "b-roll",
      "cut away",
      "audience",
      "edit"
    ]
  },
  {
    "id": "190",
    "pack": "camera2",
    "no": "22",
    "slug": "cross-cutting",
    "name": "交叉剪辑",
    "nameEn": "Cross-cutting",
    "meaning": "交替呈现同时发生的两个场景",
    "tags": [
      "cross-cutting",
      "parallel editing",
      "intercut",
      "parallel action",
      "chase",
      "edit"
    ]
  },
  {
    "id": "191",
    "pack": "camera2",
    "no": "23",
    "slug": "bullet-time",
    "name": "子弹时间",
    "nameEn": "Bullet time",
    "meaning": "时间静止，相机绕主体旋转",
    "tags": [
      "bullet time",
      "time slice",
      "frozen moment",
      "orbit",
      "slow motion",
      "matrix",
      "effect"
    ]
  },
  {
    "id": "192",
    "pack": "camera2",
    "no": "24",
    "slug": "montage",
    "name": "蒙太奇",
    "nameEn": "Montage",
    "meaning": "用一连串短镜头压缩时间",
    "tags": [
      "montage",
      "sequence",
      "training montage",
      "time passing",
      "quick cuts",
      "edit"
    ]
  }
];
