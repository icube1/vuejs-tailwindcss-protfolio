vue
<template>
  <section class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/profile.jpeg" class="rounded-xl w-96 h-96 object-cover" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
        v-html="formatBio(bio.bio)"
      ></p>
    </div>
  </section>
	<section>
		<h2 class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light mb-4">My Career</h2>
		<div class="mt-8">
          <h4 class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
						<a href="https://arnica.pro/" class="hover:underline">Arnika (Alliance IT techonlogy)</a> - Fullstack software engineer (august 2023 - now)</h4>
          <ul class=" text-ternary-dark dark:text-ternary-light  list-disc list-inside mt-4">
						<li>Soon..</li>
          </ul>
    </div>
		<div class="mt-8">
          <h4 class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
						<a href="https://k-telecom.org/" class="hover:underline">K-telecom</a> - Software engineer (june 2022 - august 2023)</h4>
          <ul class=" text-ternary-dark dark:text-ternary-light  list-disc list-inside mt-4">
          <li>Created and shipped a mobile app for a smart home devices</li>
          <li>Worked with native smartphone functions like camera, wifi etc.</li>
          <li> Supervision of interns' work</li>
          <li>Code review facilitation</li>
          <li>Implemented a rust library(wrapped into a node.js package) to maintain a push-messages in React-native and flutter apps </li>
          </ul>
    </div>

	</section>
</template>

<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio:
            "I'm a russian developer who has learned from mistakes and embraced challenges to grow personally and professionally. With dedication, perseverance, and passion, I have honed coding and software development skills",
        },
        {
          id: 2,
          bio:
            "I'm a software engineer with over 2 years of web experience. I am currently working with React native and Typescript. Outside of work I am learning an IT-management in business at Synergy University and have occasional fun with Rust language.",
        },
      ],
    };
  },
  methods: {
    formatBio(text) {
      const keywords = ['developer','software engineer','learned from mistakes','embraced challenges', 'coding', 'web', 'React native', 'Typescript', 'Rust', 'IT-management in business', 'software development skills'];
      const formattedText = text.replace(
        new RegExp(`(${keywords.join('|')})`, 'gi'),
        '<span style="color: #4E5CA6; font-weight: bold;">$1</span>'
      );
      return formattedText;
    },
  },
};
</script>