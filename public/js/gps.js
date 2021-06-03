const userForm = document.getElementById("user-form");
const userId = document.getElementById("user-id");
var long;
var lat;
navigator.geolocation.getCurrentPosition(position =>{
  lat = position.coords.latitude;
  long = position.coords.longitude;
})

async function addUserGps(e) {
  e.preventDefault();
  //send body
  const sendBody = {
    userId: userId.value,
    location: [lat,long]
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
    window.location.href = "/gps.html";
  } catch (err) {
    alert(err);
    return;
  }
  if (userId.value === "") {
    alert("Please fill in fields");
  }
}
userForm.addEventListener("submit", addUserGps);
