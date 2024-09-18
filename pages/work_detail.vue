<template>
  <transition name="fade">
    <div class="container-fluid ibm-plex-sans-jp-regular works-page">
      <div>
          <!--Header-->
          <Header />

          <div class="section pad-20 section-conts">
            <div class="details mb-5">
              <div class="pl-table mb-5">
                <h3 class="lato-bold text-left">
                  <span :class="['detail-category', 'coller', 'badge', 'badge-pill', getCategoryClass(work.category.name)]">{{ work.category.name }}</span>
                  {{ work.title }}
                </h3>
                <img :src="work.eyecatch.url" alt="" class="eyecatch-detail-img">
                <div class="pl-tbody mb-3" v-html="work.content"></div>
                <p class="text-center"><a class="btn btn-primary btn-lg mb-4" href="/works">Back to Works</a></p>
              </div>
            </div>
          </div>
      </div>
      <footer class="text-center pb-2">&copy;2024 uranus All Right Reserved.</footer>
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
      work: {}
    };
  },
  async asyncData({ params, $microcms }) {
    try {
      const response = await $microcms.get({
        endpoint: 'works',
        contentId: params.id
      });
      return { work: response };
    } catch (error) {
      console.error('Error fetching work detail:', error.response ? error.response.data : error.message);
      throw error;
    }
  },
  mounted() {
    this.isMounted = true;
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
}
</script>

<style>
h1{
  font-size: 3.0rem;
}

h2{
  font-size: 2.0rem;
}

h3{
  font-size: 1.8rem;
}

.section-conts{
  height: 100%;
}

.pad-20 {
  padding: 19% 5% 0 5%;
}

img.eyecatch-detail-img {
  width: 100%;
}

.details .pl-table {
  max-width: 1280px;
}

.details {
  background-color: white;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
}
img.eyecatch-detail-img {
  width: 80%;
  text-align: center;
  margin: 0 auto;
  display: block;
  background: #eeeeee;
  padding: 20px;
  margin-bottom: 20px;
}

h3.lato-bold.text-left {
  padding: 19px 30px;
  font-size: 1.6rem !important;
}

.pl-tbody {
  padding: 0;
  width: 100%;
}

.pl-tbody table{
  width: 80%;
  margin: 0 auto;
}

.pl-tbody table th,
.pl-tbody table td {
  vertical-align: top;
  padding: 20px 20px 0;
  border-top: 1px solid #e7e7e7;
}

.pl-tbody table tr:nth-child(odd) {
  background-color: #f9f9f9;
}

.pl-tbody table th:last-of-type,
.pl-tbody table td:last-of-type {
  border-bottom: 1px solid #e7e7e7;
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

.detail-category{
  margin-right: 10px;
    margin-top: 7px;
    display: block;
    width: 140px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.0s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (min-width: 1200px) {
  .pl-tbody {
    padding: 40px 70px 50px;
  }

  .pad-20 {
    padding: 8% 5%;
  }

  h3.lato-bold.text-left {
    padding: 50px 0 40px;
    margin-left: 128px;
    display: flex;
    align-items: center; /* 縦中央揃え */
  }

  .detail-category{
      display: inline-block;
      width: auto;
  }

  img.eyecatch-detail-img {
    width: 80%;
    margin-bottom: 0px;
  }

  h3.lato-bold.text-left {
    font-size: 1.8rem !important;
  }

}
</style>
