export default class OrderItem {
    code_product = ''
    name_product = ''
    price_product = ''
    quantity_product = ''

    constructor (code_product, name_product, price_product, quantity_product) {
        this.code_product = code_product
        this.name_product = name_product
        this.price_product = price_product
        this.quantity_product = quantity_product
    }

    show_item(div) {
        let order_item_name = document.createElement('div')
        order_item_name.className = "name-product"
        order_item_name.innerHTML = this.name_product
        div.appendChild(order_item_name)

        let order_item_price = document.createElement('div')
        order_item_price.className = "price-product"
        order_item_price.innerHTML = this.price_product
        div.appendChild(order_item_price)

        let order_item_quantity = document.createElement('div')
        order_item_quantity.className = "quantity-product"
        order_item_quantity.innerHTML = this.quantity_product
        div.appendChild(order_item_quantity)
    }

    get name() {
        return `${this.name_product}`
    }

    get price() {
        return `${this.price_product}`
    }

    get code() {
        return `${this.code_product}`
    }
    get quantity() {
        return `${this.quantity_product}`
    }
}