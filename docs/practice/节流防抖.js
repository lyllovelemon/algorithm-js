function debounce(fn,delay) {
    return function () {
        if(timer){clearTimeout(timer)}
        let timer=setTimeout(()=>{
            fn.apply(this,arguments)
        },delay)
    }
}

function throttle(fn,delay) {
    let timer=null
    return function () {
        if(!timer){
            timer=setTimeout(()=>{
                fn.apply(this,arguments)
            },delay)
        }

    }
}