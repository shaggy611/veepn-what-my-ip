window.onload = function() {
    document.querySelector(".js-dns").onclick = function() {
        showPopUpDns();
    };

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
}
