;
(function($) {
    //どこでもスクロールはみ出ない
    $.fn.scrollHamidenai = function(options){

        var namespace = '.scrollHamidenai';

        //option
        var defaults = {};
        var setting = $.extend(defaults, options); //merge

        return this.each(function() {
            var obj = $(this);

            //bindするイベント
            var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';

            obj.unbind(namespace);
            obj.on(mousewheelevent+namespace, function(e) {
                //上にスクロール
                if (e.originalEvent.deltaY < 0 || e.originalEvent.wheelDelta > 0) {
                    //最上部まできたらスクロール無効
                    if (obj.scrollTop() == 0) {
                        e.preventDefault();
                    }
                }
                //下にスクロール
                if (e.originalEvent.deltaY > 0 || e.originalEvent.wheelDelta < 0) {
                    //最下部まできたらスクロール無効
                    if (obj.scrollTop() + obj[0].clientHeight >= obj[0].scrollHeight ) {
                        e.preventDefault();
                    }
                }
            });
        });
    };
})(jQuery);
