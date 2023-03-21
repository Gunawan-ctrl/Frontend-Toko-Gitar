<template>
  <q-page>
    <q-card class="q-pa-md q-mx-md q-mt-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el
          class="text-indigo-10"
          label="Data Kategori"
          icon="grid_view"
        />
      </q-breadcrumbs>
    </q-card>

    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-8 col-xs-12">
          <q-table
            :rows="data"
            :columns="columns"
            row-key="name"
            :filter="filter"
          >
            <template v-slot:top>
              <div class="text-weight-bold text-subtitle1">
                Data Kategori Produk
              </div>
              <q-space />

              <q-btn
                @click="openDialog(false, null)"
                flat
                icon="library_add"
                text-color="blue-7"
              >
                <q-tooltip> Tambah Data </q-tooltip>
              </q-btn>

              <q-btn
                flat
                icon-right="document_scanner"
                text-color="blue-7"
                @click="exportTable"
              >
                <q-tooltip> Export Data </q-tooltip>
              </q-btn>

              <q-btn
                flat
                color="primary"
                icon="search"
                @click="visibles = !visibles"
                size="md"
                class="q-mr-sm"
              />
              <q-slide-transition>
                <div v-show="visibles">
                  <q-input
                    outlined
                    debounce="300"
                    placeholder="Pencarian"
                    style="width: 200px"
                    color="primary"
                    v-model="filter"
                    dense
                  />
                </div>
              </q-slide-transition>
            </template>
            <template v-slot:header="props">
              <q-tr :props="props">
                <q-th
                  v-for="col in props.cols"
                  :key="col.name"
                  :props="props"
                  class="text-purple"
                >
                  {{ col.label }}
                </q-th>
              </q-tr>
            </template>
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="namaKategori" :props="props">
                  {{ props.row.namaKategori }}
                </q-td>
                <q-td key="keterangan" :props="props">
                  {{ props.row.keterangan }}
                </q-td>
                <q-td key="action" :props="props">
                  <div class="justify-center q-gutter-x-xs">
                    <q-btn
                      flat
                      color="teal"
                      size="md"
                      class="q-px-xs"
                      icon="edit"
                      @click="openDialog(true, props.row)"
                    ></q-btn>
                    <q-btn
                      flat
                      color="red"
                      size="md"
                      @click="hapusKategori(props.row._id)"
                      class="q-px-xs"
                      icon="delete"
                    ></q-btn>
                  </div>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
        <div
          class="col-md-4 q-pl-md"
          v-if="$q.screen.lg || $q.screen.xl || $q.screen.md"
        >
          <q-card flat bordered><lottie :options="defaultOptions" /></q-card>
        </div>
      </div>
    </div>
    <q-dialog v-model="dialog">
      <q-card
        class="my-card"
        flat
        bordered
        style="width: 600px; max-width: 70vw"
      >
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="grid_view" size="40px" color="blue-7" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Input /Edit Kategori</q-item-label>
            <q-item-label caption>
              Input atau edit data kategori produk
            </q-item-label>
          </q-item-section>

          <q-item-section class="col-1">
            <q-btn
              flat
              dense
              icon="close"
              class="float-right"
              color="grey-8"
              v-close-popup
            ></q-btn>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-form @submit="onSubmit()">
          <q-card-section horizontal>
            <q-card-section class="q-gutter-xs fit">
              <q-input
                dense
                v-model="namaKategori"
                outlined
                label="Nama Kategori"
                hint="Nama Kategori"
              />
              <q-input
                dense
                v-model="keterangan"
                outlined
                type="textarea"
                label="Keterangan"
                hint="Keterangan"
              />
            </q-card-section>

            <q-separator vertical />

            <q-card-section class="q-gutter-xs fit">
              input atau edit data kategori produk
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat type="submit" label="Simpan" color="primary" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import Lottie from "../components/lottie.vue";
import * as animationData from "../assets/guitar.json";
import { exportFile } from "quasar";

function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;

  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);

  formatted = formatted.split('"').join('""');

  return `"${formatted}"`;
}

const columns = [
  {
    name: "namaKategori",
    required: true,
    label: "Kategori Produk",
    align: "left",
  },
  {
    name: "keterangan",
    align: "left",
    label: "Keterangan",
    field: "keterangan",
  },
  {
    name: "action",
    align: "center",
    label: "Action",
    field: "action",
  },
];

const data = [];

export default {
  name: "PageIndex",
  components: { Lottie },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2,
      visibles: false,
      dialog: false,
      columns,
      data,
      filter: "",
      editMode: false,
      idAktive: null,
      namaKategori: null,
      keterangan: null,
    };
  },
  created() {
    this.getKategori();
  },
  methods: {
    getKategori() {
      this.$q.loading.show();
      this.$axios
        .get("kategori/get-all-kategori")
        .finally(() => this.$q.loading.hide())
        .then((res) => {
          if (res.data.status) {
            this.data = res.data.data;
          }
        });
    },
    openDialog(editMode, data) {
      this.editMode = editMode;
      if (editMode) {
        this.namaKategori = data.namaKategori;
        this.keterangan = data.keterangan;
        this.idAktive = data._id;
      } else {
        this.namaKategori = null;
        this.keterangan = null;
      }
      this.dialog = true;
    },
    resetDialog() {
      this.editMode = false;
      this.dialog = false;
    },
    resetForm() {
      this.namaKategori = null;
      this.keterangan = null;
    },
    onSubmit() {
      if (this.editMode) {
        this.$q.loading.show();
        this.$axios
          .put(`kategori/update/${this.idAktive}`, {
            namaKategori: this.namaKategori,
            keterangan: this.keterangan,
          })
          .finally(() => this.$q.loading.hide())
          .then((res) => {
            if (res.data.status) {
              this.$q.notify({
                type: "positive",
                message: res.data.msg,
              });
              this.getKategori();
              this.resetForm();
              this.resetDialog();
            }
          });
      } else {
        this.$axios
          .post("kategori/input", {
            namaKategori: this.namaKategori,
            keterangan: this.keterangan,
          })
          .then((res) => {
            if (res.data.status) {
              this.$q.notify({
                type: "positive",
                message: res.data.msg,
              });
            }
            this.getKategori();
            this.resetForm();
            this.resetDialog();
          });
      }
    },
    hapusKategori(_id) {
      this.$q
        .dialog({
          title: "Konfirmasi",
          message: "Apakah anda yakin ingin menghapus kategori ini",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.$axios.delete(`kategori/delete/${_id}`).then((res) => {
            if (res.data.status) {
              this.$q.notify({
                type: "positive",
                message: res.data.msg,
              });
              this.getKategori();
            }
          });
        });
    },
    exportTable() {
      const content = [this.columns.map((col) => wrapCsvValue(col.label))]
        .concat(
          this.data.map((row) =>
            this.columns
              .map((col) =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");

      const status = exportFile("daftar-kategori.csv", content, "text/csv");

      if (status !== true) {
        this.$q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning",
        });
      }
    },
  },
};
</script>
