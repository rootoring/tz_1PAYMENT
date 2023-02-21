import { createStore } from 'vuex'
import {cars} from '../../mocks/carsList.js'
export default createStore({
  state: {
    carLists:[]
  },
  getters: {
    getCarLists(state){
      return state.carLists
    }
  },
  mutations: {
    setcarLists(state, cars){
      state.carLists = cars
    }
  },
  actions: {
    fetchCarLists({commit}){
      let carList = cars
      commit('setcarLists', carList)
    }, 
  }
})