<template>
  <div class="form mb-3 justify-content-center">

    <div class="d-flex align-items-center" v-if="searchStatus == 'age'">
      <UIinput class="form__input" v-model="localageFilter.min" placeholder="От"/>
      <span>-</span>
      <UIinput class="form__input" v-model="localageFilter.max" placeholder="До"/>
    </div>

    <UIinput class="form__input" v-model="localInputValue" placeholder="Поиск..." v-else/>

    <UIoptions
     class="form__select mx-2"
     v-model="localsearchStatus"
     :options="categoryLists"
     label="Поиск по:"/>

    <UIoptions
     class="form__select ml-3" 
     v-model="localfilterStatus" 
     :options="categoryLists"
     label="Сортировка:"/>

  </div>  
</template>
<script>
import UIinput from '@/components/UI/UIinput.vue'
import UIoptions from '@/components/UI/UIoptions.vue'

export default {
  data(){
    return{
      localInputValue:'',
      localsearchStatus:'',
      localfilterStatus:'',
      localageFilter:{}
    }
  },
  props:{
    inputValue:  {type: String, default:null},
    searchStatus:{type: String, default:null},
    filterStatus:{type: String, default:null},
    ageFilterMax:{type: String, default:null},
    ageFilterMin:{type: String, default:null},
    categoryLists:{type: Array,required: true}
  },
  components:{
    UIinput,
    UIoptions
  },
  watch:{
    localInputValue(newValue){
      this.$emit('update:inputValue', newValue)
    },
    localsearchStatus(newValue){
      this.$emit('update:searchStatus', newValue)
    },
    localfilterStatus(newValue){
      this.$emit('update:filterStatus', newValue)
    },
    'localageFilter.max'(newValue){
      this.$emit('update:ageFilterMax', newValue)
    },
    'localageFilter.min'(newValue){
      this.$emit('update:ageFilterMin', newValue)
    },
  },
  mounted(){
    this.localInputValue = JSON.parse(JSON.stringify(this.inputValue))
    this.localsearchStatus = JSON.parse(JSON.stringify(this.searchStatus))
    this.localfilterStatus = JSON.parse(JSON.stringify(this.filterStatus))
    this.localageFilter.max = JSON.parse(JSON.stringify(this.ageFilterMax))
    this.localageFilter.min = JSON.parse(JSON.stringify(this.ageFilterMin))
  }
}
</script>

<style  lang="scss">
  .form{
    display: flex;
    align-items: center;
    @media (max-width: 992px) {
      flex-direction: column;
    }
    .form__input{
      width: 77%;
    }
    .form__select{
      width: 10%;

      @media (max-width: 992px) {
        width: 50%;
      }
    }
  }
</style>