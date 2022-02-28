<template>
	<atom-section class="mb-0">
		<div class="px-4 lg:px-0 py-4 md:py-8 xl:py-8">
			<!-- Header -->
			<div class="text-left">
				<h1 class="tracking-tight font-extrabold text-gray-900 text-6xl">
					<span class="text-gray-900 sm:text-gradient" :class="gradientClass">{{
						title
					}}</span>
				</h1>
				<h3 class="mt-2 text-3xl text-gray-600 font-marker">{{type}}</h3>
			</div>

			<!-- About -->
			<div
				class="mt-8 md:mt-5 xl:mt-8 text-base text-gray-600 sm:text-lg md:text-xl max-w-prose"
			>
				<p>
					{{ about }}
				</p>
			</div>
		</div>
	</atom-section>
</template>

<script setup>
defineProps({
	title: String,
  type: String,
	gradientClass: String,
	about: String,
})
</script>
