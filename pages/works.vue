<template>
    <div class="container-fluid ibm-plex-sans-jp-regular">
      <div v-if="works">
        <!--Header-->
        <Header />
  
        <!--Works-->
        <div class="section pad-20 section-conts">
          <div>
            <h3 class="lato-bold pad-y-10 text-center">Works</h3>
            <p>
              実績の一部です（現在も公開中のURLになります）。
            </p>
            <div class="pl-table">
              <div class="pl-thead">
                <div class="row">
                  <div class="col">URL</div>
                  <div class="col">Role</div>
                  <div class="col">Skill</div>
                </div>
              </div>
              <div class="pl-tbody">
                <div class="row">
                  <div class="col">
                    <a href="https://www.jobway.jp/" target="_blank">
                      https://www.jobway.jp/
                    </a>
                  </div>
                  <div class="col">Direction, Design, Frontend</div>
                  <div class="col">Illustrator, Photoshop, XD, HTML, SASS, Illust-Drawing, JavaScript</div>
                </div>
                <div class="row">
                  <div class="col">
                    <a href="https://www.ymgs.co.jp/" target="_blank">
                      https://www.ymgs.co.jp/
                    </a>
                  </div>
                  <div class="col">Direction, Design, Frontend</div>
                  <div class="col">Illustrator, Photoshop, XD, HTML, SASS, Illust-Drawing, JavaScript</div>
                </div>
                <div class="row">
                  <div class="col">
                    <a href="https://www.pripress.co.jp/a_work/novebo/" target="_blank">
                      https://www.pripress.co.jp/a_work/novebo/
                    </a>
                  </div>
                  <div class="col">Design, Backend</div>
                  <div class="col">Photoshop, XD, JavaScript, PHP, WordPress, MySQL</div>
                </div>
                <div class="row">
                  <div class="col">
                    <a href="https://www.pripress.co.jp/a_work/oshidashi/" target="_blank">
                      https://www.pripress.co.jp/a_work/oshidashi/
                    </a>
                  </div>
                  <div class="col">Direction, Design</div>
                  <div class="col">Illustrator, Photoshop, XD</div>
                </div>
                <div class="row">
                  <div class="col">
                    <a href="https://kingle.jp/" target="_blank">
                      https://kingle.jp/
                    </a>
                  </div>
                  <div class="col">Direction, Design, Coding</div>
                  <div class="col">Illustrator, Photoshop, XD, HTML, SASS,</div>
                </div>
              </div>
            </div>
            <p><a href="/">ホームに戻る</a></p>
          </div>
          <footer class="absolute-footer">&copy;2024 uranus All Right Reserved.</footer>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
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
            works: [
                { url: "https://www.jobway.jp/", role: "Direction, Design, Frontend", skill: "Illustrator, Photoshop, XD, HTML, SASS, Illust-Drawing, JavaScript" },
                // 他の作品情報を追加...
            ]
        };
    }
  };
  </script>
  
  <style>
  </style>
  