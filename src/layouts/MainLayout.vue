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
          label="Gunawan"
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

              <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

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
        <div class="text-center q-py-md">
          <q-btn
            outline
            color="light-blue-8"
            icon="account_circle"
            label="Gunawan"
            class="q-px-lg"
          ></q-btn>
        </div>
        <q-item
          clickable
          active-class="my-menu-link"
          v-ripple
          :active="link === 'My page'"
          @click="link = 'My page'"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-book" />
          </q-item-section>
          <q-item-section>
            <q-item-label>My page</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          active-class="my-menu-link"
          v-ripple
          :active="link === 'Dashboard'"
          @click="link = 'Dashboard'"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-tachometer-alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          active-class="my-menu-link"
          v-ripple
          :active="link === 'Edit Page'"
          @click="link = 'Edit Page'"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-pencil-alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Edit Page</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          active-class="my-menu-link"
          v-ripple
          :active="link === 'Chat'"
          @click="link = 'Chat'"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-comments" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Chat</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          active-class="my-menu-link"
          v-ripple
          :active="link === 'Community'"
          @click="link = 'Community'"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-satellite-dish" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Community</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          active-class="my-menu-link"
          v-ripple
          :active="link === 'Settings'"
          @click="link = 'Settings'"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-cog" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          active-class="my-menu-link"
          v-ripple
          :active="link === 'Creators'"
          @click="link = 'Creators'"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-user" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Creators</q-item-label>
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
      leftDrawerOpen: false,
      link: "My page",
      text: "",
      info: "",
      toggleDarkMode() {
        $q.dark.toggle();
      },
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
</style>
