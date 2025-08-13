# 暇つぶしゲーム集 (Hub Games Site)

静的HTMLとJavaScriptだけで動く、暇つぶしゲーム集です。
GitHub Pages で公開されていて、ブラウザだけで手軽に遊べます。

---

## 🎯 プロジェクト概要
- 複数のミニゲームを1つのサイトにまとめて公開
- 完全クライアントサイド（サーバ不要）
- ゲームは個別ページとしても単体で遊べる設計

---

## 🚀 デモサイト
[GitHub Pages](https://akasoo.github.io/hub_games_site/)

---

## 🕹️ 含まれているゲーム
- **1秒タップ**: ちょうど1秒を目指してクリック
- **クッキー工房**: クッキーを作ってポイントを稼ぐ放置ゲーム

---

## 📂 ディレクトリ構造
```
/
├─ index.html              # トップページ
├─ assets/
│  ├─ css/styles.css       # スタイルシート
│  └─ js/app.js            # フロントエンドロジック
├─ data/
│  └─ games.js             # ゲーム一覧データ
└─ games/
   ├─ one-second-tap/      # 1秒タップ
   │  └─ index.html
   └─ cookie/              # クッキー工房
      └─ index.html
```

---

## 💻 ローカルでの動作方法
1. このリポジトリをクローンまたはZIPダウンロード
2. `index.html` をブラウザで開く
   ```bash
   git clone https://github.com/akasoo/hub_games_site.git
   cd hub_games_site
   open index.html  # macOS
   start index.html # Windows
   ```

---

