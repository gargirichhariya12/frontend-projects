// const app = document.getElementById('app');

// app.style.color = 'red';

// //classes are many and its is dus consider as an array but nott an actual array to provide them an styling we have to create an array out of it and then use an forEach method
// const container = document.getElementsByClassName('container')
// const containerArr = Array.from(container)

// containerArr.forEach(div => (div.style.color  = 'blue'))

/////////////////////////////////////////////////////////////////////////////////

// const app = document.querySelector('[data-test]')
// console.log(app);

// const btn =document.querySelector('#btn')
// function showAlert() {
//     console.log('Button clicked!')
// }
// btn.addEventListener('click', () => {
//     alert('Button clicked!')
// })
// btn.addEventListener('click', showAlert);


//////////////////////////////////////////////////

// //1.Select all elements
// const Form = document.querySelector('#myForm')
// const input = document.querySelector('#item-input')
// const list = document.querySelector('#list')

// //when i select the form add a new element

// Form.addEventListener("submit", e => {
//     e.preventDefault()

    
//     //1. create a new item
//     const item = document.createElement('div')
//     item.innerText = input.value
//     item.classList.add('list-item')
    
//     //2. Add that item to the list
//     list.appendChild(item)
    
//     //3. Clear input
//     input.value = ""
//     //4. setup event listener t  delete item when clicked
//     item.addEventListener('click', () =>
//     {
//         item.remove()
//     })

// })
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const modal = document.querySelector('#modal')
const openBtn =document.querySelector('#open-modal-btn')
const closeBtn = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')

openBtn.addEventListener('click', e =>{
    modal.classList.add('open')
    overlay.classList.add('open')
})

closeBtn.addEventListener('click' , () =>{
    modal.classList.remove('open')
    overlay.classList.remove('open')
})
