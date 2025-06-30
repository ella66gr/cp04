<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi
  } from 'flowbite-svelte';
  import { DarkMode } from 'flowbite-svelte';

</script>

<div class="p-8 flex min-h-screen bg-gray-50 dark:bg-gray-900">

  <!-- Main content area -->
  <div class="flex-1 flex flex-col">
    <!-- Navbar -->
    <Navbar>
      <NavBrand href="/">
        <span class="self-center whitespace-nowrap text-3xl font-semibold text-gray-700 dark:text-purple-500">CP03</span>
      </NavBrand>

      <NavHamburger />

      <NavUl>
        <NavLi
          href="/"
          activeClass="text-blue-700 dark:text-blue-400 font-bold"
          nonActiveClass="text-gray-900 dark:text-white"
          class={$page.url.pathname === "/" ? "text-blue-700 dark:text-blue-400 font-bold" : "text-gray-900 dark:text-white"}
        >Home</NavLi>
        <NavLi
          href="/control-panel"
          activeClass="text-blue-700 dark:text-blue-400 font-bold"
          nonActiveClass="text-gray-900 dark:text-white"
          class={$page.url.pathname === "/page-1" ? "text-blue-700 dark:text-blue-400 font-bold" : "text-gray-900 dark:text-white"}
         >Control Panel</NavLi>
        <NavLi
          href="/page-2"
          activeClass="text-blue-700 dark:text-blue-400 font-bold"
          nonActiveClass="text-gray-900 dark:text-white"
          class={$page.url.pathname === "/page-2" ? "text-blue-700 dark:text-blue-400 font-bold" : "text-gray-900 dark:text-white"}
        >Page 2</NavLi>
        <NavLi
          href="/page-3"
          activeClass="text-blue-700 dark:text-blue-400 font-bold"
          nonActiveClass="text-gray-900 dark:text-white"
          class={$page.url.pathname === "/page-3" ? "text-blue-700 dark:text-blue-400 font-bold" : "text-gray-900 dark:text-white"}
        >Page 3</NavLi>
      </NavUl>

      <DarkMode class="ml-auto gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg" />

    </Navbar>

    <!-- Page content -->
    <main class="p-4">
      <slot />
    </main>
  </div>
</div>
