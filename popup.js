document.getElementById('askButton').addEventListener('click', function() {
    chrome.tabs.executeScript({
      code: 'console.log("AskAI button clicked!");'
    });
  });
  