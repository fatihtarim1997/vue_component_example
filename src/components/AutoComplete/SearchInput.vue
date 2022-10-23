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
	"Alihan",
	"Ankara",
	"Rize",
	"Adıyaman",
	"Trabzon",
];

const searchData = computed(() => {
	filteredData.value = data.filter((dataItem) => {
		dataItem = dataItem.toLowerCase();
		return dataItem.startsWith(searchInput.value.toLowerCase());
	});
});

const searchComplete = (dataItem) => {
	searchInput.value = dataItem;
	modalToggle.value = false;
};
</script>

<template>
	<div class="wrapper">
		<div class="search__input">
			<input
				class="form__input"
				type="text"
				v-model="searchInput"
				@input="searchData"
				@keypress="modalToggle = true"
				@keyup.delete="modalToggle = true"
			/>
			<div class="filter__data">
				<ul v-if="searchInput && modalToggle">
					<li
						class="search__data"
						v-for="dataItem in filteredData"
						@click="searchComplete(dataItem)"
					>
						<img
							class="search__icon"
							src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
							alt=""
						/>{{ dataItem }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
	max-width: 450px;
	margin: 150px auto;
}

.form__input {
	height: 55px;
	width: 100%;
	outline: none;
	border: none;
	border-radius: 5px;
	padding: 0 60px 0 20px;
	font-size: 18px;
}

.form__input:focus {
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
}

.search__input {
	border-radius: 5px;
	position: relative;
	box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.12);
}

.search__icon {
	width: 15px;
	margin-right: 10px;
}

.search__data {
	list-style: none;
	padding: 2px;
	width: 100%;
	cursor: default;
	cursor: pointer;
	padding-left: 20px;
}

.search__data:hover {
	background-color: rgba(128, 128, 128, 0.269);
}

.filter__data li {
	display: flex;
	align-items: center;
}
</style>
