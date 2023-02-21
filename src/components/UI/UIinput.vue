<template>
  <div class="input-group">
    <input 
    type="text" 
    class="form-control" 
    aria-label="Text input with dropdown button" 
    :placeholder="placeholder"
    :value="modelValue"  
    @input="$emit('update:modelValue', $event.target.value)" 
    >
  </div>  
</template>
  <script>
  export default {
    props:{
      modelValue:{type: String || Number, default:null},
      placeholder: {String, default:''}
    },
  }
  </script>