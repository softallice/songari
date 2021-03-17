<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" ref="stepper" color="primary" animated vertical>
      <q-step
        :name="1"
        title="약관동의"
        icon="settings"
        :done="step > 1"
      >
        송가리 로그인을 위한 약관 동의 입니다. 약관은 ......
      </q-step>

      <q-step
        :name="2"
        title="본인인증"
        caption="휴대폰/이메일"
        icon="create_new_folder"
        :done="step > 2"
      >
        휴대전화를 통한 본인 인증 페이지 입니다.
      </q-step>

      

      <q-step :name="3" title="회원 정보 입력" icon="add_comment">
        회원정보를 입력해 주세요
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="$refs.stepper.next()"
            color="primary"
            :label="step === 3 ? '완료' : '계속'"
            :to="step === 3 ? '/diet' : ''"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="이전"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data() {
    return {
      step: 1
    };
  }
};
</script>
