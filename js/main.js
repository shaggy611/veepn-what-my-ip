window.onload = function() {
    let copyButton = document.querySelector(".copy-button");
    copyButton.onclick = function() {
        let ipInfo = document.querySelector(".client-ip");
        let copyText = document.querySelector(".client-ip").textContent;
        if(navigator.clipboard) {
            navigator.clipboard.writeText( copyText );
            copyButton.classList.add("copy-button-click:before");
        }
        else {
            let r = document.createRange();
            r.selectNode(ipInfo);
            document.getSelection().addRange(r);
            document.execCommand("copy");
        }
    }


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

    document.querySelector(".js-webrtc").onclick = function() {
        showPopUpWebRtc();
    };

    function showPopUpDns() {
        document.querySelector(".dns-pop-up").style.display = "block";
        document.querySelector(".js-blur").classList.add("blur");
        document.querySelector(".js-scroll").classList.add("unscrollable");
        document.querySelector(".js-ip-info").style.display = "none";
        document.querySelector(".js-scroll").scrollIntoView();
    };

    function showPopUpWebRtc() {
        document.querySelector(".webrtc-pop-up").style.display = "block";
        document.querySelector(".js-ip-info").style.display = "none";
        document.querySelector(".js-blur").classList.add("blur");
        document.querySelector(".js-scroll").classList.add("unscrollable");
        document.querySelector(".js-scroll").scrollIntoView();
    };

    document.querySelector(".js-close-dns").onclick = function() {
        document.querySelector(".dns-pop-up").style.display = "none";
        document.querySelector(".webrtc-pop-up").style.display = "none";
        document.querySelector(".js-ip-info").style.display = "flex";
        document.querySelector(".js-blur").classList.remove("blur");
        document.querySelector(".js-scroll").classList.remove("unscrollable");
    }

    document.querySelector(".js-close-webrtc").onclick = function() {
        document.querySelector(".dns-pop-up").style.display = "none";
        document.querySelector(".webrtc-pop-up").style.display = "none";
        document.querySelector(".js-ip-info").style.display = "flex";
        document.querySelector(".js-blur").classList.remove("blur");
        document.querySelector(".js-scroll").classList.remove("unscrollable");
    }
}
