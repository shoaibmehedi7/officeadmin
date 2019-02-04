const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

var config = {
  apiKey: "AIzaSyAjt_ff90T_Ch92pGg6g_sAtJkakCgI5WA",
  authDomain: "nsuslideshare.firebaseapp.com",
  projectId: "nsuslideshare"
};

firebase.initializeApp(config);
var db = firebase.firestore();

// db.settings({
//   timestampsInSnapshots: true
// });


//fetch data from firestore
function getData() {
  db.collection("users")
    .doc("000000000000000000")
    .get()
    .then(function (doc) {
      if (doc.exists) {
        var dataa = doc.data();
        console.log("Document data:", dataa);
        console.log(dataa.title);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
}
//set data to forestore
function setData(postData) {
  // var postData = {
  //   title: "haha",
  //   name: "hehe",
  //   mail: "",
  //   phone: "muhahahaha111111111111",
  //   designation: "",
  //   department: "",
  // };
  console.log(postData+"11");
  db.collection("users")
    .doc(postData.phone)
    .set(postData)
    .then(function () {
      console.log(firebase.app.length);
      // if (!firebase.apps.length) {
      //   firebase.initializeApp({});
      // }
      // window.location.reload();
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

export {getData,setData,db}