if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", function() {
    loaded();
  });
} else if (document.attachEvent) {
  document.attachEvent("onreadystatechange", function() {
    loaded();
  });
}

function loaded() {
  setInterval(loop, 252);
}

var x = 0;

var titleText = [
  "B",
  "Ba",
  "Ban",
  "Bank",
  "Banks",
  "BanksT",
  "BanksTh",
  "BanksTha",
  "BanksThaD",
  "BanksThaDa",
  "BanksThaDad",
  "BanksThaDadd",
  "BanksThaDaddy"
];

function loop() {
  document.getElementsByTagName("title")[0].innerHTML =
    titleText[x++ % titleText.length];
}
