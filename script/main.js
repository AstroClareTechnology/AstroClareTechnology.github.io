
function mobMenu(){
    if(document.getElementById("floatNav").style.display == "none"){
        document.getElementById("floatNav").style.display = "block";
        document.getElementById("exit").style.display = "block";
    }
    else{
        document.getElementById("floatNav").style.display = "none";
    }
}


//Database function

    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
    import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyD2lKo8fUMsl4z7VaSjNVs8qVEDF5teXkk",
      authDomain: "my-userlogin-14bd9.firebaseapp.com",
      projectId: "my-userlogin-14bd9",
      storageBucket: "my-userlogin-14bd9.appspot.com",
      messagingSenderId: "911606012565",
      appId: "1:911606012565:web:20553bd82d4ed416fe999c",
      measurementId: "G-MDRJC2DJVE"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);


  window.login = function () {
        console.log("Function is Working!")

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User successfully logged in
                const user = userCredential.user;
                // Redirect to another page
                window.location.href = 'index.html';
            })
            .catch((error) => {
                // Handle errors during login
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
            });
}
            
    // Attach the login function to the button click event
    document.getElementById('loginBtn').addEventListener('click', login);