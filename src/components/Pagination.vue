<template>
  <div class="mb-3">
    <nav aria-label="Page navigation example">
      <ul class="inline-flex items-center -space-x-px">
        <li>
          <a
            href="#"
            class="
              block
              px-3
              py-2
              ml-0
              leading-tight
              text-gray-500
              bg-white
              border border-gray-300
              rounded-l-lg
              hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800
              dark:border-gray-700
              dark:text-gray-400
              dark:hover:bg-gray-700
              dark:hover:text-white
            "
            @click="prev()"
          >
            <span class="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
        <li v-for="index in pagination.numberOfPage" :key="index">
          <a
            @click="updateCurrentPage(index)"
            href="#"
            class="px-3 py-2 leading-tight border border-gray-300"
            :class="
              isActive(index)
                ? 'bg-darkBlue text-white'
                : ' bg-white text-gray-500'
            "
            >{{ index }}</a
          >
        </li>

        <li>
          <a
            href="#"
            class="
              block
              px-3
              py-2
              leading-tight
              border border-gray-300
              rounded-r-lg
              hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800
              dark:border-gray-700
              dark:text-gray-400
              dark:hover:bg-gray-700
              dark:hover:text-white
            "
            @click="next()"
          >
            <span class="sr-only">Next</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("paging", ["pagination"]),
  },
  methods: {
    isActive(index) {
      return index == this.pagination.currentPage;
    },
    updateCurrentPage(index) {
      this.$store.commit("paging/updateCurrentPage", index);
      this.$store.commit(
        "paging/updatePageStart",
        this.pagination.pageSize + index
      );
      this.$store.commit("country/paginationCountry");
    },
    next() {
      if (this.pagination.currentPage < this.pagination.numberOfPage) {
        var nextPage = this.pagination.currentPage;
        nextPage++;
        this.$store.commit("paging/updateCurrentPage", nextPage);
        this.$store.commit("country/paginationCountry");
      }
    },
    prev() {
      if (this.pagination.currentPage > 1) {
        var nextPage = this.pagination.currentPage;
        nextPage--;
        this.$store.commit("paging/updateCurrentPage", nextPage);
        this.$store.commit("country/paginationCountry");
      }
    },
  },
};
</script>