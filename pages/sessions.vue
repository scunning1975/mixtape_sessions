<template>
<div>
    <!--  Meta data -->
    <Html>
      <Head>
        <Title>Mixtape Sessions</Title>
        <Meta name="description" :content="'Mixtape Sessions Catalog'" />
      </Head>
    </Html>

    <organism-nav />

    <organism-sessions-header />

    <template 
        v-for="(session) in sessions" 
        :key="session.id"
    >
        <molecule-session-card 
            :title="session.title"
            :type="session.type"
            :gradientClass="session.gradientClass"
            :buttonGradient="session.buttonGradient"
            :about="session.about"
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


definePageMeta({
  title: 'Mixtape Sessions'
})

</script>
