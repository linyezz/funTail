//公共函数
window.Comm = {
	//屏幕适配
	configScreen: function() {
		var page = window;
		page.onload = function() {
			response();
		}
		page.addEventListener('resize', response, false);
	},
	jsonToStr:function(jsonObj){
		return JSON.stringify(jsonObj);
	},
	strT0Json:function(strObj){
		return JSON.parse(strObj);
	},
	
}

function response() {
	var o_width = document.documentElement.getBoundingClientRect().width
	var h = document.querySelector('html');
	h.style.fontSize = o_width / 37.5 + 'px';
}