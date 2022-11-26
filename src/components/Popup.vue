<template>
  <div
    class="
      flex
      items-center
      justify-center
      fixed
      left-0
      top-0
      w-full
      h-full
      z-50
      bg-black bg-opacity-80
    "
  >
    <div :class="width" class="rounded-md bg-white shadow-md">
      <div class="relative h-10 flex items-center justify-start px-5 border-b">
        <div class="font-semibold text-xl">{{ title }}</div>
        <div
          class="
            absolute
            -top-5
            -right-5
            w-8
            h-8
            rounded-full
            text-white
            cursor-pointer
            flex
            items-center
            justify-center
            shadow
            bg-darkBlue
          "
          @click="closeModal()"
        >
          <CloseIcon fill="#FFFFFF" />
        </div>
      </div>
      <div class="p-5">
        <slot></slot>
      </div>
      <div class="h-16 border-t flex justify-end items-center px-5">
        <div
          class="bg-lightGray rounded-md px-5 py-1.5 cursor-pointer"
          @click="closeModal()"
        >
          Close
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import CloseIcon from "./CloseIcon.vue";
export default {
  props: {
    hasDelete: {
      default: function () {
        return false;
      },
    },
    title: {
      default: function () {
        return "Title";
      },
    },
    width: {
      default: function () {
        return "w-1/2";
      },
    },
  },
  components: {
    CloseIcon,
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>