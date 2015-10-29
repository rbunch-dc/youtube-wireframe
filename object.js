var otherVideos = [
	{
	    title: "The Best of Rachmaninoff",
	    thumb: "https://i.ytimg.com/vi/vpaPWuDQUcc/default.jpg",
	    url: "https://www.youtube.com/watch?v=vpaPWuDQUcc",
	    duration: "2:43:58",
	    postedBy: "Classical Music11",
	    totalViews: 857721
	},
	{
	    title: "Mix - Chopin - Complete Nocturnes",
	    thumb: "https://i.ytimg.com/vi/liTSRH4fix4/default.jpg",
	    url: "https://www.youtube.com/watch?v=liTSRH4fix4&list=RDliTSRH4fix4",
	    duration: "1:56:17",
	    postedBy: "Brigitte Engerer",
	    totalViews: 3885112
	},
	{
	    title: "The Best of Debussy",
	    thumb: "https://i.ytimg.com/vi/qRZmdzCGLYw/default.jpg",
	    url: "https://www.youtube.com/watch?v=qRZmdzCGLYw",
	    duration: "1:47:16",
	    postedBy: "Classical Music11",
	    totalViews: 3885112
	},
	{
		title: "The Best of Classical Music - Mozart, Beethoven, Bach, Chopin... Classical Music Piano Playlist Mix",
	    thumb: "https://i.ytimg.com/vi_webp/jgpJVI3tDbY/default.webp",
	    url: "https://www.youtube.com/watch?v=jgpJVI3tDbY",
	    duration: "3:28:20",
	    postedBy: "Live your Dreams 2",
	    totalViews: 12215066
	},
	{
		title: "Clair de Lune (Extended)",
	    thumb: "https://i.ytimg.com/vi/ea2WoUtbzuw/default.jpg",
	    url: "https://www.youtube.com/watch?v=ea2WoUtbzuw",
	    duration: "58:09",
	    postedBy: "luthfoxian",
	    totalViews: 3886245
	},
	{
		title: "The Best of Chopin",
	    thumb: "https://i.ytimg.com/vi_webp/wygy721nzRc/default.webp",
	    url: "https://www.youtube.com/watch?v=wygy721nzRc",
	    duration: "1:54:57",
	    postedBy: "HALIDONMUSIC",
	    totalViews: 30945365
	},
	{
		title: "Beethoven 9 - Chicago Symphony Orchestra - Riccardo Muti",
	    thumb: "https://i.ytimg.com/vi_webp/rOjHhS5MtvA/default.webp",
	    url: "https://www.youtube.com/watch?v=rOjHhS5MtvA",
	    duration: "1:21:23 ",
	    postedBy: "Chicago Symphony Orchestra",
	    totalViews: 848039
	},
	{
		title: "Four Seasons ~ Vivaldi",
	    thumb: "https://i.ytimg.com/vi_webp/GRxofEmo3HA/default.webp",
	    url: "https://www.youtube.com/watch?v=GRxofEmo3HA",
	    duration: "42:00 ",
	    postedBy: "AnAmericanComposer",
	    totalViews: 77817789
	}
];


var videosBySamePoster = [
	{
	    title: "StarCraft II: Legacy of the Void Opening Cinematic",
	    thumb: "https://i.ytimg.com/vi_webp/M_XwzBMTJaM/default.webp",
	    url: "https://www.youtube.com/watch?v=M_XwzBMTJaM",
	    duration: "29:51",
	    postedBy: "StarCraft",
	    totalViews: 3927195
	},
	{
	    title: "Legacy of the Void Prologue - Whispers of Oblivion",
	    thumb: "https://i.ytimg.com/vi/2qJgSR7C2FM/default.jpg",
	    url: "https://www.youtube.com/watch?v=2qJgSR7C2FM",
	    duration: "3:19",
	    postedBy: "StarCraft",
	    totalViews: 640699
	},
	{
	    title: "StarCraft II - Protoss Overview",
	    thumb: "https://i.ytimg.com/vi/m0g0MpllFCs/default.jpg",
	    url: "https://www.youtube.com/watch?v=m0g0MpllFCs",
	    duration: "3:36",
	    postedBy: "StarCraft",
	    totalViews: 1112322
	}
];

$(document).ready(function() {

	//Use jQuery to find the current height of the video div on load
	//and set it inline css
	var vidDivHeight = $('#vids').height();
	$('#vids').css('height', vidDivHeight);

	function updateVideos(){
		$('#vids').html("");
		for(i=0; i<otherVideos.length; i++){
		    var title = otherVideos[i].title;
		    var thumb = otherVideos[i].thumb;
		    var url = otherVideos[i].url;
		    var duration = otherVideos[i].duration;
		    var postedBy = otherVideos[i].postedBy;
		    var totalViews = otherVideos[i].totalViews;

			var html = '<div class="videobox col-sm-3">';
			    html +=		'<div class="video-img">';
				html +=			'<img src="'+ thumb +'">';
				html +=		'</div>';

			    html +=		'<div class="videobox-right">';
			    html +=			'<div class="title">'+ title + '</div>';
			    html +=			'<div class="url">'+ url + '</div>';
			    html +=			'<div class="duration">'+ duration + '</div>';
			    html +=			'<div class="duration">'+ postedBy + '</div>';
			    html +=			'<div class="duration">'+ totalViews + '</div>';
				html +=		'</div>';		    
			    html +=	'</div>';
			$('#vids').append(html);
		}
	}

		$('#add-video-form').submit(function(){
			var theObject = {
				title: $('#title').val(),
				thumb: $('#thumb').val(),
				url: $('#url').val(),
				duration: $('#duration').val(),
				postedBy: $('#posted-by').val(),
				totalViews: $('#total-views').val()
			}
			
			// otherVideos.unshift(theObject); //This will add the new object to the beginning of the array
			otherVideos.pop(); //Remove the last object so we still have 8
			updateVideos(); //Call updateVideos 
			event.preventDefault(); //Keep the form from submitting
		});
		updateVideos(); //Call updateVideos on load
});



