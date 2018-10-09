$(document).ready(function(){
    $('.slider_patients .point_drag').slider({
        range: "min",
        min: 1,
        max: 12,
        value: 12,
        slide: function(e,u){
            $('.slider_patients .num').text(u.value);
            $('.chart__item_patients span').text(u.value);
        }
    })
    $('.slider_kras .point_drag').slider({
        range: "min",
        min: 1,
        max: 12,
        value: 6,
        slide: function(e,u){
            $('.slider_kras .num').text(u.value);
            $('.chart__item_kras span').text(u.value);
        }
    })
    $('.slider_nras .point_drag').slider({
        range: "min",
        min: 1,
        max: 12,
        value: 3,
        slide: function(e,u){
            $('.slider_nras .num').text(u.value);
            $('.chart__item_nras span').text(u.value);
        }
    })
    $('.slider_patients .num').text($('.slider_patients .point_drag').slider('value'));
    $('.slider_kras .num').text($('.slider_kras .point_drag').slider('value'));
    $('.slider_nras .num').text($('.slider_nras .point_drag').slider('value'));
})
