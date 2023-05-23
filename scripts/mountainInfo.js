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
    console.log(selectedName.elevation)
    console.log(selectedName.img)
    const mainElement = document.querySelector("main")
    mainElement.replaceChildren()

    
    

const imageElemet = document.createElement("img")
            imageElemet.setAttribute('src', `./images/${selectedName.img}`)
            mainElement.append(imageElemet)




    
    for (const index in selectedName) {
        const divOne = document.createElement('div')
        let newIndex = index
        newIndex = newIndex.charAt(0).toUpperCase() + newIndex.slice(1, newIndex.length)
        divOne.innerText = `${newIndex}: ${selectedName[index]}`
        mainElement.append(divOne)
        if (index === 'coords'){
        divOne.innerText = `${newIndex}: Lat(${selectedName[index].lat}), Lng(${selectedName[index].lng})`

        } else if(index === 'img'){
            divOne.innerText = null

        }
        
      }
    

}
mountainChangeHandler()


  





  






