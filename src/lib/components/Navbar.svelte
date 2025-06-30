<!-- Reusable Navbar with placeholder dropdown menus -->

<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavUl,
		NavLi,
		NavHamburger,
		Dropdown,
		DropdownItem,
		DarkMode
	} from 'flowbite-svelte';

	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const activeUrl = derived(page, ($page) => $page.url.pathname);
</script>

<Navbar>
	<NavBrand href="/">
		<span
			class="self-center text-xl font-semibold whitespace-nowrap text-green-600 dark:text-green-400"
			>CP04</span
		>
	</NavBrand>

	<NavHamburger />

	<NavUl {activeUrl}>
		<NavLi href="/">Home</NavLi>

		<!-- Inputs group -->
		<NavLi class="cursor-pointer">
			Nav 1<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
		</NavLi>
		<Dropdown simple class="w-44" {activeUrl}>
			<DropdownItem href="/placeholder-1">Placeholder Page 1</DropdownItem>
		</Dropdown>

		<!-- Components group -->
		<NavLi class="cursor-pointer">
			Nav 2<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
		</NavLi>
		<Dropdown simple class="w-52" {activeUrl}>
			<DropdownItem href="/placeholder-2">Placeholder Page 2</DropdownItem>
		</Dropdown>
	</NavUl>

	<!-- ✅ Valid placement of toggle outside <NavUl> to avoid nesting inside <button> -->
	<div class="flex items-center pr-4">
		<DarkMode />
	</div>
</Navbar>
