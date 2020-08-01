$(document).ready(function(){

  
  clear_cart();

   $("#weekend1_cart_amount").bind("input",update_weekend1);
   $("#weekend2_cart_amount").bind("input",update_weekend2);
   $("#day1_cart_amount").bind("input",update_day1);
   $("#day2_cart_amount").bind("input",update_day2);
   $("#day3_cart_amount").bind("input",update_day3);
   $("#day4_cart_amount").bind("input",update_day4);
   $("#day5_cart_amount").bind("input",update_day5);
   $("#day6_cart_amount").bind("input",update_day6);



  $(".black_ticket").click(add_weekend1);
  $(".white_ticket").click(add_weekend2);
  $(".day1_ticket").click(add_day1);
  $(".day2_ticket").click(add_day2);
  $(".day3_ticket").click(add_day3);
  $(".day4_ticket").click(add_day4);
  $(".day5_ticket").click(add_day5);
  $(".day6_ticket").click(add_day6);



  $(".overlay_ticket_item").hide();
  $(".ticket_item").hover(function(){
      $(this).find(".overlay_ticket_item").show();
    }, function(){
       $(this).find(".overlay_ticket_item").hide();
    });

});

var total_amount=0;
var weekend1_amount =0;
var weekend2_amount=0;
var day1_amount=0;
var day2_amount=0;
var day3_amount=0;
var day4_amount=0;
var day5_amount=0;
var day6_amount=0;

var day_price =50;
var weekend_price=135;
var cur_all;
var cur_weekend_1;
var cur_weekend_2;
var cur_day;


function clear_cart(){
      $(".weekend1_cart_amount").css('display', 'none');
      $(".weekend2_cart_amount").css('display', 'none');
      $(".day1_cart_amount").css('display', 'none');
      $(".day2_cart_amount").css('display', 'none');
      $(".day3_cart_amount").css('display', 'none');
      $(".day4_cart_amount").css('display', 'none');
      $(".day5_cart_amount").css('display', 'none');
      $(".day6_cart_amount").css('display', 'none');

}


function update_total(){
  total_amount = (weekend1_amount*weekend_price)+(weekend2_amount*weekend_price)+((day1_amount+day2_amount+day3_amount+day4_amount+day5_amount+day6_amount)*day_price);
   $(".total_amount").text(total_amount);
  //total amount update calcuate everything
}


//needs to be called when sock_item is clicked
function add_weekend1(){
  weekend1_amount+=1;
  if ($(".weekend1_cart_amount").css('display') == 'block'){
    $(".weekend1_cart_amount").val(weekend1_amount);
  }
  else{
    $(".weekend1_cart_amount").val(weekend1_amount);  
    $(".weekend1_cart_amount").css('display', 'block');
  }
      update_total();
}
function add_weekend2(){
  weekend2_amount+=1;
  if ($(".weekend2_cart_amount").css('display') == 'block'){
    $(".weekend2_cart_amount").val(weekend2_amount);
  }
  else{
    $(".weekend2_cart_amount").val(weekend2_amount);
    $(".weekend2_cart_amount").css('display', 'block');
  }
      update_total();
}

function add_day1(){
  day1_amount+=1;
  if ($(".day1_cart_amount").css('display') == 'block'){
    $(".day1_cart_amount").val(day1_amount);
  }
  else{
    $(".day1_cart_amount").val(day1_amount);
    $(".day1_cart_amount").css('display', 'block');
  }
      update_total();
}
function add_day2(){
  day2_amount+=1;
  if ($(".day2_cart_amount").css('display') == 'block'){
    $(".day2_cart_amount").val(day2_amount);
  }
  else{
    $(".day2_cart_amount").val(day2_amount);
    $(".day2_cart_amount").css('display', 'block');
  }
      update_total();
}
function add_day3(){
  day3_amount+=1;
  if ($(".day3_cart_amount").css('display') == 'block'){
    $(".day3_cart_amount").val(day3_amount);
  }
  else{
    $(".day3_cart_amount").val(day3_amount);
    $(".day3_cart_amount").css('display', 'block');
  }
      update_total();
}


function add_day4(){
  day4_amount+=1;
  if ($(".day4_cart_amount").css('display') == 'block'){
    $(".day4_cart_amount").val(day4_amount);
  }
  else{
    $(".day4_cart_amount").val(day4_amount);
    $(".day4_cart_amount").css('display', 'block');
  }
      update_total();
}
function add_day5(){
  day5_amount+=1;
  if ($(".day5_cart_amount").css('display') == 'block'){
    $(".day5_cart_amount").val(day5_amount);
  }
  else{
    $(".day5_cart_amount").val(day5_amount);
    $(".day5_cart_amount").css('display', 'block');
  }
      update_total();
}
function add_day6(){
  day6_amount+=1;
  if ($(".day6_cart_amount").css('display') == 'block'){
    $(".day6_cart_amount").val(day6_amount);
  }
  else{
    $(".day6_cart_amount").val(day6_amount);
    $(".day6_cart_amount").css('display', 'block');
  }
      update_total();
}


function update_weekend1(){
    weekend1_amount =  Number($("#weekend1_cart_amount").val());
    if (weekend1_amount == 0){
      $(".weekend1_cart_amount").css('display','none');
    }
    update_total();
}
function update_weekend2(){
    weekend2_amount =  Number($("#weekend2_cart_amount").val());
    if (weekend2_amount == 0){
      $(".weekend2_cart_amount").css('display','none');
    }
    update_total();
}
function update_day1(){
    day1_amount =  Number($("#day1_cart_amount").val());
    if (day1_amount == 0){
      $(".day1_cart_amount").css('display','none');
    }
    update_total();
}
function update_day2(){
    day2_amount =  Number($("#day2_cart_amount").val());
    if (day2_amount == 0){
      $(".day2_cart_amount").css('display','none');
    }
    update_total();
}
function update_day3(){
    day3_amount =  Number($("#day3_cart_amount").val());
     if (day3_amount == 0){
      $(".day3_cart_amount").css('display','none');
    }
    update_total();
}
function update_day4(){
    day4_amount =  Number($("#day4_cart_amount").val());
     if (day4_amount == 0){
      $(".day4_cart_amount").css('display','none');
    }update_total();
}
function update_day5(){
    day5_amount =  Number($("#day5_cart_amount").val());
     if (day5_amount == 0){
      $(".day5_cart_amount").css('display','none');
    }
    update_total();
}
function update_day6(){
    day6_amount =  Number($("#day6_cart_amount").val());
     if (day6_amount == 0){
      $(".day6_cart_amount").css('display','none');
    }
    update_total();
}
