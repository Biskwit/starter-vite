<template>
  <div class="drawer-side mt-28 shadow-2xl shadow-black/20 lg:ml-6 lg:mb-6 rounded-lg">
    <label for="drawer" class="drawer-overlay m-0"></label>
    <div class="menu p-4 w-[250px] bg-white text-gray-600 uppercase text-sm">
      <div tabindex="0" class="compute collapse collapse-open">
        <input type="checkbox" class="compute" checked />
        <div class="flex flex-row collapse-title items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" class="h-4 text-gray-600" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.5 0C4.83696 0 4.20107 0.263392 3.73223 0.732233C3.26339 1.20107 3 1.83696 3 2.5V13.5C3 14.163 3.26339 14.7989 3.73223 15.2678C4.20107 15.7366 4.83696 16 5.5 16H10.5C11.163 16 11.7989 15.7366 12.2678 15.2678C12.7366 14.7989 13 14.163 13 13.5V2.5C13 1.83696 12.7366 1.20107 12.2678 0.732233C11.7989 0.263392 11.163 0 10.5 0H5.5ZM5.5 3H10.5C10.6326 3 10.7598 3.05268 10.8536 3.14645C10.9473 3.24021 11 3.36739 11 3.5C11 3.63261 10.9473 3.75979 10.8536 3.85355C10.7598 3.94732 10.6326 4 10.5 4H5.5C5.36739 4 5.24021 3.94732 5.14645 3.85355C5.05268 3.75979 5 3.63261 5 3.5C5 3.36739 5.05268 3.24021 5.14645 3.14645C5.24021 3.05268 5.36739 3 5.5 3V3ZM5 10.5C5 10.3674 5.05268 10.2402 5.14645 10.1464C5.24021 10.0527 5.36739 10 5.5 10H10.5C10.6326 10 10.7598 10.0527 10.8536 10.1464C10.9473 10.2402 11 10.3674 11 10.5C11 10.6326 10.9473 10.7598 10.8536 10.8536C10.7598 10.9473 10.6326 11 10.5 11H5.5C5.36739 11 5.24021 10.9473 5.14645 10.8536C5.05268 10.7598 5 10.6326 5 10.5ZM5 12.5C5 12.3674 5.05268 12.2402 5.14645 12.1464C5.24021 12.0527 5.36739 12 5.5 12H10.5C10.6326 12 10.7598 12.0527 10.8536 12.1464C10.9473 12.2402 11 12.3674 11 12.5C11 12.6326 10.9473 12.7598 10.8536 12.8536C10.7598 12.9473 10.6326 13 10.5 13H5.5C5.36739 13 5.24021 12.9473 5.14645 12.8536C5.05268 12.7598 5 12.6326 5 12.5ZM0 5C0 4.46957 0.210714 3.96086 0.585786 3.58579C0.960859 3.21071 1.46957 3 2 3V13.5C2 13.67 2.012 13.837 2.035 14H2C1.46957 14 0.960859 13.7893 0.585786 13.4142C0.210714 13.0391 0 12.5304 0 12V5ZM14 13.5C14 13.67 13.988 13.837 13.965 14H14C14.5304 14 15.0391 13.7893 15.4142 13.4142C15.7893 13.0391 16 12.5304 16 12V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3V13.5Z"
              fill="currentColor" />
          </svg>
          <span>Dashboard</span>
        </div>
        <div class="collapse-content ml-4 flex flex-col gap-2 text-xs">
          <router-link :to="{ name: 'Home' }"><span
              :class="{ 'text-primary': currRoute == '/' }">Home</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'SideBar',
  setup() {
    const route = useRoute();
    const currRoute = computed(() => route.path.toString().toLowerCase() ?? '');
    const routes = ref([ // TODO: make routes dynamics with this object, better to maintain 
      {
        name: "Dashboard",
        subpath: [
          {
            name: "Home",
            path: "/home"
          }
        ]
      }
    ])
    return {
      currRoute
    }
  }
})
</script>
<style>

</style>