<template>
  <div class="container-fluid ibm-plex-sans-jp-regular">

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
                <a class="btn btn-primary btn-lg mb-4" target="_blank" href="https://play.unity.com/mg/other/webgl-builds-405853">Demo</a>
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
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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
    this.initThree();
  },
  methods: {
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
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.zoom = 2.7; // カメラのズームを設定
      camera.updateProjectionMatrix(); // ズームを適用するためにプロジェクションマトリックスを更新

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setClearColor(0x000000, 0); // 背景色を透明に設定
      container.appendChild(renderer.domElement);

      // グリッドヘルパーを追加
      // const gridHelper = new THREE.GridHelper(300, 300);
      // scene.add(gridHelper);

      // 軸ヘルパーを追加
      // const axesHelper = new THREE.AxesHelper(200);
      // scene.add(axesHelper);

      // カメラコントロールを追加
      // const controls = new OrbitControls(camera, renderer.domElement);
      // controls.enableDamping = true; // 慣性を有効にする
      // controls.dampingFactor = 0.25; // 慣性の強さ
      // controls.screenSpacePanning = false; // パン操作を無効にする
      // controls.maxPolarAngle = Math.PI / 2; // 垂直方向の回転を制限

      // ライトを追加
      const light = new THREE.DirectionalLight(0xffffff, 8); // 強度を2に設定
      light.position.set(0, 2.5, 1.2).normalize();
      scene.add(light);

      const pointLight = new THREE.PointLight(0xffffff, 3, 100); // 強度を2に設定
      pointLight.position.set(50, 50, 50);
      scene.add(pointLight);

      const ambientLight = new THREE.AmbientLight(0xffffff, 2); // 強度を1に設定
      scene.add(ambientLight);

      const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
      const loader = new GLTFLoader();
      let model; // スコープの外でモデルを宣言
      loader.load('/main_pc.glb', (gltf) => {
        model = gltf.scene;
        model.position.set(0, 0, 0); // モデルの位置を設定
        model.rotation.x = Math.PI/30; // Y軸周りに90度回転
        model.rotation.y = Math.PI/-3.8; // Y軸周りに90度回転
        // model.rotation.z = Math.PI / -14; // Z軸周りに90度回転
        scene.add(model);
        renderer.render(scene, camera);
        this.loading = false; // モデルの読み込みが完了したらローディングを非表示にする
        console.log(this.loading);
      }, undefined, (error) => {
        console.error(error);
        this.loading = false; // エラーが発生してもローディングを非表示にする
      });

      // カメラの位置を設定
      camera.position.set(0, 10, 120);
      // カメラの回転を設定
      // camera.rotation.z = Math.PI / -29; // X軸周りに30度回転
      // camera.rotation.x = Math.PI / 30; // X軸周りに30度回転
      // camera.rotation.y = Math.PI / 40; // X軸周りに30度回転

      // OrbitControlsを動的にインポート
      const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true; // 慣性を有効にする
      controls.dampingFactor = 0.25; // 慣性の強さ
      controls.screenSpacePanning = false; // パン操作を無効にする
      controls.maxPolarAngle = Math.PI / 2; // 垂直方向の回転を制限

      let clock = new THREE.Clock();

      const animate = () => {
        requestAnimationFrame(animate);
        // controls.update(); // カメラコントロールを更新
        if (model) {
          const time = clock.getElapsedTime();
          // model.position.y = Math.sin(time) * 1.2;
          model.position.y = Math.sin(time) * 1.2 - 8;
          // console.log(time);
        }
        renderer.render(scene, camera);
      };

      animate();
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

.loading-wrapper{
  width: 100%;
  height: 100vh; /* 高さを設定 */
  background-color: black; /* 背景色を透明に設定 */
  z-index: 99999;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: #fff;
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
