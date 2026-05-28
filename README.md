# Python Developer Portfolio

🔗 **[瀏覽履歷 / View Portfolio](https://93Alice.github.io/resume/)**

---

以網頁形式呈現的個人技術履歷，包含專案經歷、技能總覽與工作背景，可直接在瀏覽器中翻頁瀏覽，或匯出為 PDF。

---

## Projects

### 台灣食品營養分析系統

使用 FastAPI、PostgreSQL 與 React 開發食品營養分析平台，資料來源為台灣衛福部食藥署官方資料庫。以 NRF 模型為核心設計模組化營養評分引擎，結合 NOVA 加工分級與升糖負荷估算，提供 Top N 排行榜、族群化條件篩選與 AI 營養助手功能，AI 助手採 Stateless 多輪對話架構。

### 台股量化交易系統

整合六大資料來源的全自動化量化研究系統，涵蓋資料清理、ETL Pipeline 到策略回測完整流程。設計五層模組化回測引擎，並以反正規化整合資料表解決回測效能瓶頸。

### 跨平台影音下載器

支援 YouTube、Instagram、Facebook、Threads 四大平台的影片下載工具，提供桌面 GUI 與 LINE Bot 雙介面操作，以三層 Fallback 機制確保 iOS 播放相容性。

### 限時搶購通知機器人

以 Playwright 自動爬取電商限時特價頁面，透過 Telegram Bot 與 Email 雙管道定時推播，全程非同步架構搭配 asyncpg 連線池管理資料存取。

---

## Tech Stack

Python · PostgreSQL · Flask · FastAPI · React · Polars · Pandas · Playwright · LINE Bot SDK · Telegram Bot · FFmpeg · ETL Pipeline · Tkinter · Gemini API
