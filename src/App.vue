<script setup>
import CookieModal from './components/Cookies/CookieModal.vue';
import SearchInput from './components/AutoComplete/SearchInput.vue';

const cookieContext = {
	// rejectButtonActive: true,
	// cookieModalBGC: "black",
	// cookieHeader: "Header Text Here",
	// cookieHeaderColor: "white",
	// cookieDescription: "Description Here",
	// cookieDescriptionColor: "white",
	// cookiePolicy: "Policy Here",
	// cookiePolicyColor: "green",
	// cookieSettings: "SettingsText",
	// acceptButtonText: "AcceptText",
	// acceptButtonColor: "white",
	// acceptButtonBGC: "green",
	// declineButtonText: "DeclineText",
	// declineButtonColor: "white",
	// declineButtonBGC: "green",
	// cookieSettingsTitle: "Title Here",
	// isFirstRequired: true,
	// cookieSettings_1: "Setting1",
	// cookieSettings_2: "Setting2",
	// cookieSettings_3: "Setting3",
	// cookieSettings_4: "Setting4",
	// cookiePolicyTitle: "Policy Title Here",
	// cookiePolicyText: "Policy Text Here ",
	
	//------------------------
	// acceptButton:{
	//    //text:"Kabul Et",
	//    //textColor: "white",
	//    //bgColor: "green",
	// },
	// declineButton:{
	//     text:"Reddet",
	//     textColor: "white",
	//     bgColor: "coral",
	//     bgHover: ""
	// }
	}
</script>

<template>
	<SearchInput></SearchInput>
	<CookieModal v-bind="{...cookieContext}"></CookieModal>

</template>

<style scoped>

</style>
