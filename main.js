/*global $*/

$(document).ready(function(){
  $(".input").on("input",function(){
    
    let input_text = $(".input").val();
    
    /* 入力内容の取得 */
    let get_input = function(){
      /* tag-listの要素をひとつずつ処理*/
      $(".tag-list").each(function(){
        let tag_text = $(this).text(); 
        
        /* 入力内容と一致したら、boxを表示*/
        if (tag_text.indexOf(input_text) != -1){
          $(this).parent().removeClass("display-none");
        }
      });
    };
    
    /* boxを非表示 */
    if (input_text != ""){
      $(".box").addClass("display-none");
      get_input();
    }else {
      $(".box").removeClass("display-none");
    }
  });
});