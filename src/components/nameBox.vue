<template>
<div>
  <div>
        <!-- 계정 메뉴 -->
        <div class="container">
            <a v-for = "name in account" :key = "name" :class="{ clicked: currentAccount == name }" @click="currentAccount = name"> {{ name }} </a>
        </div>
  </div>
  <div class="divider"/>

  <div>
        <!-- 해시태그 -->
        <div class="container" v-if="currentAccount === '@bts_twt'">
          <a v-for = "hash in btsTwt" :key = "hash" :class="{ clicked: currentAccount == name }" @click="currentHash = hash"> {{ hash }}</a>
        </div>
        <div class="container" v-if="currentAccount === '@bts_official'">
          <a v-for = "hash in btsOfficial" :key = "hash" :class="{ clicked: currentAccount == name }" @click="currentHash = hash"> {{ hash }}</a>
        </div>
        <div class="container" v-if="currentAccount === '@bighitent'">
          <a v-for = "hash in bighit" :key = "hash" :class="{ clicked: currentAccount == name }" @click="currentHash = hash"> {{ hash }}</a>
        </div>
        <div class="container" v-if="currentAccount === '@weverse'">
          <a v-for = "hash in bighit" :key = "hash" :class="{ clicked: currentAccount == name }" @click="currentHash = hash"> {{ hash }}</a>
        </div>
        <div class="container" v-if="currentAccount === '@bighit_merch'">
          <a v-for = "hash in bighit" :key = "hash" :class="{ clicked: currentAccount == name }" @click="currentHash = hash"> {{ hash }}</a>
        </div>
        <div class="container" v-if="currentAccount === '@weverseshop'">
          <a v-for = "hash in bighit" :key = "hash" :class="{ clicked: currentAccount == name }" @click="currentHash = hash"> {{ hash }}</a>
        </div>
  </div>
  <div class="divider"/>

  <!-- 트윗 카드 -->
  <div>

    <div class="tweetBox" v-if="currentHash === 'ALL'">
      <div :class="{clicked: currentHash == hash}">
        <div class="user">
          <img class="profile" :src="tweet.user.profile_image_url_https"> 
          {{tweet.user.name}}<br>
          @{{tweet.user.screen_name}}<br>
        </div>
          {{tweet.text}} <br>
          <img :src="tweet.media[0].media_url_https"
               width= "230">
      </div>
    </div>
    
  </div>
</div>
</template>

<script>
import tweetJson from "../tweet/tweet.json"

export default {

    data() {
      return {
        currentAccount: '@bts_twt',
        account : ['@bts_twt', '@bts_official', '@bighitent', '@weverse','@bighit_merch',  '@weverseshop'], 
        btsTwt : ['ALL', '#JIN', '#SUGA', '#RM', '#JHope', '#JIMIN', '#V', '#JK', '#김데일리', '#홉필름', '#우리아미상받았네'],
        btsOfficial : ['ALL', '#오늘의방탄'],
        bighit : ['#BTS'],
        currentHash: 'ALL',
        tweet: tweetJson
      };
    },
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
  border-color:#cac1c1;
  border-radius: 10px;
  padding: 10px;
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