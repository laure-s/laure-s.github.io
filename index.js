var c_bool=0;
var m_bool=0;
var y_bool=0;
var r_bool=0;
var g_bool=0;
var b_bool=0;

$(document).ready(function(){
  $(".fri22_menu_item").click(change_c);
  $(".sat23_menu_item").click(change_m);
  $(".sun24_menu_item").click(change_y);
  $(".fri29_menu_item").click(change_r);
  $(".sat30_menu_item").click(change_g);
  $(".sun31_menu_item").click(change_b);
});


function change_c(){
  if(c_bool==0){
    $(".c_text").css("color","cyan");
    c_bool=1;
  }else{
    $(".c_text").css("color","white");
    $("c_text").hover(function(){
      $(this).css("color", "cyan");
      }, function(){
      $(this).css("color", "white");
    });
    c_bool=0;
  }
}
function change_m(){
  if(m_bool==0){
    $(".m_text").css("color","magenta");
    m_bool=1;
  }else{
    $(".m_text").css("color","white");
    $("m_text").hover(function(){
      $(this).css("color", "magenta");
      }, function(){
      $(this).css("color", "white");
    });
    m_bool=0;
  }
}
function change_y(){
  if(y_bool==0){
    $(".y_text").css("color","yellow");
    y_bool=1;
  }else{
    $(".y_text").css("color","white");
    $("y_text").hover(function(){
      $(this).css("color", "yellow");
      }, function(){
      $(this).css("color", "white");
    });
    y_bool=0;
  }
}
function change_r(){
  if(r_bool==0){
    $(".r_text").css("color","red");
    r_bool=1;
  }else{
    $(".r_text").css("color","white");
    $("r_text").hover(function(){
      $(this).css("color", "red");
      }, function(){
      $(this).css("color", "white");
    });
    r_bool=0;
  }
}
function change_g(){
  if(g_bool==0){
    $(".g_text").css("color","rgb(0,255,0)");
    g_bool=1;
  }else{
    $(".g_text").css("color","white");
    $("g_text").hover(function(){
      $(this).css("color", "rgb(0,255,0)");
      }, function(){
      $(this).css("color", "white");
    });
    g_bool=0;
  }
}
function change_b(){
  if(b_bool==0){
    $(".b_text").css("color","rgb(0,0,255)");
    b_bool=1;
  }else{
    $(".b_text").css("color","white");
    $("b_text").hover(function(){
      $(this).css("color", "rgb(0,0,255)");
      }, function(){
      $(this).css("color", "white");
    });
    b_bool=0;
  }
}