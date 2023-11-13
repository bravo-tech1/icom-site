<template>
  <section :class="`MNOTES`" v-show="notes.length">
    <transition-group name="slide-right">
      <div v-for="note in notes" :key="note.title" :class="note.type || ''">
        <h3>{{ note.title }}</h3>
        <p>{{ note.text }}</p>
      </div>
    </transition-group>
  </section>
</template>

<script>
export default {
  name: "MNotes",
  data() {
    return {
      notes: [],
    };
  },
  methods: {
    add(n) {
      this.notes.push(n);
      setTimeout(() => {
        this.notes.shift();
      }, 4000);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../sass/m" as *;

section {
  z-index: 100;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  overflow: hidden;
  padding: 6px;
  width: 300px;
  max-width: 100%;
  display: flex;
  flex-flow: column-reverse;

  div {
    &:not(.warning) {
      text-shadow: 0 1px 6px rgba(0,0,0,.6);
    }
    @extend %semantic-colors;
    border-radius: $ui_radius;
    border: 1px solid $color_accent;
    background-color: changeOpacity("main", -0.3);
    background-image: linear-gradient(
      0,
      changeOpacity("accent", -0.4) 0,
      changeOpacity("accent", -0.4) 100%
    );
    padding: 16px 14px;
    max-width: 100%;
    max-height: 200px;
    margin-top: 6px;
    color: $color_onAccent;
    box-shadow: 1px 1px 3px 0 changeOpacity("text", -0.6);
    backdrop-filter: blur(4px);
    p {
      font-size: 0.94em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
