---
title: 股Morning 物聯網裝置
summary: 把股Morning 的資訊帶到實體裝置上，用 ESP32 和 Node-RED 打造的物聯網專題。
category: IoT
tech: [ESP32, Node-RED]
status: 開發中
order: 8
featured: false
color: "#27ae60"
---

## 背景

這是物聯網課程的小組學期專案。我們決定以自己的股Morning 平台為基礎來做，不用從零開始建一整套系統，可以把時間集中在硬體和整合上。

## 構想

用 ESP32 做出實體裝置，透過 Node-RED 串接股Morning 的資料，讓使用者不用打開手機或電腦，也能掌握股市資訊。

## 技術

- **ESP32**：裝置主控板
- **Node-RED**：串接資料流程、處理裝置與後端之間的訊息

## 學到的事

把既有的軟體專案延伸到硬體，讓我學會從「系統整合」的角度看專案：同一份資料可以出現在網頁、LINE，也可以出現在一台實體裝置上。
