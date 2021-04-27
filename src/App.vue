<template>
  <div class="App">
    <header class="App-header">
      <div class="logo" @click="categoryAll()">
        <img src="/logo.png" class="App-logo" alt="logo">
      </div>
      <nameBox/>
    </header>
      <tweetBox/>
      <contact/>
  </div>
</template>

<script>
import nameBox from './components/nameBox.vue';
import tweetBox from './components/tweetBox.vue';
import contact from './components/contact.vue';

export default {
  components: {
    nameBox,
    tweetBox,
    contact,
  },
  methods: {
    categoryAll() {
      this.$store.state.currentCategory = 'ALL';
      this.$store.state.currentAccount = 'ALL';
      this.$store.state.currentHash = 'ALL';
    },
  },
};
</script>

<style>
@media (max-width: 400px) {
  .App-header {
    flex-direction: column !important;
  }

  .App-logo {
    height: 125px !important;
  }
}

.App {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Malgun Gothic', 'Open Sans', 'Helvetica Neue', sans-serif;
}

.App-header {
  min-height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

}

.App-logo {
  height: 100px;
  pointer-events: none;
  margin: 30px;
}
</style>
