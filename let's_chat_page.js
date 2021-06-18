   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyBkBQOrRC3OhRDSMsyA0C46y-DPNdxrmSc",
    authDomain: "let-s-chat-app-76800.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-76800-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-76800",
    storageBucket: "let-s-chat-app-76800.appspot.com",
    messagingSenderId: "296655936574",
    appId: "1:296655936574:web:4c46a60516cb0d3d07856f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
 });

 document.getElementById("msg").value = "";
}


