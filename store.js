$(document).ready(function(){
  $(".shop_all_option").click(show_all);
  $(".socks_option").click(show_socks);
  $(".shirt_option").click(show_shirt);
  $(".hat_option").click(show_hat);
  $(".vinyl_option").click(show_vinyl);
    $(".vinyl_option").click(show_posters);

  
  $(".sock_plus").click(add_sock);
  $(".shirt_plus").click(add_shirt);
  $(".hat_plus").click(add_hat);
  $(".vinyl_plus").click(add_vinyl);
    $(".poster_plus").click(add_poster);


  
  show_all();
  clear_cart();

   $("#socks_cart_amount").bind("input",update_sock);
   $("#shirt_cart_amount").bind("input",update_shirt);
   $("#hat_cart_amount").bind("input",update_hat);
   $("#vinyl_cart_amount").bind("input",update_vinyl);
   $("#poster_cart_amount").bind("input",update_poster);


   // $(".socks_cart_amount").change(update_sock);
      // $("input").change(update_sock);



  $(".overlay_store_item").hide();
  $(".store_item").hover(function(){
      $(this).find(".overlay_store_item").show();
    }, function(){
       $(this).find(".overlay_store_item").hide();
    });

  $(".socks_option").hover(hover_in_socks, hover_out_socks);
  $(".shirt_option").hover(hover_in_shirt, hover_out_shirt);
  $(".hat_option").hover(hover_in_hat, hover_out_hat);
  $(".vinyl_option").hover(hover_in_vinyl, hover_out_vinyl);
  $(".posters_option").hover(hover_in_posters, hover_out_posters);


});

var total_amount=0;
var sock_amount =0;
var shirt_amount =0;
var hat_amount =0;
var vinyl_amount=0;
var poster_amount =0;

var sock_price =15;
var shirt_price=30;
var hat_price=30;
var vinyl_price=35;
var poster_price=25;
var cur_all;
var cur_socks;
var cur_shirt;
var cur_hat;
var cur_vinyl;
var cur_shirt;
var cur_hat;
var cur_posters;

// var sock_amount_input;
// todo: handle the cart fomr with these^
// todo: make the store items clickable
// todo: hover text menu
// design the store images with same size and eveything

function show_all(){
    $(".store_filter").css("color","white");

  cur_all = $(".shop_all_option").css("color");
   cur_socks = $(".socks_option").css("color");
   cur_shirt = $(".shirt_option").css("color");
   cur_hat = $(".hat_option").css("color");
   cur_vinyl = $(".vinyl_option").css("color");
   cur_posters  = $(".posters_option").css("color");

    $(".store_item").show();
}

function show_socks(){
    $(".store_filter").css("color","grey");
    $(".socks_option").css("color","white");

  cur_all = $(".shop_all_option").css("color");
   cur_socks = $(".socks_option").css("color");
   cur_shirt = $(".shirt_option").css("color");
   cur_hat = $(".hat_option").css("color");
   cur_vinyl = $(".vinyl_option").css("color");
   cur_posters  = $(".posters_option").css("color");

    $(".store_item").hide();
    $(".sock_item").show();
}

function show_shirt(){
    $(".store_filter").css("color","grey");
    $(".shirt_option").css("color","white");

      cur_all = $(".shop_all_option").css("color");
   cur_socks = $(".socks_option").css("color");
   cur_shirt = $(".shirt_option").css("color");
   cur_hat = $(".hat_option").css("color");
   cur_vinyl = $(".vinyl_option").css("color");
   cur_posters  = $(".posters_option").css("color");

    $(".store_item").hide();
    $(".shirt_item").show();
}

function show_hat(){
    $(".store_filter").css("color","grey");
    $(".hat_option").css("color","white");

    cur_all = $(".shop_all_option").css("color");
   cur_socks = $(".socks_option").css("color");
   cur_shirt = $(".shirt_option").css("color");
   cur_hat = $(".hat_option").css("color");
   cur_vinyl = $(".vinyl_option").css("color");
   cur_posters  = $(".posters_option").css("color");

    $(".store_item").hide();
    $(".hat_item").show();
}

function show_vinyl(){
    $(".store_filter").css("color","grey");
    $(".vinyl_option").css("color","white");

      cur_all = $(".shop_all_option").css("color");
   cur_socks = $(".socks_option").css("color");
   cur_shirt = $(".shirt_option").css("color");
   cur_hat = $(".hat_option").css("color");
   cur_vinyl = $(".vinyl_option").css("color");
   cur_posters  = $(".posters_option").css("color");

    $(".store_item").hide();
    $(".vinyl_item").show();
}

function show_posters(){
    $(".store_filter").css("color","grey");
    $(".posters_option").css("color","white");

      cur_all = $(".shop_all_option").css("color");
   cur_socks = $(".socks_option").css("color");
   cur_shirt = $(".shirt_option").css("color");
   cur_hat = $(".hat_option").css("color");
   cur_vinyl = $(".vinyl_option").css("color");
   cur_posters  = $(".posters_option").css("color");

    $(".store_item").hide();
    $(".vinyl_item").show();
}

function hover_all(){
    $(".store_filter").css("color","white");
    $(".store_item").show();
}

function clear_cart(){
      $(".socks_cart_amount").css('display', 'none');
      $(".shirt_cart_amount").css('display', 'none');
      $(".hat_cart_amount").css('display', 'none');
      $(".vinyl_cart_amount").css('display', 'none');

    // $(".socks_cart_amount").hide();   
}


function update_total(){
  total_amount = (sock_amount*sock_price)+(shirt_amount*shirt_price)+(hat_amount*hat_price)+(vinyl_amount*vinyl_price)+(poster_amount*poster_price);
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

function add_shirt(){
  shirt_amount+=1;
  if ($(".shirt_cart_amount").css('display') == 'block'){
    $(".shirt_cart_amount").val(Number(shirt_amount));
  }
  else{
    $(".shirt_cart_amount").css('display', 'block');
  }
    update_total();
}

function add_hat(){
  hat_amount+=1;
  if ($(".hat_cart_amount").css('display') == 'block'){
    $(".hat_cart_amount").val(Number(hat_amount));
  }
  else{
    $(".hat_cart_amount").css('display', 'block');
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

function add_poster(){
  poster_amount+=1;
  if ($(".poster_cart_amount").css('display') == 'block'){
    $(".poster_cart_amount").val(Number(poster_amount));
  }
  else{
    $(".poster_cart_amount").css('display', 'block');
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

function update_shirt(){
    shirt_amount =  Number($("#shirt_cart_amount").val());
          if (shirt_amount == 0){
      $(".shirt_cart_amount").css('display','none');
    }
        update_total();
}

function update_hat(){
    hat_amount =  Number($("#hat_cart_amount").val());
          if (hat_amount == 0){
      $(".hat_cart_amount").css('display','none');
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

function update_poster(){
    poster_amount =  Number($("#poster_cart_amount").val());
          if (poster_amount == 0){
      $(".poster_cart_amount").css('display','none');
    }
        update_total();
}

 function hover_in_socks(){
   cur_all = $(".shop_all_option").css("color");
   cur_socks = $(".socks_option").css("color");
   cur_shirt = $(".shirt_option").css("color");
   cur_hat = $(".hat_option").css("color");
   cur_vinyl = $(".vinyl_option").css("color");
   cur_posters  = $(".posters_option").css("color");

   $(".store_filter").css("color","grey");
   $(".socks_option").css("color","white");
}

 function hover_out_socks(){
   $(".shop_all_option").css("color",cur_all);
    $(".socks_option").css("color",cur_socks);
   $(".shirt_option").css("color",cur_shirt);
     $(".hat_option").css("color",cur_hat);
   $(".vinyl_option").css("color",cur_vinyl);
  $(".posters_option").css("color",cur_posters);

}

function hover_in_shirt(){
   cur_all = $(".shop_all_option").css("color");
   cur_socks = $(".socks_option").css("color");
   cur_shirt = $(".shirt_option").css("color");
   cur_hat = $(".hat_option").css("color");
   cur_vinyl = $(".vinyl_option").css("color");
   cur_posters  = $(".posters_option").css("color");

   $(".store_filter").css("color","grey");
   $(".shirt_option").css("color","white");
}

 function hover_out_shirt(){
   $(".shop_all_option").css("color",cur_all);
    $(".socks_option").css("color",cur_socks);
   $(".shirt_option").css("color",cur_shirt);
    $(".hat_option").css("color",cur_hat);
   $(".vinyl_option").css("color",cur_vinyl);
  $(".posters_option").css("color",cur_posters);

}

 function hover_in_hat(){
   cur_all = $(".shop_all_option").css("color");
   cur_socks = $(".socks_option").css("color");
   cur_shirt = $(".shirt_option").css("color");
   cur_hat = $(".hat_option").css("color");
   cur_vinyl = $(".vinyl_option").css("color");
   cur_posters  = $(".posters_option").css("color");

   $(".store_filter").css("color","grey");
   $(".hat_option").css("color","white");
}

 function hover_out_hat(){
   $(".shop_all_option").css("color",cur_all);
    $(".socks_option").css("color",cur_socks);
   $(".shirt_option").css("color",cur_shirt);
     $(".hat_option").css("color",cur_hat);
   $(".vinyl_option").css("color",cur_vinyl);
  $(".posters_option").css("color",cur_posters);

}

 function hover_in_vinyl(){
   cur_all = $(".shop_all_option").css("color");
   cur_socks = $(".socks_option").css("color");
   cur_shirt = $(".shirt_option").css("color");
   cur_hat = $(".hat_option").css("color");
   cur_vinyl = $(".vinyl_option").css("color");
   cur_posters  = $(".posters_option").css("color");

   $(".store_filter").css("color","grey");
   $(".vinyl_option").css("color","white");
}

 function hover_out_vinyl(){
   $(".shop_all_option").css("color",cur_all);
    $(".socks_option").css("color",cur_socks);
   $(".shirt_option").css("color",cur_shirt);
     $(".hat_option").css("color",cur_hat);
   $(".vinyl_option").css("color",cur_vinyl);
  $(".posters_option").css("color",cur_posters);
}

 function hover_in_posters(){
   cur_all = $(".shop_all_option").css("color");
   cur_socks = $(".socks_option").css("color");
   cur_shirt = $(".shirt_option").css("color");
   cur_hat = $(".hat_option").css("color");
   cur_vinyl = $(".vinyl_option").css("color");
   cur_posters  = $(".posters_option").css("color");

   $(".store_filter").css("color","grey");
   $(".posters_option").css("color","white");
}

 function hover_out_posters(){
   $(".shop_all_option").css("color",cur_all);
    $(".socks_option").css("color",cur_socks);
   $(".shirt_option").css("color",cur_shirt);
     $(".hat_option").css("color",cur_hat);
   $(".vinyl_option").css("color",cur_vinyl);
  $(".posters_option").css("color",cur_posters);
}
