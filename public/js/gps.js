const userForm = document.getElementById('user-form');
const userId = document.getElementById('user-id');


async function addUserGps(e) {
  e.preventDefault();
  var noGeolocation = ()=>{
      alert("unable to find your location");
  };
  if(!navigator.geolocation || !document.querySelector){
      noGeolocation();
  }
  else{
    const successCallback = (position) => {
      console.log(position);
      userAddress = position;
    }
    const errorCallback = (error) =>{
      console.error(error);
    };
    navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
  }
  if (userId.value === ''){
    alert('Please fill in fields');
  }
}
userForm.addEventListener('submit', addUserGps);
