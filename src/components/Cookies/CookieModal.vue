<script setup>
import { onMounted, ref } from "vue";
import { getLocalCookie, saveLocalCookie } from "../../service/local";

import CookieSettings from "./CookieSettings.vue";
import CookiePolicy from "./CookiePolicy.vue";

const cookie = ref(null);
const isSettingsOpen = ref(false);
const isPolicyOpen = ref(false);

const props = defineProps({
	rejectButtonActive: {
		type: Boolean,
		default: true,
	},
	cookieModalBGC: {
		type: String,
		default: "rgb(38, 38, 38)",
	},
	cookieHeader: {
		type: String,
		default: "Daha iyi bir deneyim için izninizi istiyoruz.",
	},
	cookieHeaderColor: {
		type: String,
		default: "white",
	},
	cookieDescription: {
		type: String,
		default: `Tanımlama bilgilerini; sitemizin doğru şekilde çalışmasını sağlamak, içerikleri ve reklamları kişiselleştirmek, sosyal medya özellikleri sunmak ve site
                    trafiğimizi analiz etmek için kullanıyoruz. Aynı zamanda site kullanımınızla ilgili bilgileri; sosyal medya, reklamcılık ve analiz ortaklarımızla paylaşıyoruz.`,
	},
	cookieDescriptionColor: {
		type: String,
		default: "white",
	},
	cookiePolicy: {
		type: String,
		default: "Çerez Politikası",
	},
	cookiePolicyColor: {
		type: String,
		default: "orange",
	},
	cookieSettings: {
		type: String,
		default: "Çerez Ayarları",
	},
	// acceptButton: {
	// 	type: Object,
	// 	default: () => {
	// 		return {
	// 			text: "Kabul Et",
	// 			bgColor: "orange"
	// 		}
	// 	}
	// },
	acceptButtonText: {
		type: String,
		default: "Kabul Et",
	},
	acceptButtonColor: {
		type: String,
		default: "white",
	},
	acceptButtonBGC: {
		type: String,
		default: "rgb(255, 128, 0)",
	},
	declineButtonText: {
		type: String,
		default: "Reddet",
	},
	declineButtonColor: {
		type: String,
		default: "white",
	},
	declineButtonBGC: {
		type: String,
		default: "rgb(255, 128, 0)",
	},
	// declineButton: {
	// 	text: {
	// 		type: String,
	// 		default: "Reddet",
	// 	},
	// 	bgColor: {
	// 		type: String,
	// 		default: "rgb(255 96 0 / var(--tw-bg-opacity))"
	// 	}
	// }
	cookieSettingsTitle: {
		type: String,
		default: "Çerez Ayarları",
	},
	isFirstRequired:{
		type: Boolean,
		default: true,
	},
	cookieSettings_1: {
		type: String,
		default: "Zorunlu Çerezler",
	},
	cookieSettings_2: {
		type: String,
		default: "Performans Çerezleri",
	},
	cookieSettings_3: {
		type: String,
		default: "Hedefleme Çerezleri",
	},
	cookieSettings_4: {
		type: String,
		default: "İşlevsellik Çerezleri",
	},
	cookiePolicyTitle: {
		type: String,
		default: "Çerez Politikası",
	},
	cookiePolicyText: {
		type: String,
		default: `Biz, Şirket Adı, olarak güvenliğinize önem veriyor ve bu Çerez Politikası ile siz sevgili ziyaretçilerimizi, web sitemizde hangi çerezleri, 
		hangi amaçla kullandığımız ve çerez ayarlarınızı nasıl değiştireceğiniz konularında kısaca bilgilendirmeyi hedefliyoruz.`,
	},
});

onMounted(() => {
	const cookieData = getLocalCookie() || false;
	cookie.value = cookieData;
});

function acceptCookie() {
	saveLocalCookie(true);
	cookie.value = true;
	return;
}

function declineCookie() {
	saveLocalCookie(false);
	cookie.value = true;
	console.log(cookie.value);
}

function openSettings() {
	isSettingsOpen.value = true;
}

function openPolicy() {
	isPolicyOpen.value = true;
}

function closeModalHandler(isClosed) {
	isSettingsOpen.value = isClosed.value;
}
function closeModalPolicyHandler(isClosed) {
	isPolicyOpen.value = isClosed.value;
}
</script>

<template>
	<template v-if="isSettingsOpen">
		<CookieSettings
			:isSettingsOpen="isSettingsOpen"
			@closeModal="closeModalHandler"
			:isFirstRequired="isFirstRequired"
			:title="props.cookieSettingsTitle"
			:setting1="props.cookieSettings_1"
			:setting2="props.cookieSettings_2"
			:setting3="props.cookieSettings_3"
			:setting4="props.cookieSettings_4"
		>
		</CookieSettings>
	</template>
	<template v-if="isPolicyOpen">
		<CookiePolicy
			:isPolicyOpen="isPolicyOpen"
			@closeModalPolicy="closeModalPolicyHandler"
			:PolicyTitle="props.cookiePolicyTitle"
			:PolicyText="props.cookiePolicyText"
		></CookiePolicy>
	</template>
	<template v-if="!cookie">
		<div class="cookie" :style="{ backgroundColor: props.cookieModalBGC }">
			<div class="cookie__description">
				<div class="cookie__header">
					<p :style="{ color: props.cookieHeaderColor }">
						{{ props.cookieHeader }}
					</p>
				</div>
				<div class="cookie__text">
					<p :style="{ color: props.cookieDescriptionColor }">
						{{ props.cookieDescription }}
						<a
							class="policy"
							:style="{ color: props.cookiePolicyColor }"
							@click="openPolicy"
							>{{ props.cookiePolicy }}</a
						>
					</p>
				</div>
			</div>
			<div class="cookie__buttons">
				<button
					@click="acceptCookie"
					class="accept-cookie"
					:style="{
						backgroundColor: props.acceptButtonBGC,
						color: props.acceptButtonColor,
					}"
				>
					{{ props.acceptButtonText }}
				</button>
				<template v-if="props.rejectButtonActive">
					<button
						@click="declineCookie"
						class="decline-cookie"
						:style="{
							backgroundColor: props.declineButtonBGC,
							color: props.declineButtonColor,
						}"
					>
						{{ props.declineButtonText }}
					</button>
				</template>
				<a class="cookie-settings" @click="openSettings">{{
					props.cookieSettings
				}}</a>
			</div>
		</div>
	</template>
</template>

<style lang="scss" scoped>
.cookie {
	@apply absolute bottom-0 flex w-full text-gray-50 flex-col md:flex-row;
	box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

	&__description {
		@apply w-full flex justify-center flex-col p-3;

		.cookie__header {
			@apply text-[18px] mb-3;
		}

		.cookie__text {
			@apply text-[14px];
		}

		.policy {
			@apply underline text-primary cursor-pointer;
			// cursor: pointer;
		}

		.policy:hover {
			@apply text-orange-700 brightness-90;
		}
	}

	&__buttons {
		@apply flex justify-center items-center gap-6 m-3;

		.accept-cookie {
			@apply p-3 rounded-[3px] w-32;
			// background-color: v-bind(acceptBGC);
		}

		.accept-cookie:hover {
			@apply text-gray-300 brightness-90;
		}

		.decline-cookie {
			@apply p-3 rounded-[3px] w-32;
			// background-color: v-bind(declineBGC);
		}

		.decline-cookie:hover {
			@apply text-gray-300 brightness-90;
		}
		.cookie-settings {
			@apply cursor-pointer;
		}

		.cookie-settings:hover {
			@apply brightness-75;
		}
		
	}
}
</style>
