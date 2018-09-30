# react-native-file-chooser
A React Native module that allows you to use native UI to select a file from the device library
Based on [react-native-image-chooser](https://github.com/marcshilling/react-native-image-chooser)

- Supports choosing files from Google Drive

## Install

### iOS
This component does not currently work on iOS, instead use [react-native-document-chooser](https://github.com/Elyx0/react-native-document-chooser)

### Android

#### Install

```bash
yarn add react-native-file-chooser@https://github.com/Lizhooh/react-native-file-chooser.git

react native link react-native-file-chooser
```

Or set up resources manually.

```gradle
// file: android/settings.gradle
...

include ':react-native-file-chooser'
project(':react-native-file-chooser').projectDir = new File(settingsDir, '../node_modules/react-native-file-chooser/android')
```
```gradle
// file: android/app/build.gradle
...

dependencies {
    ...
    compile project(':react-native-file-chooser')
}
```

```xml
<!-- file: android/src/main/AndroidManifest.xml -->
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.myApp">

    <uses-permission android:name="android.permission.INTERNET" />

    <!-- add following permissions -->
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <!-- -->
    ...
</manifest>
```

```java
// file: MainApplication.java
...

import com.filechooser.FileChooserPackage; // import package

public class MainApplication extends Application implements ReactApplication {

   /**
   * A list of packages used by the app. If the app uses additional views
   * or modules besides the default ones, add more packages here.
   */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new FileChooserPackage() // Add package
        );
    }
...
}

```
## Usage
1. In your React Native javascript code, bring in the native module:

```js
// import { NativeModules } from 'react-native'
// const FilePicker = NativeModules.FileChooser
import { FilePicker } from 'react-native-file-chooser';
```

2. Use it like so:

  When you want to display the chooser:

```js

FilePicker.show({
    title: 'Audio Picker',
    mimeType: 'audio/*',
}, res => {
    console.log('Response = ', res);
/*
    fileName: "xxx.mp3"
    fileSize: 12386713
    mimeType: "audio/mpeg"
    uri: "content://com.android.providers.media.documents/document/audio%3A68463"
*/

    if (res.didCancel) {
        console.log('User cancelled file chooser');
    }
    else if (res.error) {
        console.log('FileChooserManager Error: ', res.error);
    }
    else {
        this.setState({ file: res });
    }
});
```


