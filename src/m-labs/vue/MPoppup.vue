<template>
  <div v-if="isOpen" class="MPOPPUP">
    <dialog open>
      <h3>{{ title }}</h3>
      <p>
        {{ message }}
      </p>
      <slot></slot>
      <section>
        <m-button
          :type="Array.isArray(cancel) ? cancel[1] : ''"
          v-if="cancel"
          @click="respond(false)"
          >{{ Array.isArray(cancel) ? cancel[0] : cancel }}</m-button
        >
        <m-button
          :type="Array.isArray(confirm) ? confirm[1] : ''"
          v-if="confirm"
          @click="respond(true)"
          >{{ Array.isArray(confirm) ? confirm[0] : confirm }}</m-button
        >
      </section>
    </dialog>
  </div>
</template>

<script>
import MButton from "./MButton.vue";
export default {
  name: "popup",
  components: { MButton },
  data() {
    return {
      resolvePromise: undefined,
      rejectPromise: undefined,
      isOpen: false,
      title: "",
      message: "",
      confirm: "",
      cancel: "",
    };
  },
  methods: {
    show({ title, message, confirm, cancel }) {
      this.title = title;
      this.message = message;
      this.confirm = confirm;
      if (cancel) {
        this.cancel = cancel;
      }
      this.isOpen = true;

      return new Promise((resolve, reject) => {
        this.resolvePromise = resolve;
        this.rejectPromise = reject;
      });
    },
    respond(decision) {
      this.isOpen = false;
      this.resolvePromise(decision);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../sass/m" as *;
div {
  z-index: 2;
  position: fixed;
  background: changeOpacity("text", -0.2);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  dialog {
    background-color: changeOpacity("main", -0.06);
    background-image: linear-gradient(
      0,
      changeOpacity("accent", -0.88) 0,
      changeOpacity("accent", -0.88) 100%
    );
    color: $color_text;
    padding: 20px 26px;
    font-size: 1em;
    width: min(500px, 80vw);
    border-radius: $ui_radius;
    border: none;
    outline: none;
    p {
      width: 2rem 0;
    }
    section {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      margin: 20px 0 0;
    }
  }
}
</style>
