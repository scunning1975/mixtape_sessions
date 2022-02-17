<template>
	<section class="max-w-4xl md:py-8 mx-auto relative">
		<template v-for="(card, index) in cards" :key="card">
			<div
				class="w-full md:w-[90%] mx-auto lg:ml-auto lg:mr-0 md:my-8 lg:max-w-3xl px-2 md:px-8 md:rounded-xl md:shadow-xl bg-gradient-to-b  py-8 transition duration-200 ease-in-out"
                :class="[card.bgColor, index % 2 === 0 ? 'lg:ml-0 lg:mr-auto sm:-rotate-1 hover:rotate-0': 'lg:ml-auto lg:mr-0 sm:rotate-1 hover:rotate-0']"
			>
				<h1
					:class="card.textColor"
					class="font-bold text-md font-marker"
				>
					{{ card.title }}
				</h1>
				<h2 class="text-2xl font-normal tracking-tight py-2">
					{{ card.subtitle }}
				</h2>
                <template v-for="p in card.body" :key="p">
                    <p class="text-gray-600 pt-4" v-html="p" />
                </template>
				
			</div>
		</template>
	</section>
</template>

<script setup>
import { ref } from "vue"
const cards = ref([
	{
		title: "Teaching Philosophy",
		subtitle: "How our teaching empowers your success",
		body: [`Many people are looking for an on-ramp into the world of causal inference methodologies and need a clear sense of direction, as well as an opportunity to get on board at their own pace. <span class="font-semibold">My style of teaching uses clear exposition, examples of studies, and metaphors and stories that can elucidate more abstract ideas</span>. I draw on pop culture, studies in health as well as economics, discussions of weird natural experiments creating surprising opportunities to answer elusive questions, and as I said, programming exercises. My classes are paced deliberately slower because I want students to gain depth and not merely topical knowledge. And so in addition to me talking, I use <span class="font-semibold">coding labs with some assignments and dive into the programming “in front of them”</span> and with them to show how I think, the kinds of questions I have, and the decisions I make when writing code. And this has been a considerable success for many people as testimonies show.`],
        bgColor: "from-violet-red-200 to-violet-red-300",
        textColor: "text-violet-red-700"
	},
	{
		title: "Coding Exercises",
		subtitle: "Why we focus on coding in our sessions",
		body: [`It is my opinion that many people today learn causal inference, not simply through the calculus and exposition of the logic of the statistical modeling, but also through step by step walk through <span class="font-semibold">exercises using code</span>. Code. Code has become for many of us the lingua franca of statistics and research, moreso than the heady equations of the underlying models themselves. To learn either but not the other is to often be substantially handicapped in one\'s own work. <span class="font-semibold">One must know what something does, why it does, but also, how to do it</span>. And so my workshops are not merely lessons in statistics. They are also opportunities to code together in labs.`, `We will learn to <span class="font-semibold">code via implementation</span> of methods, e.g. regression discontinuity, instrumental variables and difference-in-differences, using R, Stata and python. But, in the process of learning these designs well in these languages, the accidental byproduct will be a greater depth of understanding of the languages themselves too. Just like you often cannot see a star in sky when you stare at it directly, but can when you look just to the left or the right, so is for many of us the way in which we learn new programming languages.`],
		bgColor: "from-sun-200 to-sun-300",
        textColor: "text-sun-700"
	},
	{
		title: "Mixtape Sessions",
		subtitle: "The value in attending our workshops",
		body: [`Mastering some field, like causal inference, with its tedious details and subtleties, not to mention the coding that goes with it, is for many of us simply <span class="font-semibold">too time consuming</span>. In other words, it isn\'t that we couldn\'t, if we had an infinite amount of time, master these subjects. It is that we don\'t have an infinite amount of time. The value of these workshops is having <span class="font-semibold">an explainer</span>. I use a variety of rhetoric and pedagogies to do this. Sometimes, I take us through the algebra of some estimator because I know until you see it with your own eyes you simply will not believe it. And other times, I belabor a point using metaphors, stories and pictures. There is a role for all these things in explanations. And I grab hold of anything and everything that I believe can help you have <span class="font-semibold">epiphanies, breakthroughs and most of all success</span> in how you define it.`],
        bgColor: "from-picton-blue-200 to-picton-blue-300",
        textColor: "text-picton-blue-700"   
	},
])
</script>
