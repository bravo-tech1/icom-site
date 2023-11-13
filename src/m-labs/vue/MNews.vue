<template>
  <article :class="`MNEWS ${type || ''}`">
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: "MNews",
  props: ["type"],
};
</script>

<style lang="scss" scoped>
@use "../sass/m" as *;
article {
  @extend %semantic-colors;
  color: $color_accent;
  border: 2px dashed $color_accent;
  padding: 20px;
  background-color: changeOpacity("accent", -0.86);
  border-radius: $ui_radius;
}
</style>
