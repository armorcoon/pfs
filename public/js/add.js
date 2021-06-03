const userForm = document.getElementById('user-form');
const userId = document.getElementById('user-id');
const userAddress = document.getElementById('user-address');

// Send POST to API to add user
async function addUser(e) {
  e.preventDefault();

  if (userId.value === '' || userAddress.value === '') {
    alert('Please fill out the form');
  }
  //send body to API
  const sendBody = {
    userId: userId.value,
    address: userAddress.value
  };
  try {
    const res = await fetch('/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendBody)
    });
    if (res.status === 400) {
      throw Error('User already exists!');
    }
    alert('Successfully Logedin!');
    window.location.href = '/index.html';
  } catch (err) {
    alert(err);
    return;
  }
}
userForm.addEventListener('submit', addUser);
