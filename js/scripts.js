var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox'); 
var $close = $('.btn-close');

$thumbs.on('click','a',function(e){
	e.preventDefault();

	var big = $(this).attr('href');
	console.log(big);
	$lbImg.attr('src',big);
	$lb.attr('data-state','visible');

	$close.on('click', function(e){
	$lb.attr('data-state','hidden');

	})


})