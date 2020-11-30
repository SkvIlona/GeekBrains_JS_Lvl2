import OrderItem from './orderitem'
export default class Order {
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

    show_basket(div)
{   
    div.innerHTML = ""

    if (this.order_list.length) {
      this.show(div)

        let ttlprc = document.createElement('div')
        ttlprc.className = "total"
        let s = this.total_price()
        ttlprc.innerHTML = "Общая сумма:  " + s
        div.appendChild(ttlprc)  
    } else {
        div.innerHTML = "Ваша корзина пока пуста"
    }   

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
            this.add(orderItem)
            .then(() => {this.show_basket(div)}) 
            })

            let my_btn_buy_minus = document.createElement('button-minus')
            my_btn_buy_minus.className = "my-btn-buy-minus"
            my_btn_buy_minus.id = orderItem.code
            my_btn_buy_minus.innerHTML = " - "
            div.appendChild(my_btn_buy_minus)

            my_btn_buy_minus.addEventListener('click',() =>{
            this.del(orderItem)
            .then(() => {this.show_basket(div)}) 
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


}