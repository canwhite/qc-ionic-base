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

      <!--  capacitor -->

      <!-- 照片 -->
      <div> 
        <ion-button @click="takePhoto()">Take Photo</ion-button>
        <img :src="photo" />
      </div>
      <!-- 二维码 -->
      <div> 
        <IonButton @click="openScanner">Scan barcode</IonButton>
      </div>
      <!-- 视频 -->
      <div> 
        <IonButton @click="captureMed">media btn</IonButton>
        <div> {{video}}</div>
      </div>


      <!-- <IonButton @click="showAlert">show Alert</IonButton> -->

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
import { Plugins, CameraResultType } from '@capacitor/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {MediaCapture,MediaFile,CaptureError } from '@ionic-native/media-capture'
//dialog 这个不行，看来剔除是有原因的，在h5层面上实现吧
// import { Dialog } from '@capacitor/dialog';
//todo media
const { Camera} = Plugins;


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
    IonButton,

  },
  data(){
    return{
      add,
      router:useRouter(),
      heart,
      logoAndroid,
      logoApple,
      photo:"",
      mediaCapture: MediaCapture,
      video:'',
    }
  },
  /* setup() {
    //最后是需要订阅吗
    const imageSrc = ref('');
    const takePhoto = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      imageSrc.value = image.webPath;
    }
    return {

    }
  },  */
  methods:{
    scrollToBottom(){
      console.log(this.$refs.content)
    },
    async takePhoto(){
      const image = await Camera.getPhoto({
        quality: 50,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });
      // imageSrc.value = image.webPath;
      // this.photo = imageSrc;
      // console.log(image.webPath);
      this.photo = image.webPath;

    },
    
    //二维码扫描
    async openScanner(){
      const data = await BarcodeScanner.scan();
      console.log(`Barcode data: ${data.text}`);
    },

    //dialog
    // async showAlert() {
    //   await Dialog.alert({
    //     title: 'Stop',
    //     message: 'this is an error',
    //   });
    // }
    
    //录视频成功，只要是有capacitor引入的，基本上都可以用
    async captureMed(){
        this.mediaCapture.captureVideo({}).then(
          (data) => {
            console.log(data)
            this.video = data;
          },
          (err) => console.error(err)
      );
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