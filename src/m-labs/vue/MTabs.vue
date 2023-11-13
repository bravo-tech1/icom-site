<template>
  <div>
    <router-link
      v-for="(link, title) in JSON.parse(links)"
      :key="title"
      :to="link"
    >
      {{ title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MTabs",
  props: ["links"],
};
</script>

<style lang="scss" scoped>
@use "../sass/m" as *;

.m-dark a {
  background-color: lighter("main", 10%);
}

div {
  display: flex;
  flex-flow: column wrap;
  height: 60px;
  justify-content: center;
  a {
    padding: 20px;
    font-weight: bold;
    text-align: center;
    background-color: darker("main", 6%);
    transition: all 0.4s ease;
    &:hover {
      background: changeOpacity("accent", -0.8);
    }
    &.router-link-exact-active {
      color: $color_accent;
      border-bottom: 2px solid $color_accent;
      background: changeOpacity("accent", -0.8);
    }
  }
}
</style>
