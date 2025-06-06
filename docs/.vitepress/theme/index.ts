import DefaultTheme from 'vitepress/theme';
import Test from './test.vue';
import Foo from './foo.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('foo', Foo);
    app.component('test', Test);
  }
};
