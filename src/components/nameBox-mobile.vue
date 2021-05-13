<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<div class="nameBox">
  <!-- Navigation -->
  <div class="navbar">
    <!-- Category -->
    <div class="dropdown">
      <button class="dropbtn">{{ $store.state.currentCategory }}
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a v-for="name in category" :key="name" class="tag" @click="currentmenu(name)"> {{ name }} </a>
      </div>
  </div>

  <!-- Account -->
  <div class="dropdown">
      <button class="dropbtn">{{ $store.state.currentScreenname }}
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <!-- BTS account -->
        <div class="bts-category" v-if="$store.state.currentCategory === 'BTS'">
          <a @click="current('BTS', 'BTS_twt', '방탄소년단', 'ALL')">방탄소년단</a>
          <a @click="current('BTS', 'bts_bighit', 'BTS official', 'ALL')">BTS official</a>
          <a @click="current('BTS', 'BTS_jp_official', 'BTS JAPAN OFFICIAL', 'ALL')">BTS JAPAN OFFICIAL</a>
        </div>
        <!-- HYBE account -->
        <div class="hybe-category" v-if="$store.state.currentCategory === 'HYBE'">
          <a @click="current('HYBE', 'BIGHIT_MUSIC', 'BIGHIT MUSIC', 'ALL')">BIGHIT MUSIC</a>
          <a @click="current('HYBE', 'weverseofficial', 'Weverse', 'ALL')">Weverse</a>
          <a @click="current('HYBE', 'HYBEOFFICIALtwt', 'HYBE OFFICIAL', 'ALL')">HYBE OFFICIAL</a>
          <a @click="current('HYBE', 'HYBE_LABELS_JP', 'HYBE LABELS JAPAN', 'ALL')">HYBE LABELS JAPAN</a>
        </div>
        <!-- Merch account -->
        <div class="merch-category" v-if="$store.state.currentCategory === 'Merch'">
          <a @click="current('Merch', 'weverseshop', 'Weverse Shop', 'ALL')">Weverse Shop</a>
          <a @click="current('Merch', 'HYBE_MERCH', 'HYBE MERCH', 'ALL')">HYBE MERCH</a>
          <a @click="current('Merch', 'BigHitShop', 'Big Hit official shop', 'ALL')">Big Hit official shop</a>
        </div>
        <!-- Project account -->
        <div class="project-category" v-if="$store.state.currentCategory === 'Project'">
          <a @click="current('Project', 'bts_love_myself', 'LOVE MYSELF', 'ALL')">LOVE MYSELF</a>
          <a @click="current('Project', 'Smeraldo_Books', 'SMERALDO BOOKS', 'ALL')">SMERALDO BOOKS</a>
          <a @click="current('Project', 'INTHESOOP_TV', 'IN THE SOOP Official', 'ALL')">IN THE SOOP Official</a>
        </div>
        <!-- Character account -->
        <div class="character-category" v-if="$store.state.currentCategory === 'Character'">
          <a @click="current('Character', 'BT21_', 'BT21', 'ALL')">BT21</a>
          <a @click="current('Character', 'BT21_Japan', 'BT21 Japan Official', 'ALL')">BT21 Japan Official</a>
          <a @click="current('Character', 'TinyTANofficial', 'TinyTAN official', 'ALL')">TinyTAN official</a>
        </div>
        <!-- Game account -->
        <div class="game-category" v-if="$store.state.currentCategory === 'Game'">
          <a @click="current('Game', 'BTSW_official', 'BTS WORLD Official', 'ALL')">BTS WORLD Official</a>
          <a @click="current('Game', 'rhythmhive_twt', 'Rhythm Hive Official', 'ALL')">Rhythm Hive Official</a>
        </div>
      </div>
  </div>

  <!-- hashtag -->
  <div class="dropdown">
      <button class="dropbtn">{{ $store.state.currentHash }}
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <!-- BTS -->
        <!-- BTS_twt -->
        <a v-if="$store.state.currentAccount === 'BTS_twt'"
        v-for="hash in bts_twt" :key="hash" class="tag" @click="$store.state.currentHash = hash"> {{ hash }} </a>
        <!-- bts_bighit -->
        <a v-if="$store.state.currentAccount === 'bts_bighit'"
        v-for="hash in bts_bighit" :key="hash" class="tag" @click="$store.state.currentHash = hash"> {{ hash }} </a>
        <!-- BTS_jp_official -->
        <a v-if="$store.state.currentAccount === 'BTS_jp_official'"
        class="tag" @click="$store.state.currentHash = 'ALL'">ALL</a>

        <!-- HYBE -->
        <!-- BIGHIT MUSIC -->
        <a v-if="$store.state.currentAccount === 'BIGHIT_MUSIC'"
        v-for="hash in bighitmusic" :key="hash" class="tag" @click="$store.state.currentHash = hash"> {{ hash }} </a>
        <!-- Weverse -->
        <a v-if="$store.state.currentAccount === 'weverseofficial'"
        v-for="hash in weverseofficial" :key="hash" class="tag" @click="$store.state.currentHash = hash"> {{ hash }} </a>
        <!-- HYBE OFFICIAL -->
        <a v-if="$store.state.currentAccount === 'HYBEOFFICIALtwt'"
        v-for="hash in hybe" :key="hash" class="tag" @click="$store.state.currentHash = hash"> {{ hash }} </a>
        <!-- HYBE Japan OFFICIAL -->
        <a v-if="$store.state.currentAccount === 'HYBE_LABELS_JP'"
        class="tag" @click="$store.state.currentHash = 'ALL'">ALL</a>

        <!-- Merch -->
        <!-- weverseshop -->
        <a v-if="$store.state.currentAccount === 'weverseshop'"
        v-for="hash in shop" :key="hash" class="tag" @click="$store.state.currentHash = hash"> {{ hash }} </a>
        <!-- HYBE MERCH -->
        <a v-if="$store.state.currentAccount === 'HYBE_MERCH'"
        v-for="hash in shop" :key="hash" class="tag" @click="$store.state.currentHash = hash"> {{ hash }} </a>
        <!-- BigHitShop -->
        <a v-if="$store.state.currentAccount === 'BigHitShop'"
        class="tag" @click="$store.state.currentHash = 'ALL'">ALL</a>

        <!-- Project -->
        <!-- LOVE MYSELF -->
        <a v-if="$store.state.currentAccount === 'bts_love_myself'"
        class="tag" @click="$store.state.currentHash = 'ALL'">ALL</a>
        <!-- SMERALDO BOOKS -->
        <a v-if="$store.state.currentAccount === 'Smeraldo_Books'"
        class="tag" @click="$store.state.currentHash = 'ALL'">ALL</a>
        <!-- IN THE SOOP Official -->
        <a v-if="$store.state.currentAccount === 'INTHESOOP_TV'"
        class="tag" @click="$store.state.currentHash = 'ALL'">ALL</a>

        <!-- Character -->
        <!-- BT21 -->
        <a v-if="$store.state.currentAccount === 'BT21_'"
        class="tag" @click="$store.state.currentHash = 'ALL'">ALL</a>
        <!-- BT21 Japan -->
        <a v-if="$store.state.currentAccount === 'BT21_Japan'"
        class="tag" @click="$store.state.currentHash = 'ALL'">ALL</a>
        <!-- TinyTAN_official -->
        <a v-if="$store.state.currentAccount === 'TinyTANofficial'"
        class="tag" @click="$store.state.currentHash = 'ALL'">ALL</a>

        <!-- Game -->
        <!-- BTS WORLD Official -->
        <a v-if="$store.state.currentAccount === 'BTSW_official'"
        v-for="hash in btsw_official" :key="hash" class="tag" @click="$store.state.currentHash = hash"> {{ hash }} </a>
        <!-- Rhythm Hive Official -->
        <a v-if="$store.state.currentAccount === 'rhythmhive_twt'"
        v-for="hash in rhythmhive_twt" :key="hash" class="tag" @click="$store.state.currentHash = hash"> {{ hash }} </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
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
      bts_bighit: ['ALL', '공지', '#오늘의방탄', '#방탄밤', 'Episode'],

      weverseofficial: ['ALL', '위버스 매거진'],
      bighitmusic: ['ALL', '방송', '기사', '위버스 매거진'],
      hybe: ['ALL', '기사', '위버스 매거진', 'HYBE INSIGHT'],

      shop: ['ALL', '예약 판매'],

      btsw_official: ['ALL', '공지', '업데이트', '점검'],
      rhythmhive_twt: ['ALL', 'EVENT'],
    };
  },
  methods: {
    current(category, account, screen, hash) {
      this.$store.state.currentCategory = category;
      this.$store.state.currentAccount = account;
      this.$store.state.currentScreenname = screen;
      this.$store.state.currentHash = hash;
      this.$store.state.currentPage = 0;
    },
    currentmenu(category) {
      this.$store.state.currentCategory = category;
      this.$store.state.currentHash = 'ALL';
      this.$store.state.currentPage = 0;
      switch (this.$store.state.currentCategory) {
        case 'BTS':
          this.$store.state.currentAccount = 'BTS_twt';
          this.$store.state.currentScreenname = '방탄소년단';
          break;
        case 'HYBE':
          this.$store.state.currentAccount = 'BIGHIT_MUSIC';
          this.$store.state.currentScreenname = 'BIGHIT MUSIC';
          break;
        case 'Merch':
          this.$store.state.currentAccount = 'weverseshop';
          this.$store.state.currentScreenname = 'Weverse Shop';
          break;
        case 'Project':
          this.$store.state.currentAccount = 'bts_love_myself';
          this.$store.state.currentScreenname = 'LOVE MYSELF';
          break;
        case 'Character':
          this.$store.state.currentAccount = 'BT21_';
          this.$store.state.currentScreenname = 'BT21';
          break;
        case 'Game':
          this.$store.state.currentAccount = 'BTSW_official';
          this.$store.state.currentScreenname = 'BTS WORLD Official';
          break;
        default:
          break;
      }
    },
    currentacc(account) {
      this.$store.state.currentAccount = account;
      this.$store.state.currentHash = 'ALL';
      this.$store.state.currentPage = 0;
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
    flex-direction: row !important;
  }
  .dropdown {
    display: block;
  }
}

a {
    font-family: Malgun Gothic, sans-serif;
    cursor: pointer;
    font-size: small !important;
  }

a:hover a:active{
    background: lightblue !important;
}

/* Navigation bar */
.navbar {
  overflow: hidden;
  background-color: #ffffff;
  display: none;
}

.navbar a {
  float: left;
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
  font-size: small;
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
