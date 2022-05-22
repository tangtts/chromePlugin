

export function notice() {
  var notification = new Notification('小唐提醒', {
    icon: '../img/6.png',
    body: "今天是聪聪大姨妈的日子",
    image: "../img/6.png",
  });

  notification.onclick = function () {
    window.open("https://www.jd.com/");
  };
}