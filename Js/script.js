addEventListener("load", function() {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}
(function(){
	if(typeof _bsa !== 'undefined' && _bsa) {
  		// format, zoneKey, segment:value, options
  		_bsa.init('flexbar', 'CKYI627U', 'placement:w3layoutscom');
  	}
})();

(function(){
if(typeof _bsa !== 'undefined' && _bsa) {
	// format, zoneKey, segment:value, options
	_bsa.init('fancybar', 'CKYDL2JN', 'placement:demo');
}
})();

(function(){
	if(typeof _bsa !== 'undefined' && _bsa) {
  		// format, zoneKey, segment:value, options
  		_bsa.init('stickybox', 'CKYI653J', 'placement:w3layoutscom');
  	}
})();
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-98H8KRKT85');

  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) { // Change this value to adjust when the background changes
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});