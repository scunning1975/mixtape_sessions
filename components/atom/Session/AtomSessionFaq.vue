<template>
	<atom-section-wide>
		<div
			class="max-w-4xl mx-auto mt-12 py-4 px-8 lg:px-0 border-t-2 border-gray-100"
		>
			<h1
				class="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-electric-violet-700 to-electric-violet-500 mb-4"
			>
				<span class="italic">Frequently Asked Questions</span>
			</h1>
		</div>

		<div class="px-4 xl:px-0 text-sm text-sm gap-4 md:columns-2 lg:columns-3">
			<!-- Question -->
			<div
				class="rounded-md mt-4 target:ring-2 hover:ring-2 ring-electric-violet-500"
				v-for="faq in faqsRef"
        :key = "faq.q"
			>
				<div
					class="bg-gray-100 p-6 rounded-md break-inside-avoid-column"
				>
					<h3 class="font-semibold text-gray-900 mb-2">
						{{ faq.q }}
					</h3>
					<div class="prose prose-sm leading-5" v-html="faq.a"></div>
				</div>
			</div>
		</div>
	</atom-section-wide>
</template>

<script setup>
import { ref, toRefs } from "vue"
const props = defineProps({
	instructor: Array,
})
const isScott = props.instructor.filter(i => i.name === 'Prof. Scott Cunningham').length > 0

let faqs = [
	{
		q: "Are discounts available?",
		a: "<p>Yes! To receive promo codes, email us at <a href='mailto:causalinf@mixtape.consulting' class='text-violet-600 hover:text-violet-700'>causalinf@mixtape.consulting</a>.</p><p>Students can attend for $50 plus a few dollars in fees. To receive your promo code, please include a photo of your student ID.</p><p>If you are attending multiple sessions, email us and you will recive $190 off your second session (2 for $995).</p><p> International folks from developing countries will also receive discounts. Email us!</p>",
		scottOnly: false,
	},
	{
		q: "How do I access the material I need for the course?",
		a: "<p>I will distribute to you a private github repo once you sign up and pay for the class.</p>",
		scottOnly: false,
	},
	{
		q: "How long will it take me to master this?",
		a: "<p>That’s a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.</p>",
		scottOnly: false,
	},
	{
		q: "Will there be breaks?",
		a: "<p>Yes, we will have 15 min breaks on the hour, plus a one hour break mid-day for lunch.</p>",
		scottOnly: false,
	},
	{
		q: "Will we practice programming?",
		a: "<p>Yes, I will distribute assignments with readings with directions the night before. We will then do these together in a coding lab that lasts approximately 75 minutes. I will do the assignments too in real time coding so that you can see how I approach these things. We will help each other in Discord, asking questions, pointing out mistakes I’m making, and helping one another problem solve. I will usually assign more than we can do that faster workers always have something to work on. And in the end, I will distribute the solutions. It’ll be fun I promise!</p>",
		scottOnly: false,
	},
	{
		q: "Will there be recordings?",
		a: "<p>There will be no recordings on my end</p>",
		scottOnly: false,
	},
	{
		q: "How will I communicate to you during the workshop?",
		a: "<p>We will use Discord to communicate with one another. I will have a second monitor open so that I can see what you say. My experience has been positive with this kind of setup. Many people seem willing to talk by chat in ways they wouldn’t verbally. Also participants tend to not think they are interrupting the speaker when they ask questions.</p>",
		scottOnly: true,
	},
	{
		q: "I don’t have enough money. Are there discounts?",
		a: "<p>Yes there are! I am using a price discrimination model and quantity discounts to try and keep costs down for those whose ability to pay is lower.</p>",
		scottOnly: false,
	},
	{
		q: "I’m nervous that I can’t handle the difficulty of the class.",
		a: "<p>Don’t be. I’m a good teacher. If I can learn this, so can you.</p>",
		scottOnly: false,
	},
    {
        q: "How should I prepare?",
        a: "<p>I encourage you to read my book, Causal Inference: The Mixtape which is available online for free <a href='https://mixtape.scunning.com' class='text-violet-600 hover:text-violet-700'>here</a>.</p><p>Whenever possible, then read the underlying articles that interest you to go deeper.</p>",
        scottOnly: true,
    },
        {
        q: "How should I prepare?",
        a: "<p>I encourage you to read my book, Causal Inference: The Mixtape which is available online for free <a href='https://mixtape.scunning.com' class='text-violet-600 hover:text-violet-700'>here</a>.</p><p>Whenever possible, then read the underlying articles that interest you to go deeper.</p>",
        scottOnly: true,
    },
    {
        q: "I don’t have a Stata license. It’s too expensive. What do I do?",
        a: "<p>No worries! Stata has graciously provided a temporary license for all participants. Before the workshop starts, I will distribute to all of you your license so that you can have it.</p>",
        scottOnly: true,
    },
    {
        q: "Are there office hours?",
        a: "<p>If you are paying the full price, you get 30 minutes of office hours per workshop. So if someone paid for the bundled workshops, you would get 1 hour. I will be creating a calendy app with times so that you can sign up for office hours over the semester. We can talk about whatever you want.</p>",
        scottOnly: true,
    },
    
]

if(!isScott) {
    faqs = faqs.filter(faq => !faq.scottOnly)
}
const faqsRef = ref(faqs)

</script>
