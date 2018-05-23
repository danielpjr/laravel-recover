# laravel-recover
jQuery Plugin to expedite the reactivation of items in the laravel

## Usage

1. Include jQuery:

	```html
    <script src="vendor/jquery/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="laravel-recover.js" type="text/javascript"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").dpjLaravelRecover({
		route: "http://url-to-recover.com/{ID}"
	});
	```


# Dependencies
[jQuery](https://github.com/jquery/jquery)
