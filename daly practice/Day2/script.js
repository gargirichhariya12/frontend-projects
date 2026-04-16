var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var inner = document.querySelector('.inner')

var a = 0;
btn.addEventListener('click', function() {
    btn.style.pointerEvents = 'none'

     var int = setInterval(function(){
        a++;
        h1.innerHTML = a + '%';
        inner.style.width = a + '%'
        btn.innerHTML = 'Downloaded'
        btn.style.opacity= 0.5

    },50)

    setTimeout(function(){
        clearInterval(int)
    },5000)


    // setTimeout(function(){
    //     a++
    //     console.log(a)
    // } ,2000)
})