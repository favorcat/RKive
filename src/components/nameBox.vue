<template>
<div>
  <div>
        <div class="container">
            <a v-for = "name in account" :key = "name" :class="{ clicked: currentAccount == name }" @click="currentAccount = name"> {{ name }} </a>
        </div>
  </div>
  <div class="divider"/>

  <div>
        <div class="container" v-if="currentAccount === '@bts_twt'">
          <a v-for = "hash in btsTwt" :key = "hash" :class="{ clicked: currentAccount == name }"> {{ hash }}</a>
        </div>
        <div class="container" v-if="currentAccount === '@bts_official'">
          <a v-for = "hash in btsOfficial" :key = "hash" :class="{ clicked: currentAccount == name }"> {{ hash }}</a>
        </div>
        <div class="container" v-if="currentAccount === '@bighitent'">
          <a v-for = "hash in bighit" :key = "hash" :class="{ clicked: currentAccount == name }"> {{ hash }}</a>
        </div>
        <div class="container" v-if="currentAccount === '@weverse'">
          <a v-for = "hash in bighit" :key = "hash" :class="{ clicked: currentAccount == name }"> {{ hash }}</a>
        </div>
        <div class="container" v-if="currentAccount === '@bighit_merch'">
          <a v-for = "hash in bighit" :key = "hash" :class="{ clicked: currentAccount == name }"> {{ hash }}</a>
        </div>
        <div class="container" v-if="currentAccount === '@weverseshop'">
          <a v-for = "hash in bighit" :key = "hash" :class="{ clicked: currentAccount == name }"> {{ hash }}</a>
        </div>
  </div>
  <div class="divider"/>
  <div class="container">
      <div v-bind:class="[ tweetID, usrName, profile ]"> </div>
  </div>
</div>
</template>

<script>
import DB from "../tweet/tweet.json"

export default {
    
    data() {
      return {
        currentAccount: '@bts_twt',
        account : ['@bts_twt', '@bts_official', '@bighitent', '@weverse','@bighit_merch',  '@weverseshop'], 
        btsTwt : ['ALL', '#Jin', '#SUGA', '#RM', '#JHope', '#JIMIN', '#V', '#JK', '#김데일리', '#홉필름', '#우리아미상받았네'],
        btsOfficial : ['ALL', '#오늘의방탄'],
        bighit : ['#BTS'],

        tweetID : 'id',
        usrName : 'name',
        profile : 'profile_image_url'
      };
      
    },

    components: {
      'TweetDB' : DB
    }
}
</script>

<style scoped>
  a {
    font-family: Malgun Gothic, sans-serif;
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
    color:#32485f;  }

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
a:hover{
    background: #f9f6f6;
}

</style>