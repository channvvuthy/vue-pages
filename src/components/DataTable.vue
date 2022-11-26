<template>
  <table class="border-collapse border border-slate-400 w-full">
    <thead>
      <tr>
        <th class="border border-slate-300 p-2 whitespace-nowrap">
          N<sup>o</sup>
        </th>
        <th
          class="border border-slate-300 p-2 whitespace-nowrap"
          v-for="(header, index) in dataHeader"
          :key="index"
        >
          <div class="flex items-center justify-between">
            {{ header.title }}
            <div
              v-if="header.sort"
              class="cursor-pointer"
              @click="onSort(header)"
            >
              <IconSort />
            </div>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(body, index) in dataBody" :key="index">
        <td class="border border-slate-300 p-2 text-center">
          {{ index + 1 }}
        </td>
        <td
          class="border border-slate-300 p-2 cursor-pointer"
          v-for="(dt, k) in dataHeader"
          :key="k"
          @click="onDetail(body)"
        >
          {{ body[dt.field] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
  <script>
import IconDetail from "./IconEdit.vue";
import IconDelete from "./IconDelete.vue";
import IconSort from "./IconSort.vue";
export default {
  components: {
    IconDetail,
    IconDelete,
    IconSort,
  },
  props: {
    dataHeader: {
      default: function () {
        return [];
      },
    },
    dataBody: {
      default: function () {
        return [];
      },
    },
  },
  methods: {
    onDetail(body) {
      this.$emit("onDetail", body);
    },
    body(bd) {
      return bd;
    },
    onDelete(body) {
      this.$emit("onDelete", body);
    },
    onSort(header){
       this.$emit("onSort", header)
    }
  },
};
</script>