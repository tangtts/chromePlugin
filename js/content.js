

chrome.runtime.sendMessage({ todo: 'hello' }, function () {
  console.log("a");
})