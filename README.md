jquery-scroll-hamidenai
=================
この機能を適用すると、スクロールイベントが指定領域外に及ぶのを制限できます。

組み込み方
----------
jQueryと、このプラグインのjsを読み込むコードを書きます。

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script type="text/javascript" src="jquery-scroll-hamidenai/scroll-hamidenai.js"></script>



スクロールが発生するHTMLのコードを書きます。
-----
<div id="hamidenai" style="scroll-y:auto;"></div>



適用方法
-----
適用したい要素のタグまたはIDまたはクラスを指定して、下記のようにコードを実行してください。

    <script>
    $(document).ready(function(){
      $("#hamidenai").scrollHamidenai();
    });
    </script>
    

サンプル
----
http://hodade.adam.ne.jp/jquery-scroll-hamidenai/sample.html


ライセンス
----
MIT

