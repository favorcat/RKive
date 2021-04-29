<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<div class="contact-box">
  <!-- Contact -->
    <a class="title">CONTACT</a>
    <a href="mailto:rkive.cloud@gmail.com">Email</a>
    <a href="https://twitter.com/RkiveCloud">Twitter (@RkiveCloud)</a>
</div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style scoped>
@media (max-width: 640px) {
  .title {
    font-size: medium !important;
  }
}
a {
    font-family: Malgun Gothic, sans-serif;
    font-size: small;
    color : black;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 10px;
    cursor: pointer;
}
.title{
    font-size: large;
    padding-left: 20px;
    padding-right: 20px;
    cursor: default;
}
.contact-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>
