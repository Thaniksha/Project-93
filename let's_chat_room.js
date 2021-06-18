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

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "let's_chat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  }); 

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "let's_chat_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  
