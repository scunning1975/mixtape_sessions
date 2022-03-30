<template>
    <AtomSection class="mb-48">
        <atom-session-card-header 
            :title="title"
            :type="type"
            :gradientClass="gradientClass"
        />

        <atom-session-card-about
            :about="about"
            :reviews="reviews"
        />

        <atom-session-card-learn-more
            :date = "dates[dates.length-1]"
            :buttonGradient="buttonGradient"
        />

        <atom-session-card-details
            :instructor="instructor"
            :dates="dates"
        />
    </AtomSection>
</template>

<script setup>
const props = defineProps({
    id: String,
    gradientClass: String,
    buttonGradient: String,
    title: String,
    type: String,
    about: String,
    reviews: Array,
    dates: Array,
    instructor: Object
})
</script>
