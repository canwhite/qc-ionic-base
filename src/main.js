import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
//IonicVue该插件是一个插件，可以让我们在Vue环境中使用Ionic Framework。
import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* 组件的全局注册1 */
import { IonContent, IonicVue, IonPage } from '@ionic/vue';

/* 图标的全局注册 */
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';

addIcons({
  'heart': heart 
});
// 在组件中使用的时候
//<ion-icon icon="heart"></ion-icon>



//createApp函数使我们可以初始化Vue应用程序
const app = createApp(App)
  .use(IonicVue)//这里应该是全局导入了
  .use(router);
 
  
/* 组件的全局注册2,在具体的界面中直接使用就可以了 */
/* app.component('ion-content', IonContent);
app.component('ion-page', IonPage); */

/* 自定义组件的使用和vue一样 */



router.isReady().then(() => {
  app.mount('#app');
});