<template>
  <div class="bg-red-300">
    <hide-at breakpoint="small">
      <div class="x-parallax-img fixed z-0 overflow-hidden">
        <img class="h-screen md:h-full" src="~/assets/images/parallax2.jpg" />
      </div>
    </hide-at>
    <show-at breakpoint="small">
      <div class="x-parallax-img fixed z-0 overflow-hidden">
        <img
          class="h-screen md:h-full"
          src="~/assets/images/parallax2-mobile.jpg"
        />
      </div>
    </show-at>

    <!-- header section -->
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
          class="text-white bg-green-0 text-center mt-14 md:mt-0 md:text-left md:justify-self-start place-self-center"
        >
          <div :style="style" ref="lavContainer"></div>
          <h1 class="text-96 md:text-2xl font-poppinsBold">Hello, I'm</h1>
          <h1
            class="text-3xl md:text-6xl font-poppinsBold text-x-secondary-opt1"
          >
            <!-- {{ this.portofoliosData[0].id }} -->
            Rahmat Riansyah
          </h1>
          <!-- <button @click="show()">Click me</button> -->
          <p class="mt-3 md:mt-5 text-96 md:text-2xl">
            A Design Enthusiast and Photography Addict, <br />
            but <b>Mobile Developer</b> Wanna be!
          </p>
        </div>
      </div>
    </section>
    <!-- end of header section -->

    <!-- about me section -->
    <section>
      <div class="grid grid-cols-2 h-96 bg-black relative z-1"></div>
      <div
        class="md:px-10 md:grid grid-cols-2 h-screen md:h-96 relative z-1 mt-40 md:mt-0"
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
          class="mx-5 mt-10 md:mt-0 md:mx-0 md:mr-20 justify-self-center md:justify-self-start place-self-center"
        >
          <h1
            class="text-2xl bg-x-secondary inline-block font-poppinsBold mt-10 md:mt-0"
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
            class="mt-5 md:mt-2 bg-black text-x-secondary-opt1 text-xl inline-block"
          >
            Did you know?! i have a special skill is <b>LeftHanded</b>, yap i
            always do everything with my left hand and feet like use racket,
            write, kick the ball etc. Except to eat, i must use my right hand.
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-2 h-96 bg-black relative z-1 justify-items-center"
      ></div>
    </section>
    <!-- end of about me section -->

    <!--  portofolio section -->
    <section>
      <div class="bg-black md:py-40 grid mx-auto relative z-1">
        <div
          class="mx-5 md:mx-0 md:p-3 text-center place-self-center mb-20 md:mb-28"
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
          class="container mx-auto justify-center grid gap-y-8 grid-cols-1 md:grid-cols-3"
        >
          <!-- Card -->
          <div
            v-for="(datax, index) in this.portofoliosData"
            class="shadow-md place-self-center w-10/12"
          >
            <!-- <NuxtLink :to="{ name: 'portofolio-details', params: datax }"> -->
            <NuxtLink :to="`portofolios/${datax.id}`">
              <!-- <img class="h-full" src="~/assets/images/parallax2.jpg" /> -->
              <img
                class="h-full"
                :src="`${
                  datax.image_url
                    ? datax.image_url
                    : 'https://mbfltfpzlzhszrgxfmni.supabase.co/storage/v1/object/public/assets/projects/empty.png'
                }`"
              />
              <div class="py-4 grid grid-cols-3 bg-gray-800 text-white">
                <div class="col-span-2 place-self-start ml-5 my-auto space-y-1">
                  <p class="text-sm text-x-secondary-opt1">
                    {{ datax.language }}
                  </p>
                  <h5 class="text-xl font-poppinsBold text-white">
                    {{ datax.title }}
                  </h5>
                </div>
                <div class="place-self-end mr-5 my-auto">
                  <h5 class="text-3xl text-x-secondary-opt1 font-steelfishBold">
                    SEE
                  </h5>
                </div>
              </div>
            </NuxtLink>
          </div>
          <!-- Card -->
        </div>
      </div>
    </section>
    <!-- end of portofolio section -->

    <!-- champion section -->
    <section v-if="this.championsData.length > 0">
      <ChampionCard :championData="this.championsData"> </ChampionCard>
    </section>
    <!-- end of champion section -->

    <!--  skill section -->
    <section>
      <div class="bg-black md:py-40 grid mx-auto relative z-1">
        <div
          class="mx-5 md:mx-0 md:p-3 text-center place-self-center mb-20 md:mb-28"
        >
          <h1 class="text-white text-xl md:text-2xl font-poppinsBold">
            Break Down my
          </h1>
          <div class="bg-x-secondary">
            <h1 class="text-4xl md:text-6xl font-monumentExtendedBold">
              Skills
            </h1>
            <p class="md:mt-3 text-xl">Buka Kartu AS niih</p>
          </div>
        </div>
        <div class="container mx-auto">
          <div
            v-for="datax in this.skillsData"
            class="border-2 m-2 md:m-3 rounded-sm border-white bg-opacity-0 inline-block group hover:bg-white"
          >
            <div class="">
              <h1
                class="text-lg md:text-5xl mx-5 md:mx-10 mt-5 md:mt-10 text-center text-white font-monumentExtendedBold group-hover:text-black"
              >
                {{ datax.name.toUpperCase() }}
              </h1>
              <p
                class="text-center mt-5 mb-3 md:mt-10 text-xs md:text-lg self-end group-hover:text-black"
              >
                {{ datax.level.toUpperCase() }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end of skill section -->

    <!--  tech made section -->
    <section>
      <div class="bg-black md:py-40 grid mx-auto relative z-1">
        <div class="mt-40 rounded-lg md:mx-20">
          <div
            class="text-center mx-5 md:mx-0 md:p-3 text-center place-self-center inline mb-10 mt-44"
          >
            <h1
              class="text-x-secondary-opt1 text-md md:text-lg font-poppinsBold"
            >
              Made Using
            </h1>
          </div>
          <div
            class="container mx-auto justify-center grid gap-y-2 md:gap-y-8 grid-cols-1 md:grid-cols-3"
          >
            <!-- Card -->
            <div class="fill-blue-500 place-self-center w-6/12">
              <img
                class="fill-blue-500 h-full"
                src="~/assets/images/tailwindcss.svg"
              />
            </div>
            <!-- Card -->
            <!-- Card -->
            <div class="place-self-center w-6/12">
              <img
                class="grayscale h-full justify-self-center"
                src="~/assets/images/vuejs.svg"
              />
            </div>
            <!-- Card -->
            <!-- Card -->
            <div class="place-self-center w-6/12">
              <img class="grayscale h-full" src="~/assets/images/nuxtjs.svg" />
            </div>
            <!-- Card -->
          </div>
        </div>
      </div>
    </section>
    <!-- end of tech made section -->
  </div>
</template>

<script>
import { ref } from "vue";
import supabase from "../config/supabase";
import { showAt, hideAt } from "vue-breakpoints";
import ChampionCard from "../components/ChampionCard.vue";
import axios from "axios";

export default {
  components: { hideAt, showAt, ChampionCard },

  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : "100%",
        height: this.height ? `${this.height}px` : "100%",
        overflow: "hidden",
        margin: "0 auto",
      },
      skill: [],
      upHere: false,
      championsData: [],
      portofoliosData: [],
      skillsData: [],
      portofolioData: [
        {
          title: "E-Voting",
          lang: "Codeigniter 4 | Bootstrap 5",
          progress: "Completed",
          image: "parallax3.jpg",
          url: null,
          desc: "This app developed by me to completed my course major assignment at my campus. E-Voting has two roles are first as administrator, they can do manage data such as votes data, users data, subadmins data, events data, reports data and many more. As user, they only do voting candidates and viewing voting updates",
        },
        {
          lang: "HTML5 CANVAS | Javascript | TailwindCSS",
          title: "Certificate Generator",
          image: "parallax2.jpg",
          progress: "Developing",
          url: "https://ceritix.github.io",
          desc: "This app developed by me to helping people like organization that wanna make event such as seminar, workshop. i can help them for make easer to generate e-certificate for participants. Sertifix have two features, manual input name and auto input name by detecting the xls/excel file. and you can download it in simultaneously.",
        },
        {
          lang: "React Native",
          title: "Calculator Mobile App",
          image: "parallax4.jpg",
          progress: "Developing",
          url: null,
          desc: "Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in.",
        },
        {
          lang: "Codeigniter 4 | Bootstrap 4",
          title: "Company Profile Project",
          image: "parallax3.jpg",
          progress: "Production",
          url: null,
          desc: "This is a my Project that was i developed for PT. Meerkats Flexipack Indonesia. i did this project for 2 months in 2019 by myself without team at all. At this App has CMS Features and Account Management.",
        },
        {
          lang: "Flutter | Firebase",
          title: "Healthy Mobile App",
          image: "parallax3.jpg",
          progress: "Production",
          url: null,
          desc: "This is a my Project that was i developed for PT. Meerkats Flexipack Indonesia. i did this project for 2 months in 2019 by myself without team at all. At this App has CMS Features and Account Management.",
        },
        {
          lang: "HTML5 | Bootstrap 4",
          title: "Game Store Website",
          image: "parallax3.jpg",
          progress: "Production",
          url: null,
          desc: "This is a my Project that was i developed for PT. Meerkats Flexipack Indonesia. i did this project for 2 months in 2019 by myself without team at all. At this App has CMS Features and Account Management.",
        },
        {
          lang: "Visual Basic .NET",
          title: "Music Player",
          image: "parallax3.jpg",
          progress: "Production",
          url: null,
          desc: "This is a my Project that was i developed for PT. Meerkats Flexipack Indonesia. i did this project for 2 months in 2019 by myself without team at all. At this App has CMS Features and Account Management.",
        },
        {
          lang: "Visual Basic .NET",
          title: "VS Key Generator",
          image: "parallax3.jpg",
          progress: "Production",
          url: null,
          desc: "This is a my Project that was i developed for PT. Meerkats Flexipack Indonesia. i did this project for 2 months in 2019 by myself without team at all. At this App has CMS Features and Account Management.",
        },
      ],
      championData: [
        [
          {
            title: "CSIC COMPETITION",
            rank: "03",
            rankText: "Third Place",
            category: "UI/UX",
            image: "parallax3.jpg",
            person: "Team (4 Persons)",
            regional: "National",
            place: "Multimedia Nusantara University",
            date: "November 21, 2019",
            desc: "Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in.",
          },
          {
            title: "IT FUN 3.0 POSTER COMPETITION",
            rank: "02",
            rankText: "Runner Up",
            category: "Poster Design",
            image: "parallax3.jpg",
            person: "Individual",
            regional: "National",
            place: "Nasional University",
            date: "November 08, 2019",
            desc: "Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in.",
          },
          {
            title: "ANTI-DRUGS POSTER COMPETITION",
            rank: "01",
            rankText: "Winner",
            category: "Poster Design",
            image: "parallax4.jpg",
            person: "Individual",
            regional: "National",
            place: "Mercu Buana University",
            date: "June 23, 2020",
            desc: "Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in.",
          },
        ],
        [
          {
            title: "INSPACE UI/UX COMPETITION",
            rank: "01",
            rankText: "Winner",
            category: "UI/UX",
            image: "parallax3.jpg",
            person: "Team (3 Persons)",
            regional: "National",
            place: "Teknologi Kalimantan Institute",
            date: "October 23, 2021",
            desc: "Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in.",
          },
          {
            title: "CODIG 3.0 UX COMPETITION",
            rank: "03",
            rankText: "Third Place",
            category: "UI/UX",
            image: "parallax3.jpg",
            person: "Team (3 Persons)",
            regional: "National",
            place: "Mercu Buana University",
            date: "December 19, 2020",
            desc: "Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in.",
          },
          {
            title: "MUSEUM NATIONAL POSTER COMPETITION",
            rank: "06",
            rankText: "Sixth Place",
            category: "Poster Competition",
            image: "parallax4.jpg",
            person: "Individual",
            regional: "National",
            place: "Museum National",
            date: "Juli 14, 2021",
            desc: "Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in.",
          },
        ],
        [
          {
            title: "JBC INFOGRAPHIC COMPETITION",
            rank: "TOP 10",
            rankText: "Finalists",
            category: "Poster Design",
            image: "parallax4.jpg",
            person: "Individual",
            regional: "National",
            place: "Telkom University",
            date: "August 33, 2020",
            desc: "Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in.",
          },
          {
            title: "ADSCOMP UMB POSTER COMPETITION",
            rank: "TOP 05",
            rankText: "Finalists",
            category: "Poster Design",
            image: "parallax4.jpg",
            person: "Individual",
            regional: "National",
            place: "Mercu Buana University",
            date: "June 27, 2020",
            desc: "Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in.",
          },
        ],
      ],
      skillData: [
        {
          lang: "NUXT JS",
          level: "BEGINNER",
        },
        {
          lang: "FLUTTER",
          level: "BEGINNER",
        },
        {
          lang: "REACT NATIVE",
          level: "BEGINNER",
        },
        {
          lang: "VUE JS",
          level: "BEGINNER",
        },
        {
          lang: "CODEIGNITER",
          level: "INTERMEDIATE",
        },
        {
          lang: "LARAVEL",
          level: "BEGINNER",
        },
        {
          lang: "CSS",
          level: "ADVANCED",
        },
        {
          lang: "TAILWIND",
          level: "ADVANCED",
        },
        {
          lang: "JAVASCRIPT",
          level: "ADVANCED",
        },
        {
          lang: "PHP",
          level: "ADVANCED",
        },
        {
          lang: "HTML",
          level: "ADVANCED",
        },
        {
          lang: "PHOTOSHOP",
          level: "EXPERT",
        },
        {
          lang: "FIGMA",
          level: "ADVANCED",
        },
        {
          lang: "AFFINITY DESIGNER",
          level: "ADVANCED",
        },
        {
          lang: "PREMIERE PRO",
          level: "INTERMEDIATE",
        },
        {
          lang: "AFTER EFFECT",
          level: "INTERMEDIATE",
        },
        {
          lang: "XD",
          level: "ADVANCED",
        },
        {
          lang: "LIGTHROOM",
          level: "ADVANCED",
        },
        {
          lang: "MANUAL DRAWING",
          level: "INTERMEDIATE",
        },
        {
          lang: "DESIGN",
          level: "ADVANCED",
        },
        {
          lang: "VISUAL BASIC .NET",
          level: "BEGINNER",
        },
        {
          lang: "ANDROID OPREKER",
          level: "INTERMEDIATE",
        },
      ],
    };
  },

  // created() {
  //   // GET request using axios with set headers
  //   const headers = {
  //     Accept: "application/json, text/plain, /",
  //     "Content-Type": "multipart/form-data",
  //   };
  //   axios
  //     .get("/api-wilayah-indonesia/api/regencies/11.json")
  //     .then((response) => {
  //       // this.results = response.data;
  //       console.log("dtakuuy", response);
  //     });
  // },

  // async beforeCreate() {
  //   const { data: champs, error: errChamps } = await supabase
  //     .from("champion")
  //     .select();

  //   let id = 0;
  //   let champsData = [];
  //   let tempData = [];

  //   console.log("txt", champs);
  //   champs.forEach((val, idx) => {
  //     tempData.push(val);
  //     if ((idx + 1) % 3 === 0 || idx + 1 === champs.length) {
  //       champsData[id] = tempData;
  //       tempData = [];
  //       id += 1;
  //       console.log("yolo", idx);
  //     }
  //   });
  //   this.championsData = champsData;
  //   console.log("errr", this.hc);
  // },

  async created() {
    // lottie.loadAnimation({
    //   container: this.$refs.lavContainer, // the dom element that will contain the animation
    //   renderer: "svg",
    //   loop: true,
    //   autoplay: true,
    //   path: "../assets/lottie/thunder-bolt.json", // the path to the animation json
    // });

    const { data: champs, error: errChamps } = await supabase
      .from("champion")
      .select();

    let id = 0;
    let champsData = [];
    let tempData = [];

    champs.forEach((val, idx) => {
      tempData.push(val);
      if ((idx + 1) % 3 === 0 || idx + 1 === champs.length) {
        champsData[id] = tempData;
        tempData = [];
        id += 1;
        // console.log("yolo", idx);
      }
    });
    this.championsData = champsData;

    const { data: portos, error: errPortos } = await supabase
      .from("project")
      .select();

    const { data: skills, error: errSkills } = await supabase
      .from("skill")
      .select();

    console.log("txt", champsData);
    this.portofoliosData = portos;
    this.skillsData = skills;
  },

  // mounted() {
  //   axios
  //     .get("https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json")
  //     .then((response) => {
  //       this.results = response.data;
  //       console.log("dtakuuy", response.data);
  //     });
  // },

  // beforeMount() {},
  // methods: {
  // },

  // mounted() {
  // const { data, error } = supabase
  //   .from("skill")
  //   .insert([{ name: "The Shire", level: "The Shire" }]);
  // console.log("cek: ", error);

  // console.log("test: ", this.data); // 0
  // },

  // try {
  // const { error } = await supabase.auth.signUp({
  //   password: password.value,
  // });
  //   if (error) throw error;
  // } catch (error) {
  //   alert(error.error_description || error.message);
  // }
};
</script>
