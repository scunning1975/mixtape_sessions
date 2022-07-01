<template>
	<div
		class="min-h-screen w-[1080px] mx-auto bg-white flex flex-col items-center pt-48 gap-y-12"
	>
		<div class="w-72 flex flex-col gap-y-2">
			<!-- Custom Subtitle -->
			<div class="flex gap-x-2">
				<!-- Output Size and Download -->
				<RadioGroup v-model="format" class="flex flex-row gap-x-2">
					<RadioGroupOption
						as="template"
						v-for="format in formats"
						:key="format.name"
						:value="format"
						v-slot="{ active, checked }"
					>
						<div
							:class="[active | checked ? 'bg-sun-100 text-sun-900' : '']"
							class="bg-white relative flex px-3 py-2 rounded-lg border-sun-400 border-2 shadow-md cursor-pointer focus:outline-none"
						>
							<div
								class="flex items-center justify-between w-full text-sm font-medium"
							>
								<CheckIcon
									v-if="checked"
									class="w-4 h-4 text-sun-500 mr-1"
									aria-hidden="true"
								/>

								<RadioGroupLabel as="p" class="">
									{{ format.name }}
								</RadioGroupLabel>
							</div>
						</div>
					</RadioGroupOption>
				</RadioGroup>
				<button
					class="grow-0 bg-white rounded-lg shadow-md cursor-pointer focus:outline-none border-sun-400 border-2 sm:text-sm py-2 px-2 group hover:bg-sun-100"
					@click="downloadImage"
				>
					<DownloadIcon
						class="w-5 h-5 text-gray-400 group-hover:text-sun-900"
						aria-hidden="true"
					/>
				</button>
			</div>
		</div>

		<!-- Image -->
		<div
			class="bg-gray-50 flex flex-col items-center justify-center"
			:style="{
				width: format.width,
				height: format.height,
			}"
			id="graphic"
		>
			<div class="flex flex-row">
				<!-- Title -->
				<div class="flex flex-col space-y-2 pr-32">
					<SvgMixtapeSessions className="h-36" :style="{ marginRight: 0 }" />
					<h1
						class="pt-2 font-marker tracking-tight font-extrabold text-gray-900 text-4xl"
					>
						Fall Schedule
					</h1>
				</div>

				<!-- Fall Schedule -->
				<div class="flex flex-col gap-y-16 pr-6">
					<div class="col-span-2 flex flex-col jusitfy-center">
						<h2
							class="text-gradient applied-gradient tracking-tight font-extrabold text-gray-900 text-4xl"
						>
							Doing Applied Work
						</h2>
						<p class="mt-2 italic text-xl font-marker">Starting August 12th</p>
					</div>
					<div class="flex flex-col jusitfy-center">
						<h2
							class="text-gradient ci-gradient tracking-tight font-extrabold text-gray-900 text-4xl"
						>
							Causal Inference 1
						</h2>
						<p class="mt-2 italic text-xl font-marker">
							Starting September 3rd
						</p>
					</div>
					<div class="flex flex-col jusitfy-center">
						<h2
							class="text-gradient iv-gradient tracking-tight font-extrabold text-gray-900 text-4xl"
						>
							Instrumental Variables
						</h2>
						<p class="mt-2 italic text-xl font-marker">
							Starting September 27th
						</p>
					</div>
					<div class="flex flex-col jusitfy-center">
						<h2
							class="text-gradient did-gradient tracking-tight font-extrabold text-gray-900 text-4xl"
						>
							Causal Inference 2
						</h2>
						<p class="mt-2 italic text-xl font-marker">Starting October 8th</p>
					</div>
					<div class="flex flex-col jusitfy-center">
						<h2
							class="text-gradient shift-share-gradient tracking-tight font-extrabold text-gray-900 text-4xl"
						>
							Shift-Share IV
						</h2>
						<p class="mt-2 italic text-xl font-marker">Starting November 2nd</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue"
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue"
import { CheckIcon, DownloadIcon } from "@heroicons/vue/solid"
import * as htmlToImage from "html-to-image"

import sessions from "@/assets/data/sessions.js"

// ---- Resize image ----
const formats = [
	{
		name: "16/9",
		width: "1080px",
		height: "607.5px",
	},
	{
		name: "4/3",
		width: "1080px",
		height: "810px",
	},
	{
		name: "2/1",
		width: "1080px",
		height: "540px",
	},
]
const format = ref(formats[1])

const downloadImage = () => {
	const graphic = document.getElementById("graphic")
	htmlToImage
		.toPng(graphic, {
			width: format.width,
			height: format.height,
		})
		.then(function (dataUrl) {
			var link = document.createElement("a")
			link.download = `schedule.png`
			link.href = dataUrl
			link.click()
		})
}
</script>
