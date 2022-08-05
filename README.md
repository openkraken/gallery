# Kraken Gallery

## ScreenShot

<img src="https://user-images.githubusercontent.com/677114/113019030-bf531a00-91b3-11eb-8656-4016761a144e.jpg" width="380" />

## Using fvm specific flutter version 

```
brew tap leoafarias/fvm                                                   
brew install fvm  
fvm install 2.8.1
fvm global 2.8.1
```
## Release

- [Android Apk](https://kraken.oss-cn-hangzhou.aliyuncs.com/gallery/app.android.apk)
- [MacOS App](https://kraken.oss-cn-hangzhou.aliyuncs.com/gallery/app.darwin.zip)

## Build

```shell
$ node scripts/build_demos.js
```

## Run with mobile device

connect your mobile device with mac

```
fvm flutter pub get
fvm flutter run
```
