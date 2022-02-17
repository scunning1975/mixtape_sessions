<template>
	<div class="w-80 md:w-96 px-8 mt-8 mb-16">
		<div class="mr-auto relative group">
			<div
				class="absolute -inset-1 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse animation-delay-2000"
                :class="[buttonGradient]"
			></div>
			<NuxtLink
				:to="to"
				class="relative px-4 py-4 bg-white rounded-lg leading-none flex items-center justify-center"
			>
				<span class="text-gray-700"> Learn more about the course </span>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
defineProps({
	to: {
		default: "#",
		type: String,
	},
    buttonGradient: {
        default: "",
        type: String,
    },
})
</script>

<style lang="scss" scoped></style>
