$(function(){
    var $tabContent = $('#tabContent div');
    $('#tab li:first-child').addClass('selectedItem');
    $('#tab li').on('click', function(){
        var index = $(this).index();
        $('#tab li').removeClass('selectedItem');
        $(this).addClass('selectedItem');

        $tabContent.css('display','none');
        $tabContent.eq(index).css('display','block');
    });
});