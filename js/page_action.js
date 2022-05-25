
// 后台页面接收


chrome.runtime.onMessage.addListener(function (req, sender, res) {
  console.log(req, "req")
  if (req.todo == 'hello') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.pageAction.show(tabs[0].id)
    })
  }
})