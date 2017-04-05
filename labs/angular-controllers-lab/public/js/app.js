var app = angular.module('storeApp', []);

app.controller("ProductsController", function() {
	var vm = this;

	vm.products = [
	{ name: 'Surface Book', price: '1500.43', dateAdded: '1490929458881'},
	{ name: 'MacBook Pro 15"', price: '1800.34', dateAdded: '1490929458881'},
	{ name: 'Macbook Pro 13"', price: '1600.28', dateAdded: '1490929458881'},
	{ name: 'TI-86', price: '100.43', dateAdded: '1490929458881'},
	{name: 'UE Roll Speaker', price: '90.78', dateAdded: '1490929458881'}
	];
	vm.newProduct = {};
	vm.addProduct = function() {
		vm.products.push({
			name: vm.newProduct.name, 
			price: vm.newProduct.price,
			dateAdded: Date.now()
		});
		vm.newProduct = {};
	};
});

app.controller("CategoriesController", function() {
	var vm = this;

	vm.productCategories = [
		'Smartphones',
		'Bluetooth Speakers',
		'Video Games'
	];

});
