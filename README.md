# qc-ionic-base
javascript版，基础项目,目前已包含
* 数据请求
* 状态管理
* 路由
* 打开相机、视频录制、扫码

实现用了vue

# ts => js

**this project had been changed**

1.Remove TypeScript dependencies:
```
npm uninstall --save typescript @types/jest @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/cli-plugin-typescript @vue/eslint-config-typescript
```

2.Change all .ts files to .js. In a blank Ionic Vue app, this should only be router/index.ts and main.ts.

3.Remove @vue/typescript/recommended and @typescript-eslint/no-explicit-any: ‘off’, from .eslintrc.js.

4.Remove Array<RouteRecordRaw> from router/index.js.

5.Delete the shims-vue.d.ts file.

6.Remove lang="ts" from the script tags in any of your Vue components that have them. In a blank Ionic Vue app, this should only be App.vue and views/Home.vue.

# build

1.add Capacitor to your project
```
ionic integrations enable capacitor
```
2.Next, build the project, then add your platform of choice:

```
ionic build
ionic cap add ios
ionic cap add android
```

3.We use the standard native IDEs (Xcode and Android Studio) to open, build, and run the iOS and Android projects:
```
ionic cap open ios
ionic cap open android
```

# update

```
ionic cap sync
```
  
# custom plugin

[custom plugin](https://github.com/canwhite/qc-capacitor-plugin)


# electron

```
cnpm i @capacitor-community/electron
ionic build
ionic cap add @capacitor-community/electron
PS1:
然后一直卡在：Adding Electron platform;
如果看到已经有electron文件夹了，ctrl + c退出;
将原来的node_modules删除
cd electron
PS2：change src/index.ts to src/index.js
cnpm i
npm run electron:start

```