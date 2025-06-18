<script setup lang="ts">
import { ref, computed } from 'vue'

const tabs = ref(['Все', 'Кофе', 'Чай', 'Десерты', 'Выпечка'])
const currentTab = ref(tabs.value[0])

const products = ref([
	{
		id: 1,
		name: 'Капучино',
		description: 'Нежный сливочный вкус с воздушной пенкой.',
		image: '/images/photo_1_2025-06-17_20-16-35.jpg',
		category: 'Кофе',
		price: 220,
	},
	{
		id: 2,
		name: 'Латте',
		description: 'Легкий напиток с молоком и эспрессо.',
		image: '/images/photo_1_2025-06-17_20-16-35.jpg',
		category: 'Кофе',
		price: 230,
	},
	{
		id: 3,
		name: 'Черный чай',
		description: 'Классический крепкий чай.',
		image: '/images/photo_12_2025-06-17_20-16-35.jpg',
		category: 'Чай',
		price: 180,
	},
	{
		id: 4,
		name: 'Молочный улун',
		description: 'Ароматный китайский чай.',
		image: '/images/photo_12_2025-06-17_20-16-35.jpg',
		category: 'Чай',
		price: 200,
	},
	{
		id: 5,
		name: 'Чизкейк',
		description: 'Нежный десерт с сыром и ягодами.',
		image: '/images/photo_2025-06-17_20-16-16.jpg',
		category: 'Десерты',
		price: 320,
	},
	{
		id: 6,
		name: 'Эклер',
		description: 'Пирожное с кремом.',
		image: '/images/photo_2025-06-17_20-16-19.jpg',
		category: 'Десерты',
		price: 150,
	},
	{
		id: 7,
		name: 'Круассан',
		description: 'Французская выпечка.',
		image: '/images/photo_2025-06-17_20-16-21.jpg',
		category: 'Выпечка',
		price: 170,
	},
	{
		id: 8,
		name: 'Маффин',
		description: 'Шоколадный кекс.',
		image: '/images/photo_2025-06-17_20-16-04.jpg',
		category: 'Выпечка',
		price: 160,
	},
	{
		id: 9,
		name: 'Американо',
		description: 'Крепкий черный кофе.',
		image: '/images/photo_1_2025-06-17_20-16-35.jpg',
		category: 'Кофе',
		price: 190,
	},
	{
		id: 10,
		name: 'Раф',
		description: 'Кофе со сливками и ванилью.',
		image: '/images/photo_1_2025-06-17_20-16-35.jpg',
		category: 'Кофе',
		price: 240,
	},
	{
		id: 11,
		name: 'Матча латте',
		description: 'Японский зеленый чай с молоком.',
		image: '/images/photo_12_2025-06-17_20-16-35.jpg',
		category: 'Чай',
		price: 260,
	},
	{
		id: 12,
		name: 'Шоколадный торт',
		description: 'Нежный шоколадный бисквит.',
		image: '/images/photo_2025-06-17_20-16-19.jpg',
		category: 'Десерты',
		price: 350,
	},
])

const filteredProducts = computed(() => {
	if (currentTab.value === 'Все') {
		return products.value.slice(0, 10)
	}
	return products.value
		.filter(p => p.category === currentTab.value)
		.slice(0, 10)
})
</script>

<template>
	<div class="flex flex-col h-full pt-8 md:pt-12 px-4 md:px-8">
		<div
			class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-2"
		>
			<h2 class="text-white text-3xl md:text-4xl mb-0">Меню</h2>

			<div class="hidden md:block w-[2px] h-10 bg-white opacity-80"></div>

			<div class="flex flex-wrap gap-2 md:gap-4 w-full">
				<button
					:class="[
						'flex-1 text-center text-white px-3 py-2 border-b-2 cursor-pointer font-semibold transition-colors duration-300',
						currentTab === tab ? 'border-white' : 'border-transparent',
					]"
					v-for="tab in tabs"
					:key="tab"
					@click="
						() => {
							currentTab = tab
						}
					"
				>
					{{ tab }}
				</button>
			</div>
		</div>

		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4 w-full items-stretch"
		>
			<div
				v-for="product in filteredProducts"
				:key="product.id"
				class="border border-[rgba(255,255,255,0.2)] p-3 md:p-4 text-white flex flex-col h-full rounded"
			>
				<img
					:src="product.image"
					:alt="product.name"
					class="w-full h-40 md:h-36 object-cover rounded mb-3"
				/>
				<h3 class="text-lg md:text-xl font-semibold mb-2">
					{{ product.name }}
				</h3>

				<div class="flex justify-between items-center gap-2 mb-2">
					<p
						class="text-sm text-[rgba(255,255,255,0.7)] truncate"
						:title="product.description"
					>
						{{ product.description }}
					</p>
					<p
						class="text-sm text-[rgba(255,255,255,0.7)] font-bold whitespace-nowrap"
					>
						{{ product.price }}р.
					</p>
				</div>

				<!-- <button
					class="mt-auto bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
				>
					Подробнее
				</button> -->
			</div>
		</div>
	</div>
</template>
