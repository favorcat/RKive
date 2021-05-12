<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<div style="width: 100%">
  <!-- Tweet card -->
  <div class="tweetBox-wrapper" :style="`column-count: ${columnCount}`">
    <masonry :cols="columnCount">
      <div class="tweetBox" v-for="(v, i) in tweet" :key="i">
        <div class="content">
          <div class="user-container" @click="viewID(v.user.screen_name)">
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
  <div class="paging">
    <i class="fa fa-chevron-left" @click="beforepage()"></i>
    <a> {{ $store.state.currentPage/20+1 }} </a>
    <i class="fa fa-chevron-right" @click="afterpage()"></i>
  </div>
</div>
</template>

<script>
import twitter from 'twitter-text';

export default {
  data() {
    return {
      tweet: [],
      columnCount: 5,
      twt: twitter,
    };
  },
  created() {
    window.addEventListener('resize', this.calculateColumn);
    this.calculateColumn();
    this.$axios.get(`https://api.rkive.cloud/main/${this.$store.state.currentPage}`)
      .then((res) => {
        this.tweet = res.data;
      });
  },
  methods: {
    calculateColumn() {
      this.columnCount = Math.floor(window.innerWidth / 300);
    },
    requestData() {
      if (this.$store.state.currentAccount === 'ALL') {
        this.$axios.get(`https://api.rkive.cloud/main/${this.$store.state.currentPage}`)
          .then((res) => {
            this.tweet = res.data;
          });
      } else if (this.$store.state.currentHash === 'ALL') {
        this.$axios.get(`https://api.rkive.cloud/from/id/${this.$store.state.currentAccount}/${this.$store.state.currentPage}`)
          .then((res) => {
            this.tweet = res.data;
            if (res.data.length === 0) {
              alert('아직 저장된 트윗이 없습니다.');
            }
          });
      } else {
        this.$axios.get(`https://api.rkive.cloud/from/hashtag/${this.$store.state.currentAccount}/${this.$store.state.currentPage}?hashtag=${encodeURIComponent(this.$store.state.currentHash)}`)
          .then((res) => {
            this.tweet = res.data;
            if (res.data.length === 0) {
              alert('아직 저장된 트윗이 없습니다.');
            }
          });
      }
    },
    current(name) {
      this.$store.state.currentAccount = name;
      this.$store.state.currentHash = 'ALL';
    },
    viewID(screenName) {
      window.open(`https://twitter.com/${screenName}`);
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
    beforepage() {
      if (this.$store.state.currentPage !== 0) {
        this.$store.state.currentPage -= 20;
      } else {
        alert('첫 페이지입니다.');
      }
    },
    afterpage() {
      this.$store.state.currentPage += 20;
      if (this.$store.state.currentAccount === 'ALL') {
        this.$axios.get(`https://api.rkive.cloud/main/${this.$store.state.currentPage}`)
          .then((res) => {
            if (res.data.length === 0) {
              this.$store.state.currentPage -= 20;
              alert('마지막 페이지입니다.');
            }
          });
      } else if (this.$store.state.currentHash === 'ALL') {
        this.$axios.get(`https://api.rkive.cloud/from/id/${this.$store.state.currentAccount}/${this.$store.state.currentPage}`)
          .then((res) => {
            if (res.data.length === 0) {
              this.$store.state.currentPage -= 20;
              alert('마지막 페이지입니다.');
            }
          });
      } else {
        this.$axios.get(`https://api.rkive.cloud/from/hashtag/${this.$store.state.currentAccount}/${this.$store.state.currentPage}?hashtag=${encodeURIComponent(this.$store.state.currentHash)}`)
          .then((res) => {
            if (res.data.length === 0) {
              this.$store.state.currentPage -= 20;
              alert('마지막 페이지입니다.');
            }
          });
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
    currentPage() {
      return this.$store.state.currentPage;
    },
  },
  watch: {
    currentAccount() {
      this.requestData();
    },
    currentHash() {
      this.requestData();
    },
    currentPage() {
      this.requestData();
    },
  },
};
</script>

<style scoped>
@media (max-width: 640px) {
  .tweetBox-wrapper {
    font-size: smaller;
  }
}

@media (max-width: 900px) {
  .tweetBox {
    margin: auto !important;
    margin-bottom: 20px !important;
  }
}

a {
  font-family: Malgun Gothic, sans-serif;
  color : black;
  cursor: default;
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
  cursor: pointer;
}

/* user */
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

/* tweet content */
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

.paging{
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background: white;
  padding-left: 50%;
  padding-right: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.fa{
  padding: 15px;
  color: rgb(0, 153, 235);
  transform: none;
}
</style>
