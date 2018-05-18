// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1200, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
  
  
  
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);




var player;
var nt=1;

var myPlaylist =['Sk_8BVu5Fnc','rVqAdIMQZlk','gYZA7pn6WM4'];
var myCurrentVideo = 0;


window.onYouTubeIframeAPIReady=function() {
    player = new YT.Player('video-placeholder', {
        width: 600,
        height: 400,
       
        playerVars: {
            color: 'red',
            controls: 1,
            loop: 1,
            enablejsapi:1,
            listType:'playlist',
            list: 'PLvLdCxqsf1XfCWEscqmV4OLU6nBNcAuZ1',
            index:1,
            modestbranding:1,
            fs:0,
            // origin rememeber to use this when ready to launch
            iv_load_policy:3,
            rel:0,
            showinfo:1,
           
            
            
            
        },
        events: {
            onReady: onPlayerReady,
          
            
           
            
        }
    });
};


function addToNt(event){
  
  if(event.data == YT.PlayerState.ENDED){
    nt++;
    
  }
  
}

function ntzero(){
  if(nt<=0){
    nt=3;
  }
   else if(nt>=3){
    nt=0;
  }
  
    
  
}




function onPlayerReady(event) {
    player.cuePlaylist({
      list: 'PLvLdCxqsf1XfCWEscqmV4OLU6nBNcAuZ1'
    });
    

    
$('#play').on('click', function () {
  
    player.playVideo();
   
});

$('#pause').on('click', function () {
   
    player.pauseVideo();
   
});

  
$('#next').on('click', function () {
   ntzero();
  
   player.loadPlaylist({
      list: 'PLvLdCxqsf1XfCWEscqmV4OLU6nBNcAuZ1',
      index: nt++,
    
       
    });
  
   console.log(nt);
});


$('#prev').on('click', function () {
    
   player.loadPlaylist({
     
      index: nt--,
      list: 'PLvLdCxqsf1XfCWEscqmV4OLU6nBNcAuZ1',
      
    });
    
    ntzero();
   console.log(nt);
});
    
  }

 
// function initialize(){

//     // Update the controls on load
//     updateTimerDisplay();
//     updateProgressBar();

//     // Clear any old interval.
//     clearInterval(time_update_interval);

//     // Start interval to update elapsed time display and
//     // the elapsed part of the progress bar every second.
//     time_update_interval = setInterval(function () {
//         updateTimerDisplay();
//         updateProgressBar();
//     }, 1000);

// }





// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
     
//     document.getElementById("navbar").style.top = "-125px";
//   }
//   prevScrollpos = currentScrollPos;
// }

(function($){
  $(function(){ 
    var scroll = $(document).scrollTop();
    var headerHeight = $('.landing-header').outerHeight();
    $(window).scroll(function() {
      var scrolled = $(document).scrollTop();
      if (scrolled > headerHeight){
        $('.landing-header').addClass('off-canvas');
        $('.clickDrop').removeClass('transparent');
      } else {
        $('.landing-header').removeClass('off-canvas');
        $('.clickDrop').addClass('transparent');
      }
        if (scrolled > scroll){
         $('.landing-header').removeClass('fixed');
         
         
        } else {
        $('.landing-header').addClass('fixed');
        $('.clickDrop').addClass('transparent');
        }            
      scroll = $(document).scrollTop(); 
     });
   });
})(jQuery);



$('.landing-header').on('click', function () {

if ($('.landing-header').hasClass('off-canvas'))
    {
        $('.landing-header').removeClass('off-canvas');
        $('.clickDrop').addClass('transparent');
    } 
});


$('.dropdown.keep-open').on({
    "shown.bs.dropdown": function() { this.closable = false; },
    "click":             function() { this.closable = true; },
    "hide.bs.dropdown":  function() { return this.closable; }
});





// LP animation

$('#play').on('click', function () {

    if ($('.circle').hasClass('paused'))
    {
        $('.circle').removeClass('paused');
    }
    if($('.dropdown-toggle').hasClass('transparent'))
   {
     $('.dropdown-toggle').removeClass('transparent');
     $('.dropdown-toggle').removeClass('disabled');
     $('.dropdown-toggle').addClass('on');
   }

});

$('#next').on('click', function () {

    if ($('.circle').hasClass('paused'))
    {
        $('.circle').removeClass('paused');
    }
    if($('.dropdown-toggle').hasClass('disabled')){
      $('.dropdown-toggle').removeClass('disabled');
      $('.dropdown-toggle').removeClass('transparent');
      $('.dropdown-toggle').addClass('on');
    }
   

});




$('#pause').on('click', function () {

    
        $('.circle').addClass('paused');
        
  if($('.dropdown-toggle').hasClass('on'))
   {
     $('.dropdown-toggle').removeClass('on');
     $('.dropdown-toggle').addClass('disabled');
     $('.dropdown-toggle').addClass('transparent');
   }
    

});



