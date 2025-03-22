// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzfwIALQprR78Ingy3ozODzaKV01TLYXU",
  authDomain: "secc-f3539.firebaseapp.com",
  projectId: "secc-f3539",
  storageBucket: "secc-f3539.firebasestorage.app",
  messagingSenderId: "191484572024",
  appId: "1:191484572024:web:bfb5337d89bc875785588d",
  measurementId: "G-7CE9CKH97R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Elements
const googleLoginBtn = document.getElementById('google-login');
const userInfo = document.getElementById('user-info');
const userName = document.getElementById('user-name');
const logoutBtn = document.getElementById('logout-btn');

// Google login functionality
const provider = new firebase.auth.GoogleAuthProvider();

googleLoginBtn.addEventListener('click', () => {
  firebase.auth().signInWithPopup(provider).then((result) => {
    const user = result.user;
    userName.textContent = user.displayName;
    userInfo.style.display = 'block';
    googleLoginBtn.style.display = 'none';
  }).catch((error) => {
    console.error("Error during login: ", error.message);
  });
});

// Logout functionality
logoutBtn.addEventListener('click', () => {
  firebase.auth().signOut().then(() => {
    userInfo.style.display = 'none';
    googleLoginBtn.style.display = 'block';
  }).catch((error) => {
    console.error("Error during logout: ", error.message);
  });
});

// Check if the user is already logged in
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    userName.textContent = user.displayName;
    userInfo.style.display = 'block';
    googleLoginBtn.style.display = 'none';
  } else {
    userInfo.style.display = 'none';
    googleLoginBtn.style.display = 'block';
  }
});

// Button click behavior to change iframe source
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const url = button.getAttribute('data-url');
    document.getElementById('website-frame').src = url;
  });
});
