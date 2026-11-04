export interface MotionName {
  id: number;
  name: string;
  nameEn: string;
  meaning: string;
  prompt: string;
  tags: string[];
}

export interface Pack {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  count: number;
  color: string;
  accent: string;
  bgColor: string;
  tags: string[];
  examples: string[];
  names: MotionName[];
}

const motionNames: MotionName[] = [
  { id: 1, name: '遮罩揭示', nameEn: 'Mask Reveal', meaning: '用遮罩形状揭示内容，从一侧或按路径展开', prompt: 'Bring the title in with a mask reveal from below, 0.6 s, each line slightly after the one before.', tags: ['入场', '遮罩', '标题'] },
  { id: 2, name: '打字机', nameEn: 'Typewriter', meaning: '文字逐字出现，模拟打字效果', prompt: 'Type out the subtitle with a typewriter effect, 40ms per character, with a blinking cursor.', tags: ['文字', '入场', '逐字'] },
  { id: 3, name: '交错上升', nameEn: 'Stagger Rise', meaning: '多个元素依次从下方弹入，形成错落节奏', prompt: 'Stagger the cards in from below, 80ms between each, with a slight overshoot.', tags: ['入场', '交错', '卡片'] },
  { id: 4, name: '弹性缩放', nameEn: 'Elastic Scale', meaning: '元素以弹性缓动缩放进入，带有回弹感', prompt: 'Scale in the badge with an elastic ease, overshooting to 1.15 before settling.', tags: ['强调', '弹性', '缩放'] },
  { id: 5, name: '模糊淡入', nameEn: 'Blur Fade', meaning: '从模糊到清晰、从透明到不透明的过渡', prompt: 'Fade in the photo from blur 12px to sharp, 0.8s ease-out.', tags: ['入场', '模糊', '照片'] },
  { id: 6, name: '滑动进入', nameEn: 'Slide In', meaning: '元素从屏幕外滑入，配合缓动停止', prompt: 'Slide the panel in from the right, 0.5s cubic-bezier(0.22, 1, 0.36, 1).', tags: ['入场', '滑动', '面板'] },
  { id: 7, name: '旋转揭示', nameEn: 'Rotate Reveal', meaning: '元素旋转着进入画面，同时缩放到位', prompt: 'Rotate the icon in from -180° to 0° while scaling up, 0.7s spring.', tags: ['入场', '旋转', '图标'] },
  { id: 8, name: '线条描绘', nameEn: 'Line Draw', meaning: '用描边动画画出线条或轮廓', prompt: 'Draw the line icon stroke by stroke, 1.2s total, easing on each segment.', tags: ['描边', '图标', '绘制'] },
  { id: 9, name: '波纹扩散', nameEn: 'Ripple Expand', meaning: '从中心点向外扩散的圆形波纹', prompt: 'Expand a ripple from the button center, fading out at the edges, 0.6s.', tags: ['强调', '波纹', '按钮'] },
  { id: 10, name: '翻转进入', nameEn: 'Flip In', meaning: '元素沿轴翻转进入，展示正反面', prompt: 'Flip the card in along the Y axis, showing the back then the front, 0.8s.', tags: ['入场', '翻转', '卡片'] },
  { id: 11, name: '路径运动', nameEn: 'Path Motion', meaning: '元素沿预定路径移动，速度随路径变化', prompt: 'Move the dot along the curved path, 2s, easing in and out at the ends.', tags: ['路径', '运动', '循环'] },
  { id: 12, name: '渐变擦除', nameEn: 'Gradient Wipe', meaning: '用渐变过渡揭示或隐藏内容', prompt: 'Wipe the gradient across the text from left to right, 0.9s ease-in-out.', tags: ['文字', '渐变', '揭示'] },
  { id: 13, name: '聚合成形', nameEn: 'Converge', meaning: '多个碎片从四周聚合成为完整形状', prompt: 'Converge the shards into the logo, 1s, with a small bounce on impact.', tags: ['入场', '聚合', '标志'] },
  { id: 14, name: '摇摆强调', nameEn: 'Wobble', meaning: '元素左右摇摆，吸引注意力', prompt: 'Wobble the notification bell ±8° three times, 0.4s each.', tags: ['强调', '摇摆', '通知'] },
  { id: 15, name: '呼吸循环', nameEn: 'Breathing', meaning: '元素周期性缩放，营造生命感', prompt: 'Make the badge breathe — scale 1 to 1.06 and back, 2.4s loop.', tags: ['循环', '缩放', '徽章'] },
  { id: 16, name: '逐行展开', nameEn: 'Line Expand', meaning: '多行内容依次展开，每行带有位移', prompt: 'Expand the list items one by one, 120ms apart, sliding right while fading in.', tags: ['列表', '交错', '展开'] },
  { id: 17, name: '缩放弹跳', nameEn: 'Pop Bounce', meaning: '元素快速放大后回弹到位', prompt: 'Pop the avatar in with a quick scale from 0 to 1.2 then settle to 1, 0.5s.', tags: ['入场', '弹跳', '头像'] },
  { id: 18, name: '扭曲变形', nameEn: 'Morph', meaning: '元素形状从一个状态平滑过渡到另一个', prompt: 'Morph the square into a circle, 0.6s, while rotating 90°.', tags: ['变形', '形状', '过渡'] },
  { id: 19, name: '粒子消散', nameEn: 'Particle Dissolve', meaning: '元素分解为粒子后消散', prompt: 'Dissolve the title into particles drifting upward, 1.2s, fading as they go.', tags: ['退场', '粒子', '文字'] },
  { id: 20, name: '悬挂摆入', nameEn: 'Pendulum In', meaning: '元素像钟摆一样摆动进入', prompt: 'Swing the tag in from the top like a pendulum, 3 swings decreasing, 1.5s total.', tags: ['入场', '摆动', '标签'] },
  { id: 21, name: '层叠滑入', nameEn: 'Stack Slide', meaning: '多层元素依次滑入，形成堆叠效果', prompt: 'Slide the layers in from the left, 100ms apart, each with a slight rotation.', tags: ['入场', '层叠', '滑动'] },
  { id: 22, name: '脉冲光圈', nameEn: 'Pulse Ring', meaning: '从中心向外扩散的光圈，周期性循环', prompt: 'Emit a pulse ring from the avatar every 2s, expanding 1.5x and fading.', tags: ['循环', '光圈', '头像'] },
  { id: 23, name: '文字揭示', nameEn: 'Text Reveal', meaning: '文字从遮罩后显露，配合位移', prompt: 'Reveal the headline from behind a mask, sliding up 20px while fading in.', tags: ['文字', '揭示', '标题'] },
  { id: 24, name: '弹性退场', nameEn: 'Elastic Out', meaning: '元素以弹性缓动退出画面', prompt: 'Exit the tooltip with an elastic scale down, 0.4s, overshooting slightly.', tags: ['退场', '弹性', '提示'] },
];

const cameraNames: MotionName[] = [
  { id: 25, name: '缓慢推轨', nameEn: 'Slow Dolly In', meaning: '摄影机缓慢推向主体，营造沉浸感', prompt: 'Slow dolly in toward her face; move the camera, do not zoom.', tags: ['推轨', '缓慢', '人物'] },
  { id: 26, name: '升降镜头', nameEn: 'Crane Up', meaning: '摄影机从低处向上升起，展现全景', prompt: 'Crane up from the table to reveal the whole room, 3s, steady speed.', tags: ['升降', '揭示', '场景'] },
  { id: 27, name: '甩镜', nameEn: 'Whip Pan', meaning: '快速水平摇镜，产生动态模糊', prompt: 'Whip pan from the door to the window, 0.3s, with motion blur.', tags: ['摇镜', '快速', '转场'] },
  { id: 28, name: '变焦拉焦', nameEn: 'Rack Focus', meaning: '焦点在前后景之间切换', prompt: 'Rack focus from the coffee cup in front to the laptop behind, 1s.', tags: ['焦点', '变焦', '景深'] },
  { id: 29, name: '环绕轨道', nameEn: 'Orbit Arc', meaning: '摄影机围绕主体做弧形运动', prompt: 'Orbit 180° around the product, 4s, keeping it centered.', tags: ['环绕', '轨道', '产品'] },
  { id: 30, name: '急速变焦', nameEn: 'Snap Zoom', meaning: '快速变焦推向主体，产生冲击感', prompt: 'Snap zoom into the label, 0.2s, with a slight overshoot.', tags: ['变焦', '快速', '强调'] },
  { id: 31, name: '匹配剪辑', nameEn: 'Match Cut', meaning: '利用相似形状或动作进行镜头切换', prompt: 'Match cut from the round clock to the round plate, same framing.', tags: ['转场', '匹配', '剪辑'] },
  { id: 32, name: '镜头扫过', nameEn: 'Lens Whisk', meaning: '镜头快速扫过一组对象', prompt: 'Whisk across the shelf of products, 0.5s, settling on the last one.', tags: ['摇镜', '快速', '展示'] },
  { id: 33, name: '俯拍下降', nameEn: 'Top Down Descend', meaning: '从正上方向下垂直下降', prompt: 'Descend straight down from a top-down view to a 45° angle, 2.5s.', tags: ['下降', '俯拍', '角度'] },
  { id: 34, name: '手持跟随', nameEn: 'Handheld Follow', meaning: '模拟手持摄影机的自然晃动感', prompt: 'Follow the subject with a handheld feel, subtle shake, 6s.', tags: ['跟随', '手持', '纪实'] },
  { id: 35, name: '滑轨平移', nameEn: 'Track Sideways', meaning: '摄影机沿水平方向平移', prompt: 'Track left along the facade, keeping the building parallel, 3s.', tags: ['平移', '滑轨', '建筑'] },
  { id: 36, name: '倾斜镜头', nameEn: 'Dutch Angle', meaning: '倾斜摄影机制造不安或动感', prompt: 'Tilt to a 15° Dutch angle as the text appears, holding for 2s.', tags: ['倾斜', '角度', '紧张'] },
  { id: 37, name: '拉远揭示', nameEn: 'Pull Back Reveal', meaning: '从特写拉远到全景，揭示环境', prompt: 'Pull back from the ring to reveal the couple in the park, 4s.', tags: ['拉远', '揭示', '环境'] },
  { id: 38, name: '旋转下降', nameEn: 'Spiral Down', meaning: '边旋转边下降的复合运动', prompt: 'Spiral down around the staircase, rotating 270° while descending, 5s.', tags: ['旋转', '下降', '复合'] },
  { id: 39, name: '穿越镜头', nameEn: 'Fly Through', meaning: '穿越障碍或空间的连续运动', prompt: 'Fly through the gap between the buildings, 2s, with speed lines.', tags: ['穿越', '速度', '空间'] },
  { id: 40, name: '定格放大', nameEn: 'Freeze Zoom', meaning: '画面定格后放大关键区域', prompt: 'Freeze the action, then zoom into the hands, 1.5s total.', tags: ['定格', '放大', '强调'] },
  { id: 41, name: '颠倒镜头', nameEn: 'Flip World', meaning: '旋转画面制造失衡感', prompt: 'Rotate the frame 180° over 1s as the character stands up.', tags: ['旋转', '颠倒', '过渡'] },
  { id: 42, name: '希区柯克变焦', nameEn: 'Dolly Zoom', meaning: '推轨与变焦反向进行，产生空间扭曲', prompt: 'Dolly zoom on the face — dolly out while zooming in, 2s.', tags: ['推轨', '变焦', '扭曲'] },
  { id: 43, name: '低角度仰拍', nameEn: 'Low Angle Up', meaning: '从低处向上拍摄，强调主体威严', prompt: 'Tilt up from the shoes to the face, 1.5s, low angle.', tags: ['仰拍', '角度', '人物'] },
  { id: 44, name: '长焦压缩', nameEn: 'Telephoto Compress', meaning: '用长焦镜头压缩空间感', prompt: 'Compress the scene with a telephoto look, flattening the background, 3s.', tags: ['长焦', '压缩', '空间'] },
  { id: 45, name: '过肩镜头', nameEn: 'Over the Shoulder', meaning: '从人物肩后拍摄，建立对话感', prompt: 'Over-the-shoulder shot, slowly pushing in, 4s.', tags: ['过肩', '对话', '推进'] },
  { id: 46, name: '航拍推进', nameEn: 'Aerial Push', meaning: '从空中向地面目标推进', prompt: 'Aerial push toward the house, descending slightly, 5s.', tags: ['航拍', '推进', '全景'] },
  { id: 47, name: '微距探索', nameEn: 'Macro Explore', meaning: '在极近距离探索细节', prompt: 'Explore the texture of the fabric in macro, drifting slowly, 4s.', tags: ['微距', '细节', '质感'] },
  { id: 48, name: '时间冻结', nameEn: 'Time Freeze', meaning: '环绕被冻结的主体运动', prompt: 'Orbit around the frozen splash, 360° over 6s, time resumes at the end.', tags: ['环绕', '冻结', '时间'] },
];

const uiNames: MotionName[] = [
  { id: 49, name: '磁吸按钮', nameEn: 'Magnetic Button', meaning: '按钮在光标靠近时被吸引偏移', prompt: 'Make the button magnetic — it shifts toward the cursor within 80px, spring back on leave.', tags: ['按钮', '磁吸', '光标'] },
  { id: 50, name: '变形菜单', nameEn: 'Morphing Menu', meaning: '菜单图标变形为关闭图标', prompt: 'Morph the hamburger into an X, 0.4s, with the lines rotating and merging.', tags: ['菜单', '变形', '图标'] },
  { id: 51, name: '卡片翻转', nameEn: 'Card Flip', meaning: '卡片沿轴翻转展示正反面', prompt: 'Flip the card on hover, showing the details on the back, 0.6s.', tags: ['卡片', '翻转', '悬停'] },
  { id: 52, name: '标签滑动', nameEn: 'Tab Slide', meaning: '标签指示器在选项间滑动', prompt: 'Slide the tab indicator to the selected item, 0.3s spring, width adapting.', tags: ['标签', '滑动', '指示器'] },
  { id: 53, name: '开关切换', nameEn: 'Toggle Switch', meaning: '开关滑块平滑移动并改变颜色', prompt: 'Toggle the switch on, knob sliding with a slight bounce, color shifting to green.', tags: ['开关', '切换', '滑块'] },
  { id: 54, name: '进度填充', nameEn: 'Progress Fill', meaning: '进度条从一端填充到另一端', prompt: 'Fill the progress bar from 0 to 100% over 2s, with a glowing tip.', tags: ['进度', '填充', '加载'] },
  { id: 55, name: '骨架屏', nameEn: 'Skeleton Shimmer', meaning: '占位内容带有微光扫过效果', prompt: 'Show a skeleton with a shimmer sweeping left to right, 1.5s loop.', tags: ['加载', '骨架', '微光'] },
  { id: 56, name: '通知滑入', nameEn: 'Toast Slide', meaning: '通知从屏幕边缘滑入并自动消失', prompt: 'Slide the toast in from the top, hold 3s, then slide out, 0.4s each way.', tags: ['通知', '滑入', '自动'] },
  { id: 57, name: '展开折叠', nameEn: 'Accordion', meaning: '内容区域平滑展开或折叠', prompt: 'Expand the accordion section, height animating smoothly, 0.35s ease-out.', tags: ['展开', '折叠', '内容'] },
  { id: 58, name: '悬浮提示', nameEn: 'Tooltip Pop', meaning: '提示框从锚点弹出并淡入', prompt: 'Pop the tooltip above the button, scaling from 0.9 to 1 while fading in, 0.25s.', tags: ['提示', '弹出', '锚点'] },
  { id: 59, name: '下拉展开', nameEn: 'Dropdown Open', meaning: '下拉菜单从触发点展开', prompt: 'Open the dropdown below the button, items staggering in 40ms apart, 0.3s total.', tags: ['下拉', '展开', '菜单'] },
  { id: 60, name: '复选标记', nameEn: 'Check Draw', meaning: '勾选标记以描边动画出现', prompt: 'Draw the checkmark stroke in 0.3s after the box fills with color.', tags: ['勾选', '描边', '反馈'] },
  { id: 61, name: '长按反馈', nameEn: 'Press Ripple', meaning: '按压时产生波纹扩散反馈', prompt: 'On press, emit a ripple from the touch point, expanding to cover the button, 0.5s.', tags: ['按压', '波纹', '反馈'] },
  { id: 62, name: '输入聚焦', nameEn: 'Input Focus', meaning: '输入框聚焦时边框高亮并轻微放大', prompt: 'On focus, highlight the border in blue and lift the label, 0.2s.', tags: ['输入', '聚焦', '边框'] },
  { id: 63, name: '数字滚动', nameEn: 'Number Roll', meaning: '数字从旧值滚动到新值', prompt: 'Roll the counter from 0 to 1500, easing out over 1.5s, with comma formatting.', tags: ['数字', '滚动', '计数'] },
  { id: 64, name: '图片视差', nameEn: 'Image Parallax', meaning: '图片在滚动时以不同速度移动', prompt: 'Parallax the hero image — it moves at 0.5x the scroll speed, fading at the top.', tags: ['视差', '图片', '滚动'] },
  { id: 65, name: '光标跟随', nameEn: 'Cursor Glow', meaning: '光标周围有柔和的发光效果', prompt: 'Add a soft glow following the cursor, 200ms lag, fading when idle.', tags: ['光标', '发光', '跟随'] },
  { id: 66, name: '文字输入', nameEn: 'Text Field Caret', meaning: '输入光标闪烁并跟随文字', prompt: 'Blink the caret at 1s intervals, moving it to the end of the typed text.', tags: ['光标', '输入', '闪烁'] },
  { id: 67, name: '按钮按压', nameEn: 'Button Press', meaning: '按钮在按压时轻微缩小', prompt: 'On press, scale the button to 0.96, spring back on release, 0.2s.', tags: ['按钮', '按压', '缩放'] },
  { id: 68, name: '加载旋转', nameEn: 'Spinner', meaning: '旋转的加载指示器', prompt: 'Spin the loader 360° per second, with a gradient trail fading behind.', tags: ['加载', '旋转', '指示器'] },
  { id: 69, name: '星级评分', nameEn: 'Star Rating', meaning: '星星依次点亮并放大', prompt: 'Light up the stars one by one, each popping to 1.3x then settling, 0.15s apart.', tags: ['评分', '星星', '点亮'] },
  { id: 70, name: '模态弹出', nameEn: 'Modal Pop', meaning: '模态框从中心弹出并模糊背景', prompt: 'Pop the modal in from scale 0.9, blurring the backdrop, 0.35s spring.', tags: ['模态', '弹出', '模糊'] },
  { id: 71, name: '侧边栏滑入', nameEn: 'Sidebar Slide', meaning: '侧边栏从边缘滑入', prompt: 'Slide the sidebar in from the left, 0.4s, pushing the content right.', tags: ['侧边栏', '滑入', '导航'] },
  { id: 72, name: '徽章弹跳', nameEn: 'Badge Bounce', meaning: '徽章出现时弹跳进入', prompt: 'Bounce the badge in from above, landing with a small squash, 0.5s.', tags: ['徽章', '弹跳', '入场'] },
];

const lpNames: MotionName[] = [
  { id: 73, name: '滚动揭示', nameEn: 'Scroll Reveal', meaning: '内容在滚动到视口时逐渐显现', prompt: 'Reveal the section as it enters the viewport, fading up 24px, 0.6s.', tags: ['滚动', '揭示', '内容'] },
  { id: 74, name: '视差层叠', nameEn: 'Parallax Layers', meaning: '多层内容以不同速度滚动', prompt: 'Parallax three layers — background at 0.3x, mid at 0.6x, front at 1x scroll speed.', tags: ['视差', '层叠', '滚动'] },
  { id: 75, name: '吸附堆叠', nameEn: 'Sticky Stack', meaning: '卡片依次吸附堆叠在一起', prompt: 'Stack the cards as you scroll, each sticking and overlapping the previous, 0.3s settle.', tags: ['吸附', '堆叠', '卡片'] },
  { id: 76, name: '首屏缩放', nameEn: 'Hero Zoom', meaning: '首屏图片在滚动时缓慢放大', prompt: 'Zoom the hero image from 1 to 1.15 as the user scrolls down, linear.', tags: ['首屏', '缩放', '图片'] },
  { id: 77, name: '导航隐藏', nameEn: 'Nav Hide', meaning: '滚动时导航栏自动隐藏或显示', prompt: 'Hide the navbar on scroll down, show it on scroll up, 0.3s slide.', tags: ['导航', '隐藏', '滚动'] },
  { id: 78, name: '分割屏幕', nameEn: 'Split Screen', meaning: '屏幕分割为两部分，各自运动', prompt: 'Split the screen — left slides left, right slides right, revealing content, 0.8s.', tags: ['分割', '滑动', '揭示'] },
  { id: 79, name: '滚动遮罩', nameEn: 'Scroll Mask', meaning: '内容通过遮罩随滚动揭示', prompt: 'Mask the image with a vertical wipe tied to scroll progress, smooth.', tags: ['滚动', '遮罩', '揭示'] },
  { id: 80, name: '页面翻页', nameEn: 'Page Peel', meaning: '页面像纸张一样翻动', prompt: 'Peel the page from the corner, curling and revealing the next, 1s.', tags: ['翻页', '卷曲', '过渡'] },
  { id: 81, name: '网格级联', nameEn: 'Grid Cascade', meaning: '网格元素依次级联入场', prompt: 'Cascade the grid items in, 50ms apart in a diagonal pattern, 0.5s each.', tags: ['网格', '级联', '入场'] },
  { id: 82, name: '水平滚动', nameEn: 'Horizontal Scroll', meaning: '垂直滚动转换为水平滚动', prompt: 'Translate vertical scroll into horizontal movement of the gallery, smooth.', tags: ['水平', '滚动', '画廊'] },
  { id: 83, name: '粘性标题', nameEn: 'Sticky Header', meaning: '标题在滚动时吸附在顶部', prompt: 'Make the section title sticky at the top as the content scrolls past, 0.3s.', tags: ['粘性', '标题', '滚动'] },
  { id: 84, name: '进度指示', nameEn: 'Progress Indicator', meaning: '滚动进度以可视化方式呈现', prompt: 'Show reading progress as a thin bar at the top, filling with scroll.', tags: ['进度', '指示', '滚动'] },
  { id: 85, name: '放大聚焦', nameEn: 'Zoom Focus', meaning: '点击或滚动时放大某个区域', prompt: 'Zoom into the product image on hover, 1.4x over 0.4s, with a subtle pan.', tags: ['放大', '聚焦', '图片'] },
  { id: 86, name: '文字拆分', nameEn: 'Text Split', meaning: '标题文字拆分为多行依次出现', prompt: 'Split the headline into lines, each sliding up from behind a mask, 0.15s apart.', tags: ['文字', '拆分', '标题'] },
  { id: 87, name: '背景渐变', nameEn: 'Background Shift', meaning: '背景色随滚动逐渐变化', prompt: 'Shift the background gradient from navy to deep purple as the user scrolls, smooth.', tags: ['背景', '渐变', '滚动'] },
  { id: 88, name: '卡片展开', nameEn: 'Card Expand', meaning: '点击卡片展开详细内容', prompt: 'Expand the card to fill the screen on click, morphing from grid position, 0.6s.', tags: ['卡片', '展开', '全屏'] },
  { id: 89, name: '滚动吸附', nameEn: 'Scroll Snap', meaning: '滚动自动吸附到每个区块', prompt: 'Snap to each section on scroll, with a gentle ease, preventing half-stops.', tags: ['吸附', '滚动', '区块'] },
  { id: 90, name: '图片序列', nameEn: 'Image Sequence', meaning: '随滚动播放图片序列帧', prompt: 'Play the image sequence tied to scroll, 30 frames mapped to the section height.', tags: ['图片', '序列', '滚动'] },
  { id: 91, name: '浮动操作', nameEn: 'Floating Action', meaning: '浮动按钮在滚动时变换形态', prompt: 'Transform the FAB into a bar as the user scrolls past the hero, 0.4s.', tags: ['浮动', '按钮', '变换'] },
  { id: 92, name: '对比滑块', nameEn: 'Compare Slider', meaning: '拖动滑块对比前后状态', prompt: 'Drag the slider to reveal the before/after, clip-path following the handle.', tags: ['对比', '滑块', '揭示'] },
  { id: 93, name: '预加载动画', nameEn: 'Preloader', meaning: '页面加载时的品牌动画', prompt: 'Show the logo drawing itself in, then sliding up to reveal the page, 1.5s total.', tags: ['预加载', '标志', '入场'] },
  { id: 94, name: '鼠标视差', nameEn: 'Mouse Parallax', meaning: '元素随鼠标位置产生视差', prompt: 'Shift the layers based on mouse position, max 12px offset, smooth lerp.', tags: ['鼠标', '视差', '层叠'] },
  { id: 95, name: '计数触发', nameEn: 'Counter Trigger', meaning: '数字滚动到视口时开始计数', prompt: 'Start counting when the stats enter the viewport, rolling up over 1.2s.', tags: ['计数', '触发', '视口'] },
  { id: 96, name: '无缝循环', nameEn: 'Seamless Loop', meaning: '滚动内容无缝循环', prompt: 'Loop the marquee seamlessly, duplicating content and resetting at the halfway point.', tags: ['循环', '无缝', '滚动'] },
];

const photoNames: MotionName[] = [
  { id: 97, name: '黄金时刻', nameEn: 'Golden Hour', meaning: '温暖的低角度阳光，长阴影', prompt: 'Shoot during golden hour, warm backlight, long soft shadows, 35mm.', tags: ['灯光', '自然', '温暖'] },
  { id: 98, name: '霓虹黑色', nameEn: 'Neon Noir', meaning: '暗调场景配霓虹色点缀', prompt: 'Dark scene with neon pink and cyan accents, high contrast, cinematic.', tags: ['霓虹', '暗调', '电影'] },
  { id: 99, name: '柔光漫射', nameEn: 'Soft Diffusion', meaning: '柔和漫射光，降低反差', prompt: 'Use a soft diffused key light, low contrast, gentle shadows, dreamy feel.', tags: ['柔光', '漫射', '低反差'] },
  { id: 100, name: '硬光阴影', nameEn: 'Hard Shadow', meaning: '强烈的直射光与清晰阴影', prompt: 'Direct hard light from the side, sharp shadows, high contrast, dramatic.', tags: ['硬光', '阴影', '戏剧'] },
  { id: 101, name: '轮廓光', nameEn: 'Rim Light', meaning: '从背后勾勒主体的光线', prompt: 'Add a strong rim light from behind, separating the subject from the dark background.', tags: ['轮廓', '背光', '分离'] },
  { id: 102, name: '伦勃朗光', nameEn: 'Rembrandt Light', meaning: '经典的三角形眼神光布光', prompt: 'Rembrandt lighting — key light at 45°, creating a triangle on the far cheek.', tags: ['经典', '人像', '布光'] },
  { id: 103, name: '蝴蝶光', nameEn: 'Butterfly Light', meaning: '从正前方高位打下的柔光', prompt: 'Butterfly lighting — key light above and in front, creating a butterfly shadow under the nose.', tags: ['正面', '柔光', '经典'] },
  { id: 104, name: '分割光', nameEn: 'Split Light', meaning: '一侧打光，另一侧沉入阴影', prompt: 'Split lighting — one side of the face lit, the other in deep shadow, dramatic.', tags: ['分割', '阴影', '戏剧'] },
  { id: 105, name: '高调摄影', nameEn: 'High Key', meaning: '明亮、低反差、白色主导', prompt: 'High key photography — bright, airy, mostly white, minimal shadows, clean.', tags: ['高调', '明亮', '干净'] },
  { id: 106, name: '低调摄影', nameEn: 'Low Key', meaning: '暗调、高反差、黑色主导', prompt: 'Low key photography — predominantly dark, selective light, moody and dramatic.', tags: ['低调', '暗调', '氛围'] },
  { id: 107, name: '背光剪影', nameEn: 'Backlit Silhouette', meaning: '主体呈剪影，背景明亮', prompt: 'Silhouette against a bright sunset, subject completely dark, rim defining the shape.', tags: ['剪影', '背光', '日落'] },
  { id: 108, name: '胶片颗粒', nameEn: 'Film Grain', meaning: '模拟胶片质感的颗粒与色调', prompt: 'Add fine film grain, muted colors, slightly lifted blacks, 35mm film look.', tags: ['胶片', '颗粒', '质感'] },
  { id: 109, name: '褪色复古', nameEn: 'Faded Vintage', meaning: '褪色、低饱和的复古色调', prompt: 'Faded vintage look — desaturated, warm cast, soft contrast, nostalgic.', tags: ['复古', '褪色', '怀旧'] },
  { id: 110, name: '冷调蓝', nameEn: 'Cool Blue', meaning: '冷蓝色调，营造清冷感', prompt: 'Cool blue color grade, cyan shadows, clean and clinical mood.', tags: ['冷调', '蓝色', '清冷'] },
  { id: 111, name: '暖调橙', nameEn: 'Warm Amber', meaning: '暖橙色调，营造温馨感', prompt: 'Warm amber tones, golden highlights, cozy and inviting atmosphere.', tags: ['暖调', '橙色', '温馨'] },
  { id: 112, name: '单色处理', nameEn: 'Monochrome', meaning: '黑白或近单色的处理', prompt: 'Black and white conversion, rich grays, strong contrast, timeless.', tags: ['单色', '黑白', '经典'] },
  { id: 113, name: '交叉冲印', nameEn: 'Cross Process', meaning: '交叉冲印的独特色调', prompt: 'Cross-processed look — shifted colors, cyan shadows, warm highlights, retro.', tags: ['交叉', '冲印', '独特色调'] },
  { id: 114, name: '红外效果', nameEn: 'Infrared', meaning: '红外摄影的超现实色调', prompt: 'Infrared photography effect — white foliage, dark sky, ethereal and surreal.', tags: ['红外', '超现实', '自然'] },
  { id: 115, name: '光斑散景', nameEn: 'Bokeh Glow', meaning: '背景光斑散景效果', prompt: 'Create creamy bokeh in the background, large aperture, glowing light spots.', tags: ['散景', '光斑', '虚化'] },
  { id: 116, name: '镜头光晕', nameEn: 'Lens Flare', meaning: '镜头产生的自然光晕', prompt: 'Add a subtle anamorphic lens flare, horizontal streak, warm tone.', tags: ['光晕', '镜头', '变形'] },
  { id: 117, name: '漏光效果', nameEn: 'Light Leak', meaning: '胶片漏光的色彩溢出', prompt: 'Add a light leak from the edge, warm orange bleeding in, film accident feel.', tags: ['漏光', '胶片', '色彩'] },
  { id: 118, name: '戏剧顶光', nameEn: 'Top Light', meaning: '从正上方打下的戏剧性光线', prompt: 'Dramatic top light, deep eye shadows, sculptural and intense.', tags: ['顶光', '戏剧', '雕塑'] },
  { id: 119, name: '自然窗光', nameEn: 'Window Light', meaning: '利用窗户的自然光', prompt: 'Use soft window light from the left, natural shadows, intimate and quiet.', tags: ['窗光', '自然', '柔和'] },
  { id: 120, name: '色彩分离', nameEn: 'Color Split', meaning: '高光与阴影呈现不同色调', prompt: 'Split the tones — warm highlights, cool shadows, cinematic color separation.', tags: ['色彩', '分离', '电影'] },
];

const motion2Names: MotionName[] = [
  { id: 121, name: '弹簧过冲', nameEn: 'Spring Overshoot', meaning: '元素超过目标位置后弹回', prompt: 'Spring the element to 1.1x then settle to 1.0, 0.6s with damping.', tags: ['弹性', '过冲', '弹簧'] },
  { id: 122, name: '路径描绘', nameEn: 'Path Draw', meaning: '沿路径绘制线条', prompt: 'Draw the path with a glowing stroke, 1.5s, dash offset animating.', tags: ['路径', '描绘', '线条'] },
  { id: 123, name: '层叠漂移', nameEn: 'Layered Drift', meaning: '多层元素以不同速度漂移', prompt: 'Drift the layers at different speeds, creating depth, 3s loop.', tags: ['层叠', '漂移', '深度'] },
  { id: 124, name: '循环回声', nameEn: 'Loop Echo', meaning: '元素循环运动并产生回声效果', prompt: 'Loop the animation with an echo — each iteration smaller and fainter.', tags: ['循环', '回声', '渐变'] },
  { id: 125, name: '挤压拉伸', nameEn: 'Squash Stretch', meaning: '元素在运动中挤压和拉伸', prompt: 'Squash the ball on impact, stretch it in the air, 0.8s total.', tags: ['挤压', '拉伸', '卡通'] },
  { id: 126, name: '预备动作', nameEn: 'Anticipation', meaning: '主动作前的反向预备', prompt: 'Add anticipation — pull back slightly before the main action, 0.15s.', tags: ['预备', '反向', '节奏'] },
  { id: 127, name: '跟随动作', nameEn: 'Follow Through', meaning: '主动作后的余韵跟随', prompt: 'After the main motion, let the element settle with a soft follow-through.', tags: ['跟随', '余韵', '自然'] },
  { id: 128, name: '重叠动作', nameEn: 'Overlapping Action', meaning: '不同部分以不同节奏运动', prompt: 'Overlap the motion — the body moves first, then the details follow.', tags: ['重叠', '节奏', '自然'] },
  { id: 129, name: '弧线运动', nameEn: 'Arc Motion', meaning: '元素沿弧线而非直线运动', prompt: 'Move the element along an arc, not a straight line, natural trajectory.', tags: ['弧线', '轨迹', '自然'] },
  { id: 130, name: '缓入缓出', nameEn: 'Ease In Out', meaning: '运动开始和结束时较慢', prompt: 'Ease in and out of the motion, slow start and stop, smooth middle.', tags: ['缓动', '平滑', '基础'] },
  { id: 131, name: '加速运动', nameEn: 'Accelerate', meaning: '运动速度逐渐加快', prompt: 'Accelerate into the motion, starting slow and ending fast, ease-in curve.', tags: ['加速', '缓入', '速度'] },
  { id: 132, name: '减速运动', nameEn: 'Decelerate', meaning: '运动速度逐渐减慢', prompt: 'Decelerate into the stop, starting fast and ending slow, ease-out curve.', tags: ['减速', '缓出', '速度'] },
  { id: 133, name: '钟摆缓动', nameEn: 'Pendulum Ease', meaning: '像钟摆一样的缓动曲线', prompt: 'Use a pendulum ease — overshoot and settle with decreasing swings.', tags: ['钟摆', '缓动', '过冲'] },
  { id: 134, name: '弹性缓动', nameEn: 'Elastic Ease', meaning: '带弹性回弹的缓动', prompt: 'Use an elastic ease with multiple small bounces before settling.', tags: ['弹性', '缓动', '回弹'] },
  { id: 135, name: '弹跳缓动', nameEn: 'Bounce Ease', meaning: '像落地弹跳的缓动', prompt: 'Bounce ease — small bounces on landing, decreasing height.', tags: ['弹跳', '缓动', '落地'] },
  { id: 136, name: '阶梯运动', nameEn: 'Step Motion', meaning: '运动以阶梯式跳跃进行', prompt: 'Move in steps — discrete jumps rather than smooth motion, 5 steps.', tags: ['阶梯', '跳跃', '离散'] },
  { id: 137, name: '惯性滑动', nameEn: 'Momentum Slide', meaning: '像有惯性一样滑动并停止', prompt: 'Slide with momentum, fast start, long ease-out, like sliding on ice.', tags: ['惯性', '滑动', '物理'] },
  { id: 138, name: '引力吸引', nameEn: 'Gravity Pull', meaning: '元素像被吸引向某个点', prompt: 'Pull the element toward the target with acceleration, like gravity.', tags: ['引力', '吸引', '物理'] },
  { id: 139, name: '排斥运动', nameEn: 'Repel', meaning: '元素像被排斥离开某个点', prompt: 'Repel the element away from the cursor, force proportional to distance.', tags: ['排斥', '光标', '物理'] },
  { id: 140, name: '涡流旋转', nameEn: 'Vortex Spin', meaning: '元素围绕中心旋转并逐渐靠近', prompt: 'Spin the element in a vortex, spiraling inward, 2s.', tags: ['涡流', '旋转', '螺旋'] },
  { id: 141, name: '波浪传播', nameEn: 'Wave Propagation', meaning: '波浪状的效果依次传播', prompt: 'Propagate a wave through the dots, each reacting after the previous, 1s.', tags: ['波浪', '传播', '依次'] },
  { id: 142, name: '闪烁频率', nameEn: 'Flicker Rate', meaning: '元素以特定频率闪烁', prompt: 'Flicker the light at 8Hz, varying intensity, like a faulty bulb.', tags: ['闪烁', '频率', '灯光'] },
  { id: 143, name: '呼吸缩放', nameEn: 'Breathing Scale', meaning: '元素像呼吸一样缩放', prompt: 'Scale the element with a breathing rhythm — 1 to 1.05 over 2s, then back.', tags: ['呼吸', '缩放', '循环'] },
  { id: 144, name: '抖动停止', nameEn: 'Jitter Stop', meaning: '元素快速抖动后停止', prompt: 'Jitter the element rapidly, then snap to a stop, 0.4s.', tags: ['抖动', '停止', '强调'] },
];

const lp2Names: MotionName[] = [
  { id: 145, name: '分屏揭示', nameEn: 'Split Reveal', meaning: '屏幕分裂揭示内容', prompt: 'Split the screen vertically, halves sliding apart to reveal content, 0.7s.', tags: ['分屏', '揭示', '滑动'] },
  { id: 146, name: '滚动遮罩', nameEn: 'Scroll Mask', meaning: '随滚动逐渐揭示的遮罩', prompt: 'Reveal the image through a mask that expands with scroll, smooth.', tags: ['滚动', '遮罩', '揭示'] },
  { id: 147, name: '页面剥离', nameEn: 'Page Peel', meaning: '页面像纸一样剥离', prompt: 'Peel the page from the corner, curling up and away, 0.9s.', tags: ['剥离', '卷曲', '页面'] },
  { id: 148, name: '网格级联', nameEn: 'Grid Cascade', meaning: '网格元素依次级联入场', prompt: 'Cascade the grid items in a wave pattern, 0.06s between each, 0.5s duration.', tags: ['网格', '级联', '波浪'] },
  { id: 149, name: '卡片堆叠', nameEn: 'Card Stack', meaning: '卡片像扑克牌一样堆叠展开', prompt: 'Fan the cards out from a stack, each rotating slightly, 0.4s.', tags: ['卡片', '堆叠', '展开'] },
  { id: 150, name: '翻转卡片', nameEn: 'Flip Card', meaning: '卡片翻转展示背面', prompt: 'Flip the card in 3D, showing the back with details, 0.6s.', tags: ['翻转', '3D', '卡片'] },
  { id: 151, name: '缩放聚焦', nameEn: 'Zoom Focus', meaning: '放大聚焦某个区域', prompt: 'Zoom into the product detail, blurring the surroundings, 0.5s.', tags: ['缩放', '聚焦', '细节'] },
  { id: 152, name: '滑动面板', nameEn: 'Slide Panel', meaning: '面板从边缘滑入', prompt: 'Slide the panel in from the bottom, bouncing slightly at the end, 0.5s.', tags: ['滑动', '面板', '弹跳'] },
  { id: 153, name: '粘性元素', nameEn: 'Sticky Element', meaning: '元素在滚动时吸附', prompt: 'Stick the element to the viewport as it passes, then release, 0.3s.', tags: ['粘性', '吸附', '滚动'] },
  { id: 154, name: '进度条', nameEn: 'Progress Bar', meaning: '显示进度的横条', prompt: 'Fill the progress bar from left to right, glowing at the tip, 2s.', tags: ['进度', '横条', '填充'] },
  { id: 155, name: '面包屑导航', nameEn: 'Breadcrumb Trail', meaning: '显示路径的面包屑', prompt: 'Reveal the breadcrumb trail, each item fading in 0.1s apart.', tags: ['导航', '面包屑', '路径'] },
  { id: 156, name: '悬停放大', nameEn: 'Hover Zoom', meaning: '悬停时放大图片', prompt: 'Zoom the image to 1.3x on hover, with a smooth pan to the cursor, 0.4s.', tags: ['悬停', '放大', '图片'] },
  { id: 157, name: '点击波纹', nameEn: 'Click Ripple', meaning: '点击时产生波纹', prompt: 'Emit a ripple from the click point, expanding and fading, 0.6s.', tags: ['点击', '波纹', '反馈'] },
  { id: 158, name: '加载骨架', nameEn: 'Loading Skeleton', meaning: '加载时的占位骨架', prompt: 'Show a skeleton screen with a shimmer, 1.2s loop, until content loads.', tags: ['加载', '骨架', '占位'] },
  { id: 159, name: '错误抖动', nameEn: 'Error Shake', meaning: '错误时元素抖动', prompt: 'Shake the input field horizontally on error, ±8px, 0.4s.', tags: ['错误', '抖动', '反馈'] },
  { id: 160, name: '成功弹跳', nameEn: 'Success Bounce', meaning: '成功时元素弹跳', prompt: 'Bounce the checkmark in with a spring, 0.5s, overshooting slightly.', tags: ['成功', '弹跳', '反馈'] },
  { id: 161, name: '下拉刷新', nameEn: 'Pull Refresh', meaning: '下拉刷新动画', prompt: 'Pull down to refresh — the spinner rotates while pulling, releases on threshold.', tags: ['刷新', '下拉', '加载'] },
  { id: 162, name: '无限滚动', nameEn: 'Infinite Scroll', meaning: '滚动到底部自动加载', prompt: 'Load more content as the user approaches the bottom, fading in new items.', tags: ['滚动', '加载', '无限'] },
  { id: 163, name: '视差卡片', nameEn: 'Parallax Card', meaning: '卡片在滚动时产生视差', prompt: 'Parallax the card — image moves slower than the text, creating depth.', tags: ['视差', '卡片', '滚动'] },
  { id: 164, name: '文字模糊', nameEn: 'Text Blur', meaning: '文字从模糊到清晰', prompt: 'Blur in the text from 8px to sharp, fading in simultaneously, 0.8s.', tags: ['文字', '模糊', '清晰'] },
  { id: 165, name: '背景模糊', nameEn: 'Backdrop Blur', meaning: '背景模糊突出前景', prompt: 'Blur the backdrop and darken it, bringing the modal into focus, 0.3s.', tags: ['背景', '模糊', '前景'] },
  { id: 166, name: '旋转进入', nameEn: 'Rotate In', meaning: '元素旋转着进入', prompt: 'Rotate the element in from 180° to 0°, scaling up simultaneously, 0.6s.', tags: ['旋转', '入场', '缩放'] },
  { id: 167, name: '路径揭示', nameEn: 'Path Reveal', meaning: '沿路径揭示内容', prompt: 'Reveal the text along a curved path, each word appearing in sequence.', tags: ['路径', '揭示', '文字'] },
  { id: 168, name: '无缝过渡', nameEn: 'Seamless Transition', meaning: '页面间无缝过渡', prompt: 'Transition between pages seamlessly, sharing elements that morph between states.', tags: ['过渡', '无缝', '页面'] },
];

const camera2Names: MotionName[] = [
  { id: 169, name: '环绕弧线', nameEn: 'Orbit Arc', meaning: '摄影机沿弧线环绕主体', prompt: 'Orbit the camera in a 120° arc around the subject, 4s, smooth.', tags: ['环绕', '弧线', '轨道'] },
  { id: 170, name: '快速变焦', nameEn: 'Snap Zoom', meaning: '快速变焦推进', prompt: 'Snap zoom in 0.2s, hold for 1s, then snap zoom out.', tags: ['变焦', '快速', '冲击'] },
  { id: 171, name: '匹配切换', nameEn: 'Match Cut', meaning: '利用相似性匹配切换', prompt: 'Match cut from the sun to the clock, same position and size, instant.', tags: ['匹配', '切换', '剪辑'] },
  { id: 172, name: '镜头扫掠', nameEn: 'Lens Whisk', meaning: '快速扫过场景', prompt: 'Whisk the camera across the scene, 0.4s, settling on the hero.', tags: ['扫掠', '快速', '摇镜'] },
  { id: 173, name: '倾斜转场', nameEn: 'Tilt Transition', meaning: '通过倾斜镜头转场', prompt: 'Tilt the camera to 90° while panning, transitioning to the next scene.', tags: ['倾斜', '转场', '摇镜'] },
  { id: 174, name: '推轨变焦', nameEn: 'Dolly Zoom', meaning: '推轨与变焦反向进行', prompt: 'Dolly zoom — move the camera back while zooming in, 2s, vertigo effect.', tags: ['推轨', '变焦', '眩晕'] },
  { id: 175, name: '升降旋转', nameEn: 'Crane Rotate', meaning: '边升降边旋转', prompt: 'Crane up while rotating 90°, revealing the scene from a new angle, 4s.', tags: ['升降', '旋转', '复合'] },
  { id: 176, name: '穿越飞行', nameEn: 'Fly Through', meaning: '穿越空间的飞行镜头', prompt: 'Fly through the corridor, accelerating, with motion blur on the sides, 3s.', tags: ['穿越', '飞行', '速度'] },
  { id: 177, name: '定格环绕', nameEn: 'Freeze Orbit', meaning: '环绕被冻结的主体', prompt: 'Freeze the action, orbit 360° around the subject over 5s, resume.', tags: ['定格', '环绕', '时间'] },
  { id: 178, name: '低角仰拍', nameEn: 'Low Angle Up', meaning: '从低处向上仰拍', prompt: 'Start at ground level, tilt up to the subject, emphasizing height, 2s.', tags: ['仰拍', '低角', '高度'] },
  { id: 179, name: '高角俯拍', nameEn: 'High Angle Down', meaning: '从高处向下俯拍', prompt: 'Descend from a high angle to eye level, revealing the scene, 3s.', tags: ['俯拍', '高角', '揭示'] },
  { id: 180, name: '过肩推进', nameEn: 'OTS Push', meaning: '过肩镜头向前推进', prompt: 'Over-the-shoulder shot, slowly pushing in toward the subject, 4s.', tags: ['过肩', '推进', '对话'] },
  { id: 181, name: '主观镜头', nameEn: 'POV Shot', meaning: '模拟人物视角', prompt: 'POV shot — the camera moves as if through the character\'s eyes, handheld.', tags: ['主观', '视角', '手持'] },
  { id: 182, name: '追踪对焦', nameEn: 'Tracking Focus', meaning: '焦点随主体移动', prompt: 'Track the subject with the focus, keeping them sharp while the background shifts.', tags: ['追踪', '对焦', '移动'] },
  { id: 183, name: '逆向运动', nameEn: 'Reverse Motion', meaning: '镜头运动方向突然反转', prompt: 'Dolly in fast, then suddenly reverse to dolly out, 0.5s each way.', tags: ['逆向', '反转', '速度'] },
  { id: 184, name: '变速运动', nameEn: 'Speed Ramp', meaning: '镜头速度突然变化', prompt: 'Start slow, ramp up to fast, then slow again, 3s total.', tags: ['变速', '速度', '节奏'] },
  { id: 185, name: '晃动转场', nameEn: 'Shake Transition', meaning: '通过剧烈晃动转场', prompt: 'Shake the camera violently, then cut to the new scene, 0.3s.', tags: ['晃动', '转场', '剧烈'] },
  { id: 186, name: '变焦拉远', nameEn: 'Zoom Out', meaning: '变焦拉远揭示环境', prompt: 'Zoom out from the detail to reveal the full scene, 2s, smooth.', tags: ['变焦', '拉远', '揭示'] },
  { id: 187, name: '镜头推进', nameEn: 'Push In', meaning: '镜头向主体推进', prompt: 'Push in toward the subject, accelerating slightly, 2s.', tags: ['推进', '加速', '强调'] },
  { id: 188, name: '镜头拉远', nameEn: 'Pull Out', meaning: '镜头从主体拉远', prompt: 'Pull out from the close-up to a wide shot, revealing context, 3s.', tags: ['拉远', '揭示', '环境'] },
  { id: 189, name: '平移揭示', nameEn: 'Pan Reveal', meaning: '通过平移揭示场景', prompt: 'Pan right to reveal the scene progressively, 3s, smooth.', tags: ['平移', '揭示', '场景'] },
  { id: 190, name: '倾斜强调', nameEn: 'Tilt Emphasis', meaning: '通过倾斜强调动感', prompt: 'Tilt to 20° as the action peaks, then straighten, 0.6s total.', tags: ['倾斜', '强调', '动感'] },
  { id: 191, name: '旋转揭示', nameEn: 'Rotate Reveal', meaning: '通过旋转揭示新场景', prompt: 'Rotate the camera 180° while pulling back, revealing the scene, 2.5s.', tags: ['旋转', '揭示', '拉远'] },
  { id: 192, name: '终极长镜', nameEn: 'Oner Take', meaning: '一镜到底的连续运动', prompt: 'One continuous shot — dolly in, pan left, tilt up, crane down, 8s total.', tags: ['长镜', '连续', '复合'] },
];

export const packs: Pack[] = [
  {
    id: 'motion',
    index: '001–024',
    name: '动效运动',
    subtitle: 'Motion',
    description: '深海军蓝底，配四种颜色。元素的入场、强调、退场与循环运动。',
    longDescription: '涵盖 UI 与视频中元素运动的基础语言：遮罩揭示、打字机、交错上升、弹性缩放等。每个名称都配有动态示例、含义说明与可直接使用的提示词，帮助你精确描述想要的运动效果。',
    count: 24,
    color: '#5eb1ff',
    accent: '#ff6b5e',
    bgColor: '#0f1b3d',
    tags: ['入场', '强调', '退场', '循环', '转场'],
    examples: ['Mask Reveal', 'Typewriter', 'Stagger Rise', 'Elastic Scale'],
    names: motionNames,
  },
  {
    id: 'camera',
    index: '025–048',
    name: '镜头运动与转场',
    subtitle: 'Camera',
    description: '浅灰底，配一种蓝色。推轨、摇镜、变焦与镜头切换。',
    longDescription: '从缓慢推轨到急速变焦，从匹配剪辑到一镜到底。这 24 个名称覆盖了电影与视频制作中最常用的镜头语言，让你能像导演一样向 AI 描述镜头运动。',
    count: 24,
    color: '#4a9eff',
    accent: '#4a9eff',
    bgColor: '#f0f0f0',
    tags: ['推轨', '摇镜', '变焦', '平移', '转场'],
    examples: ['Slow Dolly In', 'Crane Up', 'Whip Pan', 'Rack Focus'],
    names: cameraNames,
  },
  {
    id: 'ui',
    index: '049–072',
    name: 'UI 组件名称',
    subtitle: 'UI',
    description: '暖调米白底，配黑色和一种蓝色，由光标让各部件动起来。',
    longDescription: '磁吸按钮、变形菜单、卡片翻转、标签滑动……这 24 个名称覆盖了现代 UI 交互的核心模式。无论是设计稿还是前端实现，都能用这些名称精确沟通交互意图。',
    count: 24,
    color: '#1a1a2e',
    accent: '#4a9eff',
    bgColor: '#faf7f2',
    tags: ['按钮', '菜单', '卡片', '导航', '反馈'],
    examples: ['Magnetic Button', 'Morphing Menu', 'Card Flip', 'Tab Slide'],
    names: uiNames,
  },
  {
    id: 'lp',
    index: '073–096',
    name: '落地页与网页效果',
    subtitle: 'Landing Page',
    description: '淡灰色桌面上画出白色浏览器窗口，以朱红色作点缀。',
    longDescription: '滚动揭示、视差层叠、吸附堆叠、首屏缩放……这 24 个名称覆盖了落地页与网页中最吸引人的滚动与交互效果，让你的页面在浏览器中真正动起来。',
    count: 24,
    color: '#ff6b5e',
    accent: '#ff6b5e',
    bgColor: '#f5f5f5',
    tags: ['滚动', '视差', '揭示', '吸附', '布局'],
    examples: ['Scroll Reveal', 'Parallax Layers', 'Sticky Stack', 'Hero Zoom'],
    names: lpNames,
  },
  {
    id: 'photo',
    index: '097–120',
    name: '照片观感与灯光风格',
    subtitle: 'Photo',
    description: '每张卡片都按其自身场景的颜色绘制，效果淡入再淡出。',
    longDescription: '黄金时刻、霓虹黑色、柔光漫射、硬光阴影……这 24 个名称覆盖了摄影与视觉创作中最重要的灯光与色调风格，让你能精确描述想要的画面观感。',
    count: 24,
    color: '#ffb454',
    accent: '#4ecdc4',
    bgColor: '#1a1a1a',
    tags: ['灯光', '色调', '氛围', '胶片', '观感'],
    examples: ['Golden Hour', 'Neon Noir', 'Soft Diffusion', 'Hard Shadow'],
    names: photoNames,
  },
  {
    id: 'motion2',
    index: '121–144',
    name: '动效运动・第二弹',
    subtitle: 'Motion 2',
    description: '深海军蓝底，配四种颜色。更多元的动效与节奏变化。',
    longDescription: '弹簧过冲、路径描绘、层叠漂移、循环回声……第二弹在基础动效之上，加入了更多物理感、节奏变化与复合运动，适合更精细的动效需求。',
    count: 24,
    color: '#4ecdc4',
    accent: '#ffb454',
    bgColor: '#0f1b3d',
    tags: ['节奏', '弹性', '路径', '叠加', '循环'],
    examples: ['Spring Overshoot', 'Path Draw', 'Layered Drift', 'Loop Echo'],
    names: motion2Names,
  },
  {
    id: 'lp2',
    index: '145–168',
    name: '落地页与网页效果・第二弹',
    subtitle: 'Landing Page 2',
    description: '淡灰色桌面上的白色浏览器窗口，更多页面级效果。',
    longDescription: '分屏揭示、滚动遮罩、页面剥离、网格级联……第二弹聚焦于更复杂的页面级效果与滚动交互，适合打造令人印象深刻的网页体验。',
    count: 24,
    color: '#5eb1ff',
    accent: '#ff6b5e',
    bgColor: '#f5f5f5',
    tags: ['页面', '滚动', '分屏', '遮罩', '布局'],
    examples: ['Split Screen', 'Scroll Mask', 'Page Peel', 'Grid Cascade'],
    names: lp2Names,
  },
  {
    id: 'camera2',
    index: '169–192',
    name: '镜头运动与转场・第二弹',
    subtitle: 'Camera 2',
    description: '浅灰底，配一种蓝色。更丰富的镜头语言与转场。',
    longDescription: '环绕弧线、快速变焦、匹配切换、镜头扫掠……第二弹在基础镜头语言之上，加入了更多复合运动、速度变化与创意转场，适合更专业的视频制作。',
    count: 24,
    color: '#4a9eff',
    accent: '#4a9eff',
    bgColor: '#f0f0f0',
    tags: ['镜头', '转场', '速度', '方向', '焦点'],
    examples: ['Orbit Arc', 'Snap Zoom', 'Match Cut', 'Lens Whisk'],
    names: camera2Names,
  },
];

export interface UsageMethod {
  number: number;
  title: string;
  description: string;
  steps: string[];
  code?: string;
  icon: string;
}

export const usageMethods: UsageMethod[] = [
  {
    number: 1,
    title: '打开名称库，挑选后发送给 AI',
    description:
      '在 Claude Code 或 Codex 中安装 motion-prompt 技能后，只要提出请求即可打开本图库。你不需要记住名称或编号。',
    steps: [
      '向你的 AI 说：Open the motion-prompt library.',
      '图库会在浏览器中打开。在想要的示例上按「Pick」，数量不限。',
      '按「Send to AI」，你的选择就会发送给 AI。',
      '回到它那里，说明你想做什么。',
    ],
    code: 'npx skills add showheyohtaki/motion-prompt',
    icon: 'library',
  },
  {
    number: 2,
    title: '查一下名称，然后告诉你的 AI',
    description:
      '打开一份列表或图库，找到你想做的东西，在提示词中使用它的名称。再补充时长、强度和运动方式，结果会更接近你的设想。',
    steps: [
      '在列表中查找想要的名称或编号。',
      '在提示词中使用该名称。',
      '补充时长、强度和运动方式。',
      '发送给编程 AI、视频生成模型，或写进需求简报。',
    ],
    code: 'Bring the title in with a mask reveal from below, 0.6 s.',
    icon: 'search',
  },
  {
    number: 3,
    title: '为你自己的领域或语言制作一个版本',
    description:
      'make-your-own/ 提供了可直接复制粘贴给编程 AI 的提示词、渲染视频的脚本，以及两个已完成示例。',
    steps: [
      '选择适合你目标的提示词模板。',
      '把提示词交给编程 AI。',
      'AI 会为你生成同类的名称示例。',
      '领域不限于视频：灯光、声音、UI、摄影、烹饪、建筑均可。',
    ],
    icon: 'sparkles',
  },
];

export interface SkillCommand {
  command: string;
  description: string;
}

export const skillCommands: SkillCommand[] = [
  { command: 'pick / pick --pack camera', description: '打开图库，打印随「Send to AI」发来的内容' },
  { command: 'search typewriter text', description: '为一个场景查找元素（英文或日文关键词）' },
  { command: 'list / list --pack motion', description: '所有分组的概览，或逐个元素列出某个分组' },
  { command: 'get 12 #045', description: '打印这些编号的规格，然后打印代码（一次最多 8 个）' },
  { command: 'kit motion', description: '某一分组的共享代码' },
  { command: 'prompt 12', description: '某个元素的可复制提示词' },
  { command: 'info', description: '显示数据来源、数据量以及缓存位置' },
];
