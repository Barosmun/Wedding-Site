<script>
	export let name;
	let daysUntil = calculateDaysUntil();
	function calculateDaysUntil(){
		let today = new Date();
		let wedding = new Date('08/12/2023');
		let difference = wedding.getTime() - today.getTime();
		let daysUntil = Math.ceil(difference / (1000 * 3600 * 24));
		return daysUntil;
	}
</script>

<main>
	<!-- Wedding leaf vector created by BiZkettE1 -->
	<h1>Barrett & Sydni</h1>
	<p> AUGUST 12, 2023 · GRANVILLE, OH</p>
	<p>Only {daysUntil} days to go!</p>

	<div class="images">
		<div class="frame circle-frame" style="
		background-image: url('images/circle.png');
		background-repeat: no-repeat;
		background-size: 640px;  position:absolute;">
			
		</div>

		<div class="circle" style="
		background-image: url('images/selfie.jpg');
		background-repeat: no-repeat;
		background-size: 640px;
		background-size: cover;
		border-radius: 50%; position:absolute;">

		</div>
	</div>

	<br />

	<div class="images">
		<div class="frame rectangle-frame" style="
		background-image: url('images/rectangle.png');
		background-repeat: no-repeat;
		background-size: 640px;  position:absolute;">
			
		</div>

		<div class="rectangle" style="
		background-image: url('images/selfie.jpg');
		background-repeat: no-repeat;
		background-size: 640px;
		background-size: cover;
		position:absolute;">

		</div>
	</div>

</main>

<style>

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background-color: var(--light);
		font-family: 'Kaisei Decol', serif;
		align-items: center;
		display: flex;
		flex-direction: column;
	}

	/* ------ */
	/* Colors */
	/* ------ */

	.bg-primary{
		background-color: var(--light);
	}

	.text-primary{
		color: var(--dark);
	}

	.images { 
		width: 640px;
		height: 1000px;
	}

	.circle {
		width: 316px;
		height: 316px;
		margin-left: 172px;
		margin-top: 230px;
	}

	.rectangle {
		width: 310px;
		height: 464px;
		margin-left: 163px;
		margin-top: 190px;
	}

	.circle-frame {
		width: 640px;
		height: 1000px;
	}

	.rectangle-frame {
		width: 640px;
		height: 1000px;
	}

	/* ------ */
	/* Breakpoints */
	/* ------ */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>