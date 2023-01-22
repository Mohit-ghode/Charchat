const firebaseConfig = {
      apiKey: "AIzaSyBKiom1jO_XG3PkKh-NI2rZjaRA2FIqDjs",
      authDomain: "charchata-3ea05.firebaseapp.com",
      databaseURL: "https://charchata-3ea05-default-rtdb.firebaseio.com",
      projectId: "charchata-3ea05",
      storageBucket: "charchata-3ea05.appspot.com",
      messagingSenderId: "992012313288",
      appId: "1:992012313288:web:6a97b8da444bbddad2fbfd",
      measurementId: "G-LFVFNL316H"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);   
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {

    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html"
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name -" + Room_names);
            row = "<div class= 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
       window.location = ("index.html");
}