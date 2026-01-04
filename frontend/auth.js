const API = "http://localhost:5000/api";

/* LOGIN */
async function login(){
  const email = emailInput.value;
  const password = passwordInput.value;

  const res = await fetch(`${API}/auth/login`,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body:JSON.stringify({email,password})
  });

  const data = await res.json();
  localStorage.setItem("token", data.token);
  location.href="dashboard.html";
}

/* LOGOUT */
function logout(){
  localStorage.clear();
  location.href="index.html";
}
