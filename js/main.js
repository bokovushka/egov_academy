// mobile menu
(function () {
  const header_burger = document.querySelector(".header_burger");
  const mobile_menu = document.querySelector(".header_menu");
  // const menu = document.querySelector(".nav li");
  // const nav = document.querySelector(".nav");
  // nav.addEventListener("click", () => {
  //   mobile_menu.classList.toggle("header_menu_active");
  //   header_burger.classList.toggle("header_burger_active");
  // });
  header_burger.addEventListener("click", () => {
    header_burger.classList.toggle("header_burger_active");
    mobile_menu.classList.toggle("header_menu_active");
  });
})();

// filter
$(function () {
  let filter = $("[data-filter]");

  filter.on("click", function (event) {
    event.preventDefault();

    let cat = $(this).data("filter");

    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
      $("[data-filter='all']").addClass("active_categorie");
    } else {
     
      $("[data-cat]").each(function () {
        let workCat = $(this).data("cat");

        $("[data-filter]").removeClass("all_categories");
        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });
});

// filter block
$(function () {
  let filter = $("[data-filter_block]");

  filter.on("click", function (event) {
    event.preventDefault();

    let categorie = $(this).data("filter_block");

    if (categorie == "city") {
      $("[data-block]").addClass("hide_block");
      $("[data-block='city']").removeClass("hide_block");
    } else {
      $("[data-block]").each(function () {
        let workCategorie = $(this).data("block");

        $("[data-filter_block]").removeClass("active_categorie");

        if (workCategorie != categorie) {
          $(this).addClass("hide_block");
        } else {
          $(this).removeClass("hide_block");
        }
      });
    }
  });
});

// hover block
$(document).ready(function () {
  $(".subject_webinars .webinar_block").hover(
    function () {
      $(this).addClass("webinar_block_active");
    },
    function () {
      $(this).removeClass("webinar_block_active");
    }
  );
});

$(document).ready(function () {
  $(".scroll_info").hover(
    function () {
      $(this).addClass("scroll_info_hover");
    },
    function () {
      $(this).removeClass("scroll_info_hover");
    }
  );
});

// scroll
$('a[href^="#"]').click(function(e){
  e.preventDefault();
  let anchor = $(this).attr('href');  
  $('html, body').animate({       
  scrollTop:  $(anchor).offset().top  
  }, 600);                            
  });

//height=height
// $(document).ready(function () {
//     function heightBlock(column){
//         var myblock = 0 ;
//         column.each(function(){
//             thisHight =$(this).height();
//             if (thisHight>myblock){
//                 myblock=thisHight;
//             }
//         });
//         column.height(myblock);
//     };
//     heightBlock($(".slide"));
// });

// button show
$(document).ready(function () {
  $(".slide").hover(
    function () {
      $(this).addClass("slide_active");
    },
    function () {
      $(this).removeClass("slide_active");
    }
  );
});

// video show
$( '.scroll .scroll_block' ).on('click', function() {
  $('.substruction_wrapper iframe').fadeOut();
  $('.substruction_wrapper iframe[video="' + $(this).data("video") + '"]').fadeIn();

  return false;
});

