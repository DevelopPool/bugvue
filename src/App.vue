<template>
  <div id="app">
    <h3 v-if="user != null">
      You are Logged In By Phone No - {{user.phoneNumber}}
      <div style="text-align: center">
        <button id="button">发送数据到react native</button>
              <button @click="sendData(user.phoneNumber)">发送数据到react native</button>

        <p style="text-align: center">收到react native发送的数据:
          <span id="data"></span>
        </p>
      </div>
      

      <button @click="signout()">signout</button>
    </h3>
    <h3 v-else>You are Not Logged In !
      <br>
      <router-link to="/">Login</router-link>
      <router-link to="/signup">Signup</router-link>
    </h3>
    <router-view/>
  </div>
  
</template>

<script>
import firebase from "firebase";
// var data = 0;
var data ="778TIlaNHBcW1lwvk3dZ1HuTuPv1";

export default {
  name: "app",
  props: ["user"],
  methods: {
    signout() {
      firebase.auth().signOut();
      this.$router.push({ path: "/" });
      window.location.reload(); //reload on signout !
    },
    sendData(data) {
      if (window.originalPostMessage) {
        window.postMessage(data);
      } else {
        throw Error("postMessage接口还未注入");
      }
    },
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


