<script setup lang="ts">
import { ref, onMounted } from 'vue'

function useAnimatedNumber(target: number, duration = 2000) {
	const number = ref(0)
	let startTime: number | null = null

	function animate(time: number) {
		if (!startTime) startTime = time
		const progress = (time - startTime) / duration
		number.value = Math.floor(target * Math.min(progress, 1))

		if (progress < 1) {
			requestAnimationFrame(animate)
		} else {
			number.value = target
		}
	}

	onMounted(() => {
		requestAnimationFrame(animate)
	})

	return number
}

const years = useAnimatedNumber(11)
const cups = useAnimatedNumber(500000)
const guests = useAnimatedNumber(1200)
</script>

<template>
	<div class="flex gap-12 text-white text-center">
		<div>
			<div class="text-4xl font-bold">{{ years }} лет</div>
			<div class="text-sm text-[rgba(255,255,255,0.7)]">работаем для вас</div>
		</div>
		<div>
			<div class="text-4xl font-bold">{{ cups.toLocaleString() }}+</div>
			<div class="text-sm text-[rgba(255,255,255,0.7)]">чашек кофе продано</div>
		</div>
		<div>
			<div class="text-4xl font-bold">{{ guests }}+</div>
			<div class="text-sm text-[rgba(255,255,255,0.7)]">
				довольных гостей в день
			</div>
		</div>
	</div>
</template>

<style scoped></style>
