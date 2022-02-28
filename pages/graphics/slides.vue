<template>
	<div class="min-h-screen w-[1080px] mx-auto bg-white flex flex-col items-center pt-48 gap-y-12">
		<div class="w-72 flex flex-col gap-y-2">
			<!-- Session Selector -->
			<Listbox v-model="selectedSession">
				<div class="relative mt-1">
					<ListboxButton
						class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none border-sun-400 border-2 sm:text-sm font-medium"
					>
						<span class="block truncate">{{ selectedSession.title }}</span>
						<span
							class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
						>
							<SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
						</span>
					</ListboxButton>

					<transition
						leave-active-class="transition duration-100 ease-in"
						leave-from-class="opacity-100"
						leave-to-class="opacity-0"
					>
						<ListboxOptions
							class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 border-2 border-sun-400 focus:outline-none sm:text-sm z-40"
						>
							<ListboxOption
								v-slot="{ active, selected }"
								v-for="session in sessions"
								:key="session.title"
								:value="session"
								@click="updateSubtitle(session.type)"
								as="template"
							>
								<li
									:class="[
										active ? 'text-sun-900 bg-sun-100' : 'text-gray-900',
										'cursor-default select-none relative py-2 pl-10 pr-4',
									]"
								>
									<span
										:class="[
											selected ? 'font-medium' : 'font-normal',
											'block truncate',
										]"
										>{{ session.title }}</span
									>
									<span
										v-if="selected"
										class="absolute inset-y-0 left-0 flex items-center pl-3 text-sun-600"
									>
										<CheckIcon class="w-5 h-5" aria-hidden="true" />
									</span>
								</li>
							</ListboxOption>
						</ListboxOptions>
					</transition>
				</div>
			</Listbox>

			<!-- Custom Subtitle -->
			<div class="flex gap-x-2">
				<input
					class="grow bg-white rounded-lg shadow-md cursor-default focus:outline-none border-sun-400 border-2 sm:text-sm py-2 pl-3 pr-10 font-medium  font-marker"
					v-model="subtitle"
				/>
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

			<!-- Output Size -->
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
		</div>

		<!-- Image -->
		<div
			class="bg-gray-50 flex flex-col items-left justify-center"
			:style="{
				width: format.width,
				height: format.height,
			}"
			id="graphic"
		>
			<div class="pb-12">
				<div class="text-center">
					<h1 class="tracking-tight font-extrabold text-gray-900 text-6xl">
						<span :class="`text-gradient ${selectedSession.buttonGradient}`">
							{{ selectedSession.title }}
						</span>
					</h1>
					<h3 class="mt-2 text-3xl text-gray-600 font-marker">
						{{ subtitle }}
					</h3>
				</div>
			</div>

			<div class="mx-auto w-48 border-t-2"></div>

			<div class="pt-12 flex flex-col space-y-2">
				<div class="flex flex-row w-full justify-center space-x-2">
					<SvgMixtapeSessions className="h-36" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue"
import {
	Listbox,
	ListboxOptions,
	ListboxOption,
	ListboxButton,
	RadioGroup,
	RadioGroupLabel,
	RadioGroupOption,
} from "@headlessui/vue"
import { CheckIcon, SelectorIcon, DownloadIcon } from "@heroicons/vue/solid"
import * as htmlToImage from 'html-to-image';

import sessions from "@/assets/data/sessions.js"

// ---- Subtitle is editable ----
const subtitle = ref(sessions.value[0].type)
const selectedSession = ref(sessions.value[0])

const updateSubtitle = (value) => {
	subtitle.value = value || "Mixtape Sessions"
	console.log(selectedSession)
}

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

const format = ref(formats[0])

const downloadImage = () => {
  const graphic = document.getElementById('graphic');
  htmlToImage
		.toPng(graphic, {
			width: format.width,
			height: format.height,
		})
		.then(function (dataUrl) {
			var link = document.createElement("a")
			link.download = `${selectedSession.value.id}.png`
			link.href = dataUrl
			link.click()
		})
}
</script>
