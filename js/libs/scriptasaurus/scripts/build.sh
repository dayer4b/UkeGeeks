#!/bin/bash

pathToSrc='../src'
pathToBuild='../build'

srcfile[0]=$pathToSrc'/ukeGeeks.namespace.js'
srcfile[1]=$pathToSrc'/ukeGeeks.settings.js'
srcfile[2]=$pathToSrc'/ukeGeeks.data.js'
srcfile[3]=$pathToSrc'/ukeGeeks.toolsLite.js'
srcfile[4]=$pathToSrc'/ukeGeeks.chordImport.js'
srcfile[5]=$pathToSrc'/ukeGeeks.transpose.js'
srcfile[6]=$pathToSrc'/ukeGeeks.definitions.js'
srcfile[7]=$pathToSrc'/ukeGeeks.definitions.sopranoUkuleleGcea.js'
srcfile[8]=$pathToSrc'/ukeGeeks.definitions.guitarEadgbe.js'
srcfile[9]=$pathToSrc'/ukeGeeks.canvasTools.js'
srcfile[10]=$pathToSrc'/ukeGeeks.chordBrush.js'
srcfile[11]=$pathToSrc'/ukeGeeks.chordParser.js'
srcfile[12]=$pathToSrc'/ukeGeeks.cpmParser.js'
srcfile[13]=$pathToSrc'/ukeGeeks.chordPainter.js'
srcfile[14]=$pathToSrc'/ukeGeeks.tabs.js'
srcfile[15]=$pathToSrc'/ukeGeeks.scriptasaurus.js'

cat ${srcfile[@]} > $pathToBuild/ukeGeeks.scriptasaurus.merged.js

yui-compressor --type js $pathToBuild/ukeGeeks.scriptasaurus.merged.js -o $pathToBuild/ukeGeeks.scriptasaurus.min.js
