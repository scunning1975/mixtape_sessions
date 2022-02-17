<template>
<div>
    <organism-nav />

    <template v-if="idMatched">
        <atom-session-header 
            :title="session.title"
            :gradientClass="session.gradientClass"
            :about="session.about"
        />

        <atom-session-info 
            :instructor="session.instructor"
            :date="date"
        />

        <atom-session-call-to-action 
            :instructor="session.instructor"
            :buttonGradient="session.buttonGradient"
        />

        <atom-session-calendar
            :date="date"
        />

        <atom-session-host 
            :instructor="session.instructor"
        />

        <atom-session-faq 
            :instructor="session.instructor"
        />

    </template>
    <template v-else>
        <atom-section>
            <div class="py-8 md:px-8 prose">
                <h1>Beta hat = 404</h1>

                <p>Uh oh! Our point estimate suggets this url is not working. Please click sessions to find what mixtape sessions we are offering.</p>
            </div>
        </atom-section>
    </template>

    <organism-newsletter />
    <organism-footer />
</div>
</template>

<script setup>
import sessions from '@/assets/data/sessions.js'
import { ref } from 'vue'

let idMatched = ref(false)

const route = useRoute()
const id = route.params.id


let session = sessions.value.filter(session => session.id === id.match(/(\w+?)(?=_)/)[1])
if(session.length > 0) {
    session = session[0]
}
let date = session.dates.filter(date => {
    return date.url == id
})
if(date.length > 0) {
    date = date[0]
    idMatched.value = true
}



</script>

