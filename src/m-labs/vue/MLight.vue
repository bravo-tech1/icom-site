<template>
  <span :class="`MLight ${type || ''}`">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: "MLight",
  props: ["type", "text"],
};
</script>

<style lang="scss" scoped>
@use "../sass/m" as *;

span {
  font-size: 0.8em;
  padding: 2px 8px;
  border-radius: $ui_radius;
  @extend %semantic-colors;
  background-color: $color_accent;
  color: $color_onAccent;
}
</style>
