<template>
  <div class="overflow-auto back">
    <div v-for="(news, index) in this.allNews" :key="index" class="text-black text-sm">
      <div class="bg-gray-500 border-round-xl m-2 p-2 pb-2">
        <p class="text-xl font-semibold">{{ news.title }}</p>

        <img :src="host + news.image_url" :alt="news.title"
             class="image border-round-2xl align-content-center align-items-center justify-content-center w-full" />
        <p class="py-2 text-left">{{ news.description }}</p>
        <Button tag="button" v-if="news.is_event === false && news.test_url === null"  class="text-gray-100 bg-gray-400 active:bg-gray-500 hover:bg-gray-500">Запланировать</Button>
        <Button tag="button" v-if="news.test_url != null && news.is_event === false"

                @click="$router.push(`${news.test_url}`)"
                class="text-gray-100 bg-gray-600 active:bg-gray-800 hover:bg-gray-800">
          Пройти тест
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      host: 'https://finlit-test.ru/',
    }
  },
  mounted() {
    this.$store.dispatch("getAllNews");
    console.log(this.$store.getters["GET_NEWS"]);
  },
  computed: {
    allNews() {
      return this.$store.getters['GET_NEWS'];
    },
  }
};
</script>

<style scoped>

.image{
  object-fit: contain;
}

button {
  background-color: rgb(46, 76, 124);
  outline: none;
}

.back {
  background-color: #ededed;
}


</style>