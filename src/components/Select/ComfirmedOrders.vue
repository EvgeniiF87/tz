<script>
import style from "./comfirmed-orders.module.scss"

export default {
	data() {
		return {
			ComfirmedOrdersFrom: "",
			ComfirmedOrdersTo: "",
			style,
		}
	},

	created() {
		if (this.getQueryParam) {
			this.ComfirmedOrdersFrom = this.getQueryParam["comfirmed_orders_from"]
			this.ComfirmedOrdersTo = this.getQueryParam["comfirmed_orders_to"]
		}
	},

	computed: {
		getQueryParam() {
			return this.$route.query ?? false
		},
	},

	methods: {
		HandeleInputFrom() {
			this.$store.dispatch(
				"COMFIRMED_ORDERS_FROM_ACTION",
				this.ComfirmedOrdersFrom
			)
		},

		HandeleInputTo() {
			this.$store.dispatch("COMFIRMED_ORDERS_TO_ACTION", this.ComfirmedOrdersTo)
		},
	},
}
</script>

<template>
	<div :class="style.wrap">
		<div :class="style.title">По подтвержденным заказам</div>
		<div :class="style.inputs">
			<input
				v-model="ComfirmedOrdersFrom"
				@input="HandeleInputFrom"
				type="number"
				placeholder="от"
			/>

			<div :class="style.difis">&#8211;</div>

			<input
				v-model="ComfirmedOrdersTo"
				@input="HandeleInputTo"
				type="number"
				placeholder="до"
			/>
		</div>
	</div>
</template>
