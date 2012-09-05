UkeGeeks
========

UkeGeeks Scriptasaurus creates fingering diagrams by reading plain text or ChordPro ukulele and guitar songs

If you'd like to slim the load for FTP or what have you, you can ditch the contents of the js/libs/ folder except for the ukeGeeks.scriptasaurus.min.js (which are in js/libs/scriptasaurus/build/).  The rest of the files in that folder are used to compile these merged and min files.  The js/libs/scriptasaurus/scripts/build.sh file is a simple bash script that utilizes cat and yui-compressor to create the merged and min files in the correct order.

