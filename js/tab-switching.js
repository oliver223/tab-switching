
(function($) { 
  //swclick function
  $.fn.swclick=function(options){
    OrginalOptions = {
      target: 'li',
    };
    var o = jQuery.extend(OrginalOptions, options);
    var swclick = $(this);
    function main_lisShowPrivilegePanel($this) { tus", "show").siblings().removeClass('active').attr("status", "hide");
    }
    function main_lisHidePrivilegePanel($this) {
      $this.removeClass('active').attr("status", "hide");
    }
    swclick.delegate( o.target ,"click", function(){
      var status = "" + $(this).attr("status");
        if (status == "undefined") {
            $(this).attr("status", "hide");
            status = $(this).attr("status");
        }
        if (status == "hide") {
          main_lisShowPrivilegePanel($(this));
        }
        else {
          main_lisHidePrivilegePanel($(this));
        }
    });
    var showBlock = $('.nav-tabs').find('li');
    var a = 1;
    showBlock.each(function(){
      var contentBlock = $('.content-blocks');
      var blocks = contentBlock.find('.blocks');
      $(this).attr('num', a );
      $(this).on('click',function(){
        var nowNum = $(this).attr('num');
        blocks.hide();
        blocks.eq( nowNum - 1 ).show();
      })
      a += 1;
    })
  } 

})(jQuery); 



