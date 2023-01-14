<template>
  <n-notification-provider>
    <n-config-provider :theme-overrides="themeOverrides">
      <div class="text-gray-600">
        <TopBar v-if="!blacklist.includes(currRoute)" />
        <div class="drawer drawer-mobile">
          <input id="drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content flex flex-col items-center mt-28 lg:px-6 px-2 h-auto">
              <router-view v-slot="{ Component }">
                <transition name="slide-fade">
                  <component :is="Component" />
                </transition>
              </router-view>
          </div>
          <SideBar v-if="!blacklist.includes(currRoute)" />
        </div>
      </div>
    </n-config-provider>
  </n-notification-provider>
</template>
<script lang="ts">
import { NConfigProvider, GlobalThemeOverrides, NNotificationProvider } from 'naive-ui'
import { computed, defineComponent, onMounted, ref } from 'vue';
import TopBar from './components/navigation/TopBar.vue';
import SideBar from './components/navigation/SideBar.vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    NConfigProvider,
    TopBar,
    SideBar,
    NNotificationProvider
  },
  setup() {
    const blacklist = ref(['login', 'register', 'forgot-password'])
    const route = useRoute();
    const currRoute = computed(() => route.name?.toString().toLowerCase() ?? '');
    const themeOverrides: GlobalThemeOverrides = {
      common: {
        primaryColor: '#51C7FF',
        primaryColorHover: '#51C7FF',
        primaryColorPressed: '#61a8fe',
      }
    }
    onMounted(() => {

    })
    return {
      themeOverrides,
      TopBar,
      blacklist,
      currRoute
    }
  }
})
</script>
<style>
body,
html {
  font-family: Montserrat;
  background-color: rgb(250, 250, 250);
}

li {
  padding: 10px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in-out;
}
.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
  position: absolute;
}
button, [type='button'], [type='reset'], [type='submit'] {
    background-color: var(--n-color) !important;
}
</style>