# seireki-wareki

西暦と和暦(元号)を相互に変換するWebアプリケーション。

## プロジェクト概要

- 目的: 西暦⇔和暦の変換機能を提供する
- リポジトリ: https://github.com/nchuujou-alt/seireki-wareki

## デプロイ先

https://nchuujou-alt.github.io/seireki-wareki/

- `main`ブランチへのpushで `.github/workflows/deploy.yml` が自動ビルド・デプロイする
- `vite.config.js` の `base` はリポジトリ名(`/seireki-wareki/`)に合わせてあるため、リポジトリ名を変更する場合は要修正

## 技術スタック

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/) 8(ビルドツール・開発サーバー)
- プレーンCSS(CSS Modulesやライブラリは未使用。コンポーネント単位で `.css` を直接importする)
- ルーティングやグローバル状態管理ライブラリは未導入(単一画面のためReactの標準機能のみで完結させる)
- デプロイ: GitHub Actions → GitHub Pages(`.github/workflows/deploy.yml`)

主なコマンド:

- `npm install` — 依存関係のインストール
- `npm run dev` — 開発サーバー起動
- `npm run build` — 本番ビルド(`dist/`に出力、`.gitignore`対象)
- `npm run preview` — ビルド成果物のプレビュー

## コンポーネント・ファイルの命名規約

- **コンポーネントファイル**: `PascalCase.jsx`(例: `App.jsx`)。1ファイル1コンポーネントを基本とする。
- **ロジック/データ専用モジュール**: JSXを含まないファイルは `camelCase.js`(例: `eras.js`, `population.js`)。役割ごとにファイルを分け、`App.jsx`からはロジックをimportして使う(UIとロジックを混在させない)。
- **コンポーネント名/関数名**: コンポーネントは`PascalCase`(例: `App`)、通常の関数・変数・カスタムフックは`camelCase`(例: `toWareki`, `daysInYear`, `getPopulation`)。
- **CSSファイル**: 対応するコンポーネントと同名(例: `App.jsx` ↔ `App.css`)。グローバルなリセット・全体背景のみ `index.css` に置く。
- **CSSクラス名**: `kebab-case`(例: `.converter-row`, `.days-info`, `.population-info`)。BEMのような厳密な命名規則は採用せず、役割が分かる短い名前を優先する。
- **定数**: 変更されない設定値は`UPPER_SNAKE_CASE`(例: `MIN_YEAR`, `ERAS`)。
- **UI文言**: ユーザー向けテキストは日本語で統一する。

## Git運用ルール

- **コードを変更するたびに、コミットしてGitHubにプッシュすること。** 変更を手元に留めず、都度リモートへ反映する。
- コミットメッセージは変更内容が分かるように簡潔に書く。
- force push や履歴を書き換える操作(`git reset --hard`、`git push --force` など)は行わない。ユーザーから明示的な指示がある場合のみ検討する。
- コミット前に `git status` / `git diff` で変更内容を確認し、意図しないファイル(秘密情報や不要なファイル)が含まれていないか確認する。
- リモートリポジトリ未接続の場合は、先にユーザーへ接続方法を確認する。

## 開発時の注意

- このファイルはプロジェクトの成長に合わせて随時更新すること(技術スタック、ディレクトリ構成、コマンド一覧など)。
