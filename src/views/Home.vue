<template>
   <!-- page -->
  <ion-page>
    <!-- header -->
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    <!-- content -->
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
     



      <!-- list -->
      <ion-list>
        <ion-item>
          <!-- 这里的slot和vue中的插槽作区分，这里是浮动布局的位置 -->
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <h1>Create Idea</h1>
            <ion-note>Run Idea By Brandy</ion-note>
          </ion-label>
          <ion-badge color="success" slot="end">
            5 Days
          </ion-badge>
        </ion-item>
      </ion-list>

      <!-- button 操作dom -->
      <div ref="content">
        <ion-button @click="scrollToBottom">Scroll to Bottom</ion-button>
      </div>

      <!-- icon的使用 -->
      <div style="margin-top:30px;padding-left:20px" >
        <ion-icon :icon="heart"></ion-icon>
        <!-- 可以根据需要使用不同的图标 -->
        <ion-icon :ios="logoApple" :md="logoAndroid"></ion-icon>  
      </div>


      <div style="margin-top:30px;padding-left:20px" >
        <strong>Ready to create an app?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>  


      <!-- fixed按钮 -->
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button  @click="() => router.push('/new')">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

    </ion-content>


  </ion-page>
</template>

<script >
import { 
  IonContent, 
  IonHeader, 
  IonPage,
  IonTitle, 
  IonToolbar,
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonNote,
  IonBadge,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton
  
} from '@ionic/vue';
//操作dom，依赖于vue的ref
import { defineComponent ,ref} from 'vue';
import { 
  add,
  heart,
  logoAndroid,
  logoApple


} from 'ionicons/icons';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonCheckbox,
    IonLabel,
    IonNote,
    IonBadge,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton
  },
  data(){
    return{
      add,
      router:useRouter(),
      heart,
      logoAndroid,
      logoApple

    }
  },
  /* setup() {
    //最后是需要订阅吗
    return {

    }
  }, */
  methods:{
    scrollToBottom(){
      console.log(this.$refs.content)
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 20%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>