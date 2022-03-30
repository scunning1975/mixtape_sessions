<template>
<atom-section-wide>
    <div class="max-w-4xl mx-auto mt-12 py-4 px-8 lg:px-0 border-t-2 border-gray-100">
        <h1 class="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-red-700 to-violet-red-500  mb-4">
            Who will be <span class="italic">hosting this session</span>?
        </h1>
    </div>

    <!-- About Instructor -->
    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-x-8">
      <div class="col-span-1 lg:col-span-1 text-center justify-center">
        <img class="rounded-full w-1/2 md:w-1/3 lg:w-full mx-auto" :src="'/img/' + instructor.img" :alt="instructor.name">
      </div>
      <div class="pl-4 lg:pl-0 py-4 lg:py-0 col-span-1 lg:col-span-3">
        <div class="prose mx-auto py-4 text-lg" v-html="instructor.about">
        </div>
      </div>
      <div class="col-span-1 lg:col-span-4 pt-4" v-if="instructor.reviews != null">
        <ul class="list-inside py-4 space-y-4">
          <li class="text-xl relative" v-for="review in instructor.reviews" :key="review">
            <span class="text-3xl leading-1 inline-block font-marker text-violet-red-500">“</span> {{review}}<span class="text-3xl -pl-2 leading-4 inline-block font-marker text-violet-red-500">”</span>
          </li>
        </ul>
      </div>
    </div>
</atom-section-wide>
</template>

<script setup>
defineProps({
    instructor: Object
})
</script>
