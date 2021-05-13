<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<div class="subscribe-box">
  <img class="twitter" src='../assets/twitter-brands.svg' @click="twitter()">
  <img class="telegram" src='../assets/telegram-plane-brands.svg' @click="telegram()">
  <img class="email" src='../assets/envelope-solid.svg' @click="email()">
</div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    twitter() {
      window.open('https://twitter.com/RkiveCloud');
    },
    telegram() {
      window.open('http://t.me/RkiveCloud');
    },
    email() {
      window.open('mailto:rkive.cloud@gmail.com');
    },
  },
};
</script>

<style scoped>
.subscribe-box{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
}

.twitter, .telegram, .email{
  margin-left: 10px;
  margin-right: 10px;
  width: 44px;
  height: 44px;
  background: rgb(0, 153, 235);
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>
