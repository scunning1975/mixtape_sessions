<template>
	<div class="min-h-screen w-[1080px] mx-auto bg-white flex flex-col items-center pt-48 gap-y-12">
		<div class="w-72 flex flex-col gap-y-2">

			<div class="flex gap-x-2">
				<button
					class="w-full flex justify-center bg-white rounded-lg shadow-md cursor-pointer focus:outline-none border-sun-400 border-2 sm:text-sm py-2 px-2 group hover:bg-sun-100"
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
			class="flex flex-col items-center justify-center"
      :style="{
        width: `${format.width}px`,
        height: `${format.height}px`
      }"      
			id="graphic"
		>
      <SvgLogo svgClass="w-[400px] h-[400px]" />
		</div>
	</div>
</template>


<script setup>
import { DownloadIcon } from "@heroicons/vue/solid"
import * as htmlToImage from 'html-to-image';

const format = {width: "500", height: "500"}

const downloadImage = () => {
  const graphic = document.getElementById('graphic');

  htmlToImage
		.toPng(graphic, {
			width: `${format.width}`,
			height: `${format.height}`,
		})
		.then(function (dataUrl) {
			var link = document.createElement("a")
			link.download = 'logo.png'
			link.href = dataUrl
			link.click()
		})
}
</script>
