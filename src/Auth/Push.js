import { db } from "./Auth"

var postData = {
  title: "haha",
  name: "hehe",
  mail: "hfghdgh",
  phone: "muhahahafhdfghfdhhaaaaa",
  designation: "",
  department: ""
};

function setData(postData) {
  console.log(postData);
  db.collection("users")
    .doc(postData.phone)
    .set(postData)
    .then(function() {
      // console.log(firebase.app.length);
      // if (!firebase.apps.length) {
      //   firebase.initializeApp({});
      // }
      // window.location.reload();
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}
export {setData,postData}