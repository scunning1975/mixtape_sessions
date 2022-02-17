<template>
	<div
		class="grid grid-cols-1 space-y-8 md:space-y-0 md:grid-cols-3 items-stretch px-8 mt-4"
	>
		<!-- Instructor -->
		<div class="col-span-1 xl:px-0">
			<div class="mt-2 flex items-center text-gray-600">
				<svg-cap svgClass="flex-shrink-0 mr-2 h-10 w-10"> </svg-cap>

				<span class="font-semibold">Instructor</span>
			</div>

			<div class="mt-4">
				<a :href="instructor.url" class="text-violet-red-500 font-semibold">{{
					instructor.name
				}}</a>
			</div>
		</div>

		<!-- Dates -->
		<div class="col-span-1 px-0 lg:px-0">
			<div class="mt-2 flex items-center text-gray-600">
				<svg-calendar svgClass="flex-shrink-0 mr-2 h-10 w-10"> </svg-calendar>
				<span class="font-semibold">Dates</span>
			</div>

			<div class="mt-4">
				<ol class="list-inside text-gray-600 space-y-4">
					<li v-for="date in dates" :key="date.url">
						<NuxtLink class="text-violet-red-600 font-semibold" :to="'/session/' + date.url">
							Starting {{ date.date }}
						</NuxtLink>
					</li>
				</ol>
			</div>
		</div>

		<!-- Your own Workshop -->
		<div class="col-span-1 px-0 lg:px-0">
			<div class="mt-2 flex items-center text-gray-600">
				<svg-mixtape svgClass="flex-shrink-0 mr-2 h-10 w-10"> </svg-mixtape>
				<span class="font-semibold">Your Own Workshop</span>
			</div>

			<div class="mt-4">
				<p>
					<a
						href="mailto:causalinf@mixtape.consulting"
						class="text-violet-red-600 font-semibold"
						>Get in touch!</a
					>
				</p>
				<p class="pt-2 italic">
					We can host a custom workshop for your company in person!
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	instructor: Object,
    dates: Array
})
</script>
