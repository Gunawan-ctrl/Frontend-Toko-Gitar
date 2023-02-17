<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row items-center q-col-gutter-md">
        <div class="col-12 col-md-4 col-sm-6 col-xs-12 col-lg-4">
          <q-card class="my-card">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label><strong>AAE IdeaPro</strong> </q-item-label>
                <q-item-label caption> UI/UX Designer </q-item-label>
              </q-item-section>

              <q-item-section>
                <q-btn color="light-blue-8" label="Edit" class="q-px-md" />
              </q-item-section>
            </q-item>

            <q-separator />
            <q-item>
              <q-item-section>
                <q-item-label class="text-center"
                  ><strong>69</strong>
                </q-item-label>
                <q-item-label class="text-center" caption> Shots </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-center"
                  ><strong>2747</strong>
                </q-item-label>
                <q-item-label class="text-center" caption>
                  Followers
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-center"
                  ><strong>678</strong>
                </q-item-label>
                <q-item-label class="text-center" caption>
                  Following
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-center"
                  ><strong>78</strong>
                </q-item-label>
                <q-item-label class="text-center" caption>
                  Lithning
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />
            <q-item>
              <q-item-section>
                <q-btn color="primary" icon="mail" label="Message" flat />
              </q-item-section>
              <q-item-section>
                <q-btn flat color="primary" label="Follow" />
              </q-item-section>
            </q-item>
          </q-card>
        </div>

        <div class="col-12 col-md-4 col-sm-6 col-xs-12 col-lg-4">
          <q-card class="my-card">
            <q-item>
              <q-item-section>
                <q-item-label class="text-subtitle1 text-weight-bold">
                  Give your support
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <q-btn
                  round
                  color="blue-2"
                  text-color="blue-8"
                  icon="fas fa-bolt"
                />
              </q-item-section>
              <q-item-section>
                <q-badge color="white text-black"> Quantity: </q-badge>

                <q-slider
                  v-model="value"
                  :min="0"
                  :max="20"
                  :step="1"
                  label
                  label-always
                  color="light-green"
                />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section>
                <q-btn
                  color="primary"
                  icon-right="fas fa-chevron-right"
                  label="SUPPORT"
                  flat
                />
              </q-item-section>
            </q-item>
          </q-card>
        </div>

        <div class="col-12 col-md-4 col-sm-12 col-xs-12 col-lg-4">
          <q-card class="my-card">
            <q-item active-class="tab-active" class="navigation-item">
              <q-item-section>
                <q-btn
                  color="light-blue-8"
                  icon="fab fa-facebook-f"
                  label="Save with facebook"
                  outline
                />
              </q-item-section>
              <q-item-section avatar>
                <q-btn
                  flat
                  round
                  color="grey-6"
                  icon="fas fa-times"
                  size="sm"
                />
              </q-item-section>
            </q-item>
            <q-item active-class="tab-active">
              <q-item-section>
                <q-btn
                  color="grey-6"
                  icon="fab fa-twitter"
                  text-color="green"
                  label="Tweet with twitter"
                  outline
                />
              </q-item-section>
              <q-item-section avatar>
                <q-btn
                  flat
                  round
                  color="grey-6"
                  icon="fas fa-times"
                  size="sm"
                />
              </q-item-section>
            </q-item>
            <q-item active-class="tab-active">
              <q-item-section class="q-pb-xs">
                <q-btn
                  color="grey-6"
                  icon="fab fa-pinterest-p"
                  text-color="red"
                  label="Save with pinterest"
                  outline
                />
              </q-item-section>
              <q-item-section avatar class="q-pb-sm">
                <q-btn
                  flat
                  round
                  color="grey-6"
                  icon="fas fa-times"
                  size="sm"
                />
              </q-item-section>
            </q-item>
          </q-card>
        </div>
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-8 col-xs-12 col-sm-8">
          <q-toolbar>
            <q-toolbar-title class="text-overline">
              ACTIVE PROJECTS
            </q-toolbar-title>
            <q-btn flat text-color="light-blue-8" label="Show All" />
          </q-toolbar>

          <q-card class="my-card" style="padding: 33px 0px 33px 0px">
            <q-item>
              <q-item-section avatar>
                <q-btn
                  round
                  color="blue-2"
                  text-color="blue-8"
                  icon="fas fa-bolt"
                />
              </q-item-section>

              <q-item-section>
                <q-item-label
                  ><strong>Solar Management Dashboard</strong>
                </q-item-label>
                <q-item-label caption> UI/UX Redesign </q-item-label>
                <q-item-label><strong>4 Weeks</strong> </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-green"
                  ><strong>Budget: $1200</strong>
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-btn color="light-blue-8" label="Deliver" class="q-mb-xs" />
                <q-btn
                  text-color="red"
                  label="Cancel"
                  outline
                  class="q-mt-sm"
                />
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="col-4 col-xs-12 col-sm-4">
          <q-toolbar>
            <q-toolbar-title class="text-overline"
              >WORKS AVAILABLE</q-toolbar-title
            >
            <q-btn flat text-color="light-blue-8" label="Show All"></q-btn>
          </q-toolbar>
          <q-card class="my-card q-py-sm">
            <q-item>
              <q-item-section avatar>
                <q-btn
                  round
                  color="green-2"
                  text-color="green-8"
                  icon="fas fa-cannabis"
                ></q-btn>
              </q-item-section>
              <q-item-section>
                <q-item-label><strong>Starbucks</strong></q-item-label>
                <q-item-label caption>Website UI Redesign</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-btn
                  text-color="green-8"
                  label="Quote"
                  outline
                  class="q-mt-sm"
                />
              </q-item-section>
            </q-item>
          </q-card>
          <q-card class="my-card q-py-sm q-mt-sm">
            <q-item>
              <q-item-section avatar>
                <q-btn
                  round
                  color="yellow-2"
                  text-color="yellow-8"
                  icon="fas fa-utensils"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label><strong>Untapped</strong></q-item-label>
                <q-item-label caption> Wensite Design </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-btn
                  text-color="yellow-8"
                  label="Quote"
                  outline
                  class="q-mt-sm"
                />
              </q-item-section>
            </q-item>
          </q-card>
        </div>
      </div>
      <q-toolbar>
        <q-toolbar-title class="text-overline"> MY SHOOTS </q-toolbar-title>
        <q-btn
          color="dark"
          icon-right="fas fa-chevron-down"
          label="Latest"
          flat
        />
      </q-toolbar>
      <div class="row q-col-gutter-md">
        <div class="col-3 col-xs-6 col-sm-3">
          <q-card class="my-card">
            <q-img
              src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1675681229~exp=1675681829~hmac=d55e789605b8a95be9b228eea10181024d4f4304c5b6815c48d19a6b6309981d"
              height="160px"
            >
              <div class="absolute-bottom">
                <div class="text-subtitle1">Merketing Landing page</div>
                <div class="text-subtitle2">03 August 2018</div>
              </div>
            </q-img>
          </q-card>
        </div>
        <div class="col-3 col-xs-6 col-sm-3">
          <q-card class="my-card">
            <q-img
              src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1675681229~exp=1675681829~hmac=d55e789605b8a95be9b228eea10181024d4f4304c5b6815c48d19a6b6309981d"
              height="160px"
            >
              <div class="absolute-bottom">
                <div class="text-subtitle1">Community Dashboard</div>
                <div class="text-subtitle1">03 August 2018</div>
              </div>
            </q-img>
          </q-card>
        </div>
        <div class="col-3 col-xs-6 col-sm-3">
          <q-card class="my-card">
            <q-img
              src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1675681229~exp=1675681829~hmac=d55e789605b8a95be9b228eea10181024d4f4304c5b6815c48d19a6b6309981d"
              height="156px"
            >
              <div class="absolute-bottom">
                <div class="text-subtitle1">Movie Booking App</div>
                <div class="text-subtitle2">03 August 2018</div>
              </div>
            </q-img>
          </q-card>
        </div>
        <div class="col-3 col-xs-6 col-sm-3">
          <q-card class="my-card">
            <q-img
              src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1675681229~exp=1675681829~hmac=d55e789605b8a95be9b228eea10181024d4f4304c5b6815c48d19a6b6309981d"
              height="156px"
            >
              <div class="absolute-bottom">
                <div class="text-subtitle1">Pattern Grandients</div>
                <div class="text-subtitle2">03 August 2018</div>
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      value: null,
    };
  },
};
</script>
