<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<div style="width: 100%">
    <div class="divider"/>
    <!-- 계정 메뉴 -->
  <div class="account-wrapper">
      <div class="container" v-if="$store.state.currentCategory === 'BTS'">
        <a v-for="name in btsAccount" :key="name" :class="{ clicked: $store.state.currentAccount == name }" @click="current(name)"> {{ name }} </a>
      </div>
      <div class="container" v-if="$store.state.currentCategory === 'HYBE'">
        <a v-for="name in hybeAccount" :key="name" :class="{ clicked: $store.state.currentAccount == name }" @click="current(name)"> {{ name }} </a>
      </div>
      <div class="container" v-if="$store.state.currentCategory === 'Merch'">
        <a v-for="name in merchAccount" :key="name" :class="{ clicked: $store.state.currentAccount == name }" @click="current(name)"> {{ name }} </a>
      </div>
      <div class="container" v-if="$store.state.currentCategory === 'Project'">
        <a v-for="name in projectAccount" :key="name" :class="{ clicked: $store.state.currentAccount == name }" @click="current(name)"> {{ name }} </a>
      </div>
      <div class="container" v-if="$store.state.currentCategory === 'Character'">
        <a v-for="name in charAccount" :key="name" :class="{ clicked: $store.state.currentAccount == name }" @click="current(name)"> {{ name }} </a>
      </div>
      <div class="container" v-if="$store.state.currentCategory === 'Game'">
        <a v-for="name in gameAccount" :key="name" :class="{ clicked: $store.state.currentAccount == name }" @click="current(name)"> {{ name }} </a>
      </div>
  </div>

<!-- 해시태그 -->
  <div class="hashtag-container">
        <!-- BTS 공계-->
        <div class="hashtag-wrapper" v-if="$store.state.currentAccount === 'BTS_twt'">
          <a v-for="hash in bts_twt" :key="hash" :class="{ clicked: $store.state.currentHash == hash }" @click="$store.state.currentHash=hash"> {{ hash }}</a>
        </div>
        <div class="hashtag-wrapper" v-if="$store.state.currentAccount === 'bts_bighit'">
          <a v-for="hash in bts_bighit" :key="hash" :class="{ clicked: $store.state.currentHash == hash }" @click="$store.state.currentHash = hash"> {{ hash }}</a>
        </div>
        <div class="hashtag-wrapper" v-if="$store.state.currentAccount === 'BTS_jp_official'">
          <a :class="{ clicked: $store.state.currentAccount == 'BTS_jp_official' }" @click="$store.state.currentHash = 'ALL'">ALL</a>
        </div>

        <!-- HYBE 공계 -->
        <div class="hashtag-wrapper" v-if="currentAccount === 'BIGHIT_MUSIC'">
          <a v-for="hash in bighitmusic" :key="hash" :class="{ clicked: $store.state.currentHash == hash }" @click="$store.state.currentHash = hash"> {{ hash }}</a>
        </div>
        <div class="hashtag-wrapper" v-if="currentAccount === 'weverseofficial'">
          <a v-for="hash in weverseofficial" :key="hash" :class="{ clicked: $store.state.currentHash == hash }" @click="$store.state.currentHash = hash"> {{ hash }}</a>
        </div>
        <div class="hashtag-wrapper" v-if="currentAccount === 'HYBEOFFICIALtwt'">
          <a v-for="hash in hybe" :key="hash" :class="{ clicked: $store.state.currentHash == hash }" @click="$store.state.currentHash = hash"> {{ hash }}</a>
        </div>
        <div class="hashtag-wrapper" v-if="currentAccount === 'HYBE_LABELS_JP'">
          <a v-for="hash in hybe" :key="hash" :class="{ clicked: $store.state.currentHash == hash }" @click="$store.state.currentHash = hash"> {{ hash }}</a>
        </div>

        <!-- Merch 공계 -->
        <div class="hashtag-wrapper" v-for="(name, i) in merchAccount" v-if="$store.state.currentAccount == name" :key="i">
          <a v-for="hash in hybe" :key="hash" :class="{ clicked: $store.state.currentHash == hash }" @click="$store.state.currentHash = hash"> {{ hash }}</a>
        </div>

        <!-- Project 공계 -->
        <div class="hashtag-wrapper" v-for="(name, i) in projectAccount" v-if="$store.state.currentAccount == name" :key="i">
          <a v-for="hash in hybe" :key="hash" :class="{ clicked: $store.state.currentHash == hash }" @click="$store.state.currentHash = hash"> {{ hash }}</a>
        </div>

        <!-- Character 공계 -->
        <div class="hashtag-wrapper" v-if="$store.state.currentAccount == name">
          <a v-for="(name, i) in charAccount"
          :class="{ clicked: $store.state.currentAccount == name }"
          @click="$store.state.currentHash = 'ALL'" :key="i">ALL</a>
        </div>

        <!-- Game 공계 -->
        <div class="hashtag-wrapper" v-if="$store.state.currentAccount === 'BTSW_official'">
          <a v-for="hash in btsw_official" :key="hash" :class="{ clicked: $store.state.currentHash == hash }" @click="$store.state.currentHash = hash"> {{ hash }}</a>
        </div>
        <div class="hashtag-wrapper" v-if="$store.state.currentAccount === 'RhythmHive_twt'">
          <a v-for="hash in rhythmhive_twt" :key="hash" :class="{ clicked: $store.state.currentHash == hash }" @click="$store.state.currentHash = hash"> {{ hash }}</a>
        </div>
  </div>

  <!-- 트윗 카드 -->
  <div class="tweetBox-wrapper" :style="`column-count: ${columnCount}`">
    <masonry :cols="columnCount">
      <div class="tweetBox" v-for="(v, i) in tweet" :key="i">
        <div class="content">
          <div class="user-container" @click="viewID()">
            <img class="profileImg" :src="v.user.profile_image_url_https">
            <div class="user">
              {{v.user.name}}<br>
              @{{v.user.screen_name}}
            </div>
          </div>
          <div class="text-container" @click="viewTweet(v.id)" v-html="twt.autoLink(v.text, { usernameIncludeSymbol: true })" />
          <div class="media" @click="downMedia(v.id, v.media[0].id, v.media[0].type)">
              <img v-if="v.media !== undefined" :href="`https://twitter.com/${v.user.screen_name}`" :src="v.media[0].media_url_https" width= "230" >
          </div>
        </div>
      </div>
    </masonry>
  </div>
</div>
</template>

<script>
import twitter from 'twitter-text';

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

      bts_twt: ['ALL', '#JIN', '#SUGA', '#RM', '#JHope', '#JIMIN', '#V', '#JK', '#김데일리', '#홉필름', '#우리아미상받았네'],
      bts_bighit: ['ALL', '[공지]', '#오늘의방탄', '#방탄밤', '[Episode]'],
      bighitmusic: ['ALL', '#BTS', '[기사]', '[위버스 매거진]'],
      hybe: ['ALL', '#BTS', '#방탄소년단'],
      weverseofficial: ['ALL', '[위버스 매거진]'],
      inthesoop_tv: ['ALL', 'BTS', '방탄소년단'],
      btsw_official: ['ALL', '업데이트', '점검'],
      rhythmhive_twt: ['ALL', 'BTS', 'EVENT'],
      tweet: [],
      columnCount: 5,
      twt: twitter,
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
      if (this.$store.state.currentHash === 'ALL') {
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
    current(name) {
      this.$store.state.currentAccount = name;
      this.$store.state.currentHash = 'ALL';
    },
    viewID() {
      window.open(`https://twitter.com/${this.$store.state.currentAccount}`);
    },
    viewTweet(id) {
      window.open(`https://twitter.com/${this.$store.state.currentAccount}/status/${id}`);
    },
    downMedia(id, mediaId, type) {
      if (type === 'photo') {
        window.open(`https://btstweetmedia.blob.core.windows.net/media/${id}/${mediaId}.png`);
      } else {
        window.open(`https://btstweetmedia.blob.core.windows.net/media/${id}/${mediaId}.mp4`);
      }
    },
  },
  computed: {
    currentAccount() {
      return this.$store.state.currentAccount;
    },
    currentHash() {
      return this.$store.state.currentHash;
    },
  },
  watch: {
    currentAccount() {
      this.requestData();
    },
    currentHash() {
      this.requestData();
    },
  },
};
</script>

<style scoped>
@media (max-width: 400px) {
  .tweetBox {
    margin: auto !important;
  }
}

a {
    font-family: Malgun Gothic, sans-serif;
    border-style: solid;
    border-width: 1px;
    border-color:#ffffff;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 8px !important;
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

.container{
    margin: 5px;
    justify-content: center;
}

.account-wrapper{
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.account-wrapper > .container {
  display: flex;
  flex-wrap: wrap;
}

.account-wrapper > .container > a.clicked {
  color: plum;
}

.hashtag-container{
  text-align: center;
}

.hashtag-wrapper{
  font-size: small;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
}

.hashtag-wrapper > a.clicked {
  color: skyblue;
}

.tweetBox-wrapper {
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.tweetBox-wrapper > div {
  margin: auto !important;
  width: 100% !important;
  align-content: center;
  justify-content: center;
}

.tweetBox{
  width: 230px;
  border-style: solid;
  border-width: 1px;
  border-color:#c9c9c9;
  border-radius: 10px;
  padding: 10px;
  margin: 30px;
}

.user-container{
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
}

.profileImg{
  border-radius: 70%;
  overflow: hidden;
  object-fit: cover;
}

.user{
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-top: 7px;
}

.text-container{
  text-overflow: hidden;
  word-wrap: break-word;
}

.text-container >>> .hashtag{
  color: skyblue !important;
  text-decoration-line: none;
}

.text-container >>> a:link{
  color: lightblue;
}

.text-container >>> a:visited{
  color: lightblue;
}

.media{
    width: 200px;
    padding-top: 10px;
}

.divider {
  border-top: 2px solid rgb(243, 201, 243);
  width: 100%;
}
</style>
