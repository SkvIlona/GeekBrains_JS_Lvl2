
class Order_item {
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

class Order {
    order_list = ''

    constructor (order_item) {
        if(order_item){
            this.order_list = new Array(order_item)
        }
        else {
            this.order_list = new Array()
        }
    }

    add(order_item) {
        
       let isInclude = false
        this.order_list.forEach(CurentItem => {
            if(CurentItem.code == order_item.code){
                isInclude = CurentItem.quantity_product++
            }
        })
        if(!isInclude){
            let pushitem = new Order_item(order_item.code_product, order_item.name_product, order_item.price_product, order_item.quantity_product)
            this.order_list.push(pushitem)
        }
    }


    del(order_item) {

        let isInclude = true
        this.order_list.forEach(function (item, index, items) {
            if(item.code == order_item.code){
                isInclude = --item.quantity_product
            }
            if(!isInclude){
                items.splice(index,1)
            }
        })
  
    }


    total_price() {
        return this.order_list.reduce(function (price, current) {
            return price + current.quantity*current.price
        },0)    
    }

    show(div) {
        this.order_list.forEach(orderItem => {
            orderItem.show_item(div)

            let my_btn_buy_plus = document.createElement('button-plus')
            my_btn_buy_plus.className = "my-btn-buy-plus"
            my_btn_buy_plus.id = orderItem.code
            my_btn_buy_plus.innerHTML = "+"
            div.appendChild(my_btn_buy_plus)

            my_btn_buy_plus.addEventListener('click',function(){
            my_order.add(orderItem)
            show_basket(my_order,order)
            })

            let my_btn_buy_minus = document.createElement('button-minus')
            my_btn_buy_minus.className = "my-btn-buy-minus"
            my_btn_buy_minus.id = orderItem.code
            my_btn_buy_minus.innerHTML = " - "
            div.appendChild(my_btn_buy_minus)

            my_btn_buy_minus.addEventListener('click',function(){
            my_order.del(orderItem)
            show_basket(my_order,order)
            })
        })
    }
}



let all_items = new Order(new Order_item('001','Юбка','3650','1')) 
all_items.add(new Order_item('002','Брюки','7200','1'))
all_items.add(new Order_item('003','Блуза','1400','1'))

let my_order = new Order ()

const products = document.querySelector('.product')
const order = document.querySelector('.order')

show_basket(my_order,order)

all_items.order_list.forEach(orderItem => {
    let order_item_name = document.createElement('div')
    order_item_name.className = "name-product"
    order_item_name.innerHTML = orderItem.name
    products.appendChild(order_item_name)

    let order_item_price = document.createElement('div')
    order_item_price.className = "price-product"
    order_item_price.innerHTML = orderItem.price
    products.appendChild(order_item_price)

    let my_btn_buy = document.createElement('button')
    my_btn_buy.className = "my-btn-buy"
    my_btn_buy.id = orderItem.code
    my_btn_buy.innerHTML = "В корзину"
    products.appendChild(my_btn_buy)

    my_btn_buy.addEventListener('click',function(){
        my_order.add(orderItem)
        show_basket(my_order,order)
        
    })
   
})

function show_basket(basket, div)
{   
    div.innerHTML = ""

    if (basket.order_list.length) {
      basket.show(order)

        let ttlprc = document.createElement('div')
        ttlprc.className = "total"
        let s = basket.total_price()
        ttlprc.innerHTML = "Общая сумма:  " + s
        order.appendChild(ttlprc)  
    } else {
        div.innerHTML = "Ваша корзина пока пуста"
    }   

}




