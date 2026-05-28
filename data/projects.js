const PROJECTS = [
    {
        id: "taiwan-food-nutrition",
        pageNum: "01",
        accentColor: "#2e7d32",
        accentLight: "#e8f5e9",
        archLineColor: "#2e7d32",
        name: "台灣食品營養分析系統",
        period: "2026/01 – Present",
        desc: "使用 FastAPI、PostgreSQL 與 React 開發全端食品營養分析平台，整合台灣衛福部食藥署（FDA）官方食品資料。以 NRF 評分為核心，結合 NOVA 加工分級與升糖負荷估算，實作 Top N 食品排行榜、族群化條件篩選、即時搜尋與 AI 營養助手。",
        badges: [
            { cls: "bp", icon: "fab fa-python", label: "Python" },
            { cls: "bg", icon: "fas fa-database", label: "PostgreSQL" },
            { cls: "bi", icon: "fas fa-bolt", label: "FastAPI" },
            { cls: "bv", icon: "fab fa-react", label: "React" },
            { cls: "bw", icon: "fas fa-robot", label: "Gemini API" },
        ],
        arch: [
            {
                icon: "fas fa-spider",
                label: "Data Ingest",
                sub: "FDA Crawler / Excel Parser",
            },
            {
                icon: "fas fa-database",
                label: "Database",
                sub: "PostgreSQL",
            },
            {
                icon: "fas fa-calculator",
                label: "Scoring Engine",
                sub: "NRF + NOVA + GL",
            },
            {
                icon: "fab fa-react",
                label: "Frontend",
                sub: "React + Vite",
            },
        ],
        cards: [
            {
                icon: "fas fa-chart-line",
                title: "模組化 NRF 評分引擎",
                desc: "以 NRF（Nutrient Rich Food）模型為核心設計可擴充的營養評分引擎，輸出 0–100 綜合營養分數，並分解各營養素正向／負向貢獻，作為 Top N 排行榜與食品比較的評分基礎。",
            },
            {
                icon: "fas fa-traffic-light",
                title: "營養概覽燈號視覺化",
                desc: "將營養燈號分析拆分為 Lazy-loaded API，僅在使用者切換至「營養概覽」Tab 時才執行計算，降低主查詢負載並提升回應速度。支援族群化 DV/MRV 調整（孕婦、糖尿病等）。",
            },
            {
                icon: "fas fa-trophy",
                title: "Top N 食品排行榜",
                desc: "設計 Top-N 排行查詢 API，支援食品分類與族群條件篩選，從 2,213 筆食品資料中動態產生高分排行榜。",
            },
            {
                icon: "fas fa-robot",
                title: "AI 營養助手",
                desc: "整合 Gemini API，透過 Prompt 設計實作食品推薦與個人化營養建議，採 Stateless 多輪對話架構，由前端維護對話歷史，避免伺服器端 Session 狀態依賴。",
            },
        ],
    },
    {
        id: "taiwan-stock-quant",
        pageNum: "02",
        accentColor: "#3498db",
        accentLight: "#f0f7fb",
        archLineColor: "#3498db",
        name: "台股量化研究系統",
        period: "2025/05 – Present",
        desc: "一個全自動化的台灣股市量化研究系統，涵蓋原始資料清理、寫入資料庫至策略回測的完整流程。有效解決資料破碎、格式不一及回測常見的 Look-Ahead Bias 問題，提升量化分析的精準度與效率。",
        badges: [
            { cls: "bp", icon: "fab fa-python", label: "Python" },
            { cls: "bg", icon: "fas fa-database", label: "PostgreSQL" },
            { cls: "bi", icon: "fas fa-table", label: "Polars" },
            { cls: "bi", icon: "fas fa-plug", label: "connectorx" },
            {
                cls: "bg",
                icon: "fas fa-project-diagram",
                label: "ETL Pipeline",
            },
        ],
        arch: [
            {
                icon: "fas fa-cloud-download-alt",
                label: "Sources",
                sub: "TWSE / MOPS",
            },
            {
                icon: "fas fa-cogs",
                label: "ETL Engine",
                sub: "Crawl / Transform / Load",
            },
            { icon: "fas fa-database", label: "Database", sub: "PostgreSQL" },
            { icon: "fas fa-chart-line", label: "Research", sub: "Backtest" },
        ],
        cards: [
            {
                icon: "fas fa-network-wired",
                title: "六大資料來源自動化 ETL pipeline",
                desc: "整合 TWSE 盤後行情、三大法人、外資持股、月營收、開休市行事曆與財報。實作 Crawler → Transformer → Loader 三層分工，並透過 Schema Registry 進行欄位對應，以應對 API 格式變動。",
            },
            {
                icon: "fas fa-tachometer-alt",
                title: "反正規化整合資料表",
                desc: "使用 LATERAL JOIN 預先計算資料表，讀取流程改用 Polars + connectorx，大幅提升資料讀取與回測運算效能。",
            },
            {
                icon: "fas fa-layer-group",
                title: "五層架構模組化回測引擎",
                desc: "將回測拆分為 FeaturePipeline、SignalPipeline、RiskPipeline、PortfolioConstruction、BacktestEngine 獨立層次，確保各層單一職責，提升系統維護與擴充彈性。",
            },
            {
                icon: "fas fa-chart-pie",
                title: "多層風控管理與完整績效評估",
                desc: "提供個股與投資組合雙層風控。PerformanceAnalyzer 輸出多項指標，並支援 Monte Carlo 模擬方法評估策略在各種市場環境下的穩定性。",
            },
        ],
    },

    {
        id: "video-downloader",
        pageNum: "03",
        accentColor: "#9b59b6",
        accentLight: "#f5eef8",
        archLineColor: "#9b59b6",
        name: "跨平台影音下載器",
        period: "2025/02 – 2025/04",
        desc: "整合四大社群平台（YouTube、Instagram、Facebook、Threads）的影音下載工具。解決各平台格式不一、iOS 編碼不相容的技術痛點，提供桌面 GUI 與 LINE Bot 雙介面操作。",
        badges: [
            { cls: "bp", icon: "fab fa-python", label: "Python" },
            { cls: "bg", icon: "fas fa-video", label: "yt-dlp" },
            { cls: "bi", icon: "fas fa-flask", label: "Flask" },
            { cls: "bg", icon: "fab fa-line", label: "LINE Bot SDK" },
            { cls: "bv", icon: "fas fa-window-maximize", label: "Tkinter" },
        ],
        arch: [
            {
                icon: "fas fa-users-cog",
                label: "Dual Interface",
                sub: "Tkinter / LINE Bot",
            },
            {
                icon: "fas fa-download",
                label: "Downloader",
                sub: "yt-dlp / Requests",
            },
            {
                icon: "fas fa-sitemap",
                label: "Registry",
                sub: "Platform Router",
            },
            {
                icon: "fas fa-file-video",
                label: "Transcode",
                sub: "FFmpeg H.264",
            },
        ],
        cards: [
            {
                icon: "fas fa-bolt",
                title: "快速下載：格式字串 Fallback 鏈",
                desc: "設計三層下載格式 Fallback 機制，自動優先選擇 H.264+AAC (MP4)，若無則降級為其他可用組合，優先確保 iOS 相容播放。",
            },
            {
                icon: "fas fa-sliders-h",
                title: "手動畫質選擇：格式過濾與相容性標記",
                desc: "自動過濾無效格式並對每個畫質標記相容性等級（全平台相容 / iOS 不支援），依解析度排序提供使用者手動畫質選擇。",
            },
            {
                icon: "fas fa-desktop",
                title: "雙介面設計 (GUI + LINE Bot)",
                desc: "設計雙介面架構（Tkinter GUI + LINE Bot），Tkinter 以背景執行緒執行下載並即時更新進度至 UI；Bot 端透過同步機制等待任務完成後以 reply_token 一次性回傳結果。",
            },
            {
                icon: "fas fa-microphone",
                title: "LINE 語音訊息備份功能",
                desc: "自動擷取 LINE 語音，透過 Messaging API 取得原始音訊並以 message_id 建立唯一檔名，使用 FFmpeg 轉碼為 MP3 以便後續保存與管理。",
            },
        ],
    },

    {
        id: "E-Commerce-price-bot",
        pageNum: "04",
        accentColor: "#e67e22",
        accentLight: "#fef5ec",
        archLineColor: "#e67e22",
        name: "限時搶購通知機器人",
        period: "2024/11 – 2025/01",
        desc: "專為電商限時特賣頁面打造的自動化特價監測機器人。解決限時搶購資訊散落、無通知機制的問題。以 Playwright 爬蟲搭配 asyncpg 連線池處理全非同步 I/O，透過 APScheduler 排程每小時爬取、每日自動推播至 Telegram 與 Email 雙管道。",
        badges: [
            { cls: "bp", icon: "fab fa-python", label: "Python" },
            { cls: "br", icon: "fas fa-robot", label: "Playwright" },
            { cls: "bi", icon: "fas fa-paper-plane", label: "Telegram Bot" },
            { cls: "bg", icon: "fas fa-database", label: "asyncpg" },
            { cls: "bw", icon: "fas fa-envelope", label: "Gmail SMTP" },
        ],
        arch: [
            {
                icon: "fas fa-globe",
                label: "Target Site",
                sub: "E-Commerce Site",
            },
            {
                icon: "fas fa-spider",
                label: "Scraper",
                sub: "Playwright Headless",
            },
            {
                icon: "fas fa-server",
                label: "Processing",
                sub: "Diff / Update DB",
            },
            {
                icon: "fab fa-telegram-plane",
                label: "Notification",
                sub: "Bot / Email",
            },
        ],
        cards: [
            {
                icon: "fas fa-magic",
                title: "Playwright 動態網頁自動爬取",
                desc: "使用 Playwright 爬取動態渲染電商頁面；設計新商品分類擷取與資料寫入流程，已存在的商品僅更新價格，透過分層寫入機制避免重複操作與不必要的分類擷取請求。",
            },
            {
                icon: "fas fa-comments",
                title: "Telegram Bot 互動查詢介面",
                desc: "開發 Telegram Bot 指令介面，支援關鍵字分類篩選商品；針對 Telegram 4096 字元限制設計自動分段回覆機制，確保長訊息格式完整。",
            },
            {
                icon: "fas fa-bell",
                title: "每日自動推播與多管道通知",
                desc: "整合 APScheduler 排程每日特價資訊，透過 Telegram 與 Email 雙管道推播；通知模組採 Registry Pattern 架構，確保單一通道失敗不影響整體流程。",
            },
            {
                icon: "fas fa-rocket",
                title: "Async 架構與效能優化",
                desc: "使用 asyncpg 連線池管理資料庫存取，並以記憶體集合進行 O(1) 批次比對，避免 N+1 query 問題，降低資料庫查詢負載。",
            },
        ],
    },
];
