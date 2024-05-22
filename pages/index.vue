<template>
  <div class="container-fluid ibm-plex-sans-jp-regular">
    <div id="particles-js"></div>

    <!--Header-->
    <Header />

    <!--ページネーション-->
    <div class="pagination position-fixed pc">
      <button
        v-for="(section, index) in sections"
        :key="index"
        :class="{ active: activeSectionIndex === index }"
        @click="navigateToSection(index)"
      >
        {{ index + 1 }}
      </button>
    </div>

    <!--First View-->
    <div class="main section" id="home">
      <div class="visual">
        <img src="/main_sp.png" alt="uranus_image" class="sp">
        <img src="/main_pc.png" alt="uranus_image" class="pc">
      </div>
      <div class="maintitle">
        <h2 class="lato-black gradient-text">Gunji Portofolio</h2>
        <p>Webdesign, Frontend, Gamecreative, etc..</p>
      </div>
    </div>

    <!--About-->
    <div class="section pad-20 section-conts" id="about">
      <div class="aboutsec">
        <h3 class="lato-bold pad-y-10 text-center">About</h3>
        <div class="">
          <div class="pb-5">
            <p>
              これまでに、UI/UXデザイン、Webデザイン、アニメーションの制作、フロントエンドエンドエンジニアリングの開発に参画。
              <br>さらに、チームマネジメントやディレクション（企画・提案）も経験があり。
            </p>
            <p>
              今後はよりイメージを形にすること、ストーリー性や没入感の高いコンテンツを作り出すこと、直感的な操作感のあるソフトウェアの開発に注力していきたいと考えています。
              <br>またモデリング、デザインを含むゲーム制作にも積極的に挑戦していきたいと考えてます。
            </p>
            <p>
              デザインやモデリングなど、ビジュアル面での表現力を最大限に活かし、人々に感動や驚きを与えるクリエイティブな作品を生み出していきたいと思います。
            </p>
          </div>
          <div class="pc">
            <img src="/gunji.png" alt="" class="inline_blc my_image">
            <ul class="inline_blc">
              <li>活動名：如月　琿次（きさらぎ　ぐんじ）</li>
              <li>職業：クリエイター / Webデザイナー / フロントエンドエンジニア</li>
              <li>趣味：ゲームを作りながらうちのわんこを愛でること</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--Project-->
    <div class="section pad-20 section-conts" id="project">
      <div class="text-center">
        <h3 class="lato-bold pad-y-10 text-center">Project</h3>
        <p>
          直近の個人開発を紹介します。
        </p>
        <img src="/wild_offroader.png" alt="Wild offroader" class="w100">
        <div class="mt-3">
          <p>
            タイトル「Wild offroader」。豊かな緑のオフロードコースをグングン駆け抜けて競走するオフロードカーレースです！
          </p>
          <p>
            <a target="_blank" href="https://play.unity.com/mg/other/webgl-builds-405853">Demo URLはこちら（Unity Play 無料）</a>
          </p>
        </div>
      </div>
    </div>

    <!--Experience-->
    <div class="section pad-20 section-conts" id="experience">
      <div>
        <h3 class="lato-bold pad-y-10 text-center">Experience</h3>
        <p>
          参画したプロジェクトの一部です。
        </p>
        <div class="pl-table">
          <div class="pl-thead">
            <div class="row">
              <div class="col">Overview</div>
              <div class="col">Role</div>
              <div class="col">Skill</div>
            </div>
          </div>
          <div class="pl-tbody">
            <div class="row">
              <div class="col">Business e-Learning</div>
              <div class="col">
                Management, Direction, Design, Frontend
              </div>
              <div class="col">
              XD, Photoshop ,Next.js ,React ,TypeScript ,AWS ,Amplify ,GraphQL
              </div>
            </div>
            <div class="row">
              <div class="col">Certain event system (agriculture, forestry and fisheries)</div>
              <div class="col">Direction, Frontend, Backend</div>
              <div class="col">Laravel, PHP, MySQL, Vue</div>
            </div>
            <div class="row">
              <div class="col">Certain recruitment system</div>
              <div class="col">Direction, Design, Frontend</div>
              <div class="col">Illustrator, Photoshop, XD, HTML, SASS, Illust-Drawing, JavaScript</div>
            </div>
          </div>
        </div>
        <p class="pt-3">
          制作実績の一部は<a href="/works">こちら</a>になります。
        </p>
      </div>
    </div>

    <!--Contact-->
    <div class="section pad-20 section-conts" id="contact">
      <div>
        <h3 class="lato-bold pad-y-10 text-center">Contact</h3>
        <p>
          お仕事のご依頼は以下からお願いします。
        </p>
        <p><a :href="`mailto:${decodedEmail}`">{{ decodedEmail }}</a></p>
        <footer class="absolute-footer">&copy;2024 uranus All Right Reserved.</footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';

export default {
  components: {
    Header
  },
  data() {
    return {
      isExpanded: false,
      activeSectionIndex: 0,
      // ここでスライドに対応するセクションを定義
      sections: [
        { id: 'home', title: 'Home' },
        { id: 'about', title: 'About' },
        { id: 'project', title: 'Project' },
        { id: 'experience', title: 'Experience' },
        { id: 'contact', title: 'Contact' }
      ],
      encodedEmail: [102, 116, 109, 105, 104, 45, 106, 104, 114, 96, 113, 96, 102, 104, 63, 102, 108, 96, 104, 107, 45, 98, 110, 108]
    }
  },
  computed: {
    decodedEmail() {
      return this.encodeEmail(this.encodedEmail);
    }
  },
  mounted() {
    if (process.client) {
      this.loadParticles();
      this.initScrollify();
    }
  },
  methods: {
    loadParticles() {
      this.$nextTick(() => {
        window.particlesJS.load('particles-js', '/particles.json', function() {
          console.log('callback - particles.js config loaded');
        });
      });
    },
    initScrollify() {
      this.$scrollify({
        section : '.section',
        sectionName : 'section-name',
        interstitialSection : '',
        easing: 'easeOutExpo',
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
        before: (index, sections) => {
          // ページネーションアクティブインデックスの更新
          this.activeSectionIndex = index;
        }
      });
    },
    navigateToSection(index) {
      this.$scrollify.move(index);
    },
    encodeEmail(encodedArray) {
      let str = "";
      encodedArray.forEach(code => {
        str += String.fromCharCode(code + 1);
      });
      return str;
    }
  }
}
</script>

<style scoped>

/* First View
======================================================================= */
.main .visual img{
    width: 100%;
    height: auto;
}
/* Breakpoints
======================================================================= */
@media (min-width: 1200px) { 
  .main .visual{
    text-align: center;
  }
  .main .visual img{
    height: 100vh;
    width: auto;
    padding-top:1%;
  }
}
@media (min-width: 1920px) { 
  .main .visual img{
    padding-top:0;
  }
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000000;
  z-index: -1;
}

/* Pagenation
======================================================================= */
/* Pagenation */
.pagination {
  right: -30px;
  top: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  transform-origin: right center;
  z-index: 1000; /* Make sure it's above other content */
}

.pagination button {
  width: 20px; /* Set the width */
  height: 20px; /* Set the height, equal to width for a perfect circle */
  line-height: 20px; /* Center the text vertically */
  padding: 0;
  margin: 0 10px; /* Spacing between buttons */
  background-color: white; /* Background color */
  color: white; /* Text color */
  text-align: center;
  border: 1px solid #ccc; /* Border color */
  border-radius: 50%; /* Makes the button round */
  cursor: pointer; /* Cursor on hover */
  outline: none; /* Removes the outline */
  font-size: 14px; /* Font size of the numbers */
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); /* Shadow for 3D effect */
  transition: all 0.3s ease; /* Smooth transition for hover effects */
}

.pagination button.active {
  background-color: #7bb6fe; /* Active button background color */
  color: #7bb6fe; /* Active button text color */
  border-color: #7bb6fe; /* Active button border color */
}

@media (min-width: 1200px) { 

}

</style>
