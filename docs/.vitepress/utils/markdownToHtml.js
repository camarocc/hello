export default function (options) {
  return {
    name: 'vite-plugin-markdown',
    enforce: 'pre',
    async transform(code, id) {
      if (id.endsWith('.md')) {
        // 示例：从服务器获取Markdown内容（需替换为实际API）
        const response = await fetch('https://your-server.com/api/markdown');
        const markdownContent = await response.text();
        return {
          code: `import { h, defineComponent } from "vue";
            const article = defineComponent({
              name: "Markdown",
            }).render = () => {
              return h("div", { id: "write", innerHTML: \${markdownContent} });
            };
            export default article`,
          map: null
        };
      }
    }
  };
}
