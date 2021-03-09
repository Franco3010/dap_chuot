var BitmapFont = (function () {
    'use strict';
    var textInput,
        canvasResult,
        ctx,
        bitmapFont,

        onKeyUp = function () {

            console.log('press');
            var value = textInput.val();

            for (var i = 0, length = value.length; i < length; i++) {
                var span = document.createElement('span'),
                    letterData;

                letterData = BitmapFont.DATA[value[i]];

                ctx.drawImage(
                    bitmapFont,
                    letterData.x,
                    letterData.y,
                    letterData.width,
                    letterData.height,
                    letterData.width * i,
                    0,
                    letterData.width,
                    letterData.height
                );
            }

        },
        initialization = function () {
            console.log('init');
            textInput = $('#textInput');
            bitmapFont = document.getElementById('bitmapFont');
            canvasResult = document.getElementById('canvasResult');
            console.log(canvasResult);
            ctx = canvasResult.getContext('2d');

            textInput.on('keyup', onKeyUp);
        };
    return {
        init: initialization
    };
}());

$(function () {
    'use strict';
    BitmapFont.DATA = JSON.parse($("#map").text());
    BitmapFont.init();
});
