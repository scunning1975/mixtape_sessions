<template>
	<svg
		:class="svgClass"
        viewBox="0 0 1555.671 1555.671"
		xmlns="http://www.w3.org/2000/svg"
		xml:space="preserve"
		style="
			fill-rule: evenodd;
			clip-rule: evenodd;
			stroke-linecap: round;
			stroke-linejoin: round;
			stroke-miterlimit: 1.15854;
		"
	>
		<path style="fill: none" d="M-787.041-364.195h2267.64v2267.64h-2267.64Z" />
		<circle
			cx="738.607"
			cy="334.058"
			r="329.001"
			style="fill: #ff3665; stroke-width: 0.94247"
		/>
		<circle
			cx="774.157"
			cy="361.958"
			r="329.001"
			style="fill: none; stroke: #000; stroke-width: 36.5867px"
		/>
		<path
			d="M522.654 361.96c0-103.469 62.617-192.426 151.985-231.015m54.31-16.434a252.682 252.682 0 0 1 45.21-4.057"
			style="fill: none; stroke: #000; stroke-width: 36.586px"
		/>
		<path
			d="M830.475 690.958H717.87v738.552l56.31 114.767 56.295-114.767z"
			style="fill: none; stroke: #000; stroke-width: 32.9049px"
		/>
	</svg>
</template>

<script setup>
const props = defineProps({
	svgClass: {
		default: "flex-shrink-0 mr-2 h-10 w-10",
		type: String,
	},
})
</script>
