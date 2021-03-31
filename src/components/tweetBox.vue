<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<div>
    <div class="divider"/>
    <!-- 계정 메뉴 -->
  <div class="account-wrapper">
      <div class="container" v-if="currentCategory === 'BTS'">
        <a v-for="name in btsAccount" :key="name" :class="{ clicked: currentAccount == name }" @click="currentAccount=name"> {{ name }} </a>
      </div>
      <div class="container" v-if="currentCategory === 'HYBE'">
        <a v-for="name in hybeAccount" :key="name" :class="{ clicked: currentAccount == name }" @click="currentAccount=name"> {{ name }} </a>
      </div>
      <div class="container" v-if="currentCategory === 'Merch'">
        <a v-for="name in merchAccount" :key="name" :class="{ clicked: currentAccount == name }" @click="currentAccount=name"> {{ name }} </a>
      </div>
      <div class="container" v-if="currentCategory === 'Project'">
        <a v-for="name in projectAccount" :key="name" :class="{ clicked: currentAccount == name }" @click="currentAccount=name"> {{ name }} </a>
      </div>
      <div class="container" v-if="currentCategory === 'Character'">
        <a v-for="name in charAccount" :key="name" :class="{ clicked: currentAccount == name }" @click="currentAccount=name"> {{ name }} </a>
      </div>
      <div class="container" v-if="currentCategory === 'Game'">
        <a v-for="name in gameAccount" :key="name" :class="{ clicked: currentAccount == name }" @click="currentAccount=name"> {{ name }} </a>
      </div>
  </div>

<!-- 해시태그 -->
  <div class="hashtag-wrapper">
        <!-- BTS 공계-->
        <div class="container" v-if="currentAccount === 'BTS_twt'" :key="i">
          <a v-for="hash in bts_twt" :key="hash" :class="{ clicked: currentHash == hash }" @click="currentHash=hash"> {{ hash }}</a>
        </div>
        <div class="container" v-if="currentAccount === 'bts_bighit'">
          <a v-for="hash in bts_bighit" :key="hash" :class="{ clicked: currentHash == hash }" @click="currentHash = hash"> {{ hash }}</a>
        </div>
        <div class="container" v-if="currentAccount === 'BTS_jp_official'">
          <a :key="hash" :class="{ clicked: currentAccount == 'BTS_jp_official' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>

        <!-- HYBE 공계 -->
        <div class="container" v-if="currentAccount === 'BIGHIT_MUSIC'">
          <a :key="hash" :class="{ clicked: currentAccount == 'BIGHIT_MUSIC' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>
        <div class="container" v-if="currentAccount === 'weverseofficial'">
          <a :key="hash" :class="{ clicked: currentAccount == 'weverseofficial' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>
        <div class="container" v-if="currentAccount === 'HYBEOFFICIALtwt'">
          <a :key="hash" :class="{ clicked: currentAccount == 'HYBEOFFICIALtwt' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>
        <div class="container" v-if="currentAccount === 'HYBE_LABELS_JP'">
          <a :key="hash" :class="{ clicked: currentAccount == 'HYBE_LABELS_JP' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>

        <!-- Merch 공계 -->
        <div class="container" v-if="currentAccount === 'HYBE_MERCH'">
          <a :key="hash" :class="{ clicked: currentAccount == 'HYBE_MERCH' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>
        <div class="container" v-if="currentAccount === 'weverseshop'">
          <a :class="{ clicked: currentAccount == 'weverseshop' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>
        <div class="container" v-if="currentAccount === 'BigHitShop'">
          <a :class="{ clicked: currentAccount == 'BigHitShop' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>


        <!-- Project 공계 -->
        <div class="container" v-if="currentAccount === 'bts_love_myself'">
          <a :class="{ clicked: currentAccount == 'bts_love_myself' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>
        <div class="container" v-if="currentAccount === 'Smeraldo_Books'">
          <a :class="{ clicked: currentAccount == 'Smeraldo_Books' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>
        <div class="container" v-if="currentAccount === 'INTHESOOP_TV'">
          <a v-for="hash in inthesoop_tv" :key="hash" :class="{ clicked: currentHash == hash }" @click="currentHash = hash"> {{ hash }}</a>
        </div>

        <!-- Character 공계 -->
        <div class="container" v-if="currentAccount === 'BT21_'">
          <a :class="{ clicked: currentAccount == 'BT21_' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>
        <div class="container" v-if="currentAccount === 'BT21_Japan'">
          <a :class="{ clicked: currentAccount == 'BT21_Japan' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>
        <div class="container" v-if="currentAccount === 'TinyTANofficial'">
          <a :class="{ clicked: currentAccount == 'TinyTANofficial' }" @click="currentHash = '#BTS'">#BTS</a>
        </div>

        <!-- Game 공계 -->
        <div class="container" v-if="currentAccount === 'BTSW_official'">
          <a v-for="hash in btsw_official" :key="hash" :class="{ clicked: currentHash == hash }" @click="currentHash = hash"> {{ hash }}</a>
        </div>
        <div class="container" v-if="currentAccount === 'RhythmHive_twt'">
          <a v-for="hash in rhythmhive_twt" :key="hash" :class="{ clicked: currentHash == hash }" @click="currentHash = hash"> {{ hash }}</a>
        </div>
  </div>

  <!-- 트윗 카드 -->
  <div class="tweetBox-wrapper" :style="`column-count: ${columnCount}`">
    <div class="tweetBox" v-for="(v, i) in tweet" :key="i">
      <div :class="{clicked: currentHash == hash}">
        <div class="user">
          <img class="profileImg" :src="v.user.profile_image_url_https">
          <div class="userID">
            {{v.user.name}}<br>
            @{{v.user.screen_name}}
          </div>
        </div>
        <div class="text">
            {{v.text}} <br>
          <img v-if="v.media !== undefined" :src="v.media[0].media_url_https"
               width= "230">
        </div>
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
        currentCategory: 'BTS',
        category: ['BTS', 'HYBE', 'Merch', 'Project', 'Character', 'Game'],

        currentAccount: 'BTS_twt',
        btsAccount : ['BTS_twt', 'bts_bighit', 'BTS_jp_official'],
        hybeAccount : ['BIGHIT_MUSIC', 'weverseofficial', 'HYBEOFFICIALtwt', 'HYBE_LABELS_JP'],
        merchAccount : ['weverseshop', 'HYBE_MERCH', 'BigHitShop'],
        projectAccount : ['bts_love_myself', 'Smeraldo_Books', 'INTHESOOP_TV'],
        charAccount : ['BT21_', 'BT21_Japan', 'TinyTANofficial'],
        gameAccount : ['BTSW_official', 'RhythmHive_twt'],

        currentHash: 'ALL',
        bts_twt : ['ALL', '#JIN', '#SUGA', '#RM', '#JHope', '#JIMIN', '#V', '#JK', '#김데일리', '#홉필름', '#우리아미상받았네'],
        bts_bighit : ['ALL', '[공지]', '#오늘의방탄', '#방탄밤'],
        bighit : ['#BTS'],
        inthesoop_tv : ['BTS', '방탄소년단'],
        btsw_official : ['ALL', '업데이트', '점검'],
        rhythmhive_twt : ['BTS', 'EVENT'],

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
.account-wrapper{
    padding-top: 10px;
}
.hashtag-wrapper{
    font-size: small;
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
  margin-bottom: 30px;
}
.tweetBox-wrapper {
  padding: 24px;
  column-gap: 12px;
}
.profileImg{ 
  border-radius: 70%;
  overflow: hidden;
  object-fit: cover;
  
}
.user{
    display: flex;
    flex-direction: row;
    padding-bottom: 10px;
}
.userID{
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-top: 5px;
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
  border-top: 2px solid rgb(243, 201, 243);
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