import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMTAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

 export { firebase, database as default };


  
  // database.ref("expenses").on("child_removed",(snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // });

  // database.ref("expenses").on("child_changed",(snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // });

  // database.ref("expenses").on("child_added",(snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // })



  
  // database.ref("expenses")
  //   .once("value")
  //   .then((snapshot) => {
  //     const expenses = [];
     
  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  
  //     console.log(expenses);
  //   });

//using on for subscription or changes to our array so we can see it every time there's a change
  // database.ref("expenses").on("value", (snapshot) => {
  //   const expenses = [];
     
  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  
  //     console.log(expenses);
  // });
    
  // database.ref("expenses").push({
  //   description: "Rent",
  //   note: "'",
  //   amount: 100090,
  //   createdAt: 69080988
  // });


  // database.ref("notes").push({
  //   title: "course topics",
  //   body: "react native"
  // });

  // const firebaseNotes = {
  //   notes: {
  //     afjljla: {
  //       title: "title",
  //       body: "note here"
  //     },
  //     afjljlakljkjl: {
  //       title: "title",
  //       body: "note here"
  //     }
  //   }
  // }

  // const notes = [{
  //   id: "12",
  //   title: "first note",
  //   body: "this is my note"
  //   }, {
  //     id: "13",
  //   title: "another note",
  //   body: "this is my note"
  // }];

  // database.ref("notes").set(notes)
  // database.ref("notes/12")

  // const onValChange = database.ref().on("value", (snapshot) => {
  //   console.log(snapshot.val())
  // },(e) => {
  //   console.log("error with data fetching")
  // });

  // database.ref().on("value", (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
  // }, (e) => {
  //   console.log("error")
  // });

  // database.ref("location/city")
  //   .once("value")
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   }).catch((e) => {
  //     console.log("error fetching data", e)
  //   });

  //ref - reference. if we pass nothing to ref, we get the root 
  //set returns a promise
// database.ref().set({
//       name: "MHV",
//       age: 26,
//       stressLevel: 6,
//       job: {
//         title: "software dev",
//         company: "Google"
//       },
//       location: {
//           city: "Milwaukee",
//           county: "United States"
//       },
//   }).then(() => {
//       console.log("data is saved!")
//   }).catch((e) => {
//     console.log("this failed", e)
//   });

//   //update mult things at once
//   //can also add new properties
//   //can set val to null to delete
//   database.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Seattle"
//   });

  //database.ref("isSingle").set(null) //equilvant to remove 

  //database.ref().set("this is my data")

//   database.ref("age").set(27);
//   database.ref("location/city").set("New York");

//   database.ref("attributes").set({
//       height: 65,
//       weight: 150
//   }).then(() => {
//       console.log("data attributes is saved!")
//   }).catch((e) => {
//       console.log("failure msg two", e)
//   })

// database.ref()
//     .remove()
//     .then(() => {
//     console.log("removed successfully")
// }).catch((e) => {
//     console.log("removed failed", e)
// })