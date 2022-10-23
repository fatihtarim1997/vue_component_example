<script setup>
import { ref, computed } from "vue";

const searchInput = ref();
const filteredData = ref();
const modalToggle = ref(false);

const data = [
	"Hasan",
	"Hüseyin",
	"Ali",
	"Veli",
	"Fatih",
	"Fatih Tarım",
	"Fatih Tufan",
	"Alihan",
	"Ankara",
	"Rize",
	"Adıyaman",
	"Trabzon",
	"Tolga",
	"Cookie"
];

const searchData = computed(() => {
	filteredData.value = data.filter((dataItem) => {
		dataItem = dataItem.toLowerCase();
		return dataItem.includes(searchInput.value.toLowerCase());
	});
});

const searchComplete = (dataItem) => {
	searchInput.value = dataItem;
	modalToggle.value = false;
};

</script>

<template>
	<div class="form">
		<div class="search__input">
			<input class="form__input" type="text" v-model="searchInput" @input="searchData" @keypress="modalToggle = true"
				@keyup.delete="modalToggle = true" placeholder="Search"/>
			<div class="filter__data">
				<ul v-if="searchInput && modalToggle">
					<li class="search__data" v-for="dataItem in filteredData" @click="searchComplete(dataItem)">
						<img class="search__icon" src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="" />{{ dataItem }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.form {
	@apply flex justify-center items-center my-auto mt-[150px];

	&__input {
		@apply h-[55px] w-full outline-none border-none rounded-md text-base pr-14 pl-5;
	}

	&__input:focus {
		box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
	}

	.search__input {
		@apply rounded-md relative shadow-[0_1px_5px_3px_rgba(0,0,0,0.12)];
	}

	.search__icon {
		@apply w-[15px] mr-3;
	}

	.search__data {
		@apply list-none p-[2px] w-full cursor-pointer pl-5 flex items-center;
	}

	.search__data:hover {
		@apply bg-gray-300;
	}

}
</style>
