<template>
  <div class="squares-container">
    <div v-for="(i, index) in Array(4)" :key="index">
      <span v-for="(i, index) in Array(4)" :key="index"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "squares",
};
</script>

<style lang="scss" scoped>
.squares-container {
  div {
    line-height: 0;
    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: #27153d;
      margin: 6px;
    }
  }
}
</style>
