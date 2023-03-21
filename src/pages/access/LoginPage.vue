<template>
  <div class="row">
    <div class="col-12 col-md bg-grey-1">
      <q-card flat class="full-height">
        <div class="row justify-center">
          <div class="col-md-5 col-xs-12 q-pt-xl">
            <q-card-section class="text-center">
              <q-icon name="fa-solid fa-user" size="32px" />
            </q-card-section>
            <q-card-section class="text-center q-mx-lg">
              <div class="text-weight-bolder text-h6">Welcome back!</div>
              <div class="text-subtitle2 text-grey">
                Silahkan Sign In menggunakan akun Anda.
              </div>
            </q-card-section>

            <q-card-section>
              <q-form class="q-pt-lg q-px-xl" @submit="submitForm">
                <div class="q-gutter-md">
                  <q-input
                    outlined
                    dense
                    hint="Username"
                    label="username kamu ..."
                    v-model="userName"
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'harap masukkan username anda!',
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon
                        name="fa-solid fa-envelope"
                        size="xs"
                        class="text-blue q-pr-md"
                      />
                    </template>
                  </q-input>
                  <q-input
                    dense
                    v-model="password"
                    label="password kamu ..."
                    outlined
                    hint="password"
                    :type="isPwd ? 'password' : 'text'"
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'harap masukkan password anda!',
                    ]"
                    lazy-rules
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer text-blue"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                    <template v-slot:prepend>
                      <q-icon
                        name="fa-solid fa-lock"
                        size="xs"
                        class="text-blue q-pr-md"
                      />
                    </template>
                  </q-input>
                </div>
                <div
                  class="q-mb-lg"
                  style="display: flex; justify-content: flex-end"
                >
                  Lupa password ?
                </div>
                <div class="q-pt-lg">
                  <q-btn
                    unelevated
                    bordered
                    class="full-width"
                    color="blue"
                    label="Sign in"
                    rounded
                    type="submit"
                  ></q-btn>
                  <div class="row q-mt-md justify-center">
                    <div class="q-mt-sm text-subtitle2">
                      Belum memiliki akun?
                      <router-link class="text-black q-mb-lg" to=""
                        >Sign-up</router-link
                      >
                    </div>
                  </div>
                </div>
              </q-form>
            </q-card-section>
          </div>
          <div
            class="col-12 col-md-6"
            v-if="$q.screen.lg || $q.screen.xl || $q.screen.md"
          >
            <div>
              <lottie :options="defaultOptions" />
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>
<script>
import Lottie from "../../components/lottie.vue";
import * as animationData from "../../assets/sign.json";

export default {
  components: { Lottie },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2,
      isPwd: true,
      visible: false,
      userName: "admin",
      password: 123,
      role: null,
    };
  },
  methods: {
    submitForm() {
      this.$axios
        .post("users/login", {
          userName: this.userName,
          password: this.password,
          role: this.role,
        })
        .then((res) => {
          console.log(res);
          if (res.data.status) {
            this.$q.localStorage.set("dataUser", res.data.data);
            // if (res.data.data.role === 1) {
            this.$router.push({ name: "dashboard" });
            // }
            this.$q.notify({
              type: "positive",
              message: res.data.msg,
            });
          }
        });
    },
  },
};
</script>
<style scoped>
body {
  background: #333333;
}
</style>
