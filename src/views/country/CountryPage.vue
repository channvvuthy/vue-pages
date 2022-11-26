<template>
  <Loading v-if="loading" />
  <div class="p-10 overflow-x-scroll" v-else :style="{ width: `${w}px` }">
    <div class="flex justify-between mb-4">
      <div class="w-96">
        <TextField
          placeholder="Search country name..."
          @onSearch="onSearch($event)"
        />
      </div>
    </div>
    <DataTable
      :dataHeader="dataHeader"
      :dataBody="allCountries"
      @onDetail="onDetail($event)"
      @onSort="onSort($event)"
    />
    <div class="mt-4 flex justify-end" v-if="allCountries.length >= 25">
      <Pagination />
    </div>

    <Popup
      v-if="isDetail"
      @closeModal="() => (this.isDetail = false)"
      title="Country Detail"
    >
      <ul>
        <li v-for="(detail, key) in dataHeader" :key="key">
          <div class="py-2">
            <b>{{ detail.title }}: </b>{{ countryDetail[detail.field] }}
          </div>
        </li>
      </ul>
    </Popup>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Loading from "../../components/Loading.vue";
import DataTable from "../../components/DataTable.vue";
import Popup from "../../components/Popup.vue";
import TextField from "../../components/TextField.vue";
import Pagination from "../../components/Pagination.vue";
import _ from "lodash";

export default {
  data() {
    return {
      isDetail: false,
      countryDetail: {},
      search: "",
      w: window.innerWidth,
      isDesc: false,
      sortType: "asc",
      sortBy: "officialName",
      dataHeader: [
        {
          field: "flag",
          title: "Flags",
        },
        {
          field: "officialName",
          title: "Country Name",
          sort: true,
        },
        {
          field: "cca2",
          title: "Country Code(cca2)",
        },
        {
          field: "ccn3",
          title: "Country Code(ccn3)",
        },
        {
          field: "nativeName",
          title: "Native Country Name ",
        },
        {
          field: "altSpelling",
          title: "Alternative Country Name",
        },
        {
          field: "callingCode",
          title: "Country Calling Codes",
        },
      ],
    };
  },
  components: {
    Loading,
    DataTable,
    Popup,
    TextField,
    Pagination,
  },
  computed: {
    ...mapState("country", ["loading", "countries", "allCountry"]),
    ...mapState("paging", ["pagination"]),
    allCountries() {
      return _.orderBy(
        this.countries.filter((country) => {
          return country.officialName.toLowerCase().match(this.search);
        }),
        this.sortBy,
        this.sortType
      );
    },
  },
  methods: {
    onDetail(country) {
      this.isDetail = true;
      this.countryDetail = country;
    },
    onSearch(search) {
      this.search = search;
    },
    onSort(sort) {
      this.isDesc = !this.isDesc;
      this.sortBy = sort.field;
      this.sortType = this.isDesc ? "desc" : "asc";
    },
  },
  created() {
    this.$store.dispatch("country/getAllCountry").then(() => {
      this.$store.commit(
        "paging/updateNumberOfPage",
        Math.ceil(this.allCountry.length / this.pagination.pageSize)
      );
    });
  },
};
</script>