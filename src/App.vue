<template>
  <div class="App">
    <header class="App-header">
    <!-- <img src="/logo.svg" class="App-logo" alt="logo" /> -->
      <p>
        Rkive
      </p>

      <!-- <a
        class="App-link"
        href="https://vuejs.org"
        target="_blank"
        rel="noopener noreferrer"
      >{{ message }}</a> -->
    </header>
    
    <nameBox></nameBox>
  </div>


</template>

<script>
  import nameBox from './components/nameBox.vue'

  export default {
    data() {
      return {
        message: "Learn Vue"
      };
    },

    components: {
      'nameBox' : nameBox
    }
  };
</script>

<style>
.App {
  text-align: center;
}
.App-header {
  background-color: #f9f6f6;
  color: #32485f;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}
.App-link {
  color: #00c185;
}
.App-logo {
  height: 40vmin;
  pointer-events: none;
  margin-bottom: 1rem;
  animation: App-logo-spin infinite 1.6s ease-in-out alternate;
}
@keyframes App-logo-spin {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
}
</style>
