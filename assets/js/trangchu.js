const navAccountImg = $(".nav__account-img");
const navAccount = $(".nav__account");
const searchItemElement = $("#search__item");

navAccountImg.onclick = function () {
  navAccount.classList.toggle("active");
};

navNotify.onclick = () => {
  navNotify.classList.toggle("active");
};

searchItemElement.onclick = () => {
  window.location.href = "./trang noi dung (book now )/index.html";
};
