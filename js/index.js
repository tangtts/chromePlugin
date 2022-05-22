const dateInput = document.getElementById("dateInput");
const numberInput = document.getElementById("numberInput");
const search = document.getElementById("search");
const totalTime = document.getElementById("totalTime");

chrome.storage.sync.get("lastTime", function (item) {
  isShowBadge(item.lastTime)
})

function isShowBadge(condition) {
  if (condition != '' && condition == new Date().getDate()) {
    chrome.browserAction.setBadgeText({ text: 'today' });
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
  } else {
    chrome.browserAction.setBadgeText({ text: '' });
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 255, 255, 0] });
  }
}

function init() {


  chrome.storage.sync.get({
    dateInputValue: new Date(),
    numberInputValue: 28
  }, function (items) {

    dateInput.value = items.dateInputValue
    numberInput.value = items.numberInputValue;

    let time = new Date(dateInput.value).setDate(Number(new Date(dateInput.value).getDate()) + Number(numberInput.value))
    totalTime.innerHTML = new Date(time).toLocaleDateString()
    isShowBadge(new Date(time).getDate())
  });

}

function changeInput() {
  let time = new Date(dateInput.value).setDate(Number(new Date(dateInput.value).getDate()) + Number(numberInput.value))

  chrome.storage.sync.set({
    dateInputValue: dateInput.value,
    numberInputValue: numberInput.value,
    lastTime: new Date(time).getDate()
  });
  totalTime.innerHTML = new Date(time).toLocaleDateString()

  isShowBadge(new Date(time).getDate())

}

document.getElementById("search2").addEventListener("click", function () {
  var notciOption = {
    type: "basic",
    title: "姓名",
    iconUrl: "img/6.png",
    message: "艹"
  }

  chrome.notifications.create("title", notciOption)
})


window.onload = init


search.addEventListener("click", changeInput);