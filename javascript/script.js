
user.addEventListener('click', (e) => {


const username = document.getElementById('userName').value;  
const passWord = document.getElementById('passWord').value;
const eMail = document.getElementById('eMail').value;
const phoneNumber = document.getElementById('phoneNumber').value;
const birthDate = document.getElementById('birthDate').value;
const auth = document.getElementById('btn').value;



  createUserWithEmailAndPassword(auth, eMail, passWord, username, phoneNumber, birthDate)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage)
    // ..
  });

})