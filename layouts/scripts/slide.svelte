<script>	
	export let slideNo;
	export let totalSlides;
	export let image;
	export let altTag;
	export let attr;
    export let imageShowing;
</script>

<style>	
/* Hide the images by default */
.mySlides {
    display: none;
}
/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: .9rem;
  padding: 8px 12px;
  text-shadow: 1px 1px black;
  position: absolute;
  top: 0;
}
	
img {
	width: 100%
}
.show {
    display: block;
}
</style>


<!-- Full-width images with number text -->
<div class="mySlides" class:show={imageShowing}>
	<div class="numbertext">{slideNo} / {totalSlides}</div>
	<img src={image} alt={altTag} title={attr}>
</div>