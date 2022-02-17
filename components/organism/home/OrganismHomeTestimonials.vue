<template>
	<!-- Testimonials -->
	<div class="bg-gray-100 w-full relative">
		<div class="w-full py-8">
			<h1
				class="text-center text-2xl lg:text-4xl font-marker text-gray-400 tracking-widest capitalize"
			>
				WHAT PAST ATTENDEES HAVE HAD TO SAY
			</h1>
		</div>
		<div
			class="w-full pt-4 pb-8 mx-auto flex overflow-x-scroll flex-nowrap space-x-2 md:space-x-8 hide-scroll-bar hover:visible-scroll-bar transition duration-300 ease-in-out"
		>
			<div class="hidden lg:inline-block w-[5%] h-96 flex-none">&nbsp;</div>
            <template v-for="card in cards" :key="card">
                <div
				    class="w-4/5 lg:w-2/5 h-96 border-2 inline-block px-2 sm:px-8 py-4 sm:py-8 lg:py-12 bg-white shadow-md rounded-md flex-none flex flex-col justify-between items-center"
			    >
				<div>
					<div class="text-center text-6xl font-marker" :class="[card.textColor]">“</div>
					<p
						class="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed text-center relative my-0"
					>
						{{card.testimonial}}
					</p>
				</div>
			</div>
            </template>
			
			<div class="w-[5%] h-96 inline-block flex-none">&nbsp;</div>
		</div>
	</div>
</template>


<script setup>
import { ref } from "vue"
const cards = ref([
    {
        testimonial: `I feel like I have a better grasp on what the cutting edge and trends are in the field. The replications of studies were super insightful and the quantity of amazing resources provided was really generous and genuinely useful.`,
        textColor: 'text-sun-500'
    },
    {
        testimonial: `Dr. Cunningham made the process of learning, failing, and trying seem normal, and okay. His presentation is brilliant and can reach every single student in the class.`,
        textColor: 'text-picton-blue-500'
    },
    {
        testimonial: `Scott is an amazing teacher! What I valued most was the explantion of the intuition behind the concepts (I am a Phd student and I have been studying economics for a while now, and I was able to understand things in ways I never did before).`,
        textColor: 'text-electric-violet-500'
    },
    {
        testimonial: `I personally feel like I went from not knowing much about this method/design to feeling like I could attempt a study like this using some advanced techniques.`,
        textColor: 'text-violet-red-500'
    },
    {
		testimonial: `Programming example was something special. Our teacher never taught how to implement econometric method in real world research. And this is what I have learnt from Prof. Cunningham class.`,
        textColor: 'text-sun-500'
	},
])
</script>
