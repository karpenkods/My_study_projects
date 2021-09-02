$(document).ready(function () {
    $('.editions__open').click(function () {
        $('.item-li').toggleClass('active-li-edition');
        $('.item-li').find($(".editions__check:checked")).addClass("active-li-edition");
    });
 
    $(".item-li").click(function () {
        if (!$(this).find($(".editions__check")).prop("checked")) {
            $(this).removeClass("active-li-edition");
        };
    });
});

$(document).ready(function () {
    $('.editions__open').click(function () {
        $('.editions__accordion-icon').toggleClass('editions__accordion-icon-top');
    });
}); 


