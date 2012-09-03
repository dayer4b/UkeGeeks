/**
 * For demo purposes allows one to turn on/off the inlineDiagrams setting. 
 * @method checkUrlOpts
 * @return {void}
 */
function checkUrlOpts(){
	var s = new String(window.location);
	var re = new RegExp("[?&]inline=([^&]*)", "i");
	var m = s.match(re)
	if (!m || m.length < 1){
		return;
	}
	ukeGeeks.settings.inlineDiagrams = true;
}

/**
 * Here we've added a call to checkUrlOpts in what's otherwise a 
 * very "standard" way to run Scriptasaurus.
 * 
 * setting an instrument using the short name is required for
 * correct rendering and chord library.  However, there is no guarantee
 * that user-defined chords will work for the instrument specified
 * here
 */
if (isIE){
	window.attachEvent('onload',function(){
		checkUrlOpts();
		ukeGeeks.scriptasaurus.init(true);
		ukeGeeks.scriptasaurus.run("guitar");
	});
}
else{
	(function(){
		checkUrlOpts();
		ukeGeeks.scriptasaurus.init(false);
		ukeGeeks.scriptasaurus.run("guitar");
	})();
}
