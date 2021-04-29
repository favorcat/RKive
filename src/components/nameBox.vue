<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<div class="nameBox">
  <!-- Navigation -->
  <div class="navbar">
    <!-- BTS -->
    <div class="dropdown">
      <button class="dropbtn">BTS
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <!-- BTS twt -->
        <a @click="current('BTS', 'BTS_twt', '방탄소년단', 'ALL')">방탄소년단</a>
        <a v-for="hash in bts_twt" :key="hash" class="hashtag" @click="current('BTS', 'BTS_twt', hash)"> {{ hash }} </a>
        <div class="divider"/>
        <!-- global official -->
        <a @click="current('BTS', 'bts_bighit', 'BTS official', 'ALL')">BTS official</a>
        <a v-for="hash in bts_bighit" :key="hash" class="hashtag" @click="current('BTS', 'bts_bighit', hash)"> {{ hash }} </a>
        <div class="divider"/>
        <!-- 일본 official -->
        <a @click="current('BTS', 'BTS_jp_official', 'BTS JAPAN OFFICIAL', 'ALL')">BTS JAPAN OFFICIAL</a>
      </div>
    </div>

    <!-- HYBE -->
    <div class="dropdown">
      <button class="dropbtn">HYBE
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <!-- BIGHIT MUSIC -->
        <a @click="current('HYBE', 'BIGHIT_MUSIC', 'BIGHIT MUSIC', 'ALL')">BIGHIT MUSIC</a>
        <a v-for="hash in bighitmusic" :key="hash" class="hashtag" @click="current('HYBE', 'BIGHIT_MUSIC', hash)"> {{ hash }} </a>
        <div class="divider"/>
        <!-- Weverse -->
        <a @click="current('HYBE', 'weverseofficial', 'Weverse', 'ALL')">Weverse</a>
        <a v-for="hash in weverseofficial" :key="hash" class="hashtag" @click="current('HYBE', 'weverseofficial', hash)"> {{ hash }} </a>
        <div class="divider"/>
        <!-- HYBE OFFICIAL -->
        <a @click="current('HYBE', 'HYBEOFFICIALtwt', 'HYBE OFFICIAL', 'ALL')">HYBE OFFICIAL</a>
        <a v-for="hash in hybe" :key="hash" class="hashtag" @click="current('HYBE', 'HYBEOFFICIALtwt', hash)"> {{ hash }} </a>
        <div class="divider"/>
        <!-- HYBE Japan OFFICIAL -->
        <a @click="current('HYBE', 'HYBE_LABELS_JP', 'HYBE LABELS JAPAN', 'ALL')">HYBE LABELS JAPAN</a>
      </div>
    </div>

    <!-- Merch -->
    <div class="dropdown">
      <button class="dropbtn">Merch
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <!-- weverseshop -->
        <a @click="current('Merch', 'weverseshop', 'Weverse Shop', 'ALL')">Weverse Shop</a>
        <a v-for="hash in shop" :key="hash" class="hashtag" @click="current('Merch', 'weverseshop', hash)"> {{ hash }} </a>
        <div class="divider"/>
        <!-- HYBE MERCH -->
        <a @click="current('Merch', 'HYBE_MERCH', 'HYBE MERCH', 'ALL')">HYBE MERCH</a>
        <a v-for="hash in shop" :key="hash" class="hashtag" @click="current('Merch', 'HYBE_MERCH', hash)"> {{ hash }} </a>
        <div class="divider"/>
        <!-- BigHitShop -->
        <a @click="current('Merch', 'BigHitShop', 'Big Hit official shop', 'ALL')">Big Hit official shop</a>
      </div>
    </div>

    <!-- Project -->
    <div class="dropdown">
      <button class="dropbtn">Project
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <!-- LOVE MYSELF -->
        <a @click="current('Project', 'bts_love_myself', 'LOVE MYSELF', 'ALL')">LOVE MYSELF</a>
        <div class="divider"/>
        <!-- SMERALDO BOOKS -->
        <a @click="current('Project', 'Smeraldo_Books', 'SMERALDO BOOKS', 'ALL')">SMERALDO BOOKS</a>
        <div class="divider"/>
        <!-- IN THE SOOP Official -->
        <a @click="current('Project', 'INTHESOOP_TV', 'IN THE SOOP Official', 'ALL')">IN THE SOOP Official</a>
      </div>
    </div>

    <!-- Character -->
    <div class="dropdown">
      <button class="dropbtn">Character
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <!-- BT21 -->
        <a @click="current('Character', 'BT21_', 'BT21', 'ALL')">BT21</a>
        <div class="divider"/>
        <!-- BT21 Japan -->
        <a @click="current('Character', 'BT21_Japan', 'BT21 Japan Official', 'ALL')">BT21 Japan Official</a>
        <div class="divider"/>
        <!-- TinyTAN_official -->
        <a @click="current('Character', 'TinyTANofficial', 'TinyTAN official', 'ALL')">TinyTAN official</a>
      </div>
    </div>

    <!-- Game -->
    <div class="dropdown">
      <button class="dropbtn">Game
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <!-- BTS WORLD Official -->
        <a @click="current('Game', 'BTSW_official', 'BTS WORLD Official', 'ALL')">BTS WORLD Official</a>
        <a v-for="hash in btsw_official" :key="hash" class="hashtag" @click="current('Game', 'BTSW_official', hash)"> {{ hash }} </a>
        <div class="divider"/>
        <!-- Rhythm Hive Official -->
        <a @click="current('Game', 'rhythmhive_twt', 'Rhythm Hive Official', 'ALL')">Rhythm Hive Official</a>
        <a v-for="hash in rhythmhive_twt" :key="hash" class="hashtag" @click="current('Game', 'rhythmhive_twt', hash)"> {{ hash }} </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      bts_twt: ['#JIN', '#SUGA', '#RM', '#JHope', '#JIMIN', '#V', '#JK', '#김데일리', '#홉필름', '#우리아미상받았네'],
      bts_bighit: ['공지', '#오늘의방탄', '#방탄밤', 'Episode'],

      weverseofficial: ['[위버스 매거진]'],
      bighitmusic: ['방송', '기사', '위버스 매거진'],
      hybe: ['기사', '위버스 매거진', 'HYBE INSIGHT'],

      shop: ['예약 판매'],

      btsw_official: ['공지', '업데이트', '점검'],
      rhythmhive_twt: ['EVENT'],
    };
  },
  methods: {
    current(category, account, screen, hash) {
      this.$store.state.currentCategory = category;
      this.$store.state.currentAccount = account;
      this.$store.state.currentScreenname = screen;
      this.$store.state.currentHash = hash;
    },
    vailable(x) {
      if (document.getElementById(x).style.display === 'block') {
        document.getElementById(x).style.display = 'none';
      } else {
        document.getElementById(x).style.display = 'block';
      }
    },
  },
};
</script>

<style scoped>
@media (max-width: 640px) {
  .navbar {
    display: flex !important;
    flex-direction: column !important;
  }

  .dropdown {
    display: none;
  }
}

a {
    font-family: Malgun Gothic, sans-serif;
    cursor: pointer;
  }

a:hover a:active{
    background: lightblue !important;
}

.hashtag{
  font-size: small !important;
}

.divider {
  border-top: 2px solid lightblue;
  width: 100%;
  margin: 0 !important;
}

/* Navigation bar */
.navbar {
  overflow: hidden;
  background-color: #ffffff;
}

.navbar a {
  float: left;
  font-size: 16px;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* dropdown */
.dropdown {
  float: left;
  overflow: hidden;
}

/* dropdown button */
.dropdown .dropbtn {
  font-size: large;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  margin: 0;
}

/* when hover, change background-color */
.navbar a:hover, .dropdown:hover .dropbtn, .navbar a:active, .dropdown:active .dropbtn {
  background-color: lightblue;
}

/* dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* when hover, Show the dropdown menu */
.dropdown:hover .dropdown-content, .dropdown:active .dropdown-content {
  display: block;
}
</style>
