const userForm = document.getElementById("user-form");
const userId = document.getElementById("user-id");
const userName = document.getElementById('user-name');
const userPhone = document.getElementById('user-phone');
var longitude;
var latitude;
navigator.geolocation.getCurrentPosition(position =>{
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
})

async function addUserGps(e) {
  e.preventDefault();
  //send body
  const sendBody = {
    userId: userId.value,
    userName:userName.value,
    userPhone:userPhone.value,
    location: [latitude,longitude]
  };
  try {
    const res = await fetch("/api/v2/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendBody),
    });
    if (res.status === 400) {
      throw Error("User already exists!");
    }
    alert("Successfully Logedin!");
    window.location.href = "/index.html";
  } catch (err) {
    alert(err);
    return;
  }
  if (userId.value === "") {
    alert("Please fill in fields");
  }
}
userForm.addEventListener("submit", addUserGps);
