<template>
  <div class="bg-red-300">
    <!-- header section -->
    <section>
      <div
        class="md:px-16 md:grid md:grid-cols-2 h-screen bg-black relative z-1"
      >
        <div
          class="
            text-white
            bg-green-0
            text-center
            mt-14
            md:mt-0
            place-self-center
          "
        >
          <h1
            class="text-3xl md:text-6xl font-poppinsBold text-x-secondary-opt1"
          >
            THIS IS PORTOFOLIO PAGE
          </h1>
          <p>{{ portofolioData.title }}</p>
          <p>{{ portofolioData.desc }}</p>
          <p>{{ portofolioData.lang }}</p>
        </div>
      </div>
    </section>
    <!-- end of header section -->
  </div>
</template>

<script>
export default {
  name: "portofolio-details",
  data() {
    return {
      portofolioData: [],
    };
  },
  created() {
    this.portofolioData = this.$route.params;
  },
};
</script>
