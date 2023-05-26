// working using locationData

let locationDropdown = () => {
    let selection = document.querySelector("#categorySelect")
    selection.onchange = chosenStateHandler
    
    for ( const location of locationsArray ) { 
        const newOption = document.createElement("option")
        newOption.innerText = location
        newOption.setAttribute('class', 'locations')
        selection.append(newOption)
    }

}
locationDropdown()

// using nationalParkData
function chosenStateHandler(event) {
    // console.log(event.target.value)

    const chosenEvent = event.target.value 

    const usersChose = location => location.State === chosenEvent
    const selectedPark = nationalParksArray.filter(usersChose)
    let selectedElement = document.querySelector("#section")
     selectedElement.replaceChildren()
     
     
     for (const arr of selectedPark){
         
            let parkImages = document.createElement('div')
            parkImages.setAttribute('class', 'search-loc')
         
         let myDiv = document.createElement('div')
         myDiv.classList.add('search-results')
         selectedElement.append(myDiv)

       
        console.log(arr.Img)
         if (arr.Img !== undefined ){
           let localImage = document.createElement("img")
           localImage.setAttribute('class', 'searched-img')
           localImage.setAttribute('src', arr.Img)
           myDiv.append(localImage)
          

        }
         
    for (const parks in arr) {
            let linkedElmt = document.createElement('a')
            let myParkElmt = document.createElement('p')

              if (parks === 'LocationID'){
                let el = arr[parks].toUpperCase()
                let idLocation = `${parks}: ${el}`
                myParkElmt.innerText = idLocation;
            }
 
            else if (parks === 'Address'){

               myParkElmt.innerText = `Address: ${arr.Address}, ${arr.City}, ${arr.State}, ${arr.ZipCode}` 
            }
            else if (parks === 'City' || parks === 'State' || parks === 'ZipCode') {
                myParkElmt.innerText = null
            }

            else if (parks === 'Location'){
                myParkElmt.innerText = `${parks}: coordinates(${arr[parks].coordinates.join(', ')})`
            }
            
            else if (parks === 'Visit') {
                linkedElmt.setAttribute('href', `${arr[parks]}`)
                linkedElmt.setAttribute('target', '_blank')
                linkedElmt.innerText = 'Learn More'
                myDiv.append(linkedElmt)
            }
            
                else if (parks === 'Img' || parks ==='Latitude' || parks === 'Longitude' || parks ==='Fax') {
                myParkElmt.innerText = null
            
            }
        
    
        else {

            myParkElmt.innerText = `${parks}: ${arr[parks]}`
        }
        parkImages.append(myParkElmt)
        myDiv.append(parkImages)
        
    }


}
  


}
