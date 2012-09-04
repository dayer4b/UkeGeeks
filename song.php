<?php

include_once('ugsphp/Ugs.php');

$builder = Ugs::GetBuilder(Actions::Song);
$model = $builder->Build();
$path = dirname($_SERVER['PHP_SELF']);

?>
<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="utf-8" />
<title><?php echo($model->PageTitle); ?></title>
<script type="text/javascript">var isIE = false;</script>
<!--[if lt IE 9]>
<script type="text/javascript">
isIE = true;
document.getElementsByTagName('html')[0].className = 'ie';
</script>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<script type="text/javascript" src="../js/excanvas.js"></script>
<![endif]-->
<link rel="stylesheet" href="http://yui.yahooapis.com/2.8.0r4/build/reset/reset-min.css" />
<link rel="stylesheet" href="<?php echo $path; ?>/css/ukeGeeks.music.css" media="all" />
<link rel="stylesheet" href="<?php echo $path; ?>/css/ukeGeeks.musicPrint.css" media="print" />
<meta name="generator" content="<?php echo($model->PoweredBy) ?>" />
</head>
<body>
<section>
	<header>
		<hgroup>
			<!-- TODO: create an instrument switcher -->
			<aside><a href="<?php echo($path . $model->SourceUri); ?>" target="_blank" title="view original song text">Source</a></aside>
			<h1 class="ugsSongTitle"><?php echo($model->SongTitle); ?></h1>
			<?php if (strlen($model->Artist) > 0): ?>
				<h2 class="ugsArtist"><?php echo($model->Artist); ?></h2>
			<?php endif; ?>
			<h2 class="ugsSubtitle"><?php echo($model->Subtitle); ?></h2>
			<?php if (strlen($model->Album) > 0): ?>
				<h3 class="ugsAlbum"><?php echo($model->Album); ?></h3>
			<?php endif; ?>
		</hgroup>
	</header>
		<?php 
		if ($model->UgsMeta){
			echo('<div class="metaInfo">');
			foreach($model->UgsMeta as $meta){
				echo('<p>' . $meta . '</p>');
			}
			echo('</div><!-- /.metaInfo -->');
		}
		?>
	<div id="ukeSongContainer">
		<aside id="ukeChordsCanvas"></aside>
		<article id="ukeSongText"><pre><?php echo($model->Body); ?></pre></article>
	</div>
</section>
<footer>
	<!-- TODO: incorporate instrument definitions into text below -->
	<p>Note: Standard <strong>GCEA</strong> Soprano Ukulele Tuning. <small>Powered by UkeGeeks' Scriptasaurus &bull; ukegeeks.com</small></p>
</footer>
<script type="text/javascript" src="<?php echo $path; ?>/js/libs/scriptasaurus/build/ukeGeeks.scriptasaurus.min.js"></script>
<script type="text/javascript" src="<?php echo $path; ?>/js/startup.js"></script>
</body>
</html>
