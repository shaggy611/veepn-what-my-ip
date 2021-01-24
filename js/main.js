window.onload = function() {
    $(".video-poster-play-btn").on('click', function(ev) {
        $(".video-poster").css({'display' : 'none'});
        $(".video-poster-play-btn").css({'display' : 'none'});
        // $("#video-youtube")[0].src += "&autoplay=1";
        $("#video-youtube").attr('src' , 'https://www.youtube.com/embed/UKNjUsybCNk?rel=0&autoplay=1');
        ev.preventDefault();
     
      });
      
    document.querySelector(".js-dns").onclick = function() {
        showPopUpDns();
    };

    // document.querySelector(".js-dns-hide").onclick = function() {
    //     showPopUpDnsHide();
    // };

    document.querySelector(".js-webrtc").onclick = function() {
        showPopUpWebRtc();
    };

    function showPopUpDns() {
        document.querySelector(".dns-pop-up").style.display = "block";
        document.querySelector(".js-ip-info").style.display = "none";
    };

    function showPopUpWebRtc() {
        document.querySelector(".webrtc-pop-up").style.display = "block";
        document.querySelector(".js-ip-info").style.display = "none";
    };

    function showPopUpDnsHide() {
        document.querySelector(".hide-dns-pop-up").style.display = "block";
        document.querySelector(".js-ip-info-hide").style.display = "none";
    };

    document.querySelector(".js-close-dns").onclick = function() {
        document.querySelector(".dns-pop-up").style.display = "none";
        document.querySelector(".webrtc-pop-up").style.display = "none";
        document.querySelector(".js-ip-info").style.display = "flex";
    }

    document.querySelector(".js-close-webrtc").onclick = function() {
        document.querySelector(".dns-pop-up").style.display = "none";
        document.querySelector(".webrtc-pop-up").style.display = "none";
        document.querySelector(".js-ip-info").style.display = "flex";
    }

    document.querySelector(".js-close-dns-hide").onclick = function() {
        document.querySelector(".hide-dns-pop-up").style.display = "none";
        document.querySelector(".js-ip-info-hide").style.display = "flex";
    }
}
