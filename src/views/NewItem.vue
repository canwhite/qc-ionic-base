<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button @click="goback"></ion-back-button>
        </ion-buttons>
        <ion-title>New Item</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div> 
        {{value}}
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';//请求工具
import qs, { stringify } from "qs";
import { 
  IonContent, 
  IonHeader, 
  IonPage,
  IonTitle, 
  IonToolbar,

  
} from '@ionic/vue';
//操作dom，依赖于vue的ref
// import { defineComponent ,ref} from 'vue';
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
const { Camera,Storage} = Plugins;

export default defineComponent({
  name: 'NewItem',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,


  },
  data(){
    return{
      value:"",
      router:useRouter(),
    }
  },
  ionViewWillEnter(){
    this.checkName();

  },
  ionViewWillLeave(){
    this.removeName();
  },
  methods:{
    async checkName(){
      const { value } = await Storage.get({ key: 'name' });
      this.value = value;

    },
    goback(){
      this.router.back();
    },
    async removeName(){
      await Storage.remove({ key: 'name' });
    }

  }
});
</script>