import * as firebase from 'firebase'
import moment from 'moment';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER
  }
  firebase.initializeApp(config)
const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider,  database as default } 

// database.ref('habits')
//   .on('value', ((snapshot) => {
//     const habits = []
//     snapshot.forEach((child) => {
//       habits.push({
//         id:child.key, 
//         ...child.val()
//       })
//     })
//     console.log(habits)
//   }), (e) => {
//     console.log('Unable to get data', e)
//   })

 let userid='3VGcYAHUbSSWlglZfViybHhUWpW2'
 let id = '-LXasXWK-oC8tuBjUYMa'
 //let id ='-LXat92W8FjuUR6Jn15K'
 database.ref(`users/${userid}/habits/${id}/dates/`)
   .on('value', ((snapshot) => {
     snapshot.forEach((child) => {
       console.log(child.key, child.val())
     })
   }))

    // database.ref(`users/${userid}/habits/${id}/dates/`).push({
    //    trackedON:6453543453,
    //   selected:'yes'
      
    // })

