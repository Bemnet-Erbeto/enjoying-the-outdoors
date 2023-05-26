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
        
        let pHolder = document.createElement('div')
        pHolder.setAttribute('class', 'p-holder')

        let newDv = document.createElement('div')
        newDv.setAttribute('class', 'new-div')
        
        if (result.Img !== undefined){
            let myImages = document.createElement('img')
            myImages.setAttribute('src', result.Img)
            myImages.setAttribute('class', 'searched-img')
            newDv.append(myImages)
        }
        

        for (let results in result){
            let linkEl = document.createElement('a')
            let createdElmt = document.createElement('p')

            if (results === 'Location'){
                createdElmt.innerText = `${results}: coordinates(${result[results].coordinates.join(', ')})`

            } else if(results === 'LocationID'){
                let el = result[results].toUpperCase()
                let outPut= `${results}: ${el}`
               createdElmt.innerText = outPut;

            } else if(results === 'Visit'){
                linkEl.setAttribute('href', `${result[results]}`)
                linkEl.setAttribute('target', '_blank')
                linkEl.innerText = 'Visit Here'

            } else if (results === 'Address' ){
                
                createdElmt.innerText = `Address: ${result.Address}, ${result.City}, ${result.State} ${result.ZipCode}`
                
            } else if (results === 'City' || results === 'State' || results === 'ZipCode') {
                createdElmt.innerText = null
                createdElmt.style.marginBottom = '0'
            }

            else if (results === 'Latitude'){
                createdElmt.innerText =null
            }
            else if (results === 'Longitude' || results === 'Img' || results === 'Fax'){
                createdElmt.innerText =null
            }
            
            else {

                createdElmt.innerText = `${results}: ${result[results]}`
            }
            

            pHolder.append(createdElmt)
            pHolder.prepend(linkEl)
            

        }
        newDv.append(pHolder)
        sectionByType.appendChild(newDv)
    }
}
