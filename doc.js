const form = document.getElementById('form')



form.addEventListener('submit', function(e) {
    e.preventDefault()
    const image = document.getElementById('image').value
    const foodName = document.getElementById('foodName').value
    const price = document.getElementById('price').value
    const desc = document.getElementById('description').value
    const right = document.querySelector('.main_right')

    const card = `
    <div class="box" onclick=${"removeBox(event)"}>
        <img src="${image}" height="60px" alt="" class="main_img">
        <div class="box_div">
            <h5 class="main_title">${foodName}</h5>
            <p class="main_subtitle">${price}$</p>
        </div>
        <p class="main_desc">${desc}</p>
    </div>
    `
    right.innerHTML += card
    document.getElementById('image').value = ''
    document.getElementById('foodName').value = ''
    document.getElementById('price').value = ''
    document.getElementById('description').value = ''
})
 
function removeBox(e){
    console.log(e)
    e.target.remove() 

}