#!/bin/bash

ionic platform rm ios
ionic platform rm android

rm -rf plugins/*

ionic plugin add com.ionic.keyboard
ionic plugin add org.apache.cordova.console
ionic plugin add org.apache.cordova.splashscreen
ionic plugin add org.apache.cordova.inappbrowser
ionic plugin add org.apache.cordova.device
ionic plugin add cordova-plugin-whitelist
ionic plugin add cordova-plugin-statusbar

ionic platform add ios
ionic platform add android
