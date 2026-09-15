# seireki-wareki

西暦と和暦(元号)を相互に変換するWebアプリケーション。

## プロジェクト概要

- 目的: 西暦⇔和暦の変換機能を提供する
- 技術スタック: React + Vite
- リポジトリ: https://github.com/nchuujou-alt/seireki-wareki
- 公開URL(GitHub Pages): https://nchuujou-alt.github.io/seireki-wareki/
  - `main`ブランチへのpushで `.github/workflows/deploy.yml` が自動ビルド・デプロイする
  - `vite.config.js` の `base` はリポジトリ名(`/seireki-wareki/`)に合わせてあるため、リポジトリ名を変更する場合は要修正

## Git運用ルール

- **コードを変更するたびに、コミットしてGitHubにプッシュすること。** 変更を手元に留めず、都度リモートへ反映する。
- コミットメッセージは変更内容が分かるように簡潔に書く。
- force push や履歴を書き換える操作(`git reset --hard`、`git push --force` など)は行わない。ユーザーから明示的な指示がある場合のみ検討する。
- コミット前に `git status` / `git diff` で変更内容を確認し、意図しないファイル(秘密情報や不要なファイル)が含まれていないか確認する。
- リモートリポジトリ未接続の場合は、先にユーザーへ接続方法を確認する。

## 開発時の注意

- このファイルはプロジェクトの成長に合わせて随時更新すること(技術スタック、ディレクトリ構成、コマンド一覧など)。
