---
title: 股Morning：AI 台股分析平台
summary: 每天早上幫你整理台股重點，用 AI 分析個股，還能直接在 LINE 上查。
category: AI
tech: [Next.js, FastAPI, PostgreSQL, Redis, APScheduler, LINE Bot]
status: 上線中
order: 1
featured: true
color: "#c0392b"
cover: /covers/stockmorning.jpg
gallery:
  - src: /covers/stockmorning-market.jpg
    caption: 大盤總覽：台股、亞股、歐股、美股指數一頁看完
  - src: /covers/stockmorning-line.jpg
    caption: LINE 免費通知：開盤前、盤中、收盤自動推播
demo: https://twstockcalc.us.kg
---

## 為什麼做

自己有在看台股，每天早上要開好幾個網站、App 才能拼湊出盤前該注意的事。我想要一個地方，打開就能看到今天的重點，想深入某一檔股票也能馬上問 AI。

## 我做了什麼

這是一個從前端到後端都由我自己完成的全端專案：

- **後端**：用 FastAPI 寫 API，PostgreSQL 存資料，Redis 做快取，APScheduler 排程每天自動抓資料、產生分析。
- **前端**：Next.js，視覺上走「財經報紙」風格，讓資訊讀起來像在翻早報。
- **LINE 官方帳號整合**：使用者可以直接在 LINE 上查詢。為了控制在 LINE 免費額度內，設計上以 Reply API 為主、少用 Push。
- **AI 分析師工作室**：正在做的新功能，讓幾個各司其職的 AI agent（盯盤、技術面、新聞、市場情緒、風險審核、總分析師）分工產生報告。

早期做過一個台股報酬計算機「股市通」，後來把它的功能整併進股Morning。

## 目前成果

- 已上線，有一小群使用者在測試。
- 功能用開關控制，可以隨時隱藏或恢復，方便邊上線邊調整。
- 規劃分級訂閱的付費方案。

## 學到的事

這是我第一個真的要「營運」的產品，除了寫程式，還要考慮 API 成本、免費額度、使用者會怎麼用，這些都是做課堂作業時不會遇到的。
