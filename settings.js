document.addEventListener('DOMContentLoaded', function(){

	var input = document.getElementById('clean-option');
	var ban_value = document.getElementById('ban_this_shit').value;
	var btn = document.getElementById('myBtn');
	// set the initial state of the checkbox
	chrome.storage.sync.get("clean_news_feed", function(data){
		if (data["clean_news_feed"]){
			input.checked = true;
		} else {
			input.checked = false;
		}
	});

	btn.addEventListener("click", function(){
		ban_value = document.getElementById('ban_this_shit').value;
		chrome.storage.sync.set({clean_news_feed: input.checked, banValue: ban_value});

	});
	input.addEventListener("change", function(){
		chrome.storage.sync.set({clean_news_feed: input.checked});

	});


});