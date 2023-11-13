export default {
  namespaced: true,

  state: {
    articles: [],
  },

  actions: {
    fetchAll({ commit }) {
      return window.axios.get('/articles')
        .then((response) => {
          commit('articles', response.data);
          return response.data;
        })
    },

    fetchById({ commit }, { id }) {
      return window.axios.get(`/articles/${id}`)
        .then((response) => {
          return response.data;
        })
    }
  },

  mutations: {
    articles(state, articles) {
      state.articles = articles;
    },
  },
}