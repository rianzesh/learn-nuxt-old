<template>
  <div class="bg-red-300">
    <div class="x-parallax-img fixed z-0">
      <img class="h-screen md:h-full" src="~/assets/images/parallax2.jpg" />
    </div>

    <section>
      <div
        class="md:px-16 md:grid md:grid-cols-2 h-screen bg-black relative z-1"
      >
        <div class="bg-yellow-0 pt-32 md:place-self-center">
          <img
            class="rounded-full mx-auto h-60 md:h-96"
            src="~/assets/images/ME.jpg"
          />
        </div>
        <div
          class="
            text-white
            bg-green-0
            text-center
            mt-14
            md:mt-0 md:text-left md:justify-self-start
            place-self-center
          "
        >
          <h1 class="text-96 md:text-2xl font-poppinsBold">Hello, I'm</h1>
          <h1
            class="text-3xl md:text-6xl font-poppinsBold text-x-secondary-opt1"
          >
            Rahmat Riansyah
          </h1>
          <p class="mt-3 md:mt-5 text-96 md:text-2xl">
            A Design Enthusiast and Photography Addict, <br />
            but <b>Mobile Developer</b> Wanna be!
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="grid grid-cols-2 h-96 bg-black relative z-1"></div>
      <div
        class="
          md:px-10 md:grid
          grid-cols-2
          h-screen
          md:h-96
          relative
          z-1
          mt-40
          md:mt-0
        "
      >
        <div class="mx-5 md:mx-0 md:p-3 place-self-center">
          <h1 class="text-white text-xl md:text-2xl font-poppinsBold">
            Let's, Talking
          </h1>
          <div class="bg-x-secondary">
            <h1 class="text-4xl md:text-6xl font-monumentExtendedBold">
              About Me
            </h1>
            <p class="md:mt-3 text-xl">Tak Kenal, Maka Kenalan</p>
          </div>
        </div>
        <div
          class="
            mx-5
            mt-10
            md:mt-0 md:mx-0 md:mr-20
            justify-self-center
            md:justify-self-start
            place-self-center
          "
        >
          <h1
            class="
              text-2xl
              bg-x-secondary
              inline-block
              font-poppinsBold
              mt-10
              md:mt-0
            "
          >
            Yoo!
          </h1>
          <p class="bg-black text-x-secondary-opt1 text-xl inline-block">
            Currently, i’m Informatics student at Mercu Buana University who
            like challenges and learn something new, that’s why i’m interested
            in programming field especially Mobile Development. I have others
            hobby such as Design, Photography, Play Badminton and also Draw
            Cartoon Character.
          </p>
          <p
            class="
              mt-5
              md:mt-2
              bg-black
              text-x-secondary-opt1 text-xl
              inline-block
            "
          >
            Did you know?! i have a special skill is <b>LeftHanded</b>, yap i
            always do everthing with my left hand and feet like use racket, use
            pencil, kick ball etc. Except to eat, i must use my right hand.
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-2 h-96 bg-black relative z-1 justify-items-center"
      ></div>
    </section>

    <section>
      <div class="bg-black md:py-40 grid mx-auto relative z-1">
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
            Experience Check
          </h1>
          <div class="bg-x-secondary">
            <h1 class="text-4xl md:text-6xl font-monumentExtendedBold">
              Portofolio
            </h1>
            <p class="md:mt-3 text-xl">Udah Ngapain Aja?</p>
          </div>
        </div>
        <div
          class="
            container
            mx-auto
            justify-center
            grid
            gap-y-8
            grid-cols-1
            md:grid-cols-3
          "
        >
          <!-- Card -->
          <div class="shadow-md place-self-center w-10/12 md:full">
            <img class="h-full" src="~/assets/images/parallax2.jpg" />
            <div class="py-4 grid grid-cols-3 bg-gray-800 text-white">
              <div class="col-span-2 place-self-start ml-5 my-auto space-y-1">
                <p class="text-sm text-x-secondary-opt1">PHP | Javascript</p>
                <h5 class="text-xl font-poppinsBold text-white">
                  Company Profile
                </h5>
              </div>
              <div class="place-self-end mr-5 my-auto">
                <h5 class="text-3xl text-x-secondary-opt1 font-steelfishBold">
                  SEE
                </h5>
              </div>
            </div>
          </div>
          <!-- Card -->
          <!-- Card -->
          <div class="shadow-md place-self-center w-10/12">
            <img class="h-full" src="~/assets/images/parallax2.jpg" />
            <div class="py-4 grid grid-cols-3 bg-gray-800 text-white">
              <div class="col-span-2 place-self-start ml-5 my-auto space-y-1">
                <p class="text-sm text-x-secondary-opt1">PHP | Javascript</p>
                <h5 class="text-xl font-poppinsBold text-white">
                  Company Profile
                </h5>
              </div>
              <div class="place-self-end mr-5 my-auto">
                <h5 class="text-3xl text-x-secondary-opt1 font-steelfishBold">
                  SEE
                </h5>
              </div>
            </div>
          </div>
          <!-- Card -->
          <!-- Card -->
          <div class="shadow-md place-self-center w-10/12">
            <img class="h-full" src="~/assets/images/parallax2.jpg" />
            <div class="py-4 grid grid-cols-3 bg-gray-800 text-white">
              <div class="col-span-2 place-self-start ml-5 my-auto space-y-1">
                <p class="text-sm text-x-secondary-opt1">PHP | Javascript</p>
                <h5 class="text-xl font-poppinsBold text-white">
                  Company Profile
                </h5>
              </div>
              <div class="place-self-end mr-5 my-auto">
                <h5 class="text-3xl text-x-secondary-opt1 font-steelfishBold">
                  SEE
                </h5>
              </div>
            </div>
          </div>
          <!-- Card -->
          <!-- Card -->
          <div class="shadow-md place-self-center w-10/12">
            <img class="h-full" src="~/assets/images/parallax2.jpg" />
            <div class="py-4 grid grid-cols-3 bg-gray-800 text-white">
              <div class="col-span-2 place-self-start ml-5 my-auto space-y-1">
                <p class="text-sm text-x-secondary-opt1">PHP | Javascript</p>
                <h5 class="text-xl font-poppinsBold text-white">
                  Company Profile
                </h5>
              </div>
              <div class="place-self-end mr-5 my-auto">
                <h5 class="text-3xl text-x-secondary-opt1 font-steelfishBold">
                  SEE
                </h5>
              </div>
            </div>
          </div>
          <!-- Card -->
          <!-- Card -->
          <div class="shadow-md place-self-center w-10/12">
            <img class="h-full" src="~/assets/images/parallax2.jpg" />
            <div class="py-4 grid grid-cols-3 bg-gray-800 text-white">
              <div class="col-span-2 place-self-start ml-5 my-auto space-y-1">
                <p class="text-sm text-x-secondary-opt1">PHP | Javascript</p>
                <h5 class="text-xl font-poppinsBold text-white">
                  Company Profile
                </h5>
              </div>
              <div class="place-self-end mr-5 my-auto">
                <h5 class="text-3xl text-x-secondary-opt1 font-steelfishBold">
                  SEE
                </h5>
              </div>
            </div>
          </div>
          <!-- Card -->
          <!-- Card -->
          <div class="shadow-md place-self-center w-10/12">
            <img class="h-full" src="~/assets/images/parallax2.jpg" />
            <div class="py-4 grid grid-cols-3 bg-gray-800 text-white">
              <div class="col-span-2 place-self-start ml-5 my-auto space-y-1">
                <p class="text-sm text-x-secondary-opt1">PHP | Javascript</p>
                <h5 class="text-xl font-poppinsBold text-white">
                  Company Profile
                </h5>
              </div>
              <div class="place-self-end mr-5 my-auto">
                <h5 class="text-3xl text-x-secondary-opt1 font-steelfishBold">
                  SEE
                </h5>
              </div>
            </div>
          </div>
          <!-- Card -->
        </div>
      </div>
    </section>

    <section>
      <div class="grid grid-cols-2 h-96 bg-black relative z-1"></div>
      <div
        class="
          md:px-10
          grid grid-cols-2
          h-screen
          bg-gradient-to-l
          from-black
          via-black
          relative
          z-1
        "
      >
        <div class="bg-transparent justify-self-start place-self-center">
          <div class="grid grid-cols-3 space-x-3">
            <div class="flex flex-col col-span-2 space-y-3">
              <div
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
                      text-5xl
                      ml-10
                      mt-10
                      col-span-2
                      text-x-secondary-opt1
                      font-monumentExtendedBold
                      group-hover:text-black
                    "
                  >
                    03
                  </h1>
                  <p
                    class="
                      justify-self-end
                      mr-10
                      my-10
                      col-span-2
                      text-x-secondary-opt1
                      group-hover:text-black
                    "
                  >
                    November 21. 2019
                  </p>
                  <h3
                    class="
                      text-xl
                      ml-10
                      my-10
                      col-span-3
                      text-x-secondary-opt1
                      font-poppinsBold
                      group-hover:text-black
                    "
                  >
                    CSIC Competition at UMN
                  </h3>
                  <img
                    class="mr-10 mt-10"
                    v-show="upHere"
                    src="~/assets/icons/arrow-right.svg"
                    alt="arrow-right"
                  />
                </div>
              </div>
              <div
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
                      text-5xl
                      m-10
                      col-span-2
                      text-x-secondary-opt1
                      font-monumentExtendedBold
                      group-hover:text-black
                    "
                  >
                    03
                  </h1>
                  <p
                    class="
                      justify-self-end
                      m-10
                      col-span-2
                      text-x-secondary-opt1
                      group-hover:text-black
                    "
                  >
                    November 21. 2019
                  </p>
                  <h3
                    class="
                      justify-self-start
                      text-xl
                      m-10
                      col-span-3
                      text-x-secondary-opt1
                      font-poppinsBold
                      group-hover:text-black
                    "
                  >
                    CSIC Competition at UMN
                  </h3>
                </div>
              </div>
            </div>
            <div
              class="
                border-2
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
                    text-5xl text-x-secondary-opt1
                    m-10
                    font-monumentExtendedBold
                    group-hover:text-black
                  "
                >
                  03
                </h1>
                <p
                  class="
                    text-x-secondary-opt1
                    m-10
                    group-hover:text-black
                    justify-self-end
                  "
                >
                  November 21. 2019
                </p>
                <h3
                  class="
                    text-xl text-x-secondary-opt1
                    font-poppinsBold
                    inset-x-0
                    m-10
                    bottom-0
                    group-hover:text-black
                  "
                >
                  CSIC Competition at UMN
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="p-3 place-self-center">
          <h1 class="text-white text-2xl font-poppinsBold">Time to Flex my</h1>
          <div class="bg-x-secondary">
            <h1 class="text-6xl font-monumentExtendedBold">Champion</h1>
            <p class="mt-3 text-xl">Berani Unjuk Gigi!</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 h-96 bg-black relative z-1"></div>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      upHere: false,
    };
  },
};
</script>
