<template>
  <code :class="`MCODE ${type || ''}`">
    <span :class="`language ${language}`" v-if="language">{{ language }}</span>
    {{ code }}
  </code>
</template>

<script>
export default {
  name: "MCode",
  props: ["type", "code", "language"],
};
</script>

<style lang="scss" scoped>
@use "../sass/m" as *;

.m-dark code {
  background-color: lighter("main", 14%);
}

code {
  display: inline-block;
  font-size: 1.1em;
  background-color: darker("main", 8%);
  color: $color_accent;
  padding: 2px 8px;
  border-radius: $ui_radius;
  &.block {
    display: block;
    position: relative;
    line-height: 1.4em;
    width: 100%;
    padding: 26px 10px 20px;
    margin: 30px 0;
    background-color: rgb(32, 32, 32);
    color: rgb(245, 245, 245);
    white-space: pre;
    overflow-x: auto;
    .language {
      @extend %semantic-colors;
      font-family: $font_en;
      position: absolute;
      top: 0;
      left: 0;
      padding: 4px 8px;
      // background: $color_accent;
      border-bottom-right-radius: $ui_radius;
      border-top-left-radius: $ui_radius;
      color: $color_accent;
      font-size: 0.6em;
      font-weight: bold;
    }
  }
}
</style>
