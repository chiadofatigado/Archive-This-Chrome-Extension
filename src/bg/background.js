// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

var menu = chrome.contextMenus.create({
    "title": "Archive This!",
    "contexts": ["all"]
  });

chrome.contextMenus.onClicked.addListener(function(activeTab)
{

	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    		var siteUrl = tabs[0].url;
		var arquiveUrl = "http://web.archive.org/save/";
	
	 	arquiveUrl += encodeURI(siteUrl);

	 	// Open the page up.
		chrome.tabs.create(
			{
				"url" : arquiveUrl
			}
		);
	});

});
