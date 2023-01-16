const homeContent = document.getElementById("home-content")
const portfolioContent = document.getElementById("portfolio-content")
if (homeContent) {
    dataHome.forEach(object => createData(object.image, object.alt, object.title, object.description, homeContent))
} else if (portfolioContent) {
    dataPortfolio.forEach(object => createData(object.image, object.alt, object.title, object.description, portfolioContent))
}

function createData(imageParameter, altParameter, titleParameter, descriptionParameter, pageContent) {
    const data = document.createElement("div")
    data.classList.add("projects__data")

    const imageContainer = document.createElement("div")
    imageContainer.classList.add("projects__data--image")
    
    const image = document.createElement("img")
    image.setAttribute("src", imageParameter)
    image.setAttribute("alt", altParameter)
    
    imageContainer.appendChild(image)

    const text = document.createElement("div")
    text.classList.add("projects__data--text")

    const title = document.createElement("h4")
    title.classList.add("projects__data--title")
    title.innerHTML = titleParameter
    
    const description = document.createElement("p")
    description.classList.add("projects__data--description")
    description.innerHTML = descriptionParameter
    
    text.appendChild(title)
    text.appendChild(description)
    
    data.appendChild(imageContainer)
    data.appendChild(text)
    
    data.addEventListener("click", () => {
        data.classList.contains("show-description") ?
        data.classList.remove("show-description") :
        data.classList.add("show-description")})
    
    pageContent.appendChild(data)
}