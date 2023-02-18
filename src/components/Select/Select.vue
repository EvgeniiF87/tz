<template>
	<select v-model="selectValue" @change="selectChange" class="select">
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
export default {
	data() {
		return {
			selectValue: "",
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

		selectedQueryValue() {
			if (this.getQueryParam) {
				this.selectValue = this.getQueryParam
			}
		},
	},

	methods: {
		selectChange(event) {
			this.$emit("update:selectValue", event.target.value)
		},
	},
}
</script>

<style lang="scss" scoped>
.select {
	padding: 10px;
	margin: 5px 0;
	width: 70%;
	color: #9d9b9b;
	font-size: 12px;

	&:focus {
		outline: none;
	}
}
</style>
