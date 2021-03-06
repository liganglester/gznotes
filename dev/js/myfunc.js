// from http://popdevelop.com/2010/08/touching-the-web/
// make the gototop div dragable on pad and phone
// event list at: https://developer.apple.com/library/prerelease/ios/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW1
$.fn.draggable = function() {
  var offset = null;
  var start = function(e) {
	var orig = e.originalEvent;
	var pos = $(this).position();
	offset = {
	  x: orig.changedTouches[0].pageX - pos.left,
	  y: orig.changedTouches[0].pageY - pos.top
	};
  };
  var moveMe = function(e) {
	e.preventDefault();
	var orig = e.originalEvent;
	$(this).css({
	  top: orig.changedTouches[0].pageY - offset.y - window.pageYOffset,// the [- window.pageYOffset] part is a bugfix to original post;
	  left: orig.changedTouches[0].pageX - offset.x
	});
  };
  this.bind("touchstart", start);
  this.bind("touchmove", moveMe);
};

// handling of cookies
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires +";path=/";
} 
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 
function isNewVisitor() {
    var flg = getCookie("gznotes-visited");
    if (flg === "") {
		return true;
    } else {
		return false;
    }
}