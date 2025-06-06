<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vitepress';
import { marked } from 'marked';

const content = ref('');

onMounted(async () => {
  const route = useRoute();
  // 假设 route.path 形如 /zhHans/changelog/test
  // 拼接成 https://raw.githubusercontent.com/你的用户名/你的仓库名/main/docs/zhHans/changelog/test.md
  const githubRawBase = 'https://raw.githubusercontent.com/camarocc/hello/refs/heads/master/';
  let mdPath = route.path.replace(/\/$/, '') + '.md';
  // const fetchUrl = githubRawBase + '/guide/getting-started.md'
  const fetchUrl = githubRawBase + 'aaa.md' + '?t=' + Date.now();

  console.log('fetch url:', fetchUrl);

  try {
    const response = await fetch(fetchUrl);
    const md = await response.text();
    content.value = marked(md);
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
