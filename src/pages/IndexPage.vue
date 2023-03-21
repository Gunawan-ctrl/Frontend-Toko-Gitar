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
                <q-item-label
                  ><strong>{{ dataUser.namaLengkap }}</strong>
                </q-item-label>
                <q-item-label caption>Frontend Dev</q-item-label>
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
            <q-calendar-month
              ref="calendar"
              v-model="selectedDate"
              animated
              bordered
              focusable
              hoverable
              no-active-date
              :day-min-height="27"
              :day-height="10"
              @change="onChange"
              @moved="onMoved"
              @click-date="onClickDate"
              @click-day="onClickDay"
              @click-workweek="onClickWorkweek"
              @click-head-workweek="onClickHeadWorkweek"
              @click-head-day="onClickHeadDay"
            >
              <template #day="{ scope: { timestamp } }">
                <template
                  v-for="event in eventsMap[timestamp.date]"
                  :key="event.id"
                >
                  <div
                    :class="badgeClasses(event, 'day')"
                    :style="badgeStyles(event, 'day')"
                    class="my-event"
                  >
                    <abbr :title="event.details" class="tooltip">
                      <span class="title q-calendar__ellipsis">{{
                        event.title + (event.time ? " - " + event.time : "")
                      }}</span>
                    </abbr>
                  </div>
                </template>
              </template>
            </q-calendar-month>
          </q-card>
        </div>

        <div class="col-12 col-md-4 col-sm-12 col-xs-12">
          <q-card bordered>
            <div>
              <q-carousel
                v-model="slide"
                vertical
                transition-prev="slide-down"
                transition-next="slide-up"
                swipeable
                infinite
                :autoplay="autoplay"
                animated
                control-color="blue-7"
                navigation-icon="radio_button_unchecked"
                navigation
                padding
                arrows
                height="160px"
                class="text-black shadow-1 rounded-borders"
              >
                <q-carousel-slide
                  name="1"
                  img-src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1675681229~exp=1675681829~hmac=d55e789605b8a95be9b228eea10181024d4f4304c5b6815c48d19a6b6309981d"
                >
                </q-carousel-slide>
                <q-carousel-slide
                  name="2"
                  img-src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1675681229~exp=1675681829~hmac=d55e789605b8a95be9b228eea10181024d4f4304c5b6815c48d19a6b6309981d"
                >
                </q-carousel-slide>
                <q-carousel-slide
                  name="3"
                  img-src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1675681229~exp=1675681829~hmac=d55e789605b8a95be9b228eea10181024d4f4304c5b6815c48d19a6b6309981d"
                >
                </q-carousel-slide>
              </q-carousel>
            </div>
          </q-card>
        </div>
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-md-8 col-sm-8 col-xs-12">
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
import {
  QCalendarMonth,
  addToDate,
  parseDate,
  parseTimestamp,
  today,
} from "@quasar/quasar-ui-qcalendar";
import "@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass";
// The function below is used to set up our demo data
const CURRENT_DAY = new Date();

function getCurrentDay(day) {
  const newDay = new Date(CURRENT_DAY);
  newDay.setDate(day);
  const tm = parseDate(newDay);
  return tm.date;
}

export default {
  name: "IndexPage",
  components: {
    QCalendarMonth,
  },
  data() {
    return {
      value: null,
      slide: "style",
      lorem: "Lorem ipsum dolor, sit amet consectetur adipi.",
      selection: ["green"],
      autoplay: true,
      selectedDate: today(),
      events: [],
      dataUser: this.$q.localStorage.getItem("dataUser"),
    };
  },
  computed: {
    eventsMap() {
      const map = {};
      if (this.events.length > 0) {
        this.events.forEach((event) => {
          (map[event.date] = map[event.date] || []).push(event);
          if (event.days !== undefined) {
            let timestamp = parseTimestamp(event.date);
            let days = event.days;
            do {
              timestamp = addToDate(timestamp, { day: 1 });
              if (!map[timestamp.date]) {
                map[timestamp.date] = [];
              }
              map[timestamp.date].push(event);
            } while (--days > 1);
          }
        });
      }
      return map;
    },
  },
  methods: {
    badgeClasses(event, type) {
      return {
        [`text-white bg-${event.bgcolor}`]: true,
        "rounded-border": true,
      };
    },
    badgeStyles(day, event) {
      const s = {};
      return s;
    },
    onToday() {
      this.$refs.calendar.moveToToday();
    },
    onPrev() {
      this.$refs.calendar.prev();
    },
    onNext() {
      this.$refs.calendar.next();
    },
    onMoved(data) {
      // console.log("onMoved", data);
    },
    onChange(data) {
      // console.log("onChange", data);
    },
    onClickDate(data) {
      // console.log("onClickDate", data);
    },
    onClickDay(data) {
      // console.log("onClickDay", data);
    },
    onClickWorkweek(data) {
      // console.log("onClickWorkweek", data);
    },
    onClickHeadDay(data) {
      // console.log("onClickHeadDay", data);
    },
    onClickHeadWorkweek(data) {
      // console.log("onClickHeadWorkweek", data);
    },
  },
};
</script>

<style>
.my-event {
  position: relative;
  font-size: 12px;
  width: 100%;
  margin: 1px 0 0 0;
  justify-content: center;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}

.title {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.text-white {
  color: white;
}

.bg-blue {
  background: blue;
}

.bg-green {
  background: green;
}

.bg-orange {
  background: orange;
}

.bg-red {
  background: red;
}

.bg-teal {
  background: teal;
}

.bg-grey {
  background: grey;
}

.bg-purple {
  background: purple;
}

.rounded-border {
  border-radius: 2px;
}

abbr.tooltip {
  text-decoration: none;
}
</style>
