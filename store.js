$(document).ready(function(){
  $(".shop_all_option").click(show_all);
  $(".socks_option").click(show_socks);
  $(".vinyl_option").click(show_vinyl);
  
  $(".sock_plus").click(add_sock);
  $(".vinyl_plus").click(add_vinyl);
  
  show_all();
  clear_cart();

   $("#socks_cart_amount").bind("input",update_sock);

   // $(".socks_cart_amount").change(update_sock);
      // $("input").change(update_sock);



  $(".overlay_store_item").hide();
  $(".store_item").hover(function(){
      $(this).find(".overlay_store_item").show();
    }, function(){
       $(this).find(".overlay_store_item").hide();
    });

  $(".socks_option").hover(hover_in_socks, hover_out_socks);
  $(".vinyl_option").hover(hover_in_vinyl, hover_out_vinyl);
  // $(".vinyl_option").hover(hover_in_vinyl, hover_out_vinyl);


});

var total_amount=0;
var sock_amount =0;
var vinyl_amount=0;
var sock_price =15;
var vinyl_price=30;
var cur_all;
var cur_socks;
var cur_vinyl;
var cur_shirts;
var cur_hat;
var cur_posters;

// var sock_amount_input;
// todo: handle the cart fomr with these^
// todo: make the store items clickable
// todo: hover text menu
// design the store images with same size and eveything

function show_all(){
    $(".store_filter").css("color","white");
    $(".store_item").show();
}

function show_socks(){
    $(".store_filter").css("color","grey");
    $(".socks_option").css("color","white");
    $(".store_item").hide();
    $(".sock_item").show();
}

function show_vinyl(){
    $(".store_filter").css("color","grey");
    $(".vinyl_option").css("color","white");
    $(".store_item").hide();
    $(".vinyl_item").show();
}
function hover_all(){
    $(".store_filter").css("color","white");
    $(".store_item").show();
}

function hover_socks(){
    $(".store_filter").css("color","grey");
    $(".socks_option").css("color","white");
    $(".store_item").hide();
    $(".sock_item").show();
}

function hover_vinyl(){
    $(".store_filter").css("color","grey");
    $(".vinyl_option").css("color","white");
    $(".store_item").hide();
    $(".vinyl_item").show();
}
function clear_cart(){
      $(".socks_cart_amount").css('display', 'none');
    // $(".socks_cart_amount").hide();   
}


function update_total(){
  total_amount = (sock_amount*sock_price)+(vinyl_amount*vinyl_price);
   $(".total_amount").text(total_amount);
  //total amount update calcuate everything
}


//needs to be called when sock_item is clicked
function add_sock(){
  sock_amount+=1;
  if ($(".socks_cart_amount").css('display') == 'block'){
    $(".socks_cart_amount").val(sock_amount);
  }
  else{
    $(".socks_cart_amount").css('display', 'block');
  }
      update_total();
}

function add_vinyl(){
  vinyl_amount+=1;
  if ($(".vinyl_cart_amount").css('display') == 'block'){
    $(".vinyl_cart_amount").val(Number(vinyl_amount));
  }
  else{
    $(".vinyl_cart_amount").css('display', 'block');
  }
    update_total();
}

function update_sock(){
    sock_amount =  Number($("#socks_cart_amount").val());
      if (sock_amount == 0){
      $(".socks_cart_amount").css('display','none');
    }
    update_total();
}
function update_vinyl(){
    vinyl_amount =  Number($("#vinyl_cart_amount").val());
          if (vinyl_amount == 0){
      $(".vinyl_cart_amount").css('display','none');
    }
        update_total();
}

 function hover_in_socks(){
   cur_all = $(".shop_all_option").css("color");
   cur_socks = $(".socks_option").css("color");
   cur_shirts = $(".shirts_option").css("color");
   cur_hat = $(".hat_option").css("color");
   cur_vinyl = $(".vinyl_option").css("color");
   cur_posters  = $(".posters_option").css("color");

   $(".store_filter").css("color","grey");
   $(".socks_option").css("color","white");
}

 function hover_out_socks(){
   $(".shop_all_option").css("color",cur_all);
    $(".socks_option").css("color",cur_socks);
   $(".shirts_option").css("color",cur_shirts);
     $(".hat_option").css("color",cur_hat);
   $(".vinyl_option").css("color",cur_vinyl);
  $(".posters_option").css("color",cur_posters);

}


 function hover_in_vinyl(){
   cur_all = $(".shop_all_option").css("color");
   cur_socks = $(".socks_option").css("color");
   cur_shirts = $(".shirts_option").css("color");
   cur_hat = $(".hat_option").css("color");
   cur_vinyl = $(".vinyl_option").css("color");
   cur_posters  = $(".posters_option").css("color");

   $(".store_filter").css("color","grey");
   $(".vinyl_option").css("color","white");
}

 function hover_out_vinyl(){
   $(".shop_all_option").css("color",cur_all);
    $(".socks_option").css("color",cur_socks);
   $(".shirts_option").css("color",cur_shirts);
     $(".hat_option").css("color",cur_hat);
   $(".vinyl_option").css("color",cur_vinyl);
  $(".posters_option").css("color",cur_posters);
}
