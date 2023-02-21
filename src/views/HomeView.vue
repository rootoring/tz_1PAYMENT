<template>
  <div class="home">
    <searchForm  
    v-model:inputValue.trim="searchData.inputValue"
    v-model:searchStatus="searchData.searchStatus"
    v-model:filterStatus="searchData.filterStatus"
    v-model:ageFilterMax.trim="searchData.ageFilter.max"
    v-model:ageFilterMin.trim="searchData.ageFilter.min"
    :categoryLists="localCategoryLists"
    />
    <CarsTable
    :categoryLists="localCategoryLists"
    :cars="cars"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import searchForm from '@/components/searchForm.vue'
import CarsTable from '@/components/carsTable.vue'
import {categoryLists} from '../../mocks/searchCategoryLists.js'

export default {
  name: 'HomeView',
  data(){
    return{
      searchData:{
        inputValue:'',
        filterStatus:'id',
        searchStatus:'id',
        ageFilter:{
          min:'',
          max:''
        }
      },
      cars:[],
      localCategoryLists:categoryLists
    }
  },
  components:{
    searchForm,
    CarsTable
  },
  methods:{
    ...mapActions({
      fetchCarsLists:'fetchCarLists'
    }),
    copyArr(arr){
      return JSON.parse(JSON.stringify(arr))
    },
    changecarLists(){      
      this.cars = this.copyArr(this.carsLists)

      if(this.searchData.inputValue !=''){
        
        if(this.searchData.searchStatus === 'id'){
          this.cars = this.cars.filter(s => s.id == this.searchData.inputValue);
        }
        if(this.searchData.searchStatus === 'brand'){
          
          this.cars = this.cars.filter((s) => { 
            const str = String(s.brand)
            return  str.substr(0, this.searchData.inputValue.length).toLowerCase() == this.searchData.inputValue.toLowerCase()
          });
        }
      }
      if(this.searchData.searchStatus === 'age'){
        let RangeYaers = this.searchData.ageFilter.min && this.searchData.ageFilter.max 
        let MaxYaers = !this.searchData.ageFilter.min && this.searchData.ageFilter.max 
        let MinYaers = !this.searchData.ageFilter.max && this.searchData.ageFilter.min 
        
        if(MaxYaers){
          this.cars = this.cars.filter(s => s.age <= this.searchData.ageFilter.max);
        }

        if(MinYaers){
          this.cars = this.cars.filter(s => s.age >= this.searchData.ageFilter.min);
        }

        if(RangeYaers){ 
        this.cars = this.cars.filter(s => s.age >= this.searchData.ageFilter.min && s.age <= this.searchData.ageFilter.max)
        }
      }
      this.sotrCars()
    },
    sotrCars(){
      if(this.searchData.filterStatus === 'id'){
          this.cars.sort((a, b) => a.id - b.id)
      }
      if(this.searchData.filterStatus === 'brand'){
        this.cars.sort((a, b) => a.brand.toLowerCase() > b.brand.toLowerCase() ? 1 : -1)
      }
      if(this.searchData.filterStatus === 'age'){
        this.cars.sort((a, b) => a.age - b.age )
      }
    }
  },
  watch: {
    searchData: {
      deep: true,
      handler(){
        this.changecarLists()
      }
    }
  },
  computed:{
      ...mapGetters({
        carsLists:'getCarLists'
      })
    },
    mounted(){
     this.fetchCarsLists()
     this.cars = this.copyArr(this.carsLists)    
    }
}
</script>
<style scoped lang="scss">
.home{
  padding: 20px 10px;
}
</style>