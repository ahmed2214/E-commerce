/* modal */
$(window).ready(function () {
  $('#myModal').modal('show');
});

/* / modal  */
$('#Deals-owl-carousel').owlCarousel({
  items: 1,
  margin: 10,
  autoHeight: false,
  dots: false,
  center: true,
  nav: true,
  navText: ["<i class='fas fa-chevron-left' style='font-size: 20px;font-weight: 300;'></i>", "<i class='fas fa-chevron-right'style='font-size: 20px;font-weight: 300;'></i>"],
});
$('#bestSeller-owl-carousel').owlCarousel({
  items: 1,
  margin: 10,
  autoHeight: false,
  dots: false,
  center: true,
  nav: true,
  navText: ["<i class='fas fa-chevron-left' style='font-size: 20px;font-weight: 300;'></i>", "<i class='fas fa-chevron-right'style='font-size: 20px;font-weight: 300;'></i>"],
});

/*navbar scroll */
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 210) {
    $('.scroll-nav').addClass("navbar_fixed")
    if (screen.width < 992) {
      $('.cartli').addClass("cartli_fixed");
          }else
          {
            $('.cartli').removeClass("cartli_fixed");
          }
    
    $('.navbar-brand').addClass("navbar_scroll")
    $('.navbar-nav-scroll').addClass("navbar_scroll_icons")
    $('.navbar-brand-about .img-1').addClass("display-n")
    $('.navbar-brand-about .img-2').removeClass("display-n")
    $('.registration-icon .icon-1').removeClass("display-n")
    $('.registration-icon .icon-3').addClass("display-n")
    $('.aboutUsNav .Basket').removeClass("BasketAbout")
    $('.navbar-nav-scroll .searchlink').removeClass("display-n")
  }

  else {
    
      $('.cartli').removeClass("cartli_fixed");
    $('.scroll-nav').removeClass("navbar_fixed")
    $('.navbar-brand').removeClass("navbar_scroll")
    $('.navbar-nav-scroll').removeClass("navbar_scroll_icons")
    $('.navbar-brand-about .img-1').removeClass("display-n")
    $('.navbar-brand-about  .img-2').addClass("display-n")
    $('.registration-icon .icon-3').removeClass("display-n")
    $('.registration-icon .icon-1').addClass("display-n")
    $('.aboutUsNav .Basket').addClass("BasketAbout")
    $('.navbar-nav-scroll.searchlink').addClass("display-n")
  }
})
/*navbar scroll /  */
/* timer */
function makeTimer() {
  function countDownTimer(wrapper, timerDate) {
    var endTime = new Date(timerDate);
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days-" + wrapper).html(days + "<span class='timer-span'>Days</span>");
    $("#hours-" + wrapper).html(hours + "<span class='timer-span'>Hours</span>");
    $("#minutes-" + wrapper).html(minutes + "<span class='timer-span'>Min</span>");
    $("#seconds-" + wrapper).html(seconds + "<span class='timer-span'>Sec</span>");
  }
  countDownTimer('1', "2021-09-23 14:25:59"); /*"[data-date]" */
  countDownTimer('2', "2021-09-16 14:25:59");
  countDownTimer('3', "2021-09-25 11:17:36");
  countDownTimer('4', "2021-10-02 11:17:36");
}

setInterval(function () { makeTimer(); }, 1000);
/*timer / */
/*---------- on click change item image---*/
function changeItemImg(itemClick) {
  $(itemClick).on('click', function () {
    let productDote = $(this).attr('id');
    console.log(productDote)
    let imgs = $('#' + productDote).attr('alt')
    if ($('#' + productDote).attr('data-click-state') == 0) {
      $('#' + productDote).attr('data-click-state', 1);
      $('#item-img-' + productDote).append('<img class="secondItemcolor" src="' + imgs + '" style="width:100% ;min-width: 245px;"></img>');
      $('#doteBorder-' + productDote).addClass("doteBordershow");
    }
    else {
      $('#' + productDote).attr('data-click-state', 0);
      $('.secondItemcolor').remove();
      $('#doteBorder-' + productDote).removeClass("doteBordershow");
    }
  });
};
changeItemImg('.dotes');

/*---------- on click change item image---*/
// Call the event handler on #text
function cardItemHover(cardItem) {
  $(cardItem).hover(
    function () {
      /*catch card id */
      let productCard = $(this).attr('id');
      /* 

       cardItems Hover alows a mouseenter and mouse leave event
        seperated by a comma
        */
      //Event one mouse enter add class
      $('#' + productCard + ' .cardImgHide').addClass('itemSecondeImageShow')
      $('#' + productCard + ' .icons').addClass('iconShow')
      $('#' + productCard + ' .Price-amount').addClass('priceAmountHide');
      $('#' + productCard + ' .Price-amount').addClass('priceAmountHide')
      $('#' + productCard + ' .Price-amount').addClass('priceAmountHide')
      $('#' + productCard + ' .product-rating').addClass('productRatingShow ')
    }, function () {
      /*catch card id */
      let productCard = $(this).attr('id');
      // Event two mouse out remove class 
      $('#' + productCard + ' .cardImgHide').removeClass('itemSecondeImageShow');
      $('#' + productCard + ' .icons').removeClass('iconShow');
      $('#' + productCard + ' .Price-amount').removeClass('priceAmountHide');
      $('#' + productCard + ' .Price-amount').removeClass('priceAmountHide');
      $('#' + productCard + ' .Price-amount').removeClass('priceAmountHide');
      $('#' + productCard + ' .product-rating').removeClass('productRatingShow ');
    }

  );
}
/*function call*/
cardItemHover('.item-card');
/*------------------------------------------------- */
/*------ active tab -----------*/
$(document).ready(function () {
  $(' .actived-li ').click(function () {
    $('.actived-li').removeClass("actived-tab");
    $(this).addClass("actived-tab");
  });
});

/*------ active tab / -----------*/
/*------ play video  -----------
document.getElementById('play').onclick = function (){
  document.getElementById('video').play();
  document.getElementById('video').css("display","block");
  document.getElementById('coverVideo').css("display","none");
  document.getElementById('play').css("display","none");
};*/
/*------ play video / -----------*/
/*------ Carousel stop loop  -----------*/
$('.myCarousel').carousel({
  wrap: false
});
/*------ Carousel stop loop  / -----------*/
/*------ Carousel icons Responsive   -----------*/
$('#sponsers-owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  navigation: false,
  dots: false,
  navText: [" ", " "],
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 3,
      nav: false
    },
    1000: {
      items: 6,
      nav: true,
      loop: false
    }
  }
})
/*------ Carousel icons Responsive / -----------*/
/*------ grid list view -----------*/
$('.btn-list').on('click', function () {
  /*--list view---*/
  $(this).prop('disabled', true);
  $('.btn-grid').prop('disabled', false);
  $('.grid-container').hasClass('list-view') ? $('.grid-container').removeClass('list-view') :$('.grid-container').addClass('list-view');
  $('.card-img-show').addClass('card-img-show-list')
  $('.cardImgHide').addClass('cardImgHide-list')
  $('.card-body').removeClass('pl-0')
  $('.prodect-disc').removeClass('display-n')
  $('.Price-amount').addClass('priceShow')
  $('.product-link').addClass('product-link-new-style')
  $('.dotes-container').addClass('dotes-container-postion')
  $('.dotes-container-img').addClass('dotes-container-img-postion')
  $('.product-rating').addClass('product-rating-new-postion')
  $('.icons').addClass('display-n')
  $('.timer-container').addClass('timer-container-postion')
  $('.btn-selct').addClass('display-flex')
  $(".card-body").append(`<div class="icons-list-container ">
                                    <ul class="icons-list">
                                    <li>
                                    <a href="#"><i class="fas fa-eye"></i></a>
                                    <span class="txt-icon-label">Quick View</span>
                                     </li>
                                        <li>
                                            <a href="#"><i class="far fa-heart"></i></a>
                                            <span class="txt-icon-label">Wishlist</span>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fas fa-sync"></i></a>
                                            <span class="txt-icon-label">Compare</span>
                                        </li>
                                    </ul>
                                </div>`);
$('.btn-list').css('color','#339900')
$('.btn-grid').css('color','black')
});
$('.btn-grid').on('click', function () {
  /*--grid view---*/
  $(this).prop('disabled', true);
  $('.btn-list').prop('disabled', false);
  $('.grid-container').removeClass('list-view');
  $('.card-body').addClass('pl-0')
  $('.card-img-show').removeClass('card-img-show-list')
  $('.cardImgHide').removeClass('cardImgHide-list')
  $('.prodect-disc').addClass('display-n')
  $('.Price-amount').removeClass('priceShow')
  $('.product-link').removeClass('product-link-new-style')
  $('.dotes-container').removeClass('dotes-container-postion')
  $('.dotes-container-img').removeClass('dotes-container-img-postion')
  $('.product-rating').removeClass('product-rating-new-postion')
  $('.icons').removeClass('display-n')
  $(".icons-list-container").remove();
  $('.btn-selct').removeClass('display-flex')
  $('.timer-container').removeClass('timer-container-postion')
  $('.btn-list').css('color','black')
$('.btn-grid').css('color','#339900')
});
/*------ grid list view / -----------*/
/*------ show items 9 / 24 /26   -----------*/
$(document).ready(function(){
  $('.item').slice(0, 9).show();
  $('#pagination-container').css("display", "block");
  $('#items-9').on("click", function(e){
    e.preventDefault();
    $('#pagination-container').css("display", "block");
    $('.item').css("display", "none");
    $('.item').slice(0, 9).show();
   /*$('.item:hidden').slice(0, 6).slideDown();*/
  });  
  $('#items-24').on("click", function(e){
    e.preventDefault();
    $('#pagination-container').css("display", "none");
    $('.item').css("display", "none");
    $('.item').slice(0, 24).show();
  });
  $('#items-36').on("click", function(e){
    e.preventDefault();
    $('#pagination-container').css("display", "none");
    $('.item').css("display", "none");
    $('.item').slice(0, 36).show();
  });  
});
  /*------ show items 9 / 24 /26     /-----------*/
  /*------ simplePagination plugin    -----------*/
 function paginationShow(item,pagination,Pages){
  var items = $(item);
  var numItems = items.length;
  var perPage = Pages;

  items.slice(perPage).hide();

  $(pagination).pagination({
      items: numItems,
      itemsOnPage: perPage,
      prevText: "&laquo;",
      nextText: "&raquo;",
      onPageClick: function (pageNumber) {
          var showFrom = perPage * (pageNumber - 1);
          var showTo = showFrom + perPage;
          items.hide().slice(showFrom, showTo).show();
      }
      
  });
}
paginationShow(".item",'#pagination-container',9);
paginationShow(".blog-post",'#pagination-container-blog',10);
    /*------ simplePagination plugin     /-----------*/
     /*------ mixitup plugin     -----------*/
     $(".sort-btn").click(function(){
  
       let vary = $(this).html();
       console.log(vary);
       document.getElementById('sortDropdownBtn').innerHTML=vary+'<span></span>';
      
    });
    
     function sortitems (){
      $(".dropdown-item").change(function(){
        //unhides current item
       let vaiy=$(this).text();
       console.log(vaiy);
        $(".dropdown:first-child").html($(this).text());
        $('#sortDropdownBtn').innerHTML=vaiy;
      });
    $('#ProductsCotainer').mixItUp({
      load: {
          sort: 'order:asc',
          showOnLoad:"",
          limit: 3,
      },
        animation: {
        effects: 'fade rotateZ(-180deg)',
        duration: 20
       
      },
      selectors: {
        target: '.item',
        filter: '.filter-btn',
        sort: '.sort-btn',
      },
      
      callbacks: {
        onMixEnd: function(state){
          console.log(state)
         
        }
      }
    });
 
    
  }
    sortitems();  
   /*------ mixitup plugin     /-----------*/

/*----------------*/
(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='sendForm']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      yourName: "required",
      yourEmail: "required",
      yourSubject: "required",
      yourMessage: "required"
    
    },
    // Specify validation error messages
    messages: {
      yourName: "The field is required.",
      yourEmail:  "The field is required.",
      password:  "The field is required.",
      yourMessage: "The field is required."
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
/*/--------------*/
/*---- enable and disable Scroll----------*/
function disableScroll() { 
  document.body.classList.add("remove-scrolling"); 
} 

function enableScroll() { 
  document.body.classList.remove("remove-scrolling"); 
}
/*------enable and disable Scroll / --------*/
/*------store in local storge / --------*/
function store()
{
  // Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("lastname", "Smith");
  // Retrieve
  document.getElementById("siteMode").innerHTML = localStorage.getItem("lastname");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}
/*------store in local storge / --------*/
// ************************************************
// Shopping Cart 
// ************************************************
function ShoppingCart(){
  var shoppingCart = (function() {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];
    
    // Constructor
    function Item(id,name,img, price, count) {
      this.id = id;
      this.name = name;
      this.img = img;
      this.price = price;
      this.count = count;
    }
    
    // Save cart
    function saveCart() {
      sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
    
      // Load cart
    function loadCart() {
      cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
      loadCart();
    }
    
  
    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    
    // Add to cart
    obj.addItemToCart = function(id,name,img, price, count) {
      for(var item in cart) {
        if(cart[item].id === id) {
          cart[item].count ++;
          saveCart();
          return;
        }
      }
      var item = new Item(id,name,img, price, count);
      cart.push(item);
      saveCart();
    }
    // Set count from item
    obj.setCountForItem = function(id, count) {
      for(var i in cart) {
        if (cart[i].id === id) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function(id) {
        for(var item in cart) {
          if(cart[item].id === id) {
            cart[item].count --;
            if(cart[item].count === 0.00) {
              cart.splice(item, 1);
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(id) {
      for(var item in cart) {
        if(cart[item].id === id) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }
  
    // Clear cart
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
  
    // Count cart 
    obj.totalCount = function() {
      var totalCount = 0.00;
      for(var item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    }
  
    // Total cart
    obj.totalCart = function() {
      var totalCart =0.000;

      for(var item in cart) {
        totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(2));
    }
  
    // List cart
    obj.listCart = function() {
      var cartCopy = [];
      for(i in cart) {
        item = cart[i];
        itemCopy = {};
        for(p in item) {
          itemCopy[p] = item[p];
  
        }
        itemCopy.total = Number(item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }
  
    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
  })();
  
  
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add item
  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    var id = $(this).data('id');
    var name = $(this).data('name');
    var img = $(this).data('img');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(id,name,img, price, 1);
    displayCart();
    console.log(img);
  });
  
  // Clear items
  $('.clear-cart').click(function() {
    shoppingCart.clearCart();
    displayCart();
  });
  
  
  function displayCart() {
    var cartArray = shoppingCart.listCart();
    var modalOutput = `<tr> </tr>`;
    var  checkOutput;
    var output = `<tr class="productHeaderTr">
                    <th class="productHeaderTd ">&nbsp;</th>
                    <th class="productHeaderTd ">&nbsp;</th>
                    <th class="productHeaderTd">Product</th>
                    <th class="productHeaderTd">Price</th>
                    <th class="productHeaderTd">Quantity</th>
                    <th class="productHeaderTd">Total</th>
                    <th class="productHeaderTd">&nbsp;</th>
                  </tr>`;
                  /*
    var outputWishlist = `<tr class="productHeaderTr">
                    <th class="productHeaderTd ">&nbsp;</th>
                    <th class="productHeaderTd ">&nbsp;</th>
                    <th class="productHeaderTd">PRODUCT NAME</th>
                    <th class="productHeaderTd">UNIT PRICE</th>
                    <th class="productHeaderTd">STOCK STATUS	</th>
                    <th class="productHeaderTd">&nbsp;</th>
                    <th class="productHeaderTd">&nbsp;</th>
                  </tr>`;
   */
    for(var i in cartArray) {
      output += "<tr>"
      + "<td class='cartTd'><div class='tdCartid'>" + cartArray[i].id + "</div></td>" 
      + "<td class='cartTd cartTd-img'><div ><img class='imgCard' src=' "+ cartArray[i].img + "'</div></td>" 
        + "<td class='cartTd'><div class='tdCartTitle'>" + cartArray[i].name + "</div></td>" 
        + "<td class='cartTd'><div class='tdCartPrice'>£ " + cartArray[i].price + "</div></td>"
        + "<td class='cartTd'><div class='input-group'><button class='minus-item input-group-addon btn ' data-id=" + cartArray[i].id + "><span>-</span></button>"
        + "<input type='number' class='item-count form-control'style='-webkit-appearance: none;  max-width: 60px;text-align: center;border: none;;max-width: 64px;' data-id='" + cartArray[i].id + "' value='" + cartArray[i].count + "'>"
        + "<button class='plus-item btn  input-group-addon' data-id=" + cartArray[i].id + "><span>+</span></button></div></td>"
          + "<td class='cartTd'><div class='tdCartPrice'>£ " + cartArray[i].total + "</div></td>" 
        + "<td class='cartTd'><button class='delete-item btn ' style='font-size:22px;position: relative;top: -4px;' data-id=" + cartArray[i].id + "><i class='far fa-trash-alt'></i></button></td>"
        + " = " 
        +  "</tr>";
    }
    for(var i in cartArray) {
      modalOutput += "<tr>"
      + "<td class='cartTd' ><div class='tdCartid'>" + cartArray[i].id + "</div></td>" 
      + "<td class='cartTd cartTd-img' ><div ><img class='imgCard' src=' "+ cartArray[i].img + "'</div></td>" 
        + "<td class='cartTd' style='padding: 19px 0 !important;'><div class='tdCartTitle' >" + cartArray[i].name + "</div>" 
        +"<input type='text' class='item-count form-control'style='display:inline-block;-webkit-appearance: none;  max-width: 60px;text-align: center;border: none !important;max-width: 64px;' data-id='" + cartArray[i].id + "' value='" + cartArray[i].count + " ×'>"
        + "<div class='tdCartPrice' style='display:inline-block; position:relative;left:-10px;'> £ <span id='price'> " + cartArray[i].price + "</span></div></td>" 
        + "<td class='cartTd' style='padding: 19px 0 !important;'><button class='delete-item btn ' style='font-size:22px;position: relative;top: -4px;' data-id=" + cartArray[i].id + "><i class='far fa-trash-alt'></i></button></td>"
        + " = " 
        +  "</tr>";
        console.log(i)
    }
    for(var i in cartArray) {
      checkOutput += "<tr >"
        + "<td colspan='3' class='cartTd' style='padding: 0px  !important;'><div class='tdCartTitle' style=' width: 385px;' >" + cartArray[i].name + " x "+ cartArray[i].price + "</div></td>"
        + "<td class='cartTd'  style='padding: 0px !important; margin-right:auto'><div class='tdCartPrice'>£ " + cartArray[i].total + "</div></td>" 
        + " = " 
        +  "</tr>";
  
    }
    $('.show-cart').html(output);
    $('.cart-products').html(checkOutput);
    $('.showcart-right').html(modalOutput);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }
  
  // Delete item button
  function deleteProdect(content){
  $(content).on("click", ".delete-item", function(event) {
    var id = $(this).data('id')
    shoppingCart.removeItemFromCartAll(id);
    displayCart();
  })
  }
  deleteProdect('.show-cart');
  deleteProdect('.showcart-right');
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
    var id = $(this).data('id')
    shoppingCart.removeItemFromCart(id);
    displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
    var id = $(this).data('id')
    shoppingCart.addItemToCart(id);
    displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
     var id = $(this).data('id');
     var count = Number($(this).val());
    shoppingCart.setCountForItem(id, count);
    displayCart();
  });
  
  displayCart();
  };
  ShoppingCart();
/*---------------------*/
// ************************************************
// Shopping Wishlist 
// ************************************************
function ShoppingWishlist(){
  var shoppingWishlist = (function() {
    // =============================
    // Private methods and propeties
    // =============================
    wishlist = [];
    
    // Constructor
    function Item(id,name,img, price, count) {
      this.id = id;
      this.name = name;
      this.img = img;
      this.price = price;
      this.count = count;
    }
    
    // Save wishlist
    function saveWishlist() {
      sessionStorage.setItem('shoppingWishlist', JSON.stringify(wishlist));
    }
    
      // Load wishlist
    function loadWishlist() {
      wishlist = JSON.parse(sessionStorage.getItem('shoppingWishlist'));
    }
    if (sessionStorage.getItem("shoppingWishlist") != null) {
      loadWishlist();
    }
    
  
    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    
    // Add to wishlist
    obj.addItemToWishlist = function(id,name,img, price, count) {
      for(var item2 in wishlist) {
        if(wishlist[item2].id === id) {
          wishlist[item2].count ++;
          saveWishlist();
          return;
        }
      }
      var item2 = new Item(id,name,img, price, count);
      wishlist.push(item2);
      saveWishlist();
    }
    // Set count from item2
    obj.setCountForItem2 = function(id, count) {
      for(var i in wishlist) {
        if (wishlist[i].id === id) {
          wishlist[i].count = count;
          break;
        }
      }
    };
    // Remove item2 from wishlist
    obj.removeItem2FromWishlist = function(id) {
        for(var item2 in wishlist) {
          if(wishlist[item2].id === id) {
            wishlist[item2].count --;
            if(wishlist[item2].count === 0.00) {
              wishlist.splice(item2, 1);
            }
            break;
          }
      }
      saveWishlist();
    }
  
    // Remove all item2s from wishlist
    obj.removeItem2FromWishlistAll = function(id) {
      for(var item2 in wishlist) {
        if(wishlist[item2].id === id) {
          wishlist.splice(item2, 1);
          break;
        }
      }
      saveWishlist();
    }
  
    // Clear wishlist
    obj.clearWishlist = function() {
      wishlist = [];
      saveWishlist();
    }
  
    // Count wishlist 
    obj.totalCount = function() {
      var totalCount = 0.00;
      for(var item2 in wishlist) {
        totalCount += wishlist[item2].count;
      }
      return totalCount;
    }
  
    // Total wishlist
    obj.totalWishlist = function() {
      var totalWishlist =0.000;
      for(var item2 in wishlist) {
        totalWishlist += wishlist[item2].price * wishlist[item2].count;
      }
      return Number(totalWishlist.toFixed(2));
    }
  
    // List wishlist
    obj.listWishlist = function() {
      var wishlistCopy = [];
      for(i in wishlist) {
        item2 = wishlist[i];
        item2Copy = {};
        for(p in item2) {
          item2Copy[p] = item2[p];
  
        }
        item2Copy.total = Number(item2.price * item2.count).toFixed(2);
        wishlistCopy.push(item2Copy)
      }
      return wishlistCopy;
    }
  
    // wishlist : Array
    // Item2 : Object/Class
    // addItem2ToWishlist : Function
    // removeItem2FromWishlist : Function
    // removeItem2FromWishlistAll : Function
    // clearWishlist : Function
    // countWishlist : Function
    // totalWishlist : Function
    // listWishlist : Function
    // saveWishlist : Function
    // loadWishlist : Function
    return obj;
  })();
  
  
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add item2
  $('.add-to-wishlist').click(function(event) {
    event.preventDefault();
    var id = $(this).data('id');
    var name = $(this).data('name');
    var img = $(this).data('img');
    var price = Number($(this).data('price'));
    shoppingWishlist.addItemToWishlist(id,name,img, price, 1);
    displayWishlist();
    console.log(img);
  });
  
  // Clear item2s
  $('.clear-wishlist').click(function() {
    shoppingWishlist.clearWishlist();
    displayWishlist();
  });
  
  
  function displayWishlist() {
    var wishlistArray = shoppingWishlist.listWishlist();
    var output2 = `<tr class="productHeaderTr">
                    <th class="productHeaderTd ">&nbsp;</th>
                    <th class="productHeaderTd ">&nbsp;</th>
                    <th class="productHeaderTd">PRODUCT NAME</th>
                    <th class="productHeaderTd">UNIT PRICE</th>
                    <th class="productHeaderTd">STOCK STATUS</th>
                    <th class="productHeaderTd">&nbsp;</th>
                    <th class="productHeaderTd">&nbsp;</th>
                  </tr>`;
                  
    for(var i in wishlistArray) {
      output2 += "<tr>"
      + "<td class='wishlistTd'><div class='tdWishlistid'>" + wishlistArray[i].id + "</div></td>" 
      + "<td class='wishlistTd wishlistTd-img'><div ><img class='imgCard' src=' "+ wishlistArray[i].img + "'</div></td>" 
        + "<td class='wishlistTd'><div class='tdWishlistTitle'>" + wishlistArray[i].name + "</div></td>" 
        + "<td class='wishlistTd'><div class='tdWishlistPrice'>£ " + wishlistArray[i].price + "</div></td>"
        + "<td class='wishlistTd'><div class='tdWishlistInstock'> in stock </div></td>" 
        + `<td class='wishlistTd'><div class='tdWishlistTitle WishlistAddToCart'>  <a href="#cartModal" style="color:#222" role="button" data-toggle="modal"
        data-click-state="0" class="add-to-cart"><i class="fal fa-shopping-bag"></i> Add to cart</a></div></td>` 
        + "<td class='wishlistTd'><button class='delete-item2 btn ' style='font-size:22px;position: relative;top: -4px;' data-id=" + wishlistArray[i].id + "><i class='far fa-trash-alt'></i></button></td>"
        + " = " 
        +  "</tr>";
    }
  
    $('.show-wishlist').html(output2);
    $('.total-wishlist').html(shoppingWishlist.totalWishlist());
    $('.total-count-wishlist').html(shoppingWishlist.totalCount());
  }
  
  // Delete item2 button
  function deleteProdect(content){
  $(content).on("click", ".delete-item2", function(event) {
    var id = $(this).data('id')
    shoppingWishlist.removeItem2FromWishlistAll(id);
    displayWishlist();
  })
  }
  deleteProdect('.show-wishlist');
  deleteProdect('.showwishlist-right');
  // -1
  $('.show-wishlist').on("click", ".minus-item2", function(event) {
    var id = $(this).data('id')
    shoppingWishlist.removeItem2FromWishlist(id);
    displayWishlist();
  })
  // +1
  $('.show-wishlist').on("click", ".plus-item2", function(event) {
    var id = $(this).data('id')
    shoppingWishlist.addItem2ToWishlist(id);
    displayWishlist();
  })
  
  // Item2 count input
  $('.show-wishlist').on("change", ".item2-count", function(event) {
     var id = $(this).data('id');
     var count = Number($(this).val());
    shoppingWishlist.setCountForItem2(id, count);
    displayWishlist();
  });
  
  displayWishlist();
  };
  ShoppingWishlist();
// function add proparities to card item
// ************************************************
// ************************************************
function cardItemHoverAddPropartirs(cardItem,itemSHow) {
  $(cardItem).hover(
    function () {
      /*catch card id */
      let productCard = $(this).attr('id');
     let id=  productCard ;
     let name=$('#'+productCard+' h5 a').html();
     let img=$('#'+productCard+' img').attr('src');
     let price=$('#' + productCard + ' bdi').html();
     let discountPrice=$('#' + productCard + ' del').html();
  console.log(discountPrice);
  console.log(price);
    $('#'+productCard+ itemSHow).attr( {'data-id': id,'data-name':name ,'data-img':img ,'data-price':price,'data-discountPrice':discountPrice}
    );
    }
  );
}
/*function call*/
cardItemHoverAddPropartirs('.item-card',' .add-to-cart');
cardItemHoverAddPropartirs('.item-card',' .add-to-wishlist');
/*----------function add storting data---------*/
function prodctAddSortAttr() {
      /*catch card id */
      var itemNumber = $( ".item-card" ).length;
      console.log(itemNumber);
      for(let i=1;i<=itemNumber;i++)
      {
     let id='#item-card-'+i ;
     let order=i;
     let rate=$(id+' .Stars').attr('rating');;
     let price=$(id+ ' bdi').html();
     let popularity= i
     let date=$(id+' .card-img').attr('date');
    let parent = $(id).parents(".item");
    console.log(parent);
    $(parent).attr( {'data-order': order,'data-popularity':popularity ,'data-rating':rate ,'data-date':date,'data-price':price}

    );
    }
}
/*function call*/
prodctAddSortAttr();
/*----------function add storting data /---------*/
/*-------------search modal----------------------------*/
(function ($) {	

	$.fn.searchBox = function(ev) {

		var $searchEl = $('.search-elem');
		var $placeHolder = $('.placeholder');
		var $sField = $('#search-field');

		if ( ev === "open") {
			$searchEl.addClass('search-open')
		};

		if ( ev === 'close') {
			$searchEl.removeClass('search-open'),
			$placeHolder.removeClass('move-up'),
			$sField.val(''); 
		};
	}	

}(jQuery));

$('.search-btn').on('click', function(e) {
	$(this).searchBox('open');
	e.preventDefault();
});

$('.close').on('click', function() {
	$(this).searchBox('close');
});
/*-------------search function-------------------- */

$('[data-search]').on('keyup', function() {
	var searchVal = $(this).val();
	var filterItems = $('[data-filter-item]');

	if ( searchVal != '' ) {
		filterItems.addClass('display-n ');
		$('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('display-n ');
	} else {
		filterItems.removeClass('display-n ');
	}
});
/*--------------------------------- */
/*------------ Button Loading--------------------- */
$('.add-to-cart').on('click', function() {
  var $this = $(this);
$this.button('loading');
  setTimeout(function() {
     $this.button('reset');
 }, 8000);
});
/*------------- Button Loading /-------------------- */
/*------------- zoom  /-------------------- */

	
$(function() {
  $('.zoom-image').each(function(){
    var originalImagePath = $(this).find('img').data('original-image');
    $(this).zoom({
      url: originalImagePath,
      magnify: 1
    });
  });
}); 
$('.thumb ').click(function () {
let imgsrc= $(this).attr("src");
  $('.product-photo').attr("data-original-image",imgsrc);
  $('.product-photo').attr("src",imgsrc);

  $('.owl-item').addClass("active");
  $('.owl-item').addClass("center");
});
$('#product-owl-carousel').owlCarousel({
  items: 1,
  margin: 10,
  autoHeight: false,
  dots: true,
  center: true,
  nav: true,
  navText: ["<i class='fas fa-chevron-left' style='font-size: 20px;font-weight: 300;'></i>", "<i class='fas fa-chevron-right'style='font-size: 20px;font-weight: 300;'></i>"],
  dotsData: true,
  touchDrag : true,
  mouseDrag : true,
  responsive: {
    0: {
      dotsEach: 1,
      items: 1
    },
    600: {
      dotsEach: 1,
      items: 1
    },
    1200: {
      dotsEach: 1,
      items: 1
    }
  }
});
/*------------- zoom  /-------------------- */
/*-------- productArray   ---------*/
function productArray()
{
//   let productarray = [];
//   var itemNumber = $( ".item-card" ).length;
//   console.log(itemNumber);
//   for(let i=1;i<=itemNumber;i++){
//     let id='#item-card-'+i ;
//     let title=$(id+' .productName').html();
//     let rate=$(id+' .product-rating').html();
//     let price=$(id+ ' bdi').html();
//     let discount=$(id+ ' del').html();
//     let discrption=$(id+ ' .prodect-disc p').html();
//     let catagory=$(id+ ' .item-info p').html();
//     let color=$(id+ ' .dotes-container').html();
//     let Flash=$(id+ ' .product-flashs').html();
//     let size=$(id+ ' .dotes-container-size').html();
//     let ratingPepoleNo=$(id+ ' .prodect-rating-pepole').html();
//     let timer=$(id+ ' .timer-container').html();
//     let poriorty=i;
//     let imageone=$(id+ ' .imageData').attr("data-image-one");
//     let imagetwo=$(id+ ' .imageData').attr("data-image-two");
//     let imagethree=$(id+ ' .imageData').attr("data-image-three");
//     let imagefour=$(id+ ' .imageData').attr("data-image-four");
//     let imagefive=$(id+ ' .imageData').attr("data-image-five");
//     let imagesix=$(id+ ' .imageData').attr("data-image-six");
//     let imageseven=$(id+ ' .imageData').attr("data-image-seven");
//     let imageEight=$(id+ ' .imageData').attr("data-image-Eight");
//   var product = 
//  {
//     id:id,
//     Flash:Flash,
//     title:title,
//     rating:rate,
//     price:price ,
//     discount:discount,
//     discrption:discrption ,
//     catagory:catagory ,
//     tages:"white",
//     SKU:"white",
//     ratingPepoleNo:ratingPepoleNo,
//     color:color,
//     size:size,
//     timer:timer,
//     poriorty:poriorty,
//     imageone:imageone,
//     imagetwo:imagetwo,
//     imagethree:imagethree,
//     imagefour:imagefour,
//     imagefive:imagefive,
//     imagesix:imagesix,
//     imageseven:imageseven,
//     imageseven:imageseven,
//     imageEight:imageEight,
//   }; 
//   productarray.push(product);
//   saveproductarray();
// }
// console.log(productarray);
//     // Save productarray
//     function saveproductarray() {
//       sessionStorage.setItem('productArray', JSON.stringify(productarray));
//       sessionStorage.setItem('productArrayLenth', JSON.stringify(productarray.length));
        
//     }
    
//       // Load productarray
//     function loadproductarray() {
//       productarray = JSON.parse(sessionStorage.getItem('productArray'));
//       productarrayLenth = JSON.parse(sessionStorage.getItem('productArrayLenth'));
//     }
//     if (sessionStorage.getItem("productArray") != null) {
//       loadproductarray();
//     }
//     loadproductarray();
//load  jason file
    function readTextFile(file, callback) {
      var rawFile = new XMLHttpRequest();
      rawFile.overrideMimeType("application/json");
      rawFile.open("GET", file, true);
      rawFile.onreadystatechange = function() {
          if (rawFile.readyState === 4 && rawFile.status == "200") {
              callback(rawFile.responseText);
          }
      }
      rawFile.send(null);
    }
//load data from jason file
readTextFile("./database/product.json", function(text){
let productarray = JSON.parse(text);
 console.log(productarray);
    
          
//get array index of from object id
//let index = productarray.map(a => a.id).indexOf("#item-card-4")
$(".item-card").click(function(e)
{
   localStorage.setItem('saveItem',e.currentTarget.id  );
  console.log(e.currentTarget.id)
});
let getlocalStorageSaveItem ;
if (localStorage.getItem("saveItem") != null) {
  getlocalStorageSaveItem = localStorage.getItem('saveItem')
}
else {
  getlocalStorageSaveItem ="item-card-1" ;
}
let index = productarray.map(a => a.id).indexOf(`#${getlocalStorageSaveItem}`)
// let index =  productarray.findIndex(x => x.id === `#${getlocalStorageSaveItem}`);
console.log(index);
let findProduct =productarray[index];
console.log(findProduct);
let titlename = findProduct.title;
let  poriorty= findProduct.poriorty;
/*---------product count number   -------------------*/
$(".minus-item-poduct").on('click', function () {
 let poductcount =$(".item-count-product").attr("value");
 if(poductcount > 0){
 poductcount  -- ;}
 $(".item-count-product").attr("value",poductcount);
});
$(".plus-item-proudect").on('click', function () {
  let poductcount =$(".item-count-product").attr("value");
  poductcount ++ ;
  $(".item-count-product").attr("value",poductcount);
 });
 $(".minus-item-poduct").attr("data-id",findProduct.id)
$(".item-count-product").attr("data-id",findProduct.id)
$(".plus-item-proudect").attr("data-id",findProduct.id)
/*---------product page load   -------------------*/

$(".productNameshow").html(findProduct.title);
$(".rating").html(findProduct.rating );
$(".prodect-rating-pepole ").html(findProduct.ratingPepoleNo );
$(".priceProduct").html(findProduct.price);
$(".discrption").html(findProduct.discrption)
$(".Categories").html(findProduct.catagory);
if(findProduct.Flash !=undefined ){
  $(".flashs").html(findProduct.Flash);
  $(".flashs .product-flash").addClass("flash");
  }
  else
  {
    $(".flash").parent(".flashs").remove();
  }
if(findProduct.color !=undefined ){
$(".color").html(findProduct.color);
}
else
{
  $(".color").parent(".product-info-color").remove();
}
if(findProduct.size !=undefined ){
  $(".size").html(findProduct.size);
  }
  else
  {
    $(".size").parent(".product-info-size").remove();
  }
  if(findProduct.timer !=undefined ){
    $("#timerProduct").html(findProduct.timer);
    }
    else
    {
      $("#timerProduct").remove();
    }
$(".tag").html(findProduct.tages);
$(".SKU").html(findProduct.SKU);
$("#imageone").attr("data-original-image",findProduct.imageone);
$("#imageone").attr("src",findProduct.imageone);
$(".dotOne").css("background-image","url("+ findProduct.imageone+")");
let lastimg = $( ".owl-next" ).attr ("lastimg","one") 
if(findProduct.imagetwo !=undefined ){
  $("#imagetwo").attr("data-original-image",findProduct.imagetwo);
  $("#imagetwo").attr("src",findProduct.imagetwo);
  $(".dotTwo").css("background-image","url("+ findProduct.imagetwo+")");
  $(".dotTwo").removeClass("display-n");
  lastimg = $( ".owl-next" ).attr ("lastimg","two") 
  ;
  }
  else
  {
    $( ".owl-next" ).attr( "id","next" );
     $( "#imagetwo" ).parent( ".zoom-image" ).parent(".owl-item").remove();
     $( "#imagethree" ).parent( ".zoom-image" ).parent(".owl-item").remove();
     $( "#imagefour" ).parent( ".zoom-image" ).parent(".owl-item").remove();
     $( "#imagefive" ).parent( ".zoom-image" ).parent(".owl-item").remove();
     $( "#imagesix" ).parent( ".zoom-image" ).parent(".owl-item").remove();
     $( "#imageseven" ).parent( ".zoom-image" ).parent(".owl-item").remove();
     $( "#imageEight" ).parent( ".zoom-image" ).parent(".owl-item").remove();
     //$("#doteEight").parent( ".owl-dot" ).remove();
  }
if(findProduct.imagethree !=undefined ){
$("#imagethree").attr("data-original-image",findProduct.imagethree);
$("#imagethree").attr("src",findProduct.imagethree);
$(".dotThree").css("background-image","url("+ findProduct.imagethree+")");
$(".dotThree").removeClass("display-n");
lastimg = $( ".owl-next" ).attr ("lastimg","three") 
;
}
else
{
  $( ".owl-next" ).attr( "id","next" );
  $( "#imagethree" ).parent( ".zoom-image" ).parent(".owl-item").remove();
  $( "#imagefour" ).parent( ".zoom-image" ).parent(".owl-item").remove();
  $( "#imagefive" ).parent( ".zoom-image" ).parent(".owl-item").remove();
  $( "#imagesix" ).parent( ".zoom-image" ).parent(".owl-item").remove();
  $( "#imageseven" ).parent( ".zoom-image" ).parent(".owl-item").remove();
  $( "#imageEight" ).parent( ".zoom-image" ).parent(".owl-item").remove();
}
if(findProduct.imagefour !=undefined ){
  $("#imagefour").attr("data-original-image",findProduct.imagefour);
  $("#imagefour").attr("src",findProduct.imagefour);
  $(".dotFour").css("background-image","url("+ findProduct.imagefour+")");
  $(".dotFour").removeClass("display-n");
  lastimg = $( ".owl-next" ).attr ("lastimg","four") 
  ;
  }
  else
  {
    $( ".owl-next" ).attr( "id","next" );
     $( "#imagefour" ).parent( ".zoom-image" ).parent(".owl-item").remove();
     $( "#imagefive" ).parent( ".zoom-image" ).parent(".owl-item").remove();
     $( "#imagesix" ).parent( ".zoom-image" ).parent(".owl-item").remove();
     $( "#imageseven" ).parent( ".zoom-image" ).parent(".owl-item").remove();
     $( "#imageEight" ).parent( ".zoom-image" ).parent(".owl-item").remove()
     //$("#doteEight").parent( ".owl-dot" ).remove();
  }
if(findProduct.imagefive !=undefined ){
$("#imagefive").attr("data-original-image",findProduct.imagefive);
$("#imagefive").attr("src",findProduct.imagefive);
$(".dotfive").css("background-image","url("+ findProduct.imagefive+")");
$(".dotfive").removeClass("display-n");
lastimg =$( ".owl-next" ).attr ("lastimg","five") 
;
}
else
{
  $( ".owl-next" ).attr( "id","next" );
  $( "#imagefive" ).parent( ".zoom-image" ).parent(".owl-item").remove();
  $( "#imagesix" ).parent( ".zoom-image" ).parent(".owl-item").remove();
  $( "#imageseven" ).parent( ".zoom-image" ).parent(".owl-item").remove();
  $( "#imageEight" ).parent( ".zoom-image" ).parent(".owl-item").remove()
   //$("#doteEight").parent( ".owl-dot" ).remove();
}
if(findProduct.imagesix !=undefined ){
  $("#imagesix").attr("data-original-image",findProduct.imagesix);
  $("#imagesix").attr("src",findProduct.imagesix);
  $(".dotsix").css("background-image","url("+ findProduct.imagesix+")");
  $(".dotsix").removeClass("display-n");
  lastimg =$( ".owl-next" ).attr ("lastimg","six") 
  ;
  }
  else
  {
    $( ".owl-next" ).attr( "id","next" );
     $( "#imagesix" ).parent( ".zoom-image" ).parent(".owl-item").remove();
     $( "#imageseven" ).parent( ".zoom-image" ).parent(".owl-item").remove();
  $( "#imageEight" ).parent( ".zoom-image" ).parent(".owl-item").remove()
     //$("#doteEight").parent( ".owl-dot" ).remove();
  }
if(findProduct.imageseven !=undefined ){
$("#imageseven").attr("data-original-image",findProduct.imageseven);
$("#imageseven").attr("src",findProduct.imageseven);
$(".dotseven").css("background-image","url("+ findProduct.imageseven+")");
$(".dotseven").removeClass("display-n");
lastimg = $( ".owl-next" ).attr ("lastimg","seven") 
;
}
else
{
  $( ".owl-next" ).attr( "id","next" );
   $( "#imageseven" ).parent( ".zoom-image" ).parent(".owl-item").remove();
   $( "#imageEight" ).parent( ".zoom-image" ).parent(".owl-item").remove()
   //$("#doteEight").parent( ".owl-dot" ).remove();
}
if(findProduct.imageEight !=undefined ){
  $("#imageEight").attr("data-original-image",findProduct.imageEight);
  $("#imageEight").attr("src",findProduct.imageEight);
  $(".doteEight").css("background-image","url("+ findProduct.imageEight+")");
  $("#doteEight").removeClass("display-n");
  lastimg = $( ".owl-next" ).attr ("lastimg","eight") 
  ;
  }
  else
  {
    $( ".owl-next" ).attr( "id","next" );
     $( "#imageEight" ).parent( ".zoom-image" ).parent(".owl-item").remove();
     //$("#doteEight").parent( ".owl-dot" ).remove();
  }

//-------------------------------
//---- get next and Prev product
//-------------------------------
//  get next id and Prev id 
  let poriortynext=poriorty+1;
  let prevporiorty=poriorty-1;
  let nextproductid="#item-card-"+poriortynext;
  let prevproductid="#item-card-"+prevporiorty;
  //known if  indexNext & indexPrev is  undefined
  let indexNext = productarray.map(a => a.id).indexOf(nextproductid)
  let nextproductidtbtn =productarray[indexNext];
  let indexPrev = productarray.map(a => a.id).indexOf(prevproductid)
  let prevproductidbtn =productarray[indexPrev];
 
  if (nextproductidtbtn==undefined)
  {
    //if  indexNext  is  undefined
    console.log(nextproductid + "next");
  }
  else if (prevproductidbtn==undefined)
  {
     //if  indexPrev is  undefined
    console.log(prevproductid+"prev"); 
  }
  else {
  console.log(nextproductid);
  console.log(prevproductid);
}
//}
console.log(findProduct);
console.log(titlename);
//get card id and send to Product function 
});
};

productArray();
//---------function to slide dotes-----------------

function dotesShow()
{
  
$(".owl-prev").on('click', function () {
  
 let activeDotChild =$( "#product-owl-carousel .owl-dots .active .dotsbtn" ).attr("id");
 document.getElementById("next").disabled = false;
if(activeDotChild == "dotFour"){
  $('#product-owl-carousel .owl-dots .owl-dot').removeClass("moveFour");
}
else if(activeDotChild == "dotThree"){
  $('#product-owl-carousel .owl-dots .owl-dot').removeClass("moveThree");
}
else if(activeDotChild == "dotTwo"){
  $('#product-owl-carousel .owl-dots .owl-dot').removeClass("moveTwo");
}
else if(activeDotChild == "dotOne"){
  $('#product-owl-carousel .owl-dots .owl-dot').removeClass("moveOne");
}
else
{
  console.log(activeDotChild);
}
});

$(".owl-next").on('click', function () {
  let activeDotChild =$( "#product-owl-carousel .owl-dots .active .dotsbtn" ).attr("id");
  let lastimg =$( ".owl-next" ).attr("lastimg");
  console.log(activeDotChild);
  console.log(lastimg);
  if(activeDotChild == "dotThree"){
    if(lastimg=="three"){
      document.getElementById("next").disabled = true;
      $('.owl-next').addClass("disabled");
    }}
    if(activeDotChild == "dotFour"){
      if(lastimg=="four"){
        document.getElementById("next").disabled = true;
        $('.owl-next').addClass("disabled");
      }
    }
  if(activeDotChild == "dotfive"){
    $('#product-owl-carousel .owl-dots .owl-dot').addClass("moveOne");
    if(lastimg=="five"){
      document.getElementById("next").disabled = true;
      $('.owl-next').addClass("disabled");
    }
  }
  else if(activeDotChild == "dotsix"){
    $('#product-owl-carousel .owl-dots .owl-dot').addClass("moveTwo");
    if(lastimg=="six"){
      document.getElementById("next").disabled = true;
      $('.owl-next').addClass("disabled");
    }
  }
  else if(activeDotChild == "dotseven"){
    $('#product-owl-carousel .owl-dots .owl-dot').addClass("moveThree");
    if(lastimg=="seven"){
    document.getElementById("next").disabled = true;
    $('.owl-next').addClass("disabled");
  }
  }
  else if(activeDotChild == "doteEight"){
    $('#product-owl-carousel .owl-dots .owl-dot').addClass("moveFour");
  }
  else
  {
    $('#product-owl-carousel .owl-dots .owl-dot').removeClass("moveOne");
  }
 
 });
};

dotesShow();
/*---------productArray  / -------------------*/
$(".showcoupon").on('click', function () {
  if ($(this).attr('data-click-state') == 0) {
    $(this).attr('data-click-state', 1);
    $('.coupon').removeClass('display-n');
  }
  else {
    $(this).attr('data-click-state', 0);
    $('.coupon').addClass('display-n');
  }
});
/*---------------------------*/
//sort and filter css
$(".sort-btn").on('click', function () {
  $("#pagination-container").removeClass("display-n")
});
$(".filter-btn").on('click', function () {
  $("#pagination-container").addClass("display-n")
     let id = "#" + $(this).attr('id');
    if ($(this).attr('data-click-state') == 0) {
      $(this).attr('data-click-state', 1);
      $(".filter-btn a").attr("style", "color: #666 !important");
      $(".filter-btn span").attr("style", "color: #666 !important");
      $(id+" a").attr("style", "color: #222 !important");
      $(id+" span").attr("style", "color: #222 !important");
      if (id == "#blackHeadband" || id == "#brownHeadband")
      {
        $(".filter-btn .filter-swatch-color-img-contanir").attr("style", "border-color: #transparent !important");
        $(id+" .filter-swatch-color-img-contanir").attr("style", "border-color: #c33 !important");
        $(id+" a span").attr("style", "color: #222 !important");
        $(id+" span").attr("style", "color: #222 !important");
      }
        $("#pinkfilter .filter-swatch-color").attr("style", "background-color: #d25752;");
        if (id == "#Gray" || id == "#pinkfilter")
      {
        $(id+" .filter-swatch-color").addClass("display-n");
        $(id+" .closeIcone").removeClass("display-n");
      }
    }

    else {
      $(this).attr('data-click-state', 0);
      $(id+" a").attr("style", "color: #666 !important");
      $(id+" span").attr("style", "color: #666 !important");
      if (id == "#blackHeadband" || id == "#brownHeadband")
      {
        $(id+" .filter-swatch-color-img-contanir").attr("style", "border-color: #transparent !important");
        $(id+" a span").attr("style", "color: #666 !important");
        $(id+" span").attr("style", "color: #666 !important");
      }
        $("#pinkfilter .filter-swatch-color").attr("style", "background-color: #d25752;");
        if (id == "#Gray" || id == "#pinkfilter")
        {
          $(id+" .filter-swatch-color").removeClass("display-n");
          $(id+" .closeIcone").addClass("display-n");
        }
    }

});

//--------------------------
//-------- search pligin----
//-------------------------
function searchPlgin ()
{
  $('.item-card').parent(".ProductCartona").each(function(){
    $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    
    $('.search').on('keyup', function(){
    
    var searchTerm = $(this).val().toLowerCase();
    
        $('.item-card').parent(".ProductCartona").each(function(){
    
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
    
        });
    
    });
}
searchPlgin ();
/*------quick view------------- 
jQuery(document).ready(function($){
	//final width --> this is the quick view image slider width
	//maxQuickWidth --> this is the max-width of the quick-view panel
	var sliderFinalWidth = 400,
		maxQuickWidth = 900;

	//open the quick view panel
	$('.cd-trigger').on('click', function(event){
		var selectedImage = $(this).parent('.cd-item').children('img'),
			slectedImageUrl = selectedImage.attr('src');

		$('body').addClass('overlay-layer');
		animateQuickView(selectedImage, sliderFinalWidth, maxQuickWidth, 'open');

		//update the visible slider image in the quick view panel
		//you don't need to implement/use the updateQuickView if retrieving the quick view data with ajax
		updateQuickView(slectedImageUrl);
	});

	//close the quick view panel
	$('body').on('click', function(event){
		if( $(event.target).is('.cd-close') || $(event.target).is('body.overlay-layer')) {
			closeQuickView( sliderFinalWidth, maxQuickWidth);
		}
	});
	$(document).keyup(function(event){
		//check if user has pressed 'Esc'
    	if(event.which=='27'){
			closeQuickView( sliderFinalWidth, maxQuickWidth);
		}
	});

	//quick view slider implementation
	$('.cd-quick-view').on('click', '.cd-slider-navigation a', function(){
		updateSlider($(this));
	});

	//center quick-view on window resize
	$(window).on('resize', function(){
		if($('.cd-quick-view').hasClass('is-visible')){
			window.requestAnimationFrame(resizeQuickView);
		}
	});

	function updateSlider(navigation) {
		var sliderConatiner = navigation.parents('.cd-slider-wrapper').find('.cd-slider'),
			activeSlider = sliderConatiner.children('.selected').removeClass('selected');
		if ( navigation.hasClass('cd-next') ) {
			( !activeSlider.is(':last-child') ) ? activeSlider.next().addClass('selected') : sliderConatiner.children('li').eq(0).addClass('selected'); 
		} else {
			( !activeSlider.is(':first-child') ) ? activeSlider.prev().addClass('selected') : sliderConatiner.children('li').last().addClass('selected');
		} 
	}

	function updateQuickView(url) {
		$('.cd-quick-view .cd-slider li').removeClass('selected').find('img[src="'+ url +'"]').parent('li').addClass('selected');
	}

	function resizeQuickView() {
		var quickViewLeft = ($(window).width() - $('.cd-quick-view').width())/2,
			quickViewTop = ($(window).height() - $('.cd-quick-view').height())/2;
		$('.cd-quick-view').css({
		    "top": quickViewTop,
		    "left": quickViewLeft,
		});
	} 

	function closeQuickView(finalWidth, maxQuickWidth) {
		var close = $('.cd-close'),
			activeSliderUrl = close.siblings('.cd-slider-wrapper').find('.selected img').attr('src'),
			selectedImage = $('.empty-box').find('img');
		//update the image in the gallery
		if( !$('.cd-quick-view').hasClass('velocity-animating') && $('.cd-quick-view').hasClass('add-content')) {
			selectedImage.attr('src', activeSliderUrl);
			animateQuickView(selectedImage, finalWidth, maxQuickWidth, 'close');
		} else {
			closeNoAnimation(selectedImage, finalWidth, maxQuickWidth);
		}
	}

	function animateQuickView(image, finalWidth, maxQuickWidth, animationType) {
		//store some image data (width, top position, ...)
		//store window data to calculate quick view panel position
		var parentListItem = image.parent('.cd-item'),
			topSelected = image.offset().top - $(window).scrollTop(),
			leftSelected = image.offset().left,
			widthSelected = image.width(),
			heightSelected = image.height(),
			windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			finalLeft = (windowWidth - finalWidth)/2,
			finalHeight = finalWidth * heightSelected/widthSelected,
			finalTop = (windowHeight - finalHeight)/2,
			quickViewWidth = ( windowWidth * .8 < maxQuickWidth ) ? windowWidth * .8 : maxQuickWidth ,
			quickViewLeft = (windowWidth - quickViewWidth)/2;

		if( animationType == 'open') {
			//hide the image in the gallery
			parentListItem.addClass('empty-box');
			//place the quick view over the image gallery and give it the dimension of the gallery image
			$('.cd-quick-view').css({
			    "top": topSelected,
			    "left": leftSelected,
			    "width": widthSelected,
			}).velocity({
				//animate the quick view: animate its width and center it in the viewport
				//during this animation, only the slider image is visible
			    'top': finalTop+ 'px',
			    'left': finalLeft+'px',
			    'width': finalWidth+'px',
			}, 1000, [ 400, 20 ], function(){
				//animate the quick view: animate its width to the final value
				$('.cd-quick-view').addClass('animate-width').velocity({
					'left': quickViewLeft+'px',
			    	'width': quickViewWidth+'px',
				}, 300, 'ease' ,function(){
					//show quick view content
					$('.cd-quick-view').addClass('add-content');
				});
			}).addClass('is-visible');
		} else {
			//close the quick view reverting the animation
			$('.cd-quick-view').removeClass('add-content').velocity({
			    'top': finalTop+ 'px',
			    'left': finalLeft+'px',
			    'width': finalWidth+'px',
			}, 300, 'ease', function(){
				$('body').removeClass('overlay-layer');
				$('.cd-quick-view').removeClass('animate-width').velocity({
					"top": topSelected,
				    "left": leftSelected,
				    "width": widthSelected,
				}, 500, 'ease', function(){
					$('.cd-quick-view').removeClass('is-visible');
					parentListItem.removeClass('empty-box');
				});
			});
		}
	}
	function closeNoAnimation(image, finalWidth, maxQuickWidth) {
		var parentListItem = image.parent('.cd-item'),
			topSelected = image.offset().top - $(window).scrollTop(),
			leftSelected = image.offset().left,
			widthSelected = image.width();

		$('body').removeClass('overlay-layer');
		parentListItem.removeClass('empty-box');
		$('.cd-quick-view').velocity("stop").removeClass('add-content animate-width is-visible').css({
			"top": topSelected,
		    "left": leftSelected,
		    "width": widthSelected,
		});
	}
});
/*---------------------*/
/*-------- RangeSlider price -------------*/
class RangeSlider extends HTMLElement {
	constructor() {
		super();
	};
	async connectedCallback() {
		this.minValue = parseInt( this.getAttribute( "minValue" ) );
		this.maxValue = parseInt( this.getAttribute( "maxValue" ) );
		this.startMinPos = this.getAttribute( "startMinPos" );
		this.startMaxPos = this.getAttribute( "startMaxPos" );
		this.um = this.getAttribute( "um" );
		this.root = this.attachShadow( { mode: 'open' } );
		this.root.appendChild( document.querySelector( '#range-slider' ).content.cloneNode( true ) );
		this.slider = this.root.getElementById( 'slider-container' );
		this.sliderClientCoords = this.slider.getBoundingClientRect();
		this.sliderWidth = this.slider.offsetWidth - this.root.querySelector( ".slider-slider-touch" ).offsetWidth / 2;
		this.actualPosMin = this.root.querySelector( ".slider-slider-touch[data-value='min']" );
		this.actualPosMax = this.root.querySelector( ".slider-slider-touch[data-value='max']" );
		this.cursorWidth = this.root.querySelector( ".slider-slider-touch" );
		this.root.querySelector( ".calculate-header-box-title" ).innerText = this.getAttribute( "title" );
		this.root.getElementById( 'slider-value-min' ).innerText = this.startMinPos + ' ' + this.um;
		this.root.getElementById( 'slider-value-max' ).innerText = this.startMaxPos + ' ' + this.um;

		const normalize = ( val, minVal, maxVal, newMin, newMax ) => {
			const scaled = ( ( ( val - minVal ) / ( maxVal - minVal ) ) * ( newMax - newMin ) ) + newMin;
			return scaled;
		};

		window.addEventListener( 'resize', () => { this.sliderClientCoords = this.slider.getBoundingClientRect() } );
		this.root.querySelector( ".slider-slider-touch[data-value='min']" ).style.left = normalize( this.startMinPos, this.minValue, this.maxValue, 0, this.sliderWidth ) + 'px';
		this.root.querySelector( ".slider-slider-touch[data-value='max']" ).style.left = normalize( this.startMaxPos, this.minValue, this.maxValue, 0, this.sliderWidth ) + 'px';

		const onStart = event => {
			this.item = event.currentTarget;
			this.sliderCoords = {};
			this.sliderCoords.top = this.sliderClientCoords.top + pageYOffset;
			this.sliderCoords.left = this.sliderClientCoords.left + pageXOffset;
			document.addEventListener( 'mouseup', onStop );
			document.addEventListener( 'touchend', onStop );
			document.addEventListener( 'mousemove', onMove );
			document.addEventListener( 'touchmove', onMove );
			const itemClientCoords = this.item.getBoundingClientRect();
			const itemCoords = {};
			itemCoords.top = itemClientCoords.top + pageYOffset;
			itemCoords.left = itemClientCoords.left + pageXOffset;
			this.shiftX = event.pageX - itemCoords.left;
		};
		const onMove = event => {
			let newLeft = event.pageX - this.sliderCoords.left - this.shiftX;
			switch( this.item.dataset.value ) {
				case 'min':
					if ( newLeft + this.item.offsetWidth > this.actualPosMax.offsetLeft ) {
						return;
					};
					break;
				case 'max':
					if ( newLeft < this.actualPosMin.offsetLeft + this.item.offsetWidth ) {
						return;
					};
					break;
			};
			if( newLeft < 0 ) newLeft = 0;
			if( newLeft > this.sliderWidth ) newLeft = this.sliderWidth;
			this.item.style.left = newLeft + 'px';
			this.root.getElementById( `slider-value-${this.item.dataset.value}` ).innerText = Math.round( normalize( newLeft, 0, this.sliderWidth, this.minValue, this.maxValue ) ) + ' ' + this.um;
		};
		const onStop = () => {
			document.removeEventListener( 'mousemove', onMove );
			document.removeEventListener( 'touchmove', onMove );
			document.removeEventListener( 'mouseup', onStop );
			document.removeEventListener( 'touchend', onStop );
		};
		this.root.querySelectorAll( ".slider-slider-touch" ).forEach( element => {
			element.addEventListener( 'mousedown', onStart );
			element.addEventListener( 'touchstart', onStart );
		});
	};
};
customElements.define( "range-slider", RangeSlider );
/*-------- RangeSlider price -------------*/
$('#btnPriceFilter').on("click", function(e){
  e.preventDefault();
  let cardlenth =$( ".item-card" ).length;
   let minValue = $("#slider-value-min").html();
   let maxValue = $("#slider-value-max").html();
   console.log(cardlenth)
   console.log(minValue)
   console.log(maxValue)
   for(let i= 1 ;i<=cardlenth;i++)
   {
    let cardPricetext = $("#item-card-"+i+" .price bdi").html();
    let cardPrice= parseInt(cardPricetext);
    console.log(maxValue)
    $(".itemCardParent").addClass("display-n");

    if(minValue >= cardPrice && cardPrice<= maxValue)
    {
      $("#item-card"+i).parent().removeClass("display-n");
    }
   }
});

