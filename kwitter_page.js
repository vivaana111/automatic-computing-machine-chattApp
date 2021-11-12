//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCS96yqNTwRqBySyHfaE2tSvuop5u3Ex6U",
    authDomain: "twitter-dee9b.firebaseapp.com",
    databaseURL: "https://twitter-dee9b-default-rtdb.firebaseio.com",
    projectId: "twitter-dee9b",
    storageBucket: "twitter-dee9b.appspot.com",
    messagingSenderId: "870843439844",
    appId: "1:870843439844:web:f7f97f2772ece3a557aaf1"
  };
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name") ; 
  room_name = localStorage.getItem("room_name") ;
  function send() {
        msg = document.getElementById("msg").value ; 
        firebase.database().ref(room_name).push({
              name : user_name ,
              message : msg ,
              like : 0
        });
        document.getElementById("msg").value = "";
       


        

  }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code


//End code
    } });  }); }
getData();
function logout()
{ 
      localStorage.removeItem("user_name"); 
localStorage.removeItem("room_name");
 window.location = "kwitter.html"; 
}




