<script>
import Menu from "primevue/menu"
import News from "./components/News.vue";
import Chat from "./components/Chat.vue";
import Toast from 'primevue/toast';
import instance from "./Api/instance.js";
export default {
  components: {
    Menu,
    News,
    Chat,
    Toast
  },
  data() {
    return {
      items: [
        {
          label: 'Новости',
          icon: 'pi pi-home',
          link: '/news'
        },
        {
          label: 'ИИ',
          icon: 'pi pi-microchip-ai',
          link: '/chat'
        }
      ]
    };
  },
  methods: {
    updateTab(newTab) {
      console.log("Смена вкладки на:", newTab); // Отладка
      this.activeTab = newTab;
    },
  }
};
</script>

<template>
  <div class="flex flex-column text-gray-100 w-screen content-container">
    <RouterView />
  </div>
  <div class="flex justify-content-center align-items-center w-screen bottom-0 menu-container">
    <div v-for="i in items" :key="i" class="w-full h-full hover:bg-primary-800">
      <RouterLink :to="i.link" class="flex flex-column w-full h-full justify-content-center text-gray-100">
        <span :class="i.icon"/>
        <span>{{ i.label }}</span>
      </RouterLink>
    </div>
  </div>
</template>

<style>
* {
  -webkit-tap-highlight-color: transparent;
  margin: 0;
  padding: 0;
}

.menu-container {
  height: 7vh;
}

.content-container {
  height: 93vh;
}
</style>
