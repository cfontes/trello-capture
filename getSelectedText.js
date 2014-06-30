// Gets user selected text from the active tab.
// Should be work on most browsers
(function(){
	var t = '';
	if(window.getSelection) {
	    t = window.getSelection().toString();
	} else if(document.getSelection) {
	    t = document.getSelection().toString();
	} else if(document.selection) {
	    t = document.selection.createRange().text;
	}
	if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection) {
        document.selection.empty();
    }
	return t;
})()