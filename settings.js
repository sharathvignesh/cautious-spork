document.addEventListener('DOMContentLoaded', function(){

	var input = document.getElementById('clean-option');
	var ban_value = document.getElementById('ban_this_shit').value;
	var btn = document.getElementById('myBtn');
	var clearone = document.getElementById('clearone');
	var clearall = document.getElementById('clearall');
	// // set the initial state of the checkbox
	// chrome.storage.sync.get('banValue', function (data) {
	// 	console.log(data);
	// });

	chrome.storage.sync.get("clean_news_feed", function(data){
		if (data["clean_news_feed"]){
			input.checked = true;
		} else {
			input.checked = false;
		}
	});

	btn.addEventListener("click", function(){
		ban_value = document.getElementById('ban_this_shit').value;
		chrome.storage.sync.get({banValue: []}, function (data) {
			let banValue = data.banValue;
			banValue.push(ban_value);
			chrome.storage.sync.set({clean_news_feed: input.checked, banValue: banValue}, function () {
				chrome.storage.sync.get('banValue', function (data) {
					console.log(data);
				})
			});
		});
	});

	clearone.addEventListener("click", function () {
		clear_value = document.getElementById('ban_this_shit').value;
		chrome.storage.sync.get('banValue', function (data) {
			let newArr = data.banValue.filter(a => a!=clear_value);
			console.log(newArr);
			chrome.storage.sync.set({banValue: newArr});
		});
	});

	clearall.addEventListener("click", function () {
		chrome.storage.sync.set({banValue: []});
	});

	input.addEventListener("change", function(){
		chrome.storage.sync.set({clean_news_feed: input.checked});
	});
});