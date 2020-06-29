import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type:'pc',
    maske:{
      show:true
    },
    index:{
      currentPage:'home'
    }
  },
  getters:{

  },
  mutations: {
    changeStatue(state,valueObje){
      state[valueObje.name]=valueObje.value
    }
  },
  actions: {
    chagneMaske(context){
      var value={...context.state.maske}
      value.show=!value.show
      context.commit('changeStatue',{name:'maske',value})
    },
    getEquipmentType(context){
      document.body.clientWidth < 425 ? context.commit('changeStatue',{name:'type',value:'phone'}) : context.commit('changeStatue',{name:'type',value:'pc'});
    }
  },
  modules: {

  }
})
