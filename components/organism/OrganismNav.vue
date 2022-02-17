<template>
	<nav class="bg-white border-b-2 border-gray-100">
		<div class="max-w-6xl mx-auto py-8 px-8 sm:px-8 md:px-12 xl:px-0">
			<div class="flex flex-row justify-between">
				<!-- Mixtape Sessions -->
				<SvgMixtapeSessions />

				<!-- Primary Navbar items -->
				<div class="hidden md:flex items-center space-x-2">
					<NuxtLink
						to="/"
						class="py-4 px-2 text-xl text-gray-500 font-semibold hover:text-violet-red-600 transition duration-300 flex flex-row"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
						Home
					</NuxtLink>
					<NuxtLink
						to="/sessions"
						class="py-4 px-2 text-xl text-gray-500 font-semibold hover:text-violet-red-600 transition duration-300 flex flex-row"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						Sessions
					</NuxtLink>
					<a
						href="emailto:causalinf@mixtape.consulting"
						class="py-4 px-2 text-xl text-gray-500 font-semibold hover:text-violet-red-600 transition duration-300 flex flex-row"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						Contact Us
					</a>
				</div>

				<!-- Mobile menu button -->
				<div class="md:hidden flex space-x-7 items-center">
					<button
						class="outline-none mobile-menu-button"
						@click="showMenu = !showMenu"
					>
						<svg
							class="w-6 h-6 fill-current text-gray-500"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile Menu -->
		<Transition name="mobile">
			<div class="mobile-menu transition-all" v-show="showMenu">
				<ul class="block mt-4">
					<li class="group hover:bg-violet-red-600">
						<a
							href="index.html"
							class="block text-sm px-8 py-4 text-black hover:text-violet-red-50 font-semibold flex flex-row"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 mr-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
							Home
						</a>
					</li>
					<li class="group hover:bg-violet-red-600">
						<a
							href="sessions.html"
							class="block text-sm px-8 py-4 text-black hover:text-violet-red-50 font-semibold flex flex-row"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 mr-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							Sessions
						</a>
					</li>
					<li class="group hover:bg-violet-red-600">
						<a
							href="causalinf@mixtape.consulting@mixtape.consulting"
							class="block text-sm px-8 py-4 text-black hover:text-violet-red-50 font-semibold flex flex-row"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 mr-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		</Transition>
	</nav>
</template>

<script setup>
import { ref } from "vue"

const showMenu = ref(false)
</script>

<style scoped>
.mobile-enter-active {
	animation: slide-in 0.25s;
}
.mobile-leave-active {
	animation: slide-out 0.25s;
}

@keyframes slide-in {
	0% {
		transform: translateX(-100%);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes slide-out {
	0% {
		transform: translateX(0);
		opacity: 0;
	}
	100% {
		transform: translateX(100%);
		opacity: 1;
	}
}
</style>
