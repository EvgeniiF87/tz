<template>
	<input
		type="text"
		:class="style.input"
		v-model="value"
		@input="HandeleInput"
		@focus="HandleInputFocus"
		@blur="HandleInputBlur"
	/>
</template>

<script>
import style from "./input.module.scss"

export default {
	data() {
		return {
			value: "Поиск пользователей",
			style,
		}
	},

	methods: {
		HandeleInput(e) {
			if (
				e.target.value.length > 0 &&
				e.target.value !== "Поиск пользователей"
			) {
				this.value = e.target.value
				this.$store.dispatch("SEARCH_VALUE_ACTION", e.target.value)
			} else {
				this.$store.dispatch("SEARCH_VALUE_ACTION", "")
			}
		},

		HandleInputFocus(e) {
			if (
				e.target.value.length > 0 &&
				e.target.value !== "Поиск пользователей"
			) {
				return
			} else {
				this.value = ""
			}
		},

		HandleInputBlur(e) {
			if (
				e.target.value.length > 0 &&
				e.target.value !== "Поиск пользователей"
			) {
				this.value = e.target.value
				this.$store.dispatch("SEARCH_VALUE_ACTION", e.target.value)
			} else {
				this.value = "Поиск пользователей"
				this.$store.dispatch("SEARCH_VALUE_ACTION", "")
			}
		},
	},
}
</script>
