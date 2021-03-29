<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<div>
  <div>
        <!-- 계정 메뉴 -->
        <div class="container">
            <a v-for = "name in account" :key = "name" :class="{ clicked: currentAccount == name }" @click="currentAccount = name"> {{ name }} </a>
        </div>
  </div>
  <div class="divider"/>

  <div class="hashtag-wrapper">
        <!-- 해시태그 -->
        <div class="container" v-if="currentAccount === 'BTS_twt'" :key="i">
          <a v-for="hash in bts_twt" :key="hash" :class="{ clicked: currentHash == hash }" @click="currentHash = hash"> {{ hash }}</a>
        </div>
        <div class="container" v-if="currentAccount === 'bts_bighit'">
          <a v-for="hash in bts_official" :key="hash" :class="{ clicked: currentHash == hash }" @click="currentHash = hash"> {{ hash }}</a>
        </div>
        <div class="container" v-if="currentAccount === 'BigHitEnt'">
          <a :key="hash" :class="{ clicked: currentAccount == 'BigHitEnt' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>
        <div class="container" v-if="currentAccount === 'weverse'">
          <a :key="hash" :class="{ clicked: currentAccount == 'weverse' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>
        <div class="container" v-if="currentAccount === 'bighit_merch'">
          <a :key="hash" :class="{ clicked: currentAccount == 'bighit_merch' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>
        <div class="container" v-if="currentAccount === 'weverseshop'">
          <a :class="{ clicked: currentAccount == 'weverseshop' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>
  </div>
  <div class="divider"/>

  <!-- 트윗 카드 -->
  <div class="tweetBox-wrapper" :style="`column-count: ${columnCount}`">
    <div class="tweetBox" v-for="(v, i) in tweet" :key="i">
      <div :class="{clicked: currentHash == hash}">
        <div class="user">
          <img class="profile" :src="v.user.profile_image_url_https"> 
          {{v.user.name}}<br>
          @{{v.user.screen_name}}<br>
        </div>
          {{v.text}} <br>
          <img v-if="v.media !== undefined" :src="v.media[0].media_url_https"
               width= "230">
      </div>
    </div>
    
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
        currentAccount: 'BTS_twt',
        account : ['BTS_twt', 'bts_bighit', 'BTS_jp_official', 'BigHitEnt', 'weverseofficial','bighit_merch', 'weverseshop', 'bts_love_myself', 'BT21_', 'BT21_Japan', 'TinyTANofficial'], 
        bts_twt : ['ALL', '#JIN', '#SUGA', '#RM', '#JHope', '#JIMIN', '#V', '#JK', '#김데일리', '#홉필름', '#우리아미상받았네'],
        bts_official : ['ALL', '#오늘의방탄', '#방탄밤'],
        bighit : ['#BTS'],
        currentHash: 'ALL',
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
  }  

.tweetBox{
  text-align: left;
  width: 230px;
  height: auto;

  border-style: solid;
  border-width: 1px;
  border-color:#c9c9c9;
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
}

.tweetBox-wrapper {
  padding: 24px;
  column-gap: 12px;
}

.profile{ 
  border-radius: 70%;
  overflow: hidden;
  object-fit: cover;
  
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