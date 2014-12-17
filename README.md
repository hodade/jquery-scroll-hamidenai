jquery-scroll-hamidenai
=================
この機能を適用すると、スクロールイベントが指定領域外に及ぶのを制限できます。
例えば、スクロールが発生するDIVタグやiframe内をマウスでコロコロスクロールして、最下部または最上部に到達後もコロコロし続けても、画面全体がスクロールするのを防ぐことができます。
いまのところIEで動作させることができておりません。すみません。

組み込み方
----------
jQueryと、このプラグインのJavaScriptファイル(scroll-hamidenai.js)を読み込むコードを書きます。

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script type="text/javascript" src="jquery-scroll-hamidenai/scroll-hamidenai.js"></script>



適用方法
-----
スクロールイベントがはみ出してほしくない要素のタグまたはIDまたはクラスを指定して、下記のようにコードを実行してください。

    <script>
    $(document).ready(function(){

        //スクロールはみでないを適用
        $("#hamidenai").scrollHamidenai();

    });
    </script>
    

サンプル
----
http://hodade.adam.ne.jp/jquery-scroll-hamidenai/sample.html


ライセンス
----
MIT

