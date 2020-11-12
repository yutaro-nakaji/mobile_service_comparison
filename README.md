# アプリ名
#### Mobile Service Simulation
##### （通称：Myモシモシ）
※Mobile Service Simulation
の「Mo」と「Si」から「モシ」が来て、携帯比較がテーマのアプリなので「モシモシ」としました。そして、利用者それぞれがシミュレーション結果を見れるということで、先頭に「My」をつけ、「Myモシモシ」という通称にしました。
<br>
<br>

# アプリケーション概要
携帯通信会社（docomoなど）各社の料金プランと利用サービスの料金を比較できるアプリケーションです。現在、実装中の段階です。
<br>
<br>

# URL
https://mymosimosi.com/
<br>
<br>

# 利用方法
### 【料金プランのシミュレーション実行】
①トップページの「シミュレーションする」ボタンを押下します。
<br>
②料金プランのシミュレーション画面にはiPhoneとiPadがございますが、iPhoneの画面を模した箇所で料金プラン等入力いただき、iPadの画面を模した箇所にシミュレーション結果を表示します。
<br>
③シミュレーション結果詳細ボタンを押下することで、シミュレーション結果の詳細（料金の根拠など）が閲覧できます。なお、ボタンを押下することでシミュレーション結果のデータベースへの保存が完了します。※実装中
<br>

### 【シミュレーション結果を見返す】※実装中
①トップページの「履歴を見る」ボタンを押下します。
<br>
②シミュレーション履歴が一覧で表示されます。シミュレーション結果へのリンクを押下することで、シミュレーション結果詳細が閲覧できます。
<br>

# 目指した課題解決
昨今、携帯電話の料金プランは大変複雑です。それに加え、携帯各社が様々なサービスと連携して料金を割り引くキャンペーンが実施されています。そのため、自身の携帯の利用状況と様々なサービスの利用状況を考慮した場合、結局、どの会社が安いのかを導き出すことは困難を極める状況でした。そうした課題解決をするべく、このアプリケーションを作成しました。
<br>
<br>

# 要件定義（実装機能）
### 料金比較機能
##### 《実装済み》
・通話料金比較機能<br>
・データ通信料金比較機能<br>
・家族割料金比較機能<br>
・光回線セット割料金比較機能<br>

##### 《実装予定》
【優先度：高】<br>
・利用サービス（Netflix/DAZN等）を加味した料金比較機能<br>
【優先度：中】<br>
・料金の根拠（プラン名等）表示機能<br>
【優先度：低】<br>
・利用ECサイトを加味した料金比較機能<br>
・利用クレジットカードを加味した料金比較機能<br>
・利用電子マネー/QRコード決済を加味した料金比較機能<br>
・利用銀行を加味した料金比較機能<br>
・MVNOを含めた料金比較機能<br>

### データ保存機能
##### 《実装予定》
【優先度：高】<br>
・料金比較データ保存機能<br>

### データ詳細表示機能
##### 《実装予定》
【優先度：高】<br>
・料金比較データ詳細表示機能<br>

### アプリ効率化/見易さ向上のための実装
##### 《実装予定》
【優先度：高】<br>
・サイトのhttps化<br>
【優先度：中】<br>
・最安値強調処理<br>
・レスポンシブデザイン<br>
・JSによる動的な表作成<br>
【優先度：低】<br>
・スクレイピングによる比較データ取得<br>
・金額の変化が動的に動く処理<br>
・選択肢の注釈ボタン<br>
・キャリアやサービスのロゴを本物にする<br>
・料金以外の要素についての記述（ex.データ通信費最安だが遅い懸念あり）実装<br>
・シミュレーション結果のSNS連携<br>
・各社の料金詳細ページ実装<br>
・比較結果をもとに契約を行うページへ遷移する<br>
