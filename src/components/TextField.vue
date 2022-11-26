<template>
  <div>
    <input
      :placeholder="placeholder"
      v-model="model"
      type="text"
      class="w-full h-9 rounded border border-primary outline-none pl-3"
    />
  </div>
</template>
  <script>
export default {
  props: {
    input: {
      default: function () {
        return "";
      },
    },
    placeholder: {
      default: function () {
        return "";
      },
    },
  },
  data() {
    return {
      model: this.input,
    };
  },
  watch: {
    model: function () {
      this.$emit("onSearch", this.model);
    },
  },
};
</script>