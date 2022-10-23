<script setup>
import { ref } from "vue";
const props = defineProps(["isPolicyOpen", "PolicyTitle", "PolicyText"]);
const emits = defineEmits(["closeModalPolicy"]);
const isModalOpen = ref(false);

const closeModalPolicy = () => {
	emits("closeModalPolicy", isModalOpen);
};
</script>

<template>
	<div class="policy">
		<button class="close-modal" @click="closeModalPolicy">&times;</button>
		<h1 class="policy--title">{{ props.PolicyTitle }}</h1>
		<p class="policy--text">{{ props.PolicyText }}</p>
	</div>
</template>

<style lang="scss" scoped>
.policy {
	@apply absolute top-[50%] left-[50%] w-[35%] min-w-[350px] bg-white p-[2rem] rounded-[7px] z-10;
	transform: translate(-50%, -50%);
	box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);

	&--title {
		@apply text-center text-2xl mb-3;
	}
	&--text {
		@apply text-xl;
	}
}
.close-modal {
	@apply flex items-center justify-center absolute top-0 right-0 text-[36px] bg-slate-200 rounded-tr-lg rounded-bl-lg w-8;
	@apply hover:bg-slate-400;
}


</style>
