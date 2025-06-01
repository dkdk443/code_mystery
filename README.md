# 🧠 CodeMystery

GitHub上のソースコードを読み解く力を鍛える、エンジニア向けのクイズ形式コード読解ツールです。

![screenshot](https://user-images.githubusercontent.com/your-username/code-mystery-demo.png)

---

## 🚀 Features

- 📥 GitHubの URL を入力するとコードを取得
- 🧠 抽出されたコードに対してクイズ形式で出題
- ✅ 正誤判定＋解説つきで楽しく読解力アップ
- 💅 Next.js + Tailwind CSS ベースの軽量SPA

---

## 🔧 Usage

### 1. リポジトリをクローン

```bash
git clone https://github.com/dkdk443/code_mystery.git
cd code-mystery
```


### 2. パッケージをインストール
```bash
npm install
```

### 3. 開発サーバーを起動
```bash
npm run dev
→ http://localhost:3001 にアクセス
```

### 📁 技術スタック

| 技術                                     | 内容                                                          |
| ---------------------------------------- | ------------------------------------------------------------- |
| [Next.js](https://nextjs.org/)           | Reactベースのアプリケーションフレームワーク（App Router使用） |
| [Tailwind CSS](https://tailwindcss.com/) | ユーティリティファーストなCSSフレームワーク                   |
| TypeScript                               | 型安全なJavaScriptで開発効率と保守性を向上                    |
| GitHub Raw URL                           | GitHubのファイルを直接取得するためのエンドポイント            |
| API Routes (Next.js)                     | サーバーサイドでコード取得処理を行うためのエンドポイント実装  |
| React Hooks (`useState`, etc.)           | フロントエンド状態管理、クイズ選択処理などに使用              |
