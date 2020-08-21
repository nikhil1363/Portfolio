$(document).ready(function(){
          let nav_offset_top = $('.header_section').height() + 50;
          function navbarFixed() {
              if ($('.header_section').length) {
                  $(window).scroll(function () {
                      let scroll = $(window).scrollTop();
                      if (scroll >= nav_offset_top) {
                          $('.header_section .main').addClass('navbar_fixed');
                      } else {
                          $('.header_section .main').removeClass('navbar_fixed');
                      }
                  })
              }
          }
         navbarFixed();   
        });


        $(document).ready(function(){
          let $btns = $('.project-section .button-group button');
          $btns.click(function (e) {

            $('.project-section .button-group button').removeClass('active');
                e.target.classList.add('active');
                let selector = $(e.target).attr('data-filter');
                $('.project-section .grid').isotope({
                     filter: selector
                });
              return false;
            })

            $('.project-section .button-group #all').trigger('click');
            $('.project-section .grid .project-link').magnificPopup({
                type: 'image',
                gallery: { enabled: true }
            });  
        });

 $(document).ready(function(){
    
    var navTop = $('#navbar_content').offset().top;
    var navHeight = $('#navbar_content').height();
    var windowH = $(window).height();
    
    $('.section').height(windowH);
    
    $(document).scroll(function(){
      var st = $(this).scrollTop();
        
        //for the nav bar:
      if(st > navTop ){
        $('#navbar_content').addClass('fix');
        $('.section:eq(0)').css({'margin-top':navHeight});//fix  scrolling issue due to the fix nav bar
      }else{
        $('#navbar_content').removeClass('fix');
        $('.section:eq(0)').css({'margin-top':'0'});
      }
        
      $('.section').each(function(index, element) {
        if(st + navHeight > $(this).offset().top && st + navHeight  <= $(this).offset().top + $(this).height()  ){
          $(this).addClass('active');	
                
                var id = $(this).attr('id');
                $('a[href="#'+id+'"]').parent('li').addClass('active');
          // or $('#nav li:eq('+index+')').addClass('active');
        }else{
          $(this).removeClass('active');
                
                var id = $(this).attr('id');
                $('a[href="#'+id+'"]').parent('li').removeClass('active');
          //or $('#nav li:eq('+index+')').removeClass('active');
        }
        
      });
      
    });
        
    });