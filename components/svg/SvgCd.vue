<template>
	<svg
		:class="svgClass"
		viewBox="0 0 65 64"
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
		<g transform="translate(.186)">
			<path style="fill: none" d="M0 0h64v64H0z" />
			<clipPath id="a">
				<path d="M0 0h64v64H0z" />
			</clipPath>
			<g clip-path="url(#a)">
				<circle
					cx="1972.15"
					cy="2904.63"
					r="349.084"
					style="fill: #ffaf18"
					transform="translate(-136.998 -216.442) scale(.08478)"
				/>
				<path
					d="m-3745.95 3703.22 99.53 310.73-290.95-158.69s73.78-128.88 191.42-152.04Z"
					style="fill: #fff"
					transform="matrix(.08996 0 0 .08996 361.424 -328.755)"
				/>
				<path
					d="m-3745.95 3703.22 99.53 310.73-290.95-158.69s73.78-128.88 191.42-152.04Z"
					style="fill: #fff"
					transform="matrix(-.08996 0 0 -.08996 -294.618 393.41)"
				/>
				<circle
					cx="-3632.45"
					cy="4045.24"
					r="59.186"
					style="fill: #fff; stroke: #000; stroke-width: 20.12px"
					transform="matrix(.08996 0 0 .08996 360.168 -331.57)"
				/>
				<circle
					cx="1972.15"
					cy="2904.63"
					r="349.084"
					style="fill: none; stroke: #fff; stroke-width: 36.74px"
					transform="matrix(.08299 0 0 .08299 -129.632 -208.091)"
				/>
				<circle
					cx="1972.15"
					cy="2904.63"
					r="349.084"
					style="fill: none; stroke: #000; stroke-width: 21.58px"
					transform="translate(-133.8 -213.932) scale(.08478)"
				/>
			</g>
		</g>
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
