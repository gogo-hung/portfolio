// 教學經驗頁的內容都在這裡改
export const teaching = {
  org: '猿創力',
  orgNote: '兒童程式教育',
  role: '程式講師',
  period: '2025 – 至今',
  audience: '國小低年級',
  formats: ['小班制', '外派到學校上課', '線上課程'],
  summary:
    '在猿創力擔任兒童程式講師，帶國小低年級的孩子從積木程式一路接觸到文字程式，用他們熟悉的遊戲和動畫當作入門的切入點。',

  // 教學內容：每個工具一張卡片
  subjects: [
    {
      name: 'Scratch',
      desc: '用拖拉積木的方式做出動畫和小遊戲，認識順序、重複、條件判斷這些程式最基本的概念。',
    },
    {
      name: 'Minecraft',
      desc: '在孩子本來就喜歡的遊戲世界裡學程式，讓角色照著自己寫的指令建造、移動，把抽象的邏輯變得看得見。',
    },
    {
      name: 'Python',
      desc: '從積木過渡到真正的文字程式，練習打出指令、讀懂錯誤訊息，為之後學更完整的程式打底。',
    },
  ],

  // 上課形式的說明
  formatDetails: [
    { name: '小班制', desc: '在教室小班上課，可以照顧到每個孩子的進度。' },
    { name: '外派到學校上課', desc: '到合作的學校帶程式課程。' },
    { name: '線上課程', desc: '透過線上方式授課，孩子在家也能上課。' },
  ],

  // 教學照片（選填）：圖片放在 public/teaching/，有拍到學生的臉請先模糊處理
  // 例如：{ src: '/teaching/class-1.jpg', caption: 'Scratch 課堂' }
  gallery: [] as { src: string; caption?: string }[],
};
