import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyChs7gmgWyFg5V_6cUEpeSfkG8W3RUP39Q",
    authDomain: "otp-demo-db720.firebaseapp.com",
    projectId: "otp-demo-db720",
    storageBucket: "otp-demo-db720.appspot.com",
    messagingSenderId: "913673811102",
    appId: "1:913673811102:web:0555307dda8362b179378f",
    measurementId: "G-KM7W66CZQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {

    signInWithPopup(auth, provider)
        .then((result) => {

            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href = "https://yellowsense.in";

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

        });


})
