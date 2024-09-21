<template>
  <div class="container-fluid ibm-plex-sans-jp-regular">

    <div
      ref="loadingWrapper"
      :class="{'loading-wrapper': true, 'fade-out': !loading}"
    >
      <div class="loader">
        <div class="spinner-border text-center" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="loading-text">Now loading...</div>
      </div>
    </div>

    <!-- <div v-show="!loading" class="contents-wrapper"> -->
    <div class="contents-wrapper">
      <div id="particles-js-home"></div>

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
          <!-- <img src="/main_pc.png" alt="uranus_image" class="pc"> -->
          <div ref="threeContainer" class="three-container pc"></div>
        </div>
        <div class="maintitle">
          <h2 class="lato-black gradient-text">Gunji Portofolio</h2>
          <p class="sub-title">Web Designer / UI/UX Designer / Front-end Engineer</p>
        </div>
      </div>

      <!--Experience-->
      <div class="section pad-20 section-conts" id="experience">
        <div class="d-md-flex conts">
          <div class="left-conts">
            <h3 class="lato-bold pad-y-10">Experience</h3>
            <div class="pab-5">
              <p class="">
                Webデザイン、UI/UXデザイン、アニメーション制作、フロントエンドエンジニアリングなどを中心に活動しています。<br>
                Webデザインのチームマネジメントや、各種案件のディレクションなども経験しました。<br>
                デザイン制作にはAdobe XD、Figma、Photoshop、Illustrator、AfterEffects、PremiereProなどを用いてきました。<br><br>

                現在は、フロントエンドエンジニアとしてプロジェクトに参画し、新たなプラットフォーム開発に挑戦中です。<br>
                TypeScriptを中心に、React、Vue、Angularなどを使った開発を行っています。<br>
                WordPressやLaravelなどを用いたバックエンド領域での開発も一部経験があります。
              </p>
            </div>
            <div class="">
              <a class="btn btn-primary btn-lg mb-4" href="/works">Works</a>
              <p class="text-secondary">
                ※閲覧は限定ユーザーのみになります。
              </p>
            </div>
          </div>
          <div class="right-conts">
            <img src="/experience.jpg" alt="" class="pc">
          </div>
        </div>
        <div id="particles-js-experience"></div>
      </div>

      <!--Project-->
      <div class="section pad-20 section-conts project-conts" id="project">
        <div class="d-md-flex conts">
          <div class="left-conts">
            <div class="pab-5">
              <h3 class="lato-bold pad-y-10">Personal Project</h3>
              <img src="/wild_offroader.png" alt="Wild offroader" class="sp sp-img mb-3">
              <p>
                個人でゲーム開発を始めました！<br>
                「Wild offroader」は、豊かな緑のオフロードコースをグングン駆け抜けて競走する3Dオフロードカーレースです！<br>
                ゲームエンジンはUnity、モデリングはBlenderを用いて作成しました。<br>
                以下のリンクをクリックすると、Unity Playにてデモをプレイすることができます。
              </p>
            </div>
            <div class="mt-3">
              <p>
                <a class="btn btn-primary btn-lg mb-4" target="_blank" href="https://play.unity.com/en/games/267bffe6-b93b-496b-8d83-b642f3289858/wiiloffroaderver02">β-version Play</a>
              </p>
            </div>
          </div>
          <div class="right-conts">
            <img src="/wild_offroader.png" alt="Wild offroader" class="pc">
          </div>
        </div>
        <div id="particles-js-project"></div>
      </div>

      <!--Contact-->
      <div class="section pad-20 section-conts" id="contact">
        <div>
          <h3 class="lato-bold pad-y-10 text-center">Contact</h3>
          <p>メッセージは以下よりお願いします。お気軽にお問い合わせください。</p>
          <Form />

          <!-- <p><a :href="`mailto:${decodedEmail}`">{{ decodedEmail }}</a></p> -->
          <footer class="absolute-footer">&copy;2024 uranus All Right Reserved.</footer>
        </div>
        <div id="particles-js-contact"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from '~/components/Form.vue'
import Header from '~/components/Header.vue';
import * as THREE from 'three';

export default {
  components: {
    Header,
    Form
  },
  data() {
    return {
      loading: true, // ローディング状態を管理するデータプロパティ
      isExpanded: false,
      activeSectionIndex: 0,
      // ここでスライドに対応するセクションを定義
      sections: [
        { id: 'home', title: 'Home' },
        // { id: 'about', title: 'About' },
        { id: 'experience', title: 'Experience' },
        { id: 'project', title: 'Project' },
        { id: 'contact', title: 'Contact' }
      ],
      encodedEmail: [102, 116, 109, 105, 104, 45, 106, 104, 114, 96, 113, 96, 102, 104, 63, 102, 108, 96, 104, 107, 45, 98, 110, 108]
    }
  },
  watch: {
    loading(newVal) {
      if (!newVal) {
        const loadingWrapper = this.$refs.loadingWrapper;
        loadingWrapper.addEventListener('transitionend', () => {
          loadingWrapper.style.display = 'none';
        }, { once: true }); // 一度だけ実行されるように
      }
    }
  },
  computed: {
    decodedEmail() {
      return this.encodeEmail(this.encodedEmail);
    }
  },
  async mounted() {
    if (process.client) {
      this.$nextTick(async () => {
        await this.initThree();
        this.loadParticles();
        this.initScrollify();
        this.loading = false; // すべて完了してからローディングを非表示
      });
    }
  },
  methods: {
    async loadModel() {
      const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
      const loader = new GLTFLoader();

      // 読み込み開始をログに出力
      console.log('Attempting to load model from URL');

      // glbファイルをPromiseで読み込む
      return new Promise((resolve, reject) => {
        loader.load(
          'https://storage.googleapis.com/gunji_portofolio_glb/main_pc.glb',
          (gltf) => {
            console.log('Model loaded successfully:', gltf); // モデルが正常に読み込まれた場合
            resolve(gltf);
          },
          undefined,
          (error) => {
            console.error('Error loading model:', error); // エラーが発生した場合
            reject(error);
          }
        );
      });
    },
    loadParticles() {
      this.$nextTick(() => {
        window.particlesJS.load('particles-js-home', '/particles.json', function() {
          console.log('callback - particles.js config loaded');
        });
        window.particlesJS.load('particles-js-experience', '/particles.json', function() {
          console.log('callback - particles.js config loaded');
        });
        window.particlesJS.load('particles-js-project', '/particles.json', function() {
          console.log('callback - particles.js config loaded');
        });
        window.particlesJS.load('particles-js-contact', '/particles.json', function() {
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
    },
    async initThree() {
      const container = this.$refs.threeContainer;

      // containerがない場合のエラーハンドリング
      if (!container) {
        console.error('threeContainer not found');
        this.loading = false;
        return;
      }

      console.log('Initializing Three.js container:', container);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.zoom = 2.7; // カメラのズームを設定
      camera.updateProjectionMatrix(); // ズームを適用するためにプロジェクションマトリックスを更新

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setClearColor(0x000000, 0); // 背景色を透明に設定
      container.appendChild(renderer.domElement);

      // サイズ変更時の処理
      const resizeHandler = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      window.addEventListener('resize', resizeHandler);
      resizeHandler(); // ロード完了後にリサイズを手動で実行

      // ライトを追加
      const light = new THREE.DirectionalLight(0xffffff, 10); // 強度を2に設定
      light.position.set(11, 25.5, 5).normalize();
      scene.add(light);

      const pointLight = new THREE.PointLight(0xffffff, 100, 100); // 強度を2に設定
      pointLight.position.set(10, 10, 0);
      scene.add(pointLight);

      const ambientLight = new THREE.AmbientLight(0xffffff, 3); // 強度を1に設定
      scene.add(ambientLight);

      try{
        const gltf = await this.loadModel(); // glTFモデルを先にロード
        const model = gltf.scene;

        model.position.set(0, 0, 0); // モデルの位置を設定
        model.rotation.x = Math.PI/30; // Y軸周りに90度回転
        model.rotation.y = Math.PI/-3.8; // Y軸周りに90度回転

        scene.add(model);
        this.loading = false; // モデルの読み込みが完了したらローディングを非表示にする

        let clock = new THREE.Clock();

        const animate = () => {
          requestAnimationFrame(animate);
          if (model) {
            const time = clock.getElapsedTime();
            model.position.y = Math.sin(time) * 1.2 - 8;;
          }
          renderer.render(scene, camera);
        };

        animate();

      } catch (error) {
        console.error(error);
        this.loading = false; // エラーが発生してもローディングを非表示にする
      }

      // カメラの位置を設定
      camera.position.set(0, 10, 120);

      // OrbitControlsを動的にインポート
      const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true; // 慣性を有効にする
      controls.dampingFactor = 0.25; // 慣性の強さ
      controls.screenSpacePanning = false; // パン操作を無効にする
      controls.maxPolarAngle = Math.PI / 2; // 垂直方向の回転を制限
      controls.update(); // カメラコントロールの更新
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

.three-container {
  width: 100%;
  height: 100vh; /* 高さを設定 */
  background-color: transparent; /* 背景色を透明に設定 */
}

.loader {
  display: flex; /* フレックスボックスにする */
  flex-direction: column; /* 縦に並べる */
  align-items: center; /* 横方向の中央揃え */
  justify-content: center; /* 縦方向の中央揃え */
  gap: 10px; /* スピナーとテキストの間にスペースを空ける */
}

.loading-wrapper {
  position: fixed; /* 全画面表示に固定 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* 画面全体の高さ */
  background-color: black;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.8s ease;
  display: flex; /* 全体もフレックスに */
  justify-content: center; /* 縦の中央揃え */
  align-items: center; /* 横の中央揃え */
}

.loading-wrapper.fade-out {
  opacity: 0; /* フェードアウト時に透明にする */
}

.spinner-border {
  width: 2rem; /* スピナーのサイズ調整 */
  height: 2rem;
}

.loading-text {
  color: white;
  font-size: 1.0rem; /* テキストのサイズ */
  margin-top: 20px;
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
    padding-top: 0%;
    margin-top: -44px;
  }
}
@media (min-width: 1920px) {
  .main .visual img{
    padding-top:0;
  }
}

#particles-js-home,
#particles-js-experience,
#particles-js-project,
#particles-js-contact {
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
  width: 15px;
  height: 15px;
  line-height: 15px;
  padding: 0;
  margin: 0 10px;
  background-color: white;
  color: white;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  font-size: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.pagination button.active {
    background-color: #77818e;
    color: #77818e;
    border-color: #77818e;
}

@media (min-width: 1200px) {

}

</style>
