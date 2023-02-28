<template>
  <div class="row">
    <div class="col-12 col-md">
      <q-card flat class="full-height">
        <div class="row">
          <div class="col-12 col-md-6 q-px-xl q-pt-xl">
            <q-card-section class="text-center">
              <q-icon name="font_download" size="32px" />
            </q-card-section>
            <q-card-section class="text-center">
              <div class="text-weight-bolder text-h6">Welcome back!</div>
              <div class="text-subtitle2 text-grey">
                Please enter your log in details below
              </div>
            </q-card-section>

            <q-card-section>
              <q-form class="q-pt-lg" @submit="submitForm">
                <div class="q-gutter-md">
                  <q-input
                    label="Email"
                    v-model="userName"
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'harap masukkan email anda!',
                    ]"
                  />
                  <q-input
                    type="password"
                    label="Password"
                    v-model="password"
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'harap masukkan password anda!',
                    ]"
                  />
                </div>
                <div
                  class="q-mb-lg"
                  style="display: flex; justify-content: flex-end"
                >
                  Forgot password ?
                </div>
                <div class="q-pt-lg">
                  <q-btn
                    unelevated
                    bordered
                    class="full-width"
                    color="primary"
                    label="Login"
                    rounded
                    type="submit"
                  ></q-btn>
                  <div class="row q-mt-md justify-center">
                    <div class="q-mt-sm text-subtitle2">
                      Dont have account?
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
              <q-img src="avatar.jpg" height="601px" />
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "admin",
      password: 123,
    };
  },
  methods: {
    submitForm() {
      this.$axios
        .post("users/login", {
          userName: this.userName,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          if (res.data.status) {
            this.$q.notify({
              type: "negative",
              message: res.data.msg,
              position: "top-right",
            });
            this.$router.push({ name: "dashboard" });
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
