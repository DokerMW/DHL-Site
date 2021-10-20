//youtube script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

onYouTubeIframeAPIReady = function () {
	player = new YT.Player('player', {
		height: '100%',
		width: '100%',
		videoId: 'R4gvUu4XVNg',  // youtube video id
		playerVars: {
			'autoplay': 0,
			'rel': 0,
			'showinfo': 0
		},
		events: {
			'onStateChange': onPlayerStateChange
		}
	});
}

var p = document.getElementById("player");
$(p).hide();

var t = document.getElementById("thumbnail");
t.src = "/img/video/bg.jpg";

onPlayerStateChange = function (event) {
	if (event.data == YT.PlayerState.ENDED) {
		$('.start-video').fadeIn('normal');
	}
}

var column = document.querySelectorAll('.provider-page__container');

$(document).on('click', '.start-video', function () {
	$(this).hide();
	$("#player").show();
	$(column).addClass('_down');
	$("#thumbnail_container").hide();
	$("h2").hide();
	player.playVideo();
});