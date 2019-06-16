$("nav div ul li").click(function(){
 
 $(this).children().addClass('cell-selected')
 .parent().siblings().find('.cell-selected').removeClass('cell-selected');
});
