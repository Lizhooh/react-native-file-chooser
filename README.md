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

## mimeType

ext | mineType
--- | ---
.apk | application/vnd.android.package-archive
.bin | application/octet-stream
.class | application/octet-stream
.doc | application/msword
.exe | application/octet-stream
.gtar | application/x-gtar
.gz | application/x-gzip
.jar | application/java-archive
.js | application/x-javascript
.mpc | application/vnd.mpohun.certificate
.msg | application/vnd.ms-outlook
.pps | application/vnd.ms-powerpoint
.ppt | application/vnd.ms-powerpoint
.pdf | application/pdf
.rar | application/x-rar-compressed
.rtf | application/rtf
.tgz | application/x-compressed
.tar | application/x-tar
.wps | application/vnd.ms-works
.z | application/x-compress
.zip | application/zip
.3gp | video/3gpp
.asf | video/x-ms-asf
.avi | video/x-msvideo
.m4u | video/vnd.mpegurl
.m4v | video/x-m4v
.mov | video/quicktime
.mp4 | video/mp4
.mpe | video/mpeg
.mpeg | video/mpeg
.mpg | video/mpeg
.mpg4 | video/mp4
.bmp | image/bmp
.gif | image/gif
.jpeg | image/jpeg
.jpg | image/jpeg
.png | image/png
.c | text/plain
.conf | text/plain
.cpp | text/plain
.h | text/plain
.htm | text/html
.html | text/html
.java | text/plain
.log | text/plain
.prop | text/plain
.rc | text/plain
.sh | text/plain
.txt | text/plain
.xml | text/xml
.xml | text/plain
.m3u | audio/x-mpegurl
.m4a | audio/mp4a-latm
.m4b | audio/mp4a-latm
.m4p | audio/mp4a-latm
.mp2 | audio/x-mpeg
.mp3 | audio/x-mpeg
.mpga | audio/mpeg
.ogg | audio/ogg
.rmvb | audio/x-pn-realaudio
.wav | audio/x-wav
.wma | audio/x-ms-wma
.wmv | audio/x-ms-wmv
'' | */*
