# scraping-weather-app

## 機能 
毎朝9時に天気をメールに通知  

## 動作環境  
- date-utils: 1.2.21  
- node-cron: 2.0.3  
- node-fetch: 2.6.1  
- nodemailer: 6.4.17  
- sendmail: 1.6.1  

## 環境インストール方法  
- node  
https://nodejs.org/ja にてNodeをインストールする  

## 実行方法  
リポジトリをクローンする　`https://github.com/kenichiiwase/wheather-app.git`  
モジュールをインストールする　`npm install XXXXX`  
メールアドレス、パスワード、APIキーを自身のものに書き換える。  
ターミナルにて`node index.js`を実行し、画面を起動する `http://localhost:3000/`

