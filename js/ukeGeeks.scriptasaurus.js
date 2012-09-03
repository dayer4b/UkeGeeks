/**
 * Finds page HTML elements & creates ukeGeek objects;
 * Reads song text, parses, draws choard diagrams.
 * 
 * @class scriptasaurus
 * @namespace ukeGeeks
 * @static
 */
ukeGeeks.scriptasaurus = new function(){
	/**
	 * Preps this class for running
	 * @method init
	 * @param isIeFamily {bool} TRUE if UserAgent (Browser to you and me) is Internet Explorer
	 * @return {void}
	 */
	this.init = function(isIeFamily){
		ukeGeeks.settings.environment.isIe = isIeFamily;
	};

	/**
	 * Runs all Scriptasaurus methods. This is your "Do All". See data.song for structure.
	 * @method run
	 * @param instrumentShortName {string} (required) See ukeGeeks.definitions.instrument.
	 * @return {songObject}
	 */
	this.run = function(instrumentShortName){
		var offset = ukeGeeks.definitions.instrument[instrumentShortName];
		var h = document.getElementById(ukeGeeks.settings.ids.songText);
		if (!h) return null;
	
		ukeGeeks.definitions.useInstrument(instrumentShortName);
		
		// read Music, find chords, generate HTML version of song:
		var cpm = new ukeGeeks.cpmParser;
		cpm.init();
		// recalculate stringSpace based on stringCount and width
		ukeGeeks.settings.fretBox.stringSpace = (ukeGeeks.settings.fretBox.width - (2*ukeGeeks.settings.fretBox.topLeftPos.x) - ukeGeeks.settings.stringCount)/(ukeGeeks.settings.stringCount - 1);
		// recalculate dotRadius based on stringSpace
		ukeGeeks.settings.fretBox.dotRadius = ukeGeeks.settings.fretBox.stringSpace/2;
		var song = cpm.parse(h.innerHTML);
		ukeGeeks.definitions.replace(song.defs);
	
		var chrdPrsr = new ukeGeeks.chordParser;
		chrdPrsr.init();
		h.innerHTML = chrdPrsr.parse(song.body);
		var chordsInUse = chrdPrsr.getChords();
	
		// Draw the Chord Diagrams:
		var painter = new ukeGeeks.chordPainter;
		painter.init();
		painter.show(ukeGeeks.settings.ids.canvas, chordsInUse);
		// Show chord diagrams inline with lyrics
		if (ukeGeeks.settings.inlineDiagrams){
			var b = document.getElementsByTagName('body')[0];
			ukeGeeks.toolsLite.addClass(b, 'ugsInlineDiagrams');
			painter.showInline(chordsInUse);
		}
	
		// Do Tablature:
		var tabs = new ukeGeeks.tabs;
		tabs.init();
		tabs.replace(h);
		
		// error reporting:
		showErrors(painter.getErrors());
		
		var container = document.getElementById(ukeGeeks.settings.ids.container);
		if (container){
			if (!song.hasChords){
				ukeGeeks.toolsLite.addClass(container, 'ugsNoChords');
			}
			else{
				ukeGeeks.toolsLite.removeClass(container, 'ugsNoChords');
			}
		}

		// done!
		return song;
	};

	/**
	 * Shows a JavaScript alert box containing list of unknown chords.
	 * @method showErrors
	 * @return {void}
	 */
	var showErrors = function(errs){
		if (errs.length > 0){
			var s = '';
			for(var i=0; i < errs.length; i++){
				s += errs[i]+(((i+1)==errs.length) ? '' : ', ');
			}
			alert('Forgive me, but I don\'t know the following chords: ' + s);
		}
	};
}
