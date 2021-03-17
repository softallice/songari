<template>
  <q-layout view="hHh lpR fFf">

    <q-header  bordered class="bg-transparent text-black">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/images/logo.png">
          </q-avatar>
          <q-btn dense flat round label="SongGaRi" to="/" />
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer overlay v-model="right" side="right" bordered>
      <!-- drawer content -->
      <!-- 로그인전 로그인, 로그인 후 사용자 환경 설정 -->
      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">송아리(로그인시)</div>
          <div>songari@naver.com</div>
        </div>
      </q-img>

      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item to="/diet" clickable v-ripple >
              <q-item-section avatar>
                <q-icon name="emoji_food_beverage" />
              </q-item-section>

              <q-item-section>
                다이어트
              </q-item-section>
            </q-item>

            <q-item to='/child'  clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="escalator_warning" />
              </q-item-section>

              <q-item-section>
                아이성장
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="female" />
              </q-item-section>

              <q-item-section>
                여성
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="location_on" />
              </q-item-section>

              <q-item-section>
                한의원찾기
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-page-container>
        <router-view />
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-fab
              v-model="fabRight"
              vertical-actions-align="right"
              color="primary"
              glossy
              icon="keyboard_arrow_up"
              direction="up"
            >
              <q-fab-action label-position="left" color="primary" @click="onClick" icon="mail" label="메시지" />
              <q-fab-action label-position="left" color="secondary" @click="onClick" icon="alarm" label="리마인더" />
              <q-fab-action label-position="left" color="orange" @click="onClick" icon="airplay" label="체중입력" />
              <q-fab-action label-position="left" color="accent" @click="onClick" icon="room" label="지도" />
            </q-fab>
        </q-page-sticky>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      right: false,
      fabRight: false
    }
  },
  methods: {
    onClick () {
      // console.log('Clicked on a fab action')
    }
  }
}
</script>
