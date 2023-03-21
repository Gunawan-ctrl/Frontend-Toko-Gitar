<template>
  <q-page>
    <q-card class="q-pa-md q-mx-md q-mt-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el
          class="text-indigo-10"
          label="Data Barang"
          icon="production_quantity_limits"
        />
      </q-breadcrumbs>
    </q-card>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-12 col-xs-12">
          <q-table
            :rows="data"
            :columns="columns"
            row-key="name"
            :filter="filter"
          >
            <template v-slot:top>
              <div class="text-weight-bold text-subtitle1">
                Data Semua Barang
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
                <q-td key="namaBarang" :props="props">
                  {{ props.row.namaBarang }}
                </q-td>
                <q-td key="harga" :props="props">
                  {{ props.row.harga }}
                </q-td>
                <q-td key="stok" :props="props">
                  {{ props.row.stok }}
                </q-td>
                <q-td key="namaKategori" :props="props">
                  {{ props.row.kategoriBarang.namaKategori }}
                </q-td>
                <q-td key="gambar" :props="props">
                  {{ props.row.gambar }}
                </q-td>
                <q-td key="keterangan" :props="props">
                  {{ props.row.kategoriBarang.keterangan }}
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
                      @click="hapusBarang(props.row._id)"
                      class="q-px-xs"
                      icon="delete"
                    ></q-btn>
                  </div>
                </q-td>
              </q-tr>
            </template>
          </q-table>
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
              <q-icon
                name="production_quantity_limits"
                size="40px"
                color="blue-7"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Input /Edit Barang</q-item-label>
            <q-item-label caption> Input atau edit data barang </q-item-label>
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
                v-model="namaBarang"
                outlined
                label="Nama Barang"
                hint="Nama Barang"
              />
              <q-input
                dense
                type="number"
                v-model="harga"
                outlined
                label="Harga Barang"
                hint="Harga Barang"
              />
              <q-select
                dense
                outlined
                key="namaKategori"
                v-model="idKategori"
                option-label="namaKategori"
                :options="kategori"
                label="Kategori"
                hint="Kategori"
              >
                <template v-slot:option="scope">
                  <q-item v-bind="scope.itemProps">
                    <q-item-section>
                      <q-item-label caption>
                        {{ scope.opt.namaKategori }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </q-card-section>

            <q-separator vertical />

            <q-card-section class="q-gutter-xs fit">
              <q-input
                dense
                type="number"
                v-model="stok"
                outlined
                label="Stok Barang"
                hint="Stok Barang"
              />
              <q-file
                dense
                accept=".jpg, image/jpeg"
                color="primary"
                filled
                v-model="gambar"
                label="Upload Gambar"
              >
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" />
                </template>
              </q-file>
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
    name: "namaBarang",
    required: true,
    label: "Nama Barang",
    align: "left",
  },
  {
    name: "harga",
    align: "left",
    label: "Harga",
    field: "harga",
  },
  {
    name: "stok",
    align: "left",
    label: "Stok",
    field: "stok",
  },
  {
    name: "namaKategori",
    align: "left",
    label: "Nama Kategori",
    field: "namaKategori",
  },
  {
    name: "gambar",
    align: "left",
    label: "Gambar",
    field: "gambar",
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
  name: "InputKategori",
  components: {},
  data() {
    return {
      filter: "",
      columns,
      data,
      dialog: false,
      visibles: false,
      editMode: false,
      namaBarang: null,
      harga: null,
      stok: null,
      idAktive: null,
      idKategori: null,
      namaKategori: null,
      kategori: [],
      gambar: null,
    };
  },

  created() {
    this.getBarang();
    this.getKategori();
  },
  methods: {
    getBarang() {
      this.$q.loading.show();
      this.$axios
        .get("barang/get-all-barang")
        .finally(() => this.$q.loading.hide())
        .then((res) => {
          console.log(res);
          if (res.data.status) {
            this.data = res.data.data;
          }
        })
        .catch((err) => {
          this.$q.notify({
            type: "error",
            message: res.data.msg,
          });
        });
    },
    getKategori() {
      this.$q.loading.show();
      this.$axios
        .get("kategori/get-all-kategori")
        .finally(() => this.$q.loading.hide())
        .then((res) => {
          if (res.data.status) {
            this.kategori = res.data.data;
          }
        });
    },
    openDialog(editMode, data) {
      this.editMode = editMode;
      if (editMode) {
        this.namaBarang = data.namaBarang;
        this.harga = data.harga;
        this.stok = data.stok;
        this.gambar = data.gambar;
        this.idAktive = data._id;
      } else {
        this.namaBarang = null;
        this.harga = null;
        this.stok = null;
        this.gambar = null;
        this.idAktive = null;
      }
      this.dialog = true;
    },
    resetDialog() {
      this.editMode = false;
      this.dialog = false;
    },
    resetForm() {
      this.namaBarang = null;
      this.harga = null;
      this.stok = null;
      this.gambar = null;
    },
    onSubmit() {
      if (this.editMode) {
        this.$q.loading.show();
        this.$axios
          .put(`barang/update-barang/${this.idAktive}`, {
            namaBarang: this.namaBarang,
            harga: this.harga,
            stok: this.stok,
            gambar: this.gambar,
          })
          .finally(() => this.$q.loading.hide())
          .then((res) => {
            if (res.data.status) {
              this.$q.notify({
                type: "positive",
                message: res.data.msg,
              });
              this.getBarang();
              this.resetDialog();
              this.resetForm();
            }
          });
      } else {
        const payload = {
          // gambar: this.gambar,
          namaBarang: this.namaBarang,
          harga: this.harga,
          stok: this.stok,
          idKategori: this.idKategori.namaKategori,
        };
        console.log(payload);
        // const formData = new FormData();
        // formData.append("gambar", this.gambar);
        // formData.append("namaBarang", this.namaBarang);
        // formData.append("harga", this.harga);
        // formData.append("idKategori", this.idkategori.namaKategori);
        // formData.append("stok", this.stok);
        // console.log(formData);
        this.$axios.post("barang/create-barang", payload).then((res) => {
          console.log(res);
          if (res.data.status) {
            this.$q.notify({
              type: "positive",
              message: res.data.msg,
            });
          } else {
            this.$q.notify({
              type: "negative",
              message: res.data.msg,
            });
          }
          this.getBarang();
          this.resetForm();
          this.resetDialog();
        });
      }
    },
    hapusBarang(_id) {
      this.$q
        .dialog({
          title: "Konfirmasi",
          message: "Apakah anda yakin ingin menghapus barang ini?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.$axios.delete(`barang/delete-barang/${_id}`).then((res) => {
            if (res.data.status) {
              this.$q.notify({
                type: "positive",
                message: res.data.msg,
              });
              this.getBarang();
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
