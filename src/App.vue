<template>
  <div class="App">
    <header class="App-header">
      <div class="header">
        <div class="logo" @click="categoryAll()">
          <img src="/logo.png" class="App-logo" alt="logo">
        </div>
        <nameBox/>
        <nameBoxMobile/>
      </div>
      <div class="current">
        <div class="divider"/>
        <!-- current category -->
        <a class="current-state"> {{$store.state.currentCategory}} > {{$store.state.currentScreenname}} > {{$store.state.currentHash}} </a>
      </div>
    </header>
      <tweetBox/>
      <contact/>
      <div class="top-button" @click="scrollToTop()">
        <i class="fa fa-chevron-up"></i>
      </div>
  </div>
</template>

<script>
import nameBox from './components/nameBox.vue';
import nameBoxMobile from './components/nameBox-mobile.vue';
import tweetBox from './components/tweetBox.vue';
import contact from './components/contact.vue';

export default {
  components: {
    nameBox,
    nameBoxMobile,
    tweetBox,
    contact,
  },
  created() {
    document.title = 'Rkive';
  },
  methods: {
    categoryAll() {
      this.$store.state.currentCategory = 'ALL';
      this.$store.state.currentAccount = 'ALL';
      this.$store.state.currentScreenname = 'ALL';
      this.$store.state.currentHash = 'ALL';
      this.$store.state.currentPage = 0;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
@media (max-width: 640px) {
  .App-logo {
    height: 50px !important;
    margin: 0 !important;
    margin-top: 10px !important;
  }

  .header {
    position: static !important;
  }

  .divider {
    margin-top: 10px !important;
  }

  .current-state {
    display: none !important;
  }
}

@media (max-width: 900px) {
  .header {
    flex-direction: column !important;
  }

  .divider {
  margin-top: 20px;
  }
}

.App {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Malgun Gothic', 'Open Sans', 'Helvetica Neue', sans-serif;
}

.App-header {
  min-height: 125px;
  position: sticky;
  top: 0;
  background: white;
}

.App-logo {
  height: 75px;
  pointer-events: none;
  margin: 20px;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.current {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.divider {
  border-top: 2px solid rgb(0, 153, 235);
  width: 100%;
  margin-top: 7px;
}

.current-state{
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  text-align: center;
  font-size: medium;
  margin-top: 20px;
  margin-bottom: 15px;
}

.top-button {
  color: #fff;
  padding: 0;
  width: 55.5px; height: 55.5px;
  outline: 0;
  position: fixed;
  bottom: 15px;
  right: 15px;
  float: right;
  margin-bottom: 10px;
  border: none;
  text-decoration: none;
  background: rgb(0, 153, 235);
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.top-button:hover {
  background: #42A5F5;
}
</style>
