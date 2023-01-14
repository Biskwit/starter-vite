<template>
  <div class="bg-white rounded-lg w-full h-auto shadow-2xl shadow-black/20 p-8 mb-6 min-h-[500px]">
    <div class="h-full">
      <div class="flex flex-row items-center title mb-20">
        <div class="uppercase text-gray-600 font-semibold text-lg">
          Home
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
  },
  setup(props) {
    const showCreateModal = ref(false)
    
    return {
    }
  }
})
</script>
<style>
.step:before {
  height: 2px !important;
}

.step:after {
  color: white !important;
}
</style>