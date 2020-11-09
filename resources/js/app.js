var app = new Vue({
	el: '#root',
	data: {
		busca : '',
		resultbuscabtn:[],
		products: [
			{
				name: 'Ice Cream',
				price: '500',
				toImage: 'sweets-1.jpeg',
				description: "lorem lorem lorem"
			},
			{
				name: 'KitKat',
				price: '2500',
				toImage: 'sweets-2.jpeg',
				description: "lorem lorem lorem"
			},
			{
				name: 'Lollipop',
				price: '2500',
				toImage: 'doughnut-3.jpeg',
				description: "lorem lorem lorem"
			},
			{
				name: 'Marshmallow',
				price: '2500',
				toImage: 'cake-3.jpeg',
				description: "lorem lorem lorem"
			},
			{
				name: 'Lollipop',
				price: '2500',
				toImage: 'cake-1.jpeg',
				description: "lorem lorem lorem"
			},
			{
				name: 'Oreo',
				price: '2500',
				toImage: 'cupcake-1.jpeg',
				description: "lorem lorem lorem"
			}			
		]
	},
	methods : {
		resultadobusca : function(){
			this.resultbuscabtn = this.products
			if (this.busca =="" || this.busca==" ") {
				this.resultbuscabtn = this.products
			}else{
				this.resultbuscabtn = this.products.filter(product => product.name == this.busca)
			}
		}
	},
	created(){
		this.resultadobusca()
	},
})