// const userForm = document.getElementById('user-form');
// const userId = document.getElementById('user-id');
// const userAddress = document.getElementById('user-address');

// Send POST to API to add user
async function addUser(e) {
  e.preventDefault();
  var noGeolocation = ()=>{
      alert("unable to find your location");
  };
  if(!navigator.geolocation || !document.querySelector){
      noGeolocation();
  }
  else{
      navigator.geolocation.getCurrentPosition(
        successCallback = (position)=>{
            console.log(position);
          },
        errorCallback = (position)=>{
              noGeolocation();
          }
      );
  }
};

  if (userId.value === ''){
    alert('Please fill in fields');
  }
  const sendBody = {
    userId: userId.value,
    address: userAddress.value
  };

//   try {
//     const res = await fetch('/api/v1/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(sendBody)
      
//     });

//     if (res.status === 400) {
//       throw Error('User already exists!');
//     }
//     window.location.href = '/index.html';
//   } catch (err) {
//     alert(err);
//     return;
//   }

// userForm.addEventListener('submit', addUser);
