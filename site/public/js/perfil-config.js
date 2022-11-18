function logout() {
  sessionStorage.clear();
  link_login();
}

function link_login() {
  window.location.href = "login.html";
}