<template>
  <div class="bg-black">
    <!-- header section -->
    <section>
      <div
        class="md:px-16 md:grid md:grid-cols-3 gap-x-10 relative z-1 bg-black py-24"
      >
        <div class="bg-yellow-0 col-span-2 px-10 md:place-self-center">
          <div class="text-left place-self-center mb-10">
            <div class="inline-flex bg-x-secondary">
              <h1
                class="text-4xl md:text-6xl font-monumentExtendedBold uppercase"
              >
                {{ data.title }}
              </h1>
            </div>
          </div>
          <div style="max-height: 550px" class="overflow-hidden">
            <img
              class="mx-auto w-full"
              :src="require('~/assets/images/' + 'parallax3.jpg')"
            />
          </div>
        </div>
        <div
          class="text-white bg-green-0 text-center mt-14 md:mt-0 md:text-left md:justify-self-start place-self-center"
        >
          <div class="my-14">
            <p class="text-sm text-white">Technology/Language</p>
            <h5
              class="text-xl font-poppinsBold uppercase text-x-secondary-opt1"
            >
              {{ data.language }}
            </h5>
          </div>
          <div class="my-14">
            <p class="text-sm text-white">Progress Status</p>
            <h5
              class="text-xl font-poppinsBold uppercase text-x-secondary-opt1"
            >
              {{ data.progress }}
            </h5>
          </div>
          <div class="my-14">
            <p class="text-sm text-white">Website URL</p>
            <div v-if="data.url" class="inline-flex">
              <a :href="data.url" target="_blank">
                <div
                  class="grid grid-cols-2 gap-x-28 p-5 mt-2 bg-x-secondary-opt1"
                >
                  <h5 class="text-xl text-black font-poppinsBold">VISIT</h5>
                  <img
                    class="place-self-center"
                    src="~/assets/icons/arrow-right.svg"
                    alt="arrow-right"
                  />
                </div>
              </a>
            </div>
            <div v-else class="inline-flex">
              <a :href="data.url">
                <div class="p-5 mt-2 bg-gray-700">
                  <h5 class="text-xl text-black font-poppinsBold">
                    DOESN'T EXIST <span class="ml-5">:(</span>
                  </h5>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-span-2 mt-20 px-10">
          <h5 class="text-xl font-poppinsBold text-x-secondary-opt1">
            ABOUT APP
          </h5>
          <p class="text-xl text-white">{{ data.description }}</p>
        </div>
      </div>
    </section>
    <!-- end of header section -->
  </div>
</template>

<script>
import supabase from "../../config/supabase";

export default {
  name: "portofolios",
  data() {
    return {
      id: "",
      data: [],
    };
  },
  async created() {
    this.id = this.$route.params.id;

    const { data, error } = await supabase
      .from("portofolios")
      .select()
      .eq("id", this.id)
      .single();

    this.data = data;
  },
};
</script>
