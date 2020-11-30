import OrderItem from './orderitem'
import Order from './order'
const products = document.querySelector('.product')
const order = document.querySelector('.order')
/* class OrderItem {
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
} */
//К уроку 2 (lvl2)

let possible_name = ["Юбка", "Брюки", "Джемпер", "Куртка", "Пальто", "Свитер", "Шорты"]
let possible_price = ["3500", "1700", "8000", "3200", "2700"]

function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length)
    return arr[rand]
}
 
function create_order_item (arr1,arr2) {
   
    all_items.add(new OrderItem(all_items.order_list.length+1,arrayRandElement(possible_name),arrayRandElement(possible_price),'1'))
}

//

/* class Order {
    order_list = []

    constructor (order_item) {
        if(order_item){
            this.order_list = new Array(order_item)
        }
        
    }

    add(order_item) {
        return new Promise ((resolve, reject) =>{
            if(order_item === undefined){reject()}
            else{
                let isInclude = false
                this.order_list.forEach(function (item, index, items) {
                    if(item.code == order_item.code){
                        isInclude = item.quantity_product++
                        resolve()
                    }
                })
                    if(!isInclude){
                        let pushitem = new OrderItem(order_item.code_product, order_item.name_product, order_item.price_product, order_item.quantity_product)
                        this.order_list.push(pushitem)
                        resolve()
                    }
                } 
        }) 
    }


    del(order_item) {
        return new Promise ((resolve, reject) =>{
            if(order_item === undefined){reject()}
            else{
            this.order_list.forEach(function (item, index, items) {
                let isInclude = true
                if(item.code == order_item.code){
                    isInclude = --item.quantity_product
                                    }
                if(!isInclude){
                    items.splice(index,1)
                }
            })
            resolve()
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

            my_btn_buy_plus.addEventListener('click',() =>{
            my_order.add(orderItem)
            .then(() => {show_basket(my_order,order)}) 
            })

            let my_btn_buy_minus = document.createElement('button-minus')
            my_btn_buy_minus.className = "my-btn-buy-minus"
            my_btn_buy_minus.id = orderItem.code
            my_btn_buy_minus.innerHTML = " - "
            div.appendChild(my_btn_buy_minus)

            my_btn_buy_minus.addEventListener('click',() =>{
            my_order.del(orderItem)
            .then(() => {show_basket(my_order,order)}) 
            })
        })
    }

    load(){
        var that = this
        return new Promise ((resolve, reject) =>{
        const result = fetch('http://localhost:3000/items.json')
        result
            .then(res => {
                return res.json()
            })
            .then(data => {             
               
                data.forEach((item, index, items) => {
                    let pushitem = new OrderItem(item.code_product, item.name_product, item.price_product, item.quantity_product)
                    that.order_list.push(pushitem)
                    })
                resolve()          
            })
          
        })
            console.log(this.order_list)
}
} */


let all_items = new Order() 

let my_order = new Order ()


my_order.show_basket(order)

all_items.load()
.then(() => {all_items.order_list.forEach(orderItem => {
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
        .then(() => {my_order.show_basket(order)}) 
        
    })
   
})

})

/* function show_basket(basket, div)
{   
    div.innerHTML = ""

    if (basket.order_list.length) {
      basket.show(order,my_order)

        let ttlprc = document.createElement('div')
        ttlprc.className = "total"
        let s = basket.total_price()
        ttlprc.innerHTML = "Общая сумма:  " + s
        order.appendChild(ttlprc)  
    } else {
        div.innerHTML = "Ваша корзина пока пуста"
    }   

} */
        
        let my_btn_add = document.createElement('button')
        my_btn_add.className = "my-btn-add"
       
        my_btn_add.innerHTML = "Отобразить еще товары"
        products.appendChild(my_btn_add)

        my_btn_add.addEventListener('click',function(){
            for (let i=0; i<2; i++)
            {

            
                    create_order_item(possible_name,possible_price)
                    let new_item = all_items.order_list[all_items.order_list.length-1]
                    let order_item_name = document.createElement('div')
                    order_item_name.className = "name-product"
                    order_item_name.innerHTML = new_item.name_product
                    products.appendChild(order_item_name)

                    let order_item_price = document.createElement('div')
                    order_item_price.className = "price-product"
                    order_item_price.innerHTML = new_item.price_product
                    products.appendChild(order_item_price)

                    let my_btn_buy = document.createElement('button')
                    my_btn_buy.className = "my-btn-buy"
                    my_btn_buy.id = new_item.code_product
                    my_btn_buy.innerHTML = "В корзину"
                    products.appendChild(my_btn_buy)

                    my_btn_buy.addEventListener('click',function(){
                        my_order.add(new_item)
                        .then(() => {my_order.show_basket(order)}) 
                        
                    })
            }
      
        if (all_items.order_list.length > 12) {
            my_btn_add.style.display = "none"
        }
    
})