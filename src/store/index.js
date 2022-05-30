import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas:[
      {id: 1, Titulo: 'Ir ao mercado', Concluido: false},
      {id: 2, Titulo: 'Lavar a roupa', Concluido: false}
    ]
  },
  getters: {
  },
  mutations: {
    adicionaTarefa(state, Titulo){
      if(Titulo){
        state.tarefas.push({
          id: new Date().getTime(),
          Titulo,
          Concluido: false
        })
      }
    },
    removeTarefa(state, id){
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    }
  },
  actions: {
  },
  modules: {
  }
})
