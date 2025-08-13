# 暇つぶしゲームまとめ（GitHub Pages用）

## 構成（静的サイトのデファクト）
```
/
├─ index.html              # ハブ（トップ）
├─ assets/
│  ├─ css/styles.css       # スタイル
│  └─ js/app.js            # ロジック
├─ data/
│  └─ games.js             # ゲーム一覧データ（編集は主にここ）
└─ games/
   ├─ one-second-tap/      # 1秒タップ（単体で動作）
   │  └─ index.html
   └─ cookie/              # クッキー工房（単体で動作）
      └─ index.html
```

## 公開（GitHub Pages）
- リポジトリにアップ → Settings → Pages → Branch: `main` / Folder: `/ (root)` → Save
- 例: https://<ユーザー名>.github.io/<リポ名>/

## 追加方法
- `data/games.js` に `{title,url,desc,tags,cover,addedAt}` を追記
- 新しいゲームは `games/<slug>/index.html` を置く
