window.onload = main

function main(){
    populateListofMountains()
}

function populateListofMountains() {
    const selectElement = document.querySelector("#mountainList")
    selectElement.onchange = mountainChangeHandler

    for (const mountain of mountainsArray) {
        const newOption = document.createElement("option")

        newOption.value = mountain.name
        newOption.innerText = mountain.name
        selectElement.append(newOption)

    }
}

function mountainChangeHandler(event) {
    console.log(event.target.value)

    const selectedMountain = event.target.value

    const mountainByUserChoice = mountain => mountain.name === selectedMountain
    const selectedName = mountainsArray.find(mountainByUserChoice)

    const mainElement = document.getElementById('mount-search')
    mainElement.replaceChildren()

    

const imageElemet = document.createElement("img")
            imageElemet.setAttribute('src', `./images/${selectedName.img}`)
            imageElemet.setAttribute('class', 'mount-image')
            mainElement.append(imageElemet)
            
            
            let pElHolder = document.createElement('div')
            pElHolder.setAttribute('class', 'p-el-holder')


    
    for (const index in selectedName) {
        const pEl = document.createElement('p')
        pEl.setAttribute('class', 'chosen-mount-disc')
        let newIndex = index
        newIndex = newIndex.charAt(0).toUpperCase() + newIndex.slice(1, newIndex.length)
        pEl.innerText = `${newIndex}: ${selectedName[index]}`

        if (selectedName === undefined){
            pEl.innerText = null
    
        } else {

        if (index === 'coords'){
        pEl.innerText = `${newIndex}: Lat(${selectedName[index].lat}), Lng(${selectedName[index].lng})`

        } else if(index === 'img'){
            pEl.innerText = null

        }
        pElHolder.append(pEl)
        mainElement.append(pElHolder)
        
      }
    }
     

}
mountainChangeHandler()


  





  






