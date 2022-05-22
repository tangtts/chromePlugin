document.addEventListener('DOMContentLoaded', function () {
  chrome.browserAction.setBadgeText({ text: 'today' });
  chrome.storage.sync.get({ lastTime: "" }, function (item) {
    if (item.lastTime == new Date().getDate()) {
      var notification = new Notification('小唐提醒', {
        icon: 'img/6.png',
        body: "今天是聪聪大姨妈的日子",
        image: "img/6.png",
      });

      notification.onclick = function () {
        window.open("https://www.jd.com/");
      };
    }
  })
});

chrome.contextMenus.create({
  // page selection,video 
  id: "addPage",
  contexts: ["selection"],
  title: "聪聪右键"
});
chrome.contextMenus.onClicked.addListener(function (data) {
  alert(data.selectionText)
})
// 监听 storage 的变化
chrome.storage.onChanged.addListener(function (changes, storageName) {


  alert(changes.lastTime.newValue)

})
