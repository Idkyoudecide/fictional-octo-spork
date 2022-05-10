const firebaseConfig = {
    apiKey: "AIzaSyBSgeTasAQpw7tBjU6_K7P4qYw556zqIM0",
    authDomain: "the-orb-of-dominance.firebaseapp.com",
    databaseURL: "https://the-orb-of-dominance-default-rtdb.firebaseio.com",
    projectId: "the-orb-of-dominance",
    storageBucket: "the-orb-of-dominance.appspot.com",
    messagingSenderId: "5785908640",
    appId: "1:5785908640:web:9efe432f100944ee47a0c5"
  };

  firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name = " + Room_names);
                  var row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML = row;
                  //End code
            });
      });
}
getData();

function addRoom() {
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location("letschatinsideroom.html");
}
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = ("letschatinsideroom.html");
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}