# ベースイメージ
FROM node:18-alpine

# 作業ディレクトリ
WORKDIR /app

# パッケージファイルコピーと依存関係のインストール
COPY package.json package-lock.json* ./
RUN npm install

# 残りのファイルをコピー
COPY . .

# Next.jsのビルド
RUN npm run build

# ポート公開
EXPOSE 3000

# 実行コマンド
CMD ["npm", "run", "start"]
