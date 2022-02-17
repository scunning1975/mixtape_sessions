<template>
    <AtomSection class="mb-48">
        <atom-session-card-header 
            :title="title"
            :gradientClass="gradientClass"
        />

        <atom-session-card-about
            :about="about"
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
    about: String,
    dates: Array,
    instructor: Object
})
</script>
