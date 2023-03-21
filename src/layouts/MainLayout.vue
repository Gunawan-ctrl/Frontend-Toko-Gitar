<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="mode" bordered>
      <q-toolbar>
        <q-btn
          @click="leftDrawerOpen = !leftDrawerOpen"
          flat
          dense
          round
          icon="menu"
        />

        <q-space />

        <q-separator vertical />
        <div class="row q-gutter-md q-px-md">
          <q-btn
            @click="toggleDarkMode"
            type="submit"
            dense
            round
            flat
            icon="fa-solid fa-moon"
          >
          </q-btn>
        </div>

        <q-separator vertical />
        <div class="row q-gutter-md q-px-md">
          <q-btn
            @click="info"
            type="submit"
            dense
            round
            flat
            icon="far fa-bell"
          >
            <q-badge color="red" rounded floating>4</q-badge>
          </q-btn>
        </div>

        <q-separator vertical />

        <q-btn-dropdown
          flat
          size="md"
          icon="account_circle"
          color="white"
          :label="dataUser.namaLengkap"
        >
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h6 q-mb-md">Settings</div>
            </div>

            <q-separator vertical inset class="q-mx-lg" />

            <div class="column items-center">
              <q-avatar size="72px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs text-weight-bold">
                {{ dataUser.namaLengkap }}
              </div>

              <q-btn
                color="primary"
                label="Logout"
                push
                size="sm"
                v-close-popup
              />
            </div>
          </div>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="240">
      <div class="q-mt-md q-ml-md">
        <q-btn dense flat round icon="lens" size="8.5px" color="red" />
        <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
        <q-btn dense flat round icon="lens" size="8.5px" color="green" />
      </div>
      <q-list>
        <q-card flat class="text-justify q-py-md">
          <q-item>
            <q-item-section avatar>
              <q-avatar rounded>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-subtitle2 text-weight-bold">
                {{ dataUser.namaLengkap }}
              </q-item-label>
              <q-item-label class="text-grey text-overline">
                Administrator
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
        <q-item
          clickable
          active-class="active"
          v-ripple
          :to="{ name: 'dashboard' }"
        >
          <q-item-section avatar>
            <q-icon name="home" size="sm" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          active-class="active"
          v-ripple
          :to="{ name: 'kategori' }"
        >
          <q-item-section avatar>
            <q-icon name="grid_view" size="sm" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Kategori</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          active-class="active"
          v-ripple
          :to="{ name: 'dataBarang' }"
        >
          <q-item-section avatar>
            <q-icon name="production_quantity_limits" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Data Barang</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-space></q-space>
      <div
        class="q-py-md"
        style="position: absolute; bottom: 0; margin-left: 75px"
      >
        <q-btn
          @click="logout"
          color="light-blue-8"
          label="Logout"
          class="q-px-lg"
          outline
        />
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
export default {
  name: "LayoutDefault",
  data() {
    const $q = useQuasar();
    return {
      profile_card_data: {
        name: "Pratik Patel",
        des: "Solutions Developer",
        avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
      },
      leftDrawerOpen: false,
      link: "My page",
      text: "",
      info: "",
      toggleDarkMode() {
        $q.dark.toggle();
      },
      dataUser: this.$q.localStorage.getItem("dataUser"),
    };
  },
  methods: {
    logout() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>
<style scoped>
body.body--dark {
  background: #333333;
}
.active {
  color: green;
  font-weight: bold;
}
</style>
