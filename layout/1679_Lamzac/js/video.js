var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    var obj = $("#video1");
    var pos = obj.position();

    function onYouTubeIframeAPIReady() {
        // video1 must be the div #id of the video container
        player = new YT.Player('video1', {
            height: '481',
            width: '857',
            videoId: 'X-KAtKzeAZ8',
            playerVars: {
                controls: 0,
                showinfo:1,
                iv_load_policy:3,
                modestbranding:0,
            },

        });
    };