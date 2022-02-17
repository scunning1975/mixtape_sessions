<template>
<atom-section class="md:mt-0 col-span-1 flex flex-col space-y-12 md:space-y-0 md:flex-row md:justify-around">

    <!-- Instructor -->
    <div class="flex flex-row items-end">
      <div>
        <svg-cap svgClass="flex-shrink-0 mr-2 h-12 w-12"></svg-cap>
      </div>
      <div class="">
        <h3 class="text-sm tracking-wider font-bold text-gray-400">Instructor</h3>
        <span class="mt-1 text-gray-600">
          <a :href="instructor.url" class="text-violet-red-500 font-semibold">{{instructor.name}}</a>
        </span>
      </div>
    </div>

    <!-- Date -->
    <div class="flex flex-row items-end">
      <div>
          <svg-calendar svgClass="flex-shrink-0 mr-2 h-12 w-12"></svg-calendar>
      </div>
      <div class="">
        <h3 class="text-sm tracking-wider font-bold text-gray-400">On</h3>
        <span class="mt-1 text-gray-600">{{ date.date }}</span>
      </div>
    </div>

    <!-- Venue -->
    <div class="flex flex-row items-end">
      <div>
        <svg-pin svgClass="flex-shrink-0 mr-2 h-12 w-12"></svg-pin>
      </div>
      <div class="">
        <h3 class="text-sm tracking-wider font-bold text-gray-400">Venue</h3>
        <span class="mt-1 text-gray-600">Remote</span>
      </div>
    </div>
</atom-section>
</template>

<script setup>
defineProps({
    instructor: Object,
    date: Object,
})
</script>
