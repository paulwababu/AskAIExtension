chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
      code: 'console.log("AskAI background script triggered!");'
    });
  });
  