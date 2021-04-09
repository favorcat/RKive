<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<div class="nameBox">
  <!-- 카테고리 -->
  <div class="category-wrapper">
      <a v-for="menu in category" :key="menu" :class="{ clicked: $store.state.currentCategory == menu }" @click="current(menu)"> {{ menu }} </a>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      category: ['BTS', 'HYBE', 'Merch', 'Project', 'Character', 'Game'],
      tweet: [],
    };
  },
  methods: {
    current(menu) {
      this.$store.state.currentCategory = menu;
      this.$store.state.currentHash = 'ALL';
      switch (this.$store.state.currentCategory) {
        case 'BTS':
          this.$store.state.currentAccount = 'BTS_twt';
          break;
        case 'HYBE':
          this.$store.state.currentAccount = 'BIGHIT_MUSIC';
          break;
        case 'Merch':
          this.$store.state.currentAccount = 'weverseshop';
          break;
        case 'Project':
          this.$store.state.currentAccount = 'bts_love_myself';
          break;
        case 'Character':
          this.$store.state.currentAccount = 'BT21_';
          break;
        case 'Game':
          this.$store.state.currentAccount = 'BTSW_official';
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
a {
    font-family: Malgun Gothic, sans-serif;
    font-size: x-large;
    border-style: solid;
    border-width: 1px;
    border-color:#ffffff;
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
    color : black;
    cursor: pointer;
  }

a:hover{
    background: #f9f6f6 !important;
}

.clicked {
    background: #f9f6f6;
    color:plum;
}

.category-wrapper{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
