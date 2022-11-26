export default {
  namespaced: true,
  state: {
    pagination: {
      pageStart: 0,
      pageSize: 25,
      currentPage: 1,
      numberOfPage: 0,
    },
  },
  mutations: {
    updatePageStart(state, payload) {
      state.pagination.pageStart = payload;
    },
    updateCurrentPage(state, payload) {
      state.pagination.currentPage = payload;
    },
    updateNumberOfPage(state, payload) {
      state.pagination.numberOfPage = payload;
    },
  },
};
