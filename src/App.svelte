<script>

</script>

<header>
	shykeiichi
	<div style="width: 100%; height: 20px;"></div>
</header>
<main>
	<container>
		<div class="button" id="youtube">
			<!-- <img max-width="100" src="images/youtube.png" alt="youtube logo"/> -->
			<a href="https://www.youtube.com/channel/UCBwQiuc-eyzM-YsrtPQLaQw">Youtube</a>
		</div>
		<a class="button" id="twitter" href="https://twitter.com/shykeiichi">Twitter</a>
		<a class="button" id="github" href="https://github.com/shykeiichi">Github</a>
		<a class="button" id="reddit" href="https://reddit.com/u/shykeiichi">Reddit</a>
		<a class="button" id="mail" href="mailto:mail@keii.dev">Mail</a>
	</container>
</main>
<footer>
	<a href="https://keii.dev" style="color: rgb(146, 146, 146); width: 120px; position: absolute; left: 20px;">To keii.dev</a>
	<div>
		shykeiichi © 2022
	</div>
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

	footer{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgb(243, 243, 243);
		height: auto;
		width: 100vw;
		padding-top: 5px;
		padding-bottom: 5px;
		color: rgb(146, 146, 146);
		display: grid;
		place-items: center;
	}

	header {
		font-family: 'Roboto', sans-serif;
		font-weight: bold;
		font-size: 20px;
		height: 64px;
		display: flex;
		align-items: center;
		gap: 7px;
		border-bottom: 1px solid grey;
		padding-left: 15px;
		padding-right: 15px;
	}

	img {
		width: 20px;
		padding-right: 5px;
	}

	a {
		color: white;
	}

	container {
		display: grid;
		place-items: center;
	}

	main {
		display: grid;
		place-items: center;
		height: 93%;
	}

	#youtube {
		background-color: #EC7272;
		box-shadow: 0 5px 0 rgb(210, 90, 90);
	}

	#youtube:hover {
		background-color: #e98686;
		box-shadow: 0 5px 0 rgb(210, 104, 104);
	}

	#youtube:active {
		box-shadow: 0 0 0 #e98686;
	}

	#twitter {
		background-color: #7FBCD2;
		box-shadow: 0 5px 0 rgb(89, 150, 172);
	}

	#twitter:hover {
		background-color: #94c2d3;
		box-shadow: 0 5px 0 rgb(97, 150, 169);
	}

	#twitter:active {
		box-shadow: 0 0 0 #94c2d3;
	}

	#github {
		background-color: #16213E;
		box-shadow: 0 5px 0 #0a0f1f;
	}

	#github:hover {
		background-color: #27324e;
		box-shadow: 0 5px 0 #151c35;
	}

	#github:active {
		box-shadow: 0 0 0 #94c2d3;
	}

	#reddit {
		background-color: #EC7272;
		box-shadow: 0 5px 0 rgb(210, 90, 90);
	}

	#reddit:hover {
		background-color: #e98686;
		box-shadow: 0 5px 0 rgb(210, 104, 104);
	}

	#reddit:active {
		box-shadow: 0 0 0 #e98686;
	}

	#mail {
		background-color: #7FBCD2;
		box-shadow: 0 5px 0 rgb(89, 150, 172);
	}

	#mail:hover {
		background-color: #94c2d3;
		box-shadow: 0 5px 0 rgb(97, 150, 169);
	}

	#mail:active {
		box-shadow: 0 0 0 #94c2d3;
	}

	.button {
		margin: 10px;
		color: white;
		text-align: center;
		width: 250px;
		padding-top: 15px;
		padding-bottom: 15px;
		padding-left: 32px;
		padding-right: 32px;
		border-radius: 15px;
		font-family: "Roboto";
		font-size: 18px;
		font-weight: bold;
		align-content: center;
		align-items: center;
	}

	.button:active {
		transform: translateY(5px);
	}
</style>