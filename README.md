TextSwitcher
============

The best plugin for switch text and show it to the viewer of your website.
## textswitcher.js

Do you want to creat a cool and basic animation text switcher easily for your website?

## Features

- Smart Resposive!
- Just a little css style!
- Easy Usage!
- Useful Plugin!

## Demo

[See the demo page](http://Ahmadrezanamani.github.io/demo/jquery.textswitcher.js/) or checkout `/demo/demo.html` in this repo.

## Usage

Add this to your `<head>` or add the css on the textswitcher.css in the style of your website.
	
	<link rel="stylesheet" type="text/css" href="textswitcher.css" />

Add this right before your closing `</body>`
	
	<script type="text/javascript" src="jquery.textswitcher.js"></script>

*Note*: The path may change depending on where you put the css file.

html

	<div class="article">
		<h1>
			Your Text Will Be Here
			<div class="mask">
				<span>TEXT1</span>
				<span>TEXT2</span>
				<span>TEXT3</span>
				<span>TEXT4</span>
				<span>TEXT5</span>
				<span>TEXT6</span>
			</div>
		</h1>
    </div>

js

	$(".mask").textswither({
		time:4000,
		random:false,
		easing:"easeInOutElastic",
		direction:"ltr",
		speed:2000,
	});

## Options

### time

time of the animate for each animation after each animation.

Default: `1000`
### random

random showing text switch.

Default: `false`
### easing

the easing for the text switcher in this plugin you can choose it after load easing js flie.

Default: `linear`
### direction

if your website design is left to right you can choose ltr and if is right to left you can choose rtl.

Default: `ltr`

### speed

Speed of the animation for switch text.

Default: `400`
