<template>
	<section
		class="lg:max-w-4xl xl:max-w-6xl mx-auto relative lg:rounded-lg text-gray-300 sm:flex mt-20 overflow-hidden border-y-2 lg:border-2 border-gray-700 shadow-md py-4"
	>
		<div class="absolute lg:rounded-lg inset-0 bg-white">
			<!-- bg-gradient-to-b to-gray-800 via-gray-800 from-picton-blue-900 -->
			<div
				class="absolute top-16 xl:top-8 -right-12 w-[18rem] h-[18rem] lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] bg-gradient-to-br from-sun-200 to-violet-red-200 rounded-full mix-blend-multiply blur-2xl filter opacity-50"
			></div>
			<div
				class="absolute top-4 xl:-top-8 right-24 w-[18rem] h-[18rem] lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] bg bg-gradient-to-tr from-electric-violet-200 to-electric-violet-200 rounded-full mix-blend-multiply blur-2xl filter opacity-50"
			></div>
			<div
				class="absolute top-12 xl:top-0 left-0 w-[18rem] h-[18rem] lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] bg-sun-300 rounded-full mix-blend-multiply blur-2xl filter opacity-50 animate-blob animation-delay-1000"
			></div>
		</div>
		<div
			class="relative lg:max-w-xl sm:flex-none p-6 sm:py-10 sm:pl-8 lg:py-12 lg:pl-14 xl:pt-14 xl:pb-16"
		>
			<h2
				id="more-heading"
				class="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4"
			>
				We’ve got more coming...
			</h2>
			<p class="max-w-prose mb-8 sm:mb-10 leading-relaxed text-violet-red-800">
				Want to hear from us when we add new dates or add new workshops? Sign up
				for our newsletter and we'll email you once a quarter.
			</p>
			<form>
				<div
					class="sm:flex sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 sm:pr-6 lg:pr-0"
				>
					<div class="relative w-full sm:max-w-xs">
						<div class="relative">
							<label for="email-address" class="sr-only">Email address</label>
							<input
								id="email-address"
								type="email"
								required=""
								placeholder="Enter email address"
								class="block w-full px-4 py-3 sm:text-sm bg-gray-50 ring-2 focus:ring-violet-red-600 ring-gray-600 rounded-lg placeholder-gray-800 focus:bg-white focus:text-gray-900 focus:outline-none"
							/>
						</div>
					</div>
					<div class="mr-auto relative group lg:ml-4">
						<div
							class="absolute -inset-1 bg-gradient-to-br from-sun-600 to-violet-red-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse animation-delay-2000"
						></div>
						<a
							href="causalinf@mixtape.consulting@mixtape.consulting"
							class="relative px-4 py-3 bg-white rounded-lg leading-none flex items-center md:divide-x divide-gray-600"
						>
							<span class="text-gray-900 sm:text-sm"> Sign-up </span>
						</a>
					</div>
				</div>
			</form>
		</div>
	</section>
</template>
