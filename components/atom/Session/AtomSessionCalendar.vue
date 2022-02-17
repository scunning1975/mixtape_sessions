<template>
	<atom-section-wide>
		<!-- Title -->
		<div
			class="max-w-4xl mx-auto mt-12 py-4 px-8 lg:px-0 border-t-2 border-gray-100"
		>
			<h1
				class="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-picton-blue-700 to-picton-blue-500 mb-4"
			>
				Our workshop will bring you to the
				<span class="italic">cutting edge</span>
			</h1>
		</div>

		<!-- Days -->
		<div
			class="max-w-4xl mx-auto px-8 lg:px-0 grid grid-cols-1 md:grid-cols-4 gap-x-8"
            v-for="(day, index) in date.calendar"
            :key="index"
		>
			<div class="col-span-1 mb-6">
				<h3 class="text-md text-gray-400 pt-1">Day {{index+1}}</h3>
				<p class="text-2xl text-picton-blue-800 font-medium">{{day.date}}</p>
				<p class="mt-1 text-gray-600">{{day.time}}</p>
			</div>
			<div class="pl-2 lg:pl-0 md:py-8 col-span-1 md:col-span-3">
				<ol>
					<li class="flex mb-4" v-for="(topic, index) in day.topics" :key="index">
						<svg-cd svgClass="h-6 w-6 mr-2 text-gray-400 flex-shrink-0" />
						{{topic}}
					</li>
				</ol>
			</div>
		</div>
	</atom-section-wide>
</template>

<script setup>
defineProps({
	date: Object,
})
</script>
