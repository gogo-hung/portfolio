---
title: 便利工具站
summary: 13 種免費線上小工具：轉盤抽籤、計分板、匯率換算、QR Code……打開就能用。
category: 工具
tech: [HTML, CSS, JavaScript, Cloudflare Pages, SEO]
status: 上線中
order: 3
featured: false
color: "#2f5bea"
cover: /covers/toolbox.jpg
gallery:
  - src: /covers/toolbox-wheel.jpg
    caption: 轉盤抽籤：自訂選項，轉一下決定今天吃什麼
  - src: /covers/toolbox-scoreboard.jpg
    caption: 計分板：點分數就加分，可切換局數、隊名與佈景主題
  - src: /covers/toolbox-currency.jpg
    caption: 匯率換算：串接開源 currency-api，每日自動更新匯率
demo: https://toolbox.us.kg
---

## 為什麼做

平常常需要抽籤決定吃什麼、產生 QR Code、換算匯率，每次都要搜尋、找到滿是廣告的網站。所以我把常用的小工具集中成一個乾淨、好用的繁體中文工具站。

## 功能

目前共有 13 種工具，全部免費、不用註冊：

- **生活娛樂**：轉盤抽籤、骰子模擬器、擲筊、星座配對
- **計算換算**：年齡計算器、BMI 計算器、單位換算、匯率換算
- **實用工具**：計時器／碼表、計分板、密碼產生器、QR Code 產生器、世界時鐘

## 我做了什麼

除了工具本身，這個專案最大的工作是 **SEO 重構**：

- 從單一頁面改成多個 HTML 檔，每個工具都有自己的獨立頁面
- 加入結構化資料（Structured Data）
- 建立 sitemap，讓搜尋引擎更容易收錄

網站部署在 Cloudflare Pages，並放入廣告做被動收入。

## 學到的事

做出網站只是第一步，讓人「搜得到」是另一門學問。這次重構讓我真正理解頁面結構、Meta 資訊和網站架構對搜尋排名的影響。
