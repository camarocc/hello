<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vitepress';
const content = ref('');

onMounted(async () => {
  let route = useRoute();
  console.log('Current route:', route, route.path);

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    content.value = await response.text();
  } catch (error) {
    console.error('Failed to fetch Markdown:', error);
  }
});
</script>

<template>
  <div class="markdown-content" v-html="content"></div>
</template>

<style scoped>
.markdown-content {
  /* 可选：添加自定义样式 */
}
</style>
