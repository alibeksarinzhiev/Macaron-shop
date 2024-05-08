

let btn = document.querySelector('button')
let email = document.querySelector('.email')
let password = document.querySelector('.password')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let user = {
        email:email.value,
        password:password.value
    }
    fetch('http://localhost:3030/users',{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },

    })
    email.value = ''
    password.value = ''
})