# 作品集網站

用 Astro 做的部落格式作品集。

## 本機執行

```bash
npm install
npm run dev      # 開發模式 http://localhost:4321
npm run build    # 產生 dist/ 靜態網站
```

## 改自我介紹

編輯 `src/data/profile.ts`（名字、介紹、技能、證照、GitHub、Email）。

## 新增作品

在 `src/content/projects/` 新增一個 `.md` 檔，檔名就是網址（例如 `my-app.md` → `/projects/my-app/`）：

```md
---
title: 作品名稱
summary: 列表上的一句話介紹
category: 網站          # AI / 網站 / IoT / 系統 / 工具
tech: [Next.js, Supabase]
status: 上線中          # 上線中 / 開發中 / 規劃中
order: 10               # 數字越小越前面
featured: false         # true = 精選，排最上面
cover: /covers/my-app.png   # 選填，圖片放 public/covers/
demo: https://...       # 選填
github: https://...     # 選填
---

## 為什麼做
## 我做了什麼
## 成果與學到的事
```

## 刪除／隱藏作品

- 刪除：直接刪掉那個 `.md` 檔
- 暫時隱藏：在 frontmatter 加上 `draft: true`

## 加截圖

文章頁的「作品畫面」可以放多張，點了會放大：

```md
gallery:
  - src: /covers/my-app-1.png
    caption: 首頁
  - src: /covers/my-app-2.png
    caption: 管理後台
```

封面：

圖片放到 `public/covers/`，在作品的 `cover:` 填 `/covers/檔名.png`。
內文也可以插圖：`![說明](/covers/screenshot-1.png)`

## 部署到 Cloudflare Pages

1. 推到 GitHub
2. Cloudflare Pages → 連接這個 repo
3. Build command：`npm run build`，Output directory：`dist`
