let locationDropdown = () => {
    let selection = document.querySelector("#categorySelect")
    selection.onchange = chosenStateHandler
    
    for ( const location of locationsArray ) { 
        const newOption = document.createElement("option")
        newOption.innerText = location
        selection.append(newOption)
    }

}
locationDropdown()

function chosenStateHandler(event) {
    // console.log(event.target.value)

    const chosenEvent = event.target.value 

    const usersChose = location => location.State === chosenEvent
    const selectedPark = nationalParksArray.filter(usersChose)
    console.log(selectedPark)
    let selectedElement = document.querySelector("#section")
     selectedElement.replaceChildren()

for (const arr of selectedPark){

        let myDiv = document.createElement('div')
        myDiv.classList.add('search-results')
    selectedElement.append(myDiv)

    for (const park in arr) {
            
            const myp = document.createElement('p')
        if (park === 'Location'){
            myp.innerText = `${park}: (${arr[park].coordinates.join(', ')}), type: ${arr[park].type}`
        
            
        } else {

            myp.innerText = `${park}: ${arr[park]}`
        }
        
        myDiv.appendChild(myp)
        console.log(park)
    }

}
  


}