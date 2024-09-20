<template>
  <transition name="fade">
    <div v-show="isMounted" class="container-fluid ibm-plex-sans-jp-regular works-page">
      <div>
        <!--Header-->
        <Header />

        <!--Works-->
        <div class="section pad-20 section-conts">
          <div>
            <h3 class="lato-bold text-center">Works</h3>
            <p class="text-center">制作実績の一部になります。</p>
            <p class="text-center mb-md-5 text-secondary">※契約によりお見せできない実績も多数ございます。</p>
            <div class="pl-table mb-md-5">
              <div class="pl-tbody d-md-flex flex-wrap">

                <div class="rower" v-for="work in works" :key="work.id">
                  <div class="coller eyecatch">
                    <a :href="`/works/${work.id}`">
                      <img :src="work.eyecatch.url" alt="" class="eyecatch-img">
                    </a>
                  </div>
                  <div class="coller title">{{ work.title }}</div>
                  <div :class="['coller', 'badge', 'badge-pill', getCategoryClass(work.category.name)]">{{ work.category.name }}</div>
                </div>
              </div>
            </div>
            <p class="text-center"><a class="btn btn-primary btn-lg mb-4" href="/">Home</a></p>
          </div>
        </div>
        <footer class="text-center pb-2">&copy;2024 uranus All Right Reserved.</footer>
      </div>
      <!-- <div v-else>
        <p>Loading...</p>
      </div> -->
    </div>
  </transition>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  middleware: 'basic-auth',
  components: {
    Header
  },
  data() {
    return {
      works: [],
      isMounted: false
    };
  },
  async asyncData({ $microcms }) {
    try {
      const response = await $microcms.get({
        endpoint: 'works',
        queries: { limit: 100 }
      });
      return { works: response.contents };
    } catch (error) {
      console.error('Error fetching works:', error.response ? error.response.data : error.message);
      throw error;
    }
  },
  mounted() {
    setTimeout(() => {
      this.isMounted = true;
    }, 100); // 100msの遅延を追加
  },
  methods: {
    getCategoryClass(categoryName) {
      switch (categoryName) {
        case 'フルスタック':
          return 'badge-category1';
        case 'プロジェクトリーダー':
          return 'badge-category2';
        case 'ディレクション':
          return 'badge-category3';
        case 'デザイン':
          return 'badge-category4';
        case 'バックエンド':
          return 'badge-category5';
        case 'フロントエンド':
          return 'badge-category6';
        default:
          return 'badge-secondary';
      }
    }
  }
};
</script>

<style>
.section-conts{
  height: 100%;
}

.pad-20 {
  padding: 8% 5%;
}

img.eyecatch-img {
  width: 100%;
}

.pl-table {
  max-width: 1540px;
}

.badge-pill{
  font-size: 0.82rem !important;
  padding: 6px 14px;
  color: white;
}

.badge-category1 {
  background-color: rgba(60, 84, 139, 0.758);
}
.badge-category2 {
  background-color: rgba(103, 131, 103, 0.898);
}
.badge-category3 {
  background-color: rgba(0, 0, 255, 0.5);
}
.badge-category4 {
  background-color: rgba(97, 168, 88, 0.874);
}
.badge-category5 {
  background-color: rgba(97, 84, 107, 0.728);
}
.badge-category6 {
  background-color: rgba(148, 141, 93, 0.888);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 3.0s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
