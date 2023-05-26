let firstOption = document.getElementById('search-location')
let secondOption = document.getElementById('search-type')
let reset = document.getElementById('btn-reset')
let searchBar = document.getElementById("search-bar")
let section1 = document.getElementById('section')
let section2 = document.getElementById('byType')
let firstSelect = document.getElementById('categorySelect')
let secondSelect = document.getElementById('activitySelect')


function byLocationClicked(){
    secondSelect.value = 0
    section2.style.display = 'none'
    section1.style.display = 'flex'

}
function byTypeClicked(){
    firstSelect.value = 0
    section1.style.display = 'none'
    section2.style.display = 'flex'
    
}
firstOption.onchange = byLocationClicked
secondOption.onchange = byTypeClicked

reset.addEventListener('click', function(){
    secondSelect.value = 0
    section2.style.display = 'none'
    firstSelect.value = 0
    section1.style.display = 'none'
})

