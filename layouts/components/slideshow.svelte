<script>
	// import { images } from '../scripts/imageData.js';
	import Slide from '../scripts/slide.svelte';
	/* import Thumbnail from './Thumbnail.svelte';
	import Caption from './Caption.svelte'; */
    export let images = [];
	
	/* IMAGE TO SHOW */
	let imageShowingIndex = 0;
	$: console.log(imageShowingIndex);
	// $: image = images[imageShowingIndex];
	
	const nextSlide = () => {
		if (imageShowingIndex === images.length-1) {
			imageShowingIndex = 0;
		} else {
			imageShowingIndex += 1;
		}
	}
	
	const prevSlide = () => {
		if (imageShowingIndex === 0) {
			imageShowingIndex = images.length-1;
		} else {
			imageShowingIndex -= 1;
		}
	}
	
	// const goToSlide = (number) => imageShowingIndex = number;
</script>


<style>
/* 	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap'); */
	
/* * {
  box-sizing: border-box;
	font-family: 'Josefin Sans', sans-serif;
} */
	

main {
	width: 70vw;
	display: flex;
	flex-direction: column;
	margin: 10% auto;
	background-color: #222;
	box-shadow: 0 0 10px black;
}	
	
/* Position the image container (needed to position the left and right arrows) */
.container {
  position: relative;
}
/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* .thumbnails-row {
	width: 100%;
	display: flex;
	align-self: flex-end;
}	 */
</style>


<main>
	<!-- image gallery -->
	<div class="container">
        {#each images  as {id, name, imgurl, attribution}}
		  <Slide image={imgurl} 
				 altTag={name} 
				 attr={attribution} 
				 slideNo={id+1} 
				 totalSlides={images.length}
				 imageShowing={id === imageShowingIndex}/>
        {/each}
	</div>


  <!-- Next and previous buttons -->
  <a href="#arrowL" class="prev" on:click={prevSlide}>&#10094;</a>
  <a href="#arrowR" class="next" on:click={nextSlide}>&#10095;</a>

	<!-- Image text -->
<!-- 	<Caption caption={images[imageShowingIndex].name}
					 on:prevClick={prevSlide}
					 on:nextClick={nextSlide}/> -->

	<!-- Thumbnail images -->
<!-- 	<div class="thumbnails-row">
			{#each images as {id, imgurl, name, attribution}}
				<Thumbnail thumbImg={imgurl} 
									 altTag={name} 
									 titleLink={attribution}
									 {id} 
									 selected={imageShowingIndex === id}
									 on:click={() => goToSlide(id)} />
			{/each}
	</div> -->
</main>

