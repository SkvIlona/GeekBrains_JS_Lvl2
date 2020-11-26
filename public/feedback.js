function validName(){
    let re = /^[a-zа-я]+$/i
    let myName = document.getElementById('name').value
    let valid = re.test(myName)
    if (valid) console.log('Имя введено верно')
    else console.log('Имя введено неверно!')
    return valid
}

function validMail(){
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
    let myMail = document.getElementById('email').value
    let valid = re.test(myMail)
    if (valid) console.log('Email введен верно')
    else console.log('Email введен неверно!')
    return valid
}

function validPhone() {
    let re = /^[\d]{1}\([\d]{3}\)[\d]{3}-[\d]{4}$/
    let myPhone = document.getElementById('phone').value
    let valid = re.test(myPhone)
    if (valid) console.log('Номер телефона введен верно') 
    else console.log('Номер телефона введен неверно!') 
    return valid
} 


let otpr = document.querySelector('.otpr')

otpr.addEventListener('click',function(){
    validName()
    validMail()
    validPhone()
})