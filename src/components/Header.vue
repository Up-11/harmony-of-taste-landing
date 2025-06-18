<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => {
	menuOpen.value = !menuOpen.value
}
const closeMenu = () => {
	menuOpen.value = false
}

const navItems = [
	{ id: 'menu', label: 'Меню' },
	{ id: 'about', label: 'О нас' },
	{ id: 'contacts', label: 'Контакты' },
	{ id: 'news', label: 'Новости' },
	{ id: 'suppliers', label: 'Обратная связь / Поставщики' },
]
</script>

<template>
	<header
		id="site-header"
		class="fixed glass-card inset-x-0 top-0 z-50 w-full flex p-1 items-center justify-between backdrop-blur-lg transition-all duration-300 hover:shadow-xl"
	>
		<div class="hover:scale-105 transition-transform duration-300">
			<a href="#home">
				<img
					src="/images/logo.png"
					alt="Logo"
					width="200"
					height="200"
					class="drop-shadow-lg size-12 transition-all duration-300"
					id="site-logo"
				/>
			</a>
		</div>

		<button
			@click="toggleMenu"
			class="md:hidden text-amber-100 focus:outline-none"
			aria-label="Toggle menu"
		>
			<svg
				v-if="!menuOpen"
				class="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
			<svg
				v-else
				class="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

		<nav
			v-if="menuOpen"
			class="fixed top-full left-0 w-full bg-black/90 backdrop-blur-2xl flex flex-col py-4 md:hidden transition-all duration-300 ease-in-out z-40"
		>
			<a
				v-for="(item, index) in navItems"
				:key="'mobile-' + index"
				:href="`#${item.id}`"
				class="block px-6 py-2 text-amber-100 hover:text-amber-300 transition-colors duration-200 font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"
				@click="closeMenu"
			>
				{{ item.label }}
			</a>
		</nav>

		<nav class="hidden md:flex items-center gap-8">
			<a
				v-for="(item, index) in navItems"
				:key="'desktop-' + index"
				:href="`#${item.id}`"
				class="text-amber-100 hover:text-amber-300 transition-colors duration-200 font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"
			>
				{{ item.label }}
			</a>
		</nav>
	</header>
</template>
