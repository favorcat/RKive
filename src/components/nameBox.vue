<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<div class="nameBox">
  <!-- 카테고리 -->
  <div class="category-wrapper">
    <div class="container">
      <a v-for="menu in category" :key="menu" :class="{ clicked: $store.state.currentCategory == menu }" @click="current(menu)"> {{ menu }} </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      category: ['BTS', 'HYBE', 'Merch', 'Project', 'Character', 'Game'],
      btsAccount: ['BTS_twt', 'bts_bighit', 'BTS_jp_official'],
      hybeAccount: ['BIGHIT_MUSIC', 'weverseofficial', 'HYBEOFFICIALtwt', 'HYBE_LABELS_JP'],
      merchAccount: ['weverseshop', 'HYBE_MERCH', 'BigHitShop'],
      projectAccount: ['bts_love_myself', 'Smeraldo_Books', 'INTHESOOP_TV'],
      charAccount: ['BT21_', 'BT21_Japan', 'TinyTANofficial'],
      gameAccount: ['BTSW_official', 'RhythmHive_twt'],
      tweet: [],
      columnCount: 5,
    };
  },
  created() {
    window.addEventListener('resize', this.calculateColumn);
    this.calculateColumn();
    this.$axios.get(`https://api.rkive.cloud/from/id/${this.$store.state.currentAccount}/0`)
      .then((res) => {
        this.tweet = res.data;
      });
  },
  methods: {
    calculateColumn() {
      this.columnCount = Math.floor(window.innerWidth / 300);
    },
    requestData() {
      if (this.currentHash === 'ALL') {
        this.$axios.get(`https://api.rkive.cloud/from/id/${this.$store.state.currentAccount}/0`)
          .then((res) => {
            this.tweet = res.data;
          });
      } else {
        this.$axios.get(`https://api.rkive.cloud/from/hashtag/${this.$store.state.currentAccount}/0?hashtag=${encodeURIComponent(this.$store.state.currentHash)}`)
          .then((res) => {
            this.tweet = res.data;
          });
      }
    },
    current(menu) {
      this.$store.state.currentCategory = menu;
      switch (this.$store.state.currentCategory) {
        case 'BTS':
          this.$store.state.currentAccount = 'BTS_twt';
          this.$store.state.currentHash = 'ALL';
          break;
        case 'HYBE':
          this.$store.state.currentAccount = 'BIGHIT_MUSIC';
          this.$store.state.currentHash = '#BTS';
          break;
        case 'Merch':
          this.$store.state.currentAccount = 'weverseshop';
          this.$store.state.currentHash = '#BTS';
          break;
        case 'Project':
          this.$store.state.currentAccount = 'bts_love_myself';
          this.$store.state.currentHash = 'ALL';
          break;
        case 'Character':
          this.$store.state.currentAccount = 'BT21_';
          this.$store.state.currentHash = 'ALL';
          break;
        case 'Game':
          this.$store.state.currentAccount = 'BTSW_official';
          this.$store.state.currentHash = 'ALL';
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
  }
.nameBox{
  width: 900px;
}

.category-wrapper{
  text-size-adjust: 12px;
}

.container{
    display: flex;
    flex-direction: row;
    text-align: center;
    margin: 5px;
    justify-content: center;
}
.clicked {
    background: #f9f6f6;
    color:plum;
}
.divider {
  border-top: 2px solid black;
  width: 100%;
}
a {
    border-style: solid;
    border-width: 1px;
    border-color:#ffffff;
    border-radius: 10px;
    padding: 10px;
    color : black;
    cursor: pointer;
}
.a:hover{
    background: #f9f6f6;
}
</style>
