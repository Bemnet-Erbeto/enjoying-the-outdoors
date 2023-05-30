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

    const selectedMountain = event.target.value

    const mountainByUserChoice = mountain => mountain.name === selectedMountain
    const selectedName = mountainsArray.find(mountainByUserChoice)

    const mainElement = document.getElementById('mount-search')
    mainElement.replaceChildren()

   
 

    
    
    //   getSunriseSunsetData(arr.lat, arr.lng).then(data => {
    //           let sunrise = data.results.sunrise;
    //           let sunset = data.results.sunset;
          
    //     arr = {...arr, Sunrise: sunrise, Sunset: sunset}
              
    //     let thisDiv = document.getElementById('div')
    //     thisDiv.classList.add('search-results')
    //     selectedName.append(myDiv)      
                  
              
    //         })
const imageElemet = document.createElement("img")
            imageElemet.setAttribute('src', `./images/${selectedName.img}`)
            imageElemet.setAttribute('class', 'mount-image')
            mainElement.append(imageElemet)
            
            
            let pElHolder = document.createElement('div')
            pElHolder.setAttribute('class', 'p-el-holder')


          const latVal = selectedName.coords.lat
          const lngVal = selectedName.coords.lng
    
           // api call 
           async function getSunriseSunsetData(lat, lng) {
                
            const response = await fetch(
                  `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
                      const data = await response.json();
                      return data;
                  }
                  getSunriseSunsetData(latVal, lngVal).then(data => {
                    let sunrise = data.results.sunrise 
                    let sunset = data.results.sunset
                    selectedName.sunrise = sunrise
                    selectedName.sunset = sunset

      
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
  })

  }

  


mountainChangeHandler()

