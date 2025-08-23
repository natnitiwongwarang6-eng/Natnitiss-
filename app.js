// mock login
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("loggedIn", "true");
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    alert("❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("app").style.display = "none";
}

// mock API call
function callAPI(action) {
  let resultBox = document.getElementById("result");
  if (action === "order") {
    resultBox.innerHTML = "✅ สั่งซื้อสำเร็จ (API จำลอง)";
  } else if (action === "status") {
    resultBox.innerHTML = "📊 สถานะออเดอร์: กำลังดำเนินการ";
  }
}

// auto check login
window.onload = function() {
  if (localStorage.getItem("loggedIn") === "true") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("app").style.display = "block";
  }
};
