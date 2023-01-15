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
                {{ championData.title }}
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
            <p class="text-sm text-white">Rank Position</p>
            <div class="inline-flex">
              <div class="gap-x-28 p-5 pr-20 mt-2 bg-x-secondary-opt1">
                <h5 class="text-xl text-black font-poppinsBold">
                  {{ championData.rank }}
                </h5>
              </div>
            </div>
          </div>
          <div class="my-14">
            <p class="text-sm text-white">Category</p>
            <h5
              class="text-xl font-poppinsBold uppercase text-x-secondary-opt1"
            >
              {{ championData.category }}
            </h5>
          </div>
          <div class="my-14">
            <p class="text-sm text-white">Regional</p>
            <h5
              class="text-xl font-poppinsBold uppercase text-x-secondary-opt1"
            >
              {{ championData.regional }}
            </h5>
          </div>
          <div class="my-14">
            <p class="text-sm text-white">Date</p>
            <h5
              class="text-xl font-poppinsBold uppercase text-x-secondary-opt1"
            >
              {{ championData.date }}
            </h5>
          </div>
        </div>
        <div class="col-span-2 mt-20 px-10">
          <h5 class="text-xl font-poppinsBold text-x-secondary-opt1">
            ABOUT CHAMPION
          </h5>
          <p class="text-xl text-white">{{ championData.description }}</p>
        </div>
      </div>
    </section>
    <!-- end of header section -->
  </div>
</template>

<script>
import supabase from "../../config/supabase";

export default {
  name: "champions",
  data() {
    return {
      id: "",
      championData: [],
    };
  },

  async created() {
    this.id = this.$route.params.id;

    const { data, error } = await supabase
      .from("champions")
      .select()
      .eq("id", this.id)
      .single();

    this.championData = data;
  },
};
</script>
