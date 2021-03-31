<template>
  <div class="App">
    <header class="App-header">
      <img src="/logo.png" class="App-logo" alt="logo" />
        <!-- <a
          class="App-link"
          href="https://vuejs.org"
          target="_blank"
          rel="noopener noreferrer"
        >{{ message }}</a> -->
      <nameBox/>
    </header>
    <div class="tweet">
      <tweetBox/>
    </div>
  </div>

</template>

<script>
import nameBox from './components/nameBox.vue';
import tweetBox from './components/tweetBox.vue';

export default {
  components: {
    nameBox,
    tweetBox,
  },
};
</script>

<style>
.App {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Malgun Gothic', 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction:column;
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
  display: flex;
  flex-direction: row;
  pointer-events: none;
  margin: 30px;
}

.tweet {
  display: flex;
  flex-direction: row;
}

</style>
