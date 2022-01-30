<template>
  <div class="">
    <div class="grid grid-cols-2 h-96 bg-black relative z-1"></div>
    <div
      class="
        md:px-10 md:grid md:grid-cols-2
        py-40
        bg-gradient-to-l
        from-black
        via-black
        relative
        z-1
      "
    >
      <show-at breakpoint="small">
        <div
          class="
            mx-5
            md:mx-0 md:p-3
            text-center
            place-self-center
            mb-20
            md:mb-28
          "
        >
          <h1 class="text-white text-xl md:text-2xl font-poppinsBold">
            Time to Flex my
          </h1>
          <div class="bg-x-secondary">
            <h1 class="text-4xl md:text-6xl font-monumentExtendedBold">
              Champion
            </h1>
            <p class="md:mt-3 text-xl">Berani Unjuk Gigi!</p>
          </div>
        </div>
      </show-at>
      <div
        class="bg-transparent justify-self-start place-self-center mx-5 md:mx-0"
      >
        <!-- if -->
        <div
          v-for="(val, idx) in championData"
          v-if="idx % 2 === 0"
          class="grid grid-cols-5 md:grid-cols-3 space-x-3 my-4"
        >
          <!-- end of if -->
          <!-- 2 baris -->
          <div class="flex flex-col col-span-3 md:col-span-2 space-y-3">
            <div v-for="(data, xy) in championData[idx]" v-if="xy !== 2">
              <div
                v-if="xy === 0"
                class="
                  border-2
                  rounded-sm
                  border-x-secondary-opt1
                  bg-opacity-0
                  backdrop-filter backdrop-blur-lg
                  group
                  hover:bg-x-secondary-opt1
                "
                @mouseover="upHere = true"
                @mouseleave="upHere = false"
              >
                <div class="grid grid-cols-4">
                  <h1
                    class="
                      justify-self-start
                      text-2xl
                      md:text-5xl
                      ml-5
                      md:ml-10
                      mt-5
                      md:mt-10
                      col-span-1
                      md:col-span-2
                      text-x-secondary-opt1
                      font-monumentExtendedBold
                      group-hover:text-black
                    "
                  >
                    <!-- {{ championData[idx][0].rank }} -->
                    {{ data.rank }}
                  </h1>
                  <p
                    class="
                      justify-self-end
                      mr-6
                      md:mr-10
                      my-7
                      md:my-10
                      col-span-3
                      md:col-span-2
                      text-xs
                      md:text-base
                      text-x-secondary-opt1
                      group-hover:text-black
                    "
                  >
                    <!-- {{ championData[idx][0].date }} -->
                    {{ data.date }}
                  </p>
                  <h3
                    class="
                      ml-5
                      mr-5
                      my-5
                      md:mr-0 md:my-10 md:ml-10
                      text-sm
                      md:text-xl
                      col-span-4
                      md:col-span-3
                      text-x-secondary-opt1
                      font-poppinsBold
                      group-hover:text-black
                    "
                  >
                    <!-- {{ championData[idx][0].title }} -->
                    {{ data.title }}
                  </h3>
                  <hide-at breakpoint="small">
                    <img
                      class="mr-10 mt-10"
                      v-show="upHere"
                      src="~/assets/icons/arrow-right.svg"
                      alt="arrow-right"
                    />
                  </hide-at>
                </div>
              </div>
              <div
                v-else
                v-else
                class="
                  border-2
                  rounded-sm
                  border-x-secondary-opt1
                  bg-opacity-0
                  backdrop-filter backdrop-blur-lg
                  group
                  hover:bg-x-secondary-opt1
                "
              >
                <div class="grid grid-cols-4">
                  <h1
                    class="
                      justify-self-start
                      text-2xl
                      md:text-5xl
                      ml-5
                      md:ml-10
                      mt-5
                      md:mt-10
                      col-span-1
                      md:col-span-2
                      text-x-secondary-opt1
                      font-monumentExtendedBold
                      group-hover:text-black
                    "
                  >
                    {{ data.rank }}
                  </h1>
                  <p
                    class="
                      justify-self-end
                      mr-6
                      md:mr-10
                      my-7
                      md:my-10
                      col-span-3
                      md:col-span-2
                      text-xs
                      md:text-base
                      text-x-secondary-opt1
                      group-hover:text-black
                    "
                  >
                    {{ data.date }}
                  </p>
                  <h3
                    class="
                      ml-5
                      mr-5
                      my-5
                      md:mr-0 md:my-10 md:ml-10
                      text-sm
                      md:text-xl
                      col-span-4
                      md:col-span-3
                      text-x-secondary-opt1
                      font-poppinsBold
                      group-hover:text-black
                    "
                  >
                    {{ data.title }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <!-- end of 2 baris -->
          <!-- 1 baris -->
          <div
            v-for="(data, xy) in championData[idx]"
            v-if="xy === 2"
            class="
              border-2
              col-span-2
              md:col-span-1
              rounded-sm
              border-x-secondary-opt1
              backdrop-filter backdrop-blur-sm
              bg-opacity-0
              group
              hover:bg-x-secondary-opt1
            "
          >
            <div class="grid">
              <h1
                class="
                  justify-self-start
                  text-2xl
                  md:text-5xl
                  m-5
                  md:m-10
                  text-x-secondary-opt1
                  font-monumentExtendedBold
                  group-hover:text-black
                "
              >
                <!-- {{ championData[idx][2].rank }} -->
                {{ data.rank }}
              </h1>

              <p
                class="
                  text-x-secondary-opt1
                  group-hover:text-black
                  justify-self-end
                  mr-5
                  md:mr-10
                  my-10
                  md:m-8
                  text-xs
                  md:text-base
                "
              >
                <!-- {{ championData[idx][2].date }} -->
                {{ data.date }}
              </p>
              <h3
                class="
                  text-x-secondary-opt1
                  ml-5
                  my-5
                  md:my-10 md:ml-10
                  font-poppinsBold
                  bottom-0
                  group-hover:text-black
                  text-sm
                  md:text-xl
                  inset-x-0
                  md:m-10 md:text-xl
                "
              >
                <!-- {{ championData[idx][2].title }} -->
                {{ data.title }}
              </h3>
            </div>
          </div>
          <!-- end of 1 baris -->
        </div>
        <!-- else -->
        <div v-else class="grid grid-cols-5 md:grid-cols-3 space-x-3 my-4">
          <!-- end of if -->
          <!-- 1 baris -->
          <div
            v-for="(data, xy) in championData[idx]"
            v-if="xy === 0"
            class="
              border-2
              col-span-2
              md:col-span-1
              rounded-sm
              border-x-secondary-opt1
              backdrop-filter backdrop-blur-sm
              bg-opacity-0
              group
              hover:bg-x-secondary-opt1
            "
          >
            <div class="grid">
              <h1
                class="
                  justify-self-start
                  text-2xl
                  md:text-5xl
                  m-5
                  md:m-10
                  text-x-secondary-opt1
                  font-monumentExtendedBold
                  group-hover:text-black
                "
              >
                <!-- {{ championData[idx][2].rank }} -->
                {{ data.rank }}
              </h1>

              <p
                class="
                  text-x-secondary-opt1
                  group-hover:text-black
                  justify-self-end
                  mr-5
                  md:mr-10
                  my-10
                  md:m-8
                  text-xs
                  md:text-base
                "
              >
                <!-- {{ championData[idx][2].date }} -->
                {{ data.date }}
              </p>
              <h3
                class="
                  text-x-secondary-opt1
                  ml-5
                  my-5
                  md:my-10 md:ml-10
                  font-poppinsBold
                  bottom-0
                  group-hover:text-black
                  text-sm
                  md:text-xl
                  inset-x-0
                  md:m-10 md:text-xl
                "
              >
                <!-- {{ championData[idx][2].title }} -->
                {{ data.title }}
              </h3>
            </div>
          </div>
          <!-- end of 1 baris -->
          <!-- 2 baris -->
          <div class="flex flex-col col-span-3 md:col-span-2 space-y-3">
            <div v-for="(data, xy) in championData[idx]" v-if="xy !== 0">
              <div
                v-if="xy === 1"
                class="
                  border-2
                  rounded-sm
                  border-x-secondary-opt1
                  bg-opacity-0
                  backdrop-filter backdrop-blur-lg
                  group
                  hover:bg-x-secondary-opt1
                "
                @mouseover="upHere = true"
                @mouseleave="upHere = false"
              >
                <div class="grid grid-cols-4">
                  <h1
                    class="
                      justify-self-start
                      text-2xl
                      md:text-5xl
                      ml-5
                      md:ml-10
                      mt-5
                      md:mt-10
                      col-span-1
                      md:col-span-2
                      text-x-secondary-opt1
                      font-monumentExtendedBold
                      group-hover:text-black
                    "
                  >
                    <!-- {{ championData[idx][0].rank }} -->
                    {{ data.rank }}
                  </h1>
                  <p
                    class="
                      justify-self-end
                      mr-6
                      md:mr-10
                      my-7
                      md:my-10
                      col-span-3
                      md:col-span-2
                      text-xs
                      md:text-base
                      text-x-secondary-opt1
                      group-hover:text-black
                    "
                  >
                    <!-- {{ championData[idx][0].date }} -->
                    {{ data.date }}
                  </p>
                  <h3
                    class="
                      ml-5
                      mr-5
                      my-5
                      md:mr-0 md:my-10 md:ml-10
                      text-sm
                      md:text-xl
                      col-span-4
                      md:col-span-3
                      text-x-secondary-opt1
                      font-poppinsBold
                      group-hover:text-black
                    "
                  >
                    <!-- {{ championData[idx][0].title }} -->
                    {{ data.title }}
                  </h3>
                  <hide-at breakpoint="small">
                    <img
                      class="mr-10 mt-10"
                      v-show="upHere"
                      src="~/assets/icons/arrow-right.svg"
                      alt="arrow-right"
                    />
                  </hide-at>
                </div>
              </div>
              <div
                v-else
                class="
                  border-2
                  rounded-sm
                  border-x-secondary-opt1
                  bg-opacity-0
                  backdrop-filter backdrop-blur-lg
                  group
                  hover:bg-x-secondary-opt1
                "
              >
                <div class="grid grid-cols-4">
                  <h1
                    class="
                      justify-self-start
                      text-2xl
                      md:text-5xl
                      ml-5
                      md:ml-10
                      mt-5
                      md:mt-10
                      col-span-1
                      md:col-span-2
                      text-x-secondary-opt1
                      font-monumentExtendedBold
                      group-hover:text-black
                    "
                  >
                    {{ data.rank }}
                  </h1>
                  <p
                    class="
                      justify-self-end
                      mr-6
                      md:mr-10
                      my-7
                      md:my-10
                      col-span-3
                      md:col-span-2
                      text-xs
                      md:text-base
                      text-x-secondary-opt1
                      group-hover:text-black
                    "
                  >
                    {{ data.date }}
                  </p>
                  <h3
                    class="
                      ml-5
                      mr-5
                      my-5
                      md:mr-0 md:my-10 md:ml-10
                      text-sm
                      md:text-xl
                      col-span-4
                      md:col-span-3
                      text-x-secondary-opt1
                      font-poppinsBold
                      group-hover:text-black
                    "
                  >
                    {{ data.title }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <!-- end of 2 baris -->
        </div>
        <!-- end of else -->
      </div>
      <hide-at breakpoint="small">
        <div class="p-3 place-self-center">
          <h1 class="text-white text-2xl font-poppinsBold">Time to Flex my</h1>
          <div class="bg-x-secondary">
            <h1 class="text-6xl font-monumentExtendedBold">Champion</h1>
            <p class="mt-3 text-xl">Berani Unjuk Gigi!</p>
          </div>
        </div>
      </hide-at>
    </div>
    <div class="grid grid-cols-2 h-96 bg-black relative z-1"></div>
  </div>
</template>

<script>
import { showAt, hideAt } from "vue-breakpoints";
export default {
  components: { hideAt, showAt },
  name: "ChampionCard",
  props: ["championData"],
};
</script>

<style scoped>
</style>