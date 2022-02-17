<template>
<div>
<organism-nav />

<organism-sessions-header />

<template 
    v-for="(session) in sessions" 
    :key="session.id"
>
    <molecule-session-card 
        :title="session.title"
        :gradientClass="session.gradientClass"
        :buttonGradient="session.buttonGradient"
        :about="session.about"
        :to="'sessions/' + session.dates[session.dates.length-1].url"
        :dates="session.dates"
        :instructor="session.instructor"
    />
</template>

<organism-newsletter />
<organism-footer />
</div>
</template>


<script setup>
import { ref } from 'vue'
import sessions from '@/assets/data/sessions.js'

</script>
