const bar=document.getElementById('bar');
const nav=document.getElementById('nav-bar');

if(bar){
    bar.addEventListener('click',() => {
        nav.classlist.add('hover');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}