<template>
  <div class="header">
    <div class="logo">Denkformat</div>
    <ul id="nav">
      <router-link to="/" tag="li" exact> <a>Home</a> </router-link
      >|
      <router-link to="/about" tag="li"> <a>About</a> </router-link
      >|
      <router-link to="/help" tag="li" > <a>Help</a> </router-link
      >|
      <router-link to="/contact" tag="li">
        <a>Contact</a>
      </router-link>
    </ul>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "AppHeader"
};
</script>
