<template>
	<div class="grid grid-cols-1 px-8">
		<!-- About -->
		<div class="col-span-1 xl:px-0 py-2 md:py-4 xl:py-0">
			<div
				class="mt-8 xl:mt-8 text-gray-600 md:mt-5 text-lg md:text-xl max-w-prose"
			>
				<p v-html="about">

				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({    
  about: String,
})
</script>

