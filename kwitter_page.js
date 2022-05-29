// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB72ClzRzjOeX1X_fhDp37Ysn6hovyo_aU",
      authDomain: "kwitter-bcf12.firebaseapp.com",
      databaseURL: "https://kwitter-bcf12-default-rtdb.firebaseio.com",
      projectId: "kwitter-bcf12",
      storageBucket: "kwitter-bcf12.appspot.com",
      messagingSenderId: "676919358022",
      appId: "1:676919358022:web:4d50ae865ddee17a1cd047"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     room_name=localStorage.getItem("room_name");
     user_name=localStorage.getItem("user_name");

     function send()
     {
           msg=document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
                 name:user_name,
                 message:msg,
                 like:0
           });

           document.getElementById("msg").value="";
     }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
