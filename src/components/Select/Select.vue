<template>
	<select v-model="selectValue" @change="selectChange" :class="style.select">
		<option value="" disabled>Выберите из списка</option>

		<option
			v-for="option in optionList"
			:key="option.value"
			:value="option.value"
			:selected="option.value === selectValue"
		>
			{{ option.title }}
		</option>
	</select>
</template>

<script>
import style from "./select.module.scss"

export default {
	data() {
		return {
			selectValue: "",
			style,
		}
	},

	created() {
		if (this.getQueryParam) {
			this.selectValue = this.getQueryParam
		}
	},

	props: {
		optionList: {
			type: Array,
			default: () => [],
		},
		selectType: {
			type: String,
			default: "",
		},
	},

	computed: {
		getQueryParam() {
			return this.$route.query[this.selectType] ?? false
		},
	},

	methods: {
		selectChange(event) {
			this.$emit("update:selectValue", event.target.value)
		},
	},
}
</script>
