<template>
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g
      id="web-app"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="close" :fill="fill">
        <polygon
          id="Shape"
          points="10.6568542 12.0710678 5 6.41421356 6.41421356 5 12.0710678 10.6568542 17.7279221 5 19.1421356 6.41421356 13.4852814 12.0710678 19.1421356 17.7279221 17.7279221 19.1421356 12.0710678 13.4852814 6.41421356 19.1421356 5 17.7279221"
        />
      </g>
    </g>
  </svg>
</template>
  <script>
export default {
  props: {
    fill: {
      default: function () {
        return "#000000";
      },
    },
  },
};
</script>