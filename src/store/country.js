import conf from "../conf";
import axios from "axios";
import store from ".";
export default {
  namespaced: true,
  state: {
    loading: false,
    allCountry: [],
    countries: [],
  },
  mutations: {
    getAllCountry(state, payload) {
      state.allCountry = payload;
      state.countries = state.allCountry.slice(
        store.state.paging.pagination.pageStart,
        store.state.paging.pagination.pageSize
      );
    },
    paginationCountry(state) {
      state.countries = state.allCountry.slice(
        0,
        store.state.paging.pagination.pageSize *
          store.state.paging.pagination.currentPage
      );
    },
    loading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    getAllCountry({ commit }) {
      return new Promise((resolve, reject) => {
        commit("loading", true);
        axios
          .get(conf.baseUrl + "v3.1/all")
          .then((r) => {
            var countries = [];
            r.data.forEach((item) => {
              var ntcn = "";
              for (var propName in item.languages) {
                if (item.languages.hasOwnProperty(propName)) {
                  ntcn += item.languages[propName] + ",";
                }
              }
              countries.push({
                flag: item.flag,
                officialName: item.name.official,
                cca2: item.cca2,
                ccn3: item.ccn3,
                nativeName: ntcn.trim().replace(/,(?![^,]*,)/, ""),
                altSpelling: item.altSpellings.toString(),
                callingCode: item.idd.root,
              });
            });
            commit("getAllCountry", countries);
            commit("loading", false);
            resolve(r.data);
          })
          .catch((err) => {
            reject(err);
            commit("loading", false);
          });
      });
    },
  },
};
