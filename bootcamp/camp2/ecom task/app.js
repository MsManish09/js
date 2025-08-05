const userName = 'Manish M S'
const password = 'manishms'
let wallet_amt = 300

// select required elements

let inp_name = document.querySelector('#username')
let inp_pass = document.querySelector('#userpassword')
let btn = document.querySelector('#login')
let message = document.querySelector('#final_message')

let order_item = document.querySelector('#name')
let order_price = document.querySelector('#price')
let order_btn = document.querySelector('#order')

let items = document.querySelector('#itemsss')

btn.addEventListener('click', async function() {
    
    if(await userValidation()){
        inp_pass.parentElement.parentElement.classList.add('hidden')
        items.classList.remove('hidden')
    }
    
})

order_btn.addEventListener('click', async function() {
    if(await checkout()){
        order_item.parentElement.parentElement.classList.add('hidden')
        message.classList.add('green')
        message.classList.remove('hidden');
        message.children[0].innerHTML = `<h3>Order placed successfully</h3>`;


    }
})

function userValidation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userName === inp_name.value && password === inp_pass.value) {
                resolve(true);
            } else {
                message.classList.remove('hidden');
                message.children[0].innerHTML = `<h3>UserName and password is incorrect.</h3>`;
                setTimeout(() => window.location.reload(), 2000);
                reject(false);
            }
        }, 4000);
    });
}

function checkout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (order_price.value <= wallet_amt) {
                resolve(true);
            } else {
                message.classList.remove('hidden');
                message.children[0].innerHTML = `<h3>Balance insufficient to order ${order_item.value}</h3>`;
                setTimeout(() => window.location.reload(), 2000);
                reject(false);
            }
        }, 4000);
    });
}
