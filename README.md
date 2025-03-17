# 目標：實現生產拍照後數據不落地上傳到指定的企業相簿中
  - 在現代生產管理中，影像數據的快速存取與安全管理至關重要。我們的解決方案透過前後端分離架構（Angular/Node），並搭配雙平台 APP，實現即時、高效、無縫的生產拍照數據上傳與管理。
# 核心功能
  - 數據不落地直傳
    拍攝後的影像數據無需存儲於本地設備，直接加密後上傳至指定企業相簿。
    避免設備存儲空間浪費，確保數據安全性。
    減少數據洩漏風險，符合企業數據合規要求。
  - 跨平台支持
    提供 iOS 和 Android 雙平台 APP，支持各類移動設備的拍攝與上傳需求。
    透過雲端 API 整合，即時同步影像至企業相簿。
    支援不同解析度與格式的影像存儲需求。
  - 前後端分離架構
    - 前端基於 Angular 開發，提供流暢的用戶體驗，並支持多設備適配。
      後端採用 Node.js 搭配高效能 API，確保影像數據的快速傳輸與管理。
    - 採用微服務架構，提高系統擴展性與維護效率。
  - 安全與權限控管
    影像數據傳輸採用加密機制，確保企業機密資訊不外洩。
    權限管理系統確保不同角色的用戶只能訪問對應影像資料。
    支持二階段驗證與 IP 限制，提高系統安全性。
  - 企業相簿整合
    直接上傳至企業內部雲端相簿，如 Google Photos、AWS S3 或企業內部伺服器。
    提供自動分類與標籤功能，提升影像檢索效率。
    支援不同的儲存規則，如按時間自動歸檔、舊資料自動清除等。
  - WEB 平台查看與下載
    企業用戶可透過 WEB 端平台進行影像瀏覽、下載與管理。
    透過友善的使用者界面，提供高效的影像檢索與篩選。
    支持批量下載、影像轉檔、分享鏈接等功能。
  - 標籤查詢與照片分類
    自動為上傳影像添加標籤，根據時間、地點、生產階段等進行分類。
    使用者可透過標籤查詢，快速找到特定的影像資料。
    企業可自訂分類標準，確保符合內部管理需求。
  - 管理者專屬管理功能
    管理者可設定使用者權限，決定哪些用戶可以上傳、下載或刪除影像。
    可手動調整照片分類、編輯標籤，確保影像資料的組織與歸檔更有效率。
    提供審核機制，確保上傳的影像符合企業要求，避免不合規的影像被存儲。
    生成影像使用報表，分析影像存儲與使用情況。
# 應用場景
  - 工廠生產管理：記錄生產過程中的關鍵影像數據，確保品質管控。
  - 物流與倉儲：即時拍攝並上傳貨品照片，提升貨物追蹤能力。
  - 施工現場：現場拍攝即時記錄工程進度，減少紙本存檔負擔。
  - 售後維修服務：技術人員可上傳維修前後的照片，建立維修記錄，提高服務透明度。
  - 企業活動與廠內活動：記錄企業內部活動，如周年慶、尾牙等，方便內部存檔與分享。
  - 產品開發與測試：研發團隊可即時記錄產品測試結果，確保改進過程透明可追溯。
  - 法規與合規稽核：符合 ISO、GMP 及其他標準要求，提供完整的影像存證與審計追蹤功能。
  - 零售與門市管理：可用於門市陳列管理、活動紀錄，確保市場執行一致性。
  - 醫療與健康產業：可用於記錄病患資料、醫療設備管理，提升醫療服務品質。
  - 教育與學術研究：支援學術資料收集、教學活動記錄等，方便教育機構運營。

# 效益
  - 用戶端效益
  - 減少人工操作，簡化影像管理流程。
  - 即時存取影像，提升工作效率與決策速度。
  - 可透過多種設備訪問，確保影像數據隨時可得。
  - 強化數據安全與權限控管，降低資料遺失與洩漏風險。
  - 提升企業內部協作效率，減少影像存取與管理的時間成本。
  - 可拓展至各種業務場景，提高企業數位化管理能力。

透過我們的系統，企業可以實現生產環節的影像數據即時管理，提升工作效率，確保數據安全，並大幅減少人工操作的誤差。此外，透過進階的管理與查詢功能，企業能夠更加有效地組織和利用影像數據，提升決策效率與競爭力。立即體驗，讓數據流轉更高效！

# UI/UX 使用到 materialm-angular-free

# 產品組合分成3個部分
  - 前端應用： https://github.com/canred/mobild_picture_ng
  - 後台API：  https://github.com/canred/mobile_picture_api
  - 手機APP：  https://github.com/canred/mobile_picture

# PreView
  - 前端應用
    - 主頁   
      - ![image](https://github.com/user-attachments/assets/9329675a-599c-4559-9b44-27436b6e8eba)
    - 使用者管理
      - ![image](https://github.com/user-attachments/assets/a31f391a-59f6-42ff-83a3-ed81f751de8e)
      - 人員新增/編輯
        - ![image](https://github.com/user-attachments/assets/7496b78c-3a50-4146-aea0-2dde8eb7c060)
        -  
    - Account編輯
      - ![image](https://github.com/user-attachments/assets/cac139ca-baa2-4a51-b6e1-2bdcc12cce18)




  - 後台API：  
    - ![image](https://github.com/user-attachments/assets/197d4119-20ea-45c1-85b4-ca093c31fa93)

  - 手機APP：  (等待中)

# 啟動方式（開發階段）
  - 前端應用：
  - 後台API：
  - 手機APP：

  
