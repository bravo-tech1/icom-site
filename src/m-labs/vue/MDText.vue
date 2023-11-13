<template>
  <p
    ref="mdtext"
    :dir="dir"
    @focus="switchToEditable()"
    @blur="renderMathJax()"
    @input="
      editContent();
      adjustDirection();
    "
  >
    {{ plainContent }}
  </p>
</template>

<script>
export default {
  name: "MDText",
  props: ["content", "math"],
  data() {
    return {
      ar: /[\u0621-\u064A]/,
      dir: "ltr",
      plainContent: this.content,
    };
  },
  methods: {
    editContent() {
      this.plainContent = this.$refs.mdtext.innerText;
    },
    switchToEditable() {
      this.$refs.mdtext.innerText = this.plainContent;
    },
    renderMathJax() {
      if (window.MathJax) {
        window.MathJax.Hub.Config({
          tex2jax: {
            inlineMath: [
              ["$", "$"],
              // ["(", ")"],
            ],
            displayMath: [
              ["$$", "$$"],
              // ["[", "]"],
            ],
            processEscapes: true,
            processEnvironments: true,
          },
          // Center justify equations in code and markdown cells. Elsewhere
          // we use CSS to left justify single line equations in code cells.
          displayAlign: "center",
          "HTML-CSS": {
            styles: { ".MathJax_Display": { margin: 0 } },
            // linebreaks: { automatic: true },
          },
        });
        window.MathJax.Hub.Queue([
          "Typeset",
          window.MathJax.Hub,
          this.$refs.mdtext,
        ]);
      }
    },
    adjustDirection() {
      if (this.ar.test(this.$refs.mdtext.textContent.trim()[0])) {
        this.dir = "rtl";
      } else {
        this.dir = "ltr";
      }
    },
  },
  mounted() {
    this.adjustDirection();
    if (this.math) {
      this.renderMathJax();
    }
  },
};
</script>

<style lang="scss" scoped>
@use "../sass/m" as *;

p {
  outline: none;
  padding: 16px;
  white-space: pre-wrap;
  border-radius: $ui_radius;
  background-color: darker("main", 10%);
}
</style>
