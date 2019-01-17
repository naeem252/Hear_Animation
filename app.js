var condition = true;


$('document').ready(function () {
    alert(22)
    $('button').click(function () {
        $('.main-div').toggleClass('anime');
        if (condition) {
            textfun('Stop Animation', 'rgba(0, 253, 97, 0.9)', false, this);
        } else {
            textfun('Start Animation', 'rgba(253, 0, 88, 0.9)', true, this);
        }
    });

});

function textfun(text, color, bolean, oi) {
    $(oi).text(text);
    $(oi).css('background', color);
    condition = bolean;
}
