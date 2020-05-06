const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
	const productFilter = productsList.filter(product => ids.includes(product.id))
	
	const products = productFilter.map(
		product => {
			return {
				name: product.name,
				category:  product.category
			}
		}
	)

	const categories = productFilter.map(
		product => product.category
	)

	const diferent_categories = categories.reduce( (all, category) => {
		if (category in all) {
			all[category]++
		} else {
			all[category] = 1
		}
		return all
	}, {})

	const diferent_categories_count = Object.keys(diferent_categories).length

	const promotion = promotions[diferent_categories_count-1]

	const rPrice = productFilter.map(
		product => product.regularPrice		
	)

	const regularPrice = rPrice.reduce((x, y) => x+y).toFixed(2)

	const pPrice = []

	const price = (productFilter.map( (product, i) => {
		product.promotions.forEach(element => {
			if (element.looks.includes(promotion)) return pPrice.push(element.price)
		});
		if(pPrice.length < i+1) pPrice.push(product.regularPrice)
	}))

	const totalPrice = pPrice.reduce((x, y) => x+y).toFixed(2)

	const discountValue = regularPrice - totalPrice

	const discountPercentage = ((discountValue/regularPrice) * 100).toFixed(2) + '%'

	const result = {
		products: products,
		promotion: promotion,
		totalPrice: totalPrice,
		discountValue: discountValue.toFixed(2),
		discount: discountPercentage
	}

	return result; 
}

module.exports = { getShoppingCart };
