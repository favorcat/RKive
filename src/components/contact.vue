<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<div class="contact-box">
  <!-- 연락처 -->
    <a class="title">CONTACT</a>
    <a href="mailto:rkive.cloud@gmail.com">Email</a>
    <a href="https://twitter.com/RkiveCloud">Twitter</a>
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
a {
    font-family: Malgun Gothic, sans-serif;
    font-size: small;
    color : black;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 10px;
}
.title{
    font-size: large;
    padding-right: 20px;
}
.contact-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>
