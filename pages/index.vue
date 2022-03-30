<template>
<div>
    <!--  Meta data -->
    <Html>
      <Head>
        <Title>Mixtape Sessions</Title>
        <Meta name="description" :content="'Mixtape Sessions Front Page'" />
      </Head>
    </Html>

    <organism-nav />

    <!-- Front Page -->
    <organism-home-splash />
    <organism-home-testimonials />
    <organism-home-front-cards />
    <organism-home-who-we-are />
    <!-- End Front Page -->

    <organism-newsletter />
    <organism-footer />
</div>
</template>


<script>
export default {
  scrollToTop: true
}

definePageMeta({
  title: 'Mixtape Sessions'
})
</script>
