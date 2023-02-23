<script>
import Search from "../Input/InputSearch.vue"
import Select from "../Select/Select.vue"
import ComfirmedOrders from "../Select/ComfirmedOrders.vue"
import IconBase from "../IconBase/IconBase.vue"
import FilterIcon from "../icons/FilterIcon.vue"
import style from "./filter-bar.module.scss"

export default {
	components: {
		Search,
		Select,
		ComfirmedOrders,
		IconBase,
		FilterIcon,
	},

	created() {
		window.addEventListener("resize", this.resizeHandle)
	},

	destroyed() {
		window.removeEventListener("resize", this.resizeHandle)
	},

	data() {
		return {
			selectSortModel: "",
			selectStatusModel: "",
			selectOrder: "",
			popup: false,
			windowWidth: 0,
			style,
		}
	},

	computed: {
		getQueryParam() {
			return this.$route.query
		},

		getComfirmedOrdersFrom() {
			return this.$store.getters.COMFIRMED_ORDERS_FROM
		},

		getComfirmedOrdersTo() {
			return this.$store.getters.COMFIRMED_ORDERS_TO
		},

		users() {
			return this.$store.getters.USERS
		},

		optionSortList() {
			return this.$store.getters.THEAD_LIST
		},

		ordersList() {
			return this.$store.getters.ORDERS_LIST
		},

		optionStatusList() {
			const list = []
			const status = []

			status.push({ title: "Все", value: "все" })

			this.users.map((user) => list.push(user.status))

			list
				.filter((item, index) => index === list.indexOf(item))
				.map((value) => {
					status.push({
						title: value.charAt(0).toUpperCase() + value.slice(1),
						value: value,
					})
				})

			return status
		},
	},

	methods: {
		HandleFilterBtn() {
			this.popup = !this.popup
		},

		HandleResult() {
			this.popup = false

			this.$router.push({
				path: "/",
				query: {
					status: this.selectStatusModel,
					sorted: this.selectSortModel,
					comfirmed_orders_from: this.getComfirmedOrdersFrom,
					comfirmed_orders_to: this.getComfirmedOrdersTo,
					order: this.selectOrder,
				},
			})
		},

		HandleResetFiltered() {
			this.popup = false
			this.$router.push("/")
		},

		resizeHandle() {
			console.log(document.documentElement.clientWidth)
			this.windowWidth = document.documentElement.clientWidth
		},
	},

	watch: {
		selectSortModel(newValue) {
			this.$store.dispatch("SORTED_VALUE_ACTION", newValue)
		},

		selectStatusModel(newValue) {
			this.$store.dispatch("STATUS_VALUE_ACTION", newValue)
		},

		selectOrder(newValue) {
			this.$store.dispatch("ORDER_VALUE_ACTION", newValue)
		},
	},
}
</script>

<template>
	<div :class="style.wrap">
		<Search />
		<div :class="style.filter">
			<button
				v-if="windowWidth <= 800"
				:class="style.filter__btn"
				@click.stop="HandleFilterBtn"
			>
				<IconBase :class="style.filter__icon">
					<FilterIcon />
				</IconBase>
			</button>

			<button v-else :class="style.filter__btn" @click.stop="HandleFilterBtn">
				Фильтр
			</button>

			<div @click.stop v-if="popup" :class="style.filter__popup">
				<div :class="style.title">Отфильтровать по статусу:</div>
				<Select
					v-model="selectStatusModel"
					:selectType="'status'"
					:optionList="optionStatusList"
				/>

				<div :class="style.title">Сортировать по:</div>
				<Select
					v-model="selectSortModel"
					:selectType="'sorted'"
					:optionList="optionSortList"
				/>

				<div :class="style.title">Порядок сортировки:</div>
				<Select
					v-model="selectOrder"
					:selectType="'order'"
					:optionList="ordersList"
				/>

				<ComfirmedOrders />

				<button :class="style.result_btn" @click="HandleResult">
					Применить
				</button>

				<button :class="style.result_btn" @click="HandleResetFiltered">
					Ссбросить
				</button>
			</div>
		</div>
	</div>
</template>
