---
title: Wi-Care：非接觸式長者跌倒偵測
summary: 用 Wi-Fi 訊號偵測長輩跌倒，不用戴任何裝置、也不用裝攝影機。
category: IoT
tech: [ESP32-S3, Wi-Fi CSI, LSTM, Supabase, LINE Bot, Web Dashboard]
status: 開發中
order: 2
featured: true
color: "#16a085"
cover: /covers/wi-care.jpg
demo: https://bright-cucurucho-8282c4.netlify.app/
gallery:
  - src: /covers/wi-care-dashboard.jpg
    caption: 今日概況：待處理警報、高風險住民、感測器在線狀態一眼看完，警報依緊急程度自動排序
  - src: /covers/wi-care-monitor.jpg
    caption: 即時監控面板：CSI 移動強度波形、HAR 活動辨識，搭配房間平面圖顯示 ESP32 感測器位置
  - src: /covers/wi-care-alerts.jpg
    caption: 警報通知：護理人員回饋「確認／誤報」，系統依誤報率給出靈敏度調整建議
  - src: /covers/wi-care-report.jpg
    caption: 管理報表：每日跌倒事件統計與 30 天活動量趨勢，可匯出 CSV／JSON
---

## 為什麼做

長輩跌倒是長照中很常見的風險，但現有方案不是要戴手環（常常忘記戴），就是要裝攝影機（隱私問題）。我們想做一個「不用戴、不用拍」的偵測方式。

## 運作方式

Wi-Fi 訊號在房間中傳遞時，會因為人的動作而產生變化。Wi-Care 利用 ESP32-S3 收集 Wi-Fi 的 CSI（Channel State Information）資料，再用 LSTM 模型辨識姿態與行為，判斷是不是發生跌倒。

## 系統組成

- **感測端**：ESP32 / ESP32-S3 模組收集 CSI 訊號
- **AI 模型**：LSTM 辨識行為與姿態
- **網頁監控平台**：依角色區分權限，醫護人員、家屬、管理者各自看到需要的資訊
  - 今日概況：警報分診佇列，依事件類型、信心度、發生時間自動排序
  - 即時監控：CSI 移動強度波形、活動辨識、房間平面圖與感測器位置
  - 警報回饋：護理人員標記「確認／誤報」，系統依誤報率建議調整靈敏度，降低警報疲勞
  - 報表分析：跌倒事件統計、活動量趨勢，可匯出 CSV／JSON
- **LINE Bot 通知**：偵測到異常時即時推播

## 目前進度

這是我的畢業專題，也是參加 NIICC 等競賽的作品。網頁平台已經可以線上體驗：示範模式使用模擬資料，連接 Supabase 和感測硬體後就會顯示真實資料。硬體與模型部分持續開發中。

## 學到的事

這個專案橫跨硬體、訊號處理、機器學習到網頁，讓我第一次完整經歷從感測器資料到使用者介面的整條流程，也更在意「科技輔助照護」時的隱私設計。
