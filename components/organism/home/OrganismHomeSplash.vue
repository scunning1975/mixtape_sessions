<template>
	<div class="pb-12 lg:pb-0 lg:pt-24 bg-white mx-auto w-full">
		<div
			class="w-full h-full lg:px-8 flex justify-center content-center flex-col text-center overflow-x-clip"
		>
            <!-- Splash -->
			<div
				class="py-32 lg:py-24 xl:py-16 pb-12 lg:pb-48 relative sm:mx-auto overflow-y-visible"
			>
                <template
                    v-for="(blob) in blobs"
                    :key="blob"
                >
                    <div
                        class="absolute rounded-full mix-blend-multiply blur-2xl filter opacity-50 animate-blob delay-[2000ms]"
                        :class="blob.class"
                    />
                </template>
				
				<h1 class="text-4xl md:text-6xl font-bold text-gray-700">
					Causal Inference Workshops
				</h1>

				<p class="font-bold my-8 text-gray-500 text-xl">
					Finding the effects of just about anything...
				</p>
			</div>

			<!-- Call to Action -->
			<div class="mx-auto relative group">
				<div
					class="absolute -inset-1 bg-gradient-to-br from-sun-600 to-violet-red-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse animation-delay-2000"
				></div>
				<NuxtLink
					to="/sessions"
					class="relative px-7 py-4 bg-white rounded-lg leading-none flex items-center md:divide-x divide-gray-600"
				>
					<span class="hidden md:block flex items-center space-x-5">
						<span class="pr-6 text-gray-700">
							High-quality workshops year round
						</span>
					</span>
					<span
						class="hidden md:block pl-6 text-violet-red-600 group-hover:text-violet-red-700 transition duration-200 font-marker"
					>
						See what's coming up &rarr;
					</span>
					<span
						class="md:hidden text-violet-red-600 group-hover:text-gray-600 transition duration-200 font-marker"
					>
						View Upcoming Workshops &rarr;
					</span>
				</NuxtLink>
			</div>

			<!-- Features -->
			<div class="max-w-6xl px-4 sm:px-16 lg:w-full mx-auto py-32 mt-8">
				<div
					class="md:px-12 grid grid-cols-1 lg:grid-cols-3 lg:space-x-4 space-y-4 lg:space-y-0 relative"
				>
					<div class="py-4 flex flex-col">
						<SvgMic svgClass="h-16 w-16 mb-4" />

						<h2 class="text-left text-2xl font-bold font-marker">
							Expert Hosts
						</h2>
						<p class="text-left font-light text-lg py-2">
							The sessions will be led by researchers at the
							<span class="italic font-normal">frontier</span> of
							causal-inference methods.
						</p>
					</div>
					<div class="py-4 flex flex-col">
						<SvgKeyboard svgClass="h-16 w-16 mb-4" />

						<h2 class="text-left text-2xl font-bold font-marker">
							Hands-on Approach
						</h2>
						<p class="text-left font-light text-lg py-2">
							Our workshops feature exercises to teach
							<span class="italic font-normal">practical</span>
							skills that are ready to generate value for your research or
							company.
						</p>
					</div>
					<div class="py-4 flex flex-col">
						<SvgCoin svgClass="h-16 w-16 mb-4" />
						<h2 class="text-left text-2xl font-bold font-marker">Affordable</h2>
						<p class="text-left font-light text-lg py-2">
							Attending our workshop won't
							<span class="italic font-normal">break the bank</span>. We even
							offer student pricing!
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const blobs = ref([ 
    {
        class: "top-16 xl:top-8 -left-36 w-[18rem] h-[18rem] lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] bg-gradient-to-br from-sun-200 to-violet-red-200"
    },
    {
        class: "top-4 xl:-top-8 left-5 w-[18rem] h-[18rem] lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] bg bg-gradient-to-tr from-electric-violet-200 to-electric-violet-200" 
    }, 
    {
        class: "top-8 xl:top-0 left-64 w-[18rem] h-[18rem] lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] bg-sun-300"
    },
    {
        class: "top-4 xl:top-4 left-96 w-[18rem] h-[18rem] lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] bg-gradient-to-br from-violet-red-200 to-violet-red-300"
    },
    {
        class: "top-12 xl:top-4 -right-36 w-[18rem] h-[18rem] lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] bg-sun-300"
    }
])
</script>
