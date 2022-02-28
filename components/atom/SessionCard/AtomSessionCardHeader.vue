<template>
	<div class="grid grid-cols-1 px-8">
		<!-- Header -->
		<div class="col-span-1 xl:px-0 pt-4 md:pt-8 xl:pt-8">
			<div class="text-left">
				<h1
					class="tracking-tight font-extrabold text-gray-900 text-4xl sm:text-6xl"
				>
					<span class="text-gray-900 sm:text-gradient" :class="gradientClass">{{
						title
					}}</span>
				</h1>
				<h3 class="mt-2 text-3xl text-gray-600 font-marker">{{type}}</h3>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	gradientClass: String,
	title: String,
  type: String,
})
</script>
