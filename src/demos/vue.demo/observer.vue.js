import { createApp } from 'vue';

const app = createApp({
  template:`
    <div>Vue test</div>
  `,
  data() {
    return {
      apiKey: 'a1b2c3'
    }
  }
})

app.mount('#counter');
