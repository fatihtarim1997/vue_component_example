<script setup>
import { ref } from "vue";
const props = defineProps(['isSettingsOpen', 'title', 'setting1', 'setting2', 'setting3', 'setting4','isFirstRequired']);
const emits = defineEmits(["closeModal"]);

const isModalOpen = ref(false);
// const isFirstRequired = true;
const closeModal = () => {
	emits("closeModal", isModalOpen)
};
</script>

<template>
	<div class="settings">
		<button class="close-modal" @click="closeModal">&times;</button>
		<h1 class="modal--title">{{props.title}}</h1>

		<table class="cookie--table">
			<tr>
				<td>
					<p class="cookie__settings">{{setting1}}</p>
				</td>
				<td>
					<label class="switch">
						<input type="checkbox" checked :disabled="props.isFirstRequired"/>
						<span class="slider round"></span>
					</label>
				</td>
			</tr>
			<tr>
				<td>
					<p class="cookie__settings">{{setting2}}</p>
				</td>
				<td>
					<label class="switch">
						<input type="checkbox" />
						<span class="slider round"></span>
					</label>
				</td>
			</tr>
			<tr>
				<td>
					<p class="cookie__settings">{{setting3}}</p>
				</td>
				<td>
					<label class="switch">
						<input type="checkbox" />
						<span class="slider round"></span>
					</label>
				</td>
			</tr>
			<tr>
				<td>
					<p class="cookie__settings">{{setting4}}</p>
				</td>
				<td>
					<label class="switch">
						<input type="checkbox" />
						<span class="slider round"></span>
					</label>
				</td>
			</tr>
		</table>
	</div>
</template>

<style scoped>
.settings {
	@apply absolute top-[50%] left-[50%] w-[35%] min-w-[300px] bg-white p-4 rounded-[7px] z-10;
	transform: translate(-50%, -50%);
	box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);

}

.modal--title {
	@apply text-center;
}

.close-modal {
	@apply flex items-center justify-center absolute top-0 right-0 text-[36px] bg-slate-200 rounded-tr-lg rounded-bl-lg w-8;
	@apply hover:bg-slate-400;

}

.modal--title {
	font-size: 2.5rem;
	margin-bottom: 2rem;
}

p {
	font-size: 1.8rem;
}

.cookie--table {
	width: 100%;
}

.switch {
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;
}

.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}

.slider:before {
	position: absolute;
	content: "";
	height: 26px;
	width: 26px;
	left: 4px;
	bottom: 4px;
	background-color: white;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}

input:checked+.slider {
	background-color: green;
}

input:focus+.slider {
	box-shadow: 0 0 1px green;
}

input:checked+.slider:before {
	-webkit-transform: translateX(26px);
	-ms-transform: translateX(26px);
	transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
	border-radius: 34px;
}

.slider.round:before {
	border-radius: 50%;
}
</style>
