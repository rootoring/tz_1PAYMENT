<template>
    <table class="table">
      <thead>
        <tr>
          <th
          scope="col"
          v-for="category of categoryLists"
          :key="category"
         >
         {{ category }}
        </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car of cars" :key="car.id">
          <th scope="row">{{car.id}}</th>
          <td>{{car.brand}}</td>
          <td>{{car.age}}</td>
        </tr>
      </tbody>
    </table>
</template>
<script>
  export default {
  name: 'CarsTable',
    props: {
      cars: {
        type: Array,
        required: true
      },
      categoryLists:{
        type: Array,
        required: true
      }
    },   
  }
</script>