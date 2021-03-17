<template>
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="200px"
    >
      <q-carousel-slide name="first" img-src="https://images-kr.girlstyle.com/wp-content/uploads/2020/08/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA-2020-08-09-%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE-3.18.16.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h5">다이어트 광고</div>
          <div class="text-subtitle1">운동</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/7akk/image/I8Ze2vROVbnVZQfi2FqY9RVbnL8.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h5">아이성장 광고</div>
          <div class="text-subtitle1">키/몸무게</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://mintir.com/data/cheditor4/1803/4566f53cafe2a7840cc08daeb46a5ecb_20180309104945_rorensxg.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h5">여성 광고</div>
          <div class="text-subtitle1">주기별 관리</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <span>Divider </span>
    <q-card class="my-card">
      <q-video src="https://www.youtube.com/embed/Nv0zWRGGRRk?rel=0" />
      <!-- 동영상은  https://www.youtube.com/embed/<요기에 주소>?rel=0-->
      <q-card-section>
        <div class="text-h6">아이성장</div>
        <div class="text-subtitle2">스트레칭</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        고른 영양 섭취와 운동으로 아이 성장 및 자세교정
      </q-card-section>
    </q-card>

    <span>Divider </span>
    
    <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="150"
      />

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
    </q-card>
  </div>

  
</template>

<script>
export default {
  name: 'MainAdv',
  data () {
    return {
      slide: 'first'
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
.my-card
  width: 100%
  // max-width: 300px
</style>
