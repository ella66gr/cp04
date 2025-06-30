<script lang="ts">
  import '$app/environment'; // required in Vite+SvelteKit for envs
  import '../app.css';       // ✅ ensures Tailwind + Flowbite styles are active
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main class="px-6 py-4">
  <slot />
</main>