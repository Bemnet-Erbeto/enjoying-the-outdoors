let parkTypeDropdown = () => {
    let selectedElement = document.querySelector("#activitySelect")
    selectedElement.onchange = selectByUserChose

    for (let types of parkTypesArray ) {
        let newElement = document.createElement("option")
        newElement.innerText = types
        newElement.setAttribute('class', 'byType')
        selectedElement.append(newElement)
    }

    
}
parkTypeDropdown()

function selectByUserChose (event) {

    let userchose = event.target.value 

    let chosenPark = input => input.LocationName.includes(userchose)
    let filteredResult = nationalParksArray.filter(chosenPark)

    let sectionByType = document.querySelector('#byType')

    sectionByType.replaceChildren()

    for (let result of filteredResult){
        let newDv = document.createElement('div')
        newDv.setAttribute('class', 'new-div')
        for (let results in result){
            let createdElmt = document.createElement('p')
            if (results === 'Location'){
                createdElmt.innerText = `${results}: coordinates(${result[results].coordinates.join(', ')}), type: ${result[results].type}`

            } else if(results === 'LocationID'){
                let el = result[results].toUpperCase()
                let outPut= `${results}: ${el}`
               createdElmt.innerText = outPut;

            } else if(results === 'Visit'){
                let linkEl = document.createElement('a')
                linkEl.setAttribute('href', `${result[results]}`)
                linkEl.setAttribute('target', '_blank')
                linkEl.innerText = 'Click Here'
                newDv.appendChild(linkEl)

            } else if (results === 'Address' ){
                
                createdElmt.innerText = `Address: ${result.Address}, ${result.City}, ${result.State} ${result.ZipCode}`
                
            } else if (results === 'City' || results === 'State' || results === 'ZipCode') {
                createdElmt.innerText = null
                createdElmt.style.marginBottom = '0'
            }
            
            else {

                createdElmt.innerText = `${results}: ${result[results]}`
            }
            newDv.append(createdElmt)
        }
       
        sectionByType.appendChild(newDv)
    }
}
