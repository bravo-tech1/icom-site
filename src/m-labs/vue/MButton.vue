<template>
  <button :class="`MBUTTON ${type || ''}`" @click.prevent="goToLink">
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MButton",
  props: ["type", "icon", "to", "href"],
  methods: {
    async goToLink() {
      // let navigation;
      // if (this.to) {
      //   navigation = await this.$router.push(this.to);
      // }
      if (this.href) {
        location.href = this.href;
        setTimeout(() => {
          let el = document.getElementById(this.href.replace("#", ""));
          if(window.scrollY != el.clientY) {
            el.scrollIntoView();
          }
        }, 1000)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../sass/m" as *;

button {
  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 4px;
  padding: 8px 14px;
  font-weight: bold;
  font-size: 0.8em;
  font-family: inherit;
  border: none;
  outline: none;
  border-radius: $ui_radius;
  cursor: pointer;
  transition: all 0.4s ease;
  // @extend %m;
  @extend %semantic-colors;
  i {
    margin: 0 4px;
  }
  background-color: $color_accent;
  color: $color_onAccent;
  &:hover {
    background: darker("accent", 10%);
    transform: scale(1.04);
  }

  &.bordered {
    background-color: transparent;
    color: $color_accent;
    border: 1px solid $color_accent;
    &:hover {
      background: $color_accent;
      color: $color_onAccent;
      transform: scale(1.04);
    }
  }
  &.bubbled {
    padding: 4px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: changeOpacity("text", -0.9);
  }
}
</style>
