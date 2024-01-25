// Tester kobling mellom script.js og ressurser.js
console.log(resources)
console.log(resources[0].category)


// Sett inn ressurser i nav-liste
const navHTML = document.getElementById("nav-list")

let navList = ""
function navResourceList(category, index, arr) {
    navList += `<li id="nav${index}" onClick="(showHTML(${index}))"><span id="nav${index}span">${category.category}</span></li>`
}
resources.forEach(navResourceList)
navHTML.innerHTML = navList


// Variabler for fremtidig bruk av .style og .innerHTML
const innerconHTML = document.getElementById("inner-container")

// Funksjoner for hvert nav-element, begynn visning av HTML når man åpner siden
function showHTML(id) {
    // Fixed farge på nav-element (selected)
    innerconHTML.innerHTML = ""
    resources.forEach(function(category, catid, arr){
        let bgColor = "var(--darkblue)"
        let txColor = "var(--fullwhite)"
        if (id === catid) {
            bgColor = "var(--fullwhite)"
            txColor = "var(--darkblue)"
        }
        document.getElementById(`nav${catid}`).style.backgroundColor = bgColor
        document.getElementById(`nav${catid}span`).style.color = txColor
    })
    // Endre tittel, content og links innenfor inner-container
    innerconHTML.innerHTML += `<h2>${resources[id].category}<h2>`
    innerconHTML.innerHTML += `<span>${resources[id].text}</span>`
    innerconHTML.innerHTML += "<ul>"
    resources[id].sources.forEach(function(src, srcid, srcarr){
        innerconHTML.innerHTML += `<li><a href="${src.url}">${src.title}</a></li>`
    })
    innerconHTML.innerHTML += "</ul>"
}
showHTML(0)