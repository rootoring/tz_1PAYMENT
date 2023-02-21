<template>
 <div  class="d-flex flex-column  bd-highlight mb-3">

  <div class="font-monospace text-break text-muted">{{ label }}</div>

  <select 
  class="form-select form-select-sm bg-primary text-white" 
  aria-label=".form-select-sm example" 
  @change="$emit ('update:modelValue', $event.target.value)">
  
      <option 
      v-for="opt in options"
      :key="opt" 
      :value="opt"
      >
      {{opt}}
    </option>
    
  </select>
 </div>
</template>
<script>
export default {
  props:{
      modelValue:{type: String, default:null},
      options:{type: Array},
      label:{type: String, default:null}
    },
}
</script>
