// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//
import firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App :user="user" ></App>',
  components: { App },
  //
  data(){
    return {
      user : {}
    }
  },
  methods:{
    getLoginStatus(){
      let vm = this
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          vm.user = user
          console.log("// User is signed in by Phone Number : ", user.phoneNumber)
        } else {
          vm.user = null
          console.log("// No user is signed in.")
        }
      });
    },
    initFirebase(){
      const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDiWvzSG8kFr2oPLyrLleEmxGxMY3ed5Hw",
        authDomain: "my-fuck-awesome-project.firebaseapp.com",
        databaseURL: "https://my-fuck-awesome-project.firebaseio.com",
        projectId: "my-fuck-awesome-project",
        storageBucket: "my-fuck-awesome-project.appspot.com",
        messagingSenderId: "885320638463"
      });
    },
  },
  updated(){
    this.getLoginStatus()
  },
  created(){
    this.initFirebase()
    this.getLoginStatus()
  }
})


