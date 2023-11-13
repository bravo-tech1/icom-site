<template>
  <figure id="screen">
    <canvas id="monitor_background"></canvas>
    <img src="../assets/posters/home.png" alt="monitor picture" />
    <transition-group name="screenAnimate">
      <img
        v-for="(img, index) in screens"
        :src="img"
        alt="screen"
        :key="index"
      />
    </transition-group>
  </figure>
</template>

<script>
export default {
  name: "monitor",
  props: ["screens"],
};
</script>

<style lang="scss" scoped>
#screen {
  // monitor + screens
  perspective: 1000px;
  position: relative;
  padding: 0;
  margin: 0;
  height: 100%;
  img,
  canvas {
    // screen
    position: absolute;
    top: 0;
    right: 0;
  }
}
.screenAnimate-enter-from,
.screenAnimate-leave-to {
  transform: translate3d(-100px, -10px, -10px);
  opacity: 0;
}

.screenAnimate-leave-active {
  transition: all 1s ease;
}
</style>
