(function (){

const buttons = document.querySelectorAll(' .btn')
const storeImages = document.querySelectorAll(' .store-item')

buttons.forEach((button) => {
    buutton.adventListener('click',(e) =>{
e.preventDefault()
const filter = e.target.dataset.filter

    

storeImages.forEach((item) =>{
    if (filter === 'all'){
        item.computedStyleMap.display = 'block'

    }else{
        if (item.classList.contains(filter)){
            item.computedStyleMap.display='block'
        }
        else{
            item.computedStyleMap.display= 'none'
        }
    }
})
    })
})

})();