<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<div class="nameBox">
  <!-- 카테고리 -->
  <div class="category-wrapper">
    <div class="container">
      <a v-for="menu in category" :key="menu" :class="{ clicked: currentCategory == menu }" @click="currentCategory = menu"> {{ menu }} </a>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        currentCategory: 'BTS',
        currentAccount: 'BTS_twt',
        currentHash: 'ALL',
        category: ['BTS', 'HYBE', 'Merch', 'Project', 'Character', 'Game'],

        tweet: [],
        columnCount: 5,
      };
    },
    created() {
      window.addEventListener("resize", this.calculateColumn);
      this.calculateColumn()
      axios.get(`https://api.rkive.cloud/from/id/${this.currentAccount}/0`)
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
          axios.get(`https://api.rkive.cloud/from/id/${this.currentAccount}/0`)
            .then((res) => {
              this.tweet = res.data;
            });
        }
        else axios.get(`https://api.rkive.cloud/from/hashtag/${this.currentAccount}/0?hashtag=${encodeURIComponent(this.currentHash)}`)
          .then((res) => {
            this.tweet = res.data;
          });
      }
    },
    watch: {
      currentAccount() {
        this.requestData();
      },
      currentHash() {
        this.requestData();
      }
    }
}
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