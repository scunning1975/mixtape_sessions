<template>
    <div class="max-w-6xl mx-auto py-12 px-2 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <div class="rounded-lg shadow-lg border-2 border-gray-500 w-full grid grid-cols-1 lg:grid-cols-5">
      <!-- What's included -->
      <div class="px-4 pt-6 pb-2 col-span-1 lg:col-span-3">
        <h2 class="text-3xl font-bold tracking-wide  font-marker">Register Today</h2>

        <p class="py-3 text-gray-500">
          Sign-up today to ensure access to this workshop.
        </p>

        <div class="mt-8 flex flex-row items-center space-x-2">
          <h2 class="flex-shrink-0 text-violet-red-500 capitalize text-sm tracking-widest">WHAT'S INCLUDED</h2>
          <div class="flex-stretch w-full border-gray-300 border-t-2"></div>
        </div>

        <div class="mt-4">
          <ul>
            <li class="flex mb-4">
                <svg-mixtape svgClass="h-12 w-12 mr-4 text-gray-400 flex-shrink-0"/>
              Attendance to the workshop with {{instructor.name}}.
            </li>
            <li class="flex mb-4" v-if="instructor.name === 'Prof. Scott Cunningham'">
                <svg-mic svgClass="h-12 w-12 mr-4 text-gray-400 flex-shrink-0"/>
                30-minute office hours with your Instructor.
            </li>
            <li class="flex mb-4">
              <svg-pdf svgClass="h-12 w-12 mr-4 text-gray-400 flex-shrink-0"/>
              PDF versions of lecture slides for later reference.
            </li>
            <li class="flex mb-4">
              <svg-keyboard svgClass="h-12 w-12 mr-4 text-gray-400 flex-shrink-0"/>
              Complete set of example code to implement the methods discussed.
            </li>
          </ul>
        </div>
      </div>

      <!-- Pricing -->
      <div class="col-span-1 py-8 lg:py-0 lg:col-span-2 bg-gray-100 rounded-b-lg lg:rounded-b-none lg:rounded-r-lg flex flex-col justify-center items-center">
        <div class="text-center">
          <span class="text-3xl font-semibold">$595</span>
          <span class="text-xl font-light text-gray-500"> USD + Fees</span>
        </div>

        <div class="text-gray-600 text-center text-sm underline w-4/5 mx-auto py-2">
          <a href="#discounts">Discounts for Students, Multiple Workshops, and International Attendees</a>
        </div>

        <!-- Register Button -->
        <div class="w-72 sm:w-96 px-8 mt-8 mb-8">
          <div class="mr-auto relative group">
            <div 
                class="absolute -inset-1 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse animation-delay-2000 "
                :class="buttonGradient"
            >
            </div>
            <a :href="date.eventbrite" class=" relative px-4 py-4 bg-white rounded-lg leading-none flex items-center justify-center space-x-2">
              <span class="text-gray-800">Register Today</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-800 stroke-current h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
    instructor: Object,
    date: Object,
    buttonGradient: String,
})
</script>
