<template>
	<FilterBar />

	<Table />
</template>

<script>
import Table from "../components/Table/Table.vue"
import FilterBar from "../components/FilterBar/FilterBar.vue"
export default {
	components: {
		Table,
		FilterBar,
	},
}
</script>

<style lang="scss" scoped></style>
