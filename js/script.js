 
    

window.onload = function () {
            
    var stars = document.getElementsByClassName('star');
    
    for (var i = 0; i < stars.length; i++) {
        stars[i].onclick = function() {
            toggleStar(this);
            return false;
        }
    }
}

function toggleStar(star) {
    if (star.innerHTML == '<i class="fas fa-star"></i>') {
        star.innerHTML = '<i class="far fa-star"></i>';
    } else {
        star.innerHTML = '<i class="fas fa-star"></i>';
    }
}


    $('.top').hide();
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 3000){
            $('.top').fadeIn(500);
        }
        else{
            $('.top').fadeOut(500);
        }
    })
    
    $('.top').click(function(){
        $('html, body').animate({scrollTop: 0}, 200)
    })
    
    
 