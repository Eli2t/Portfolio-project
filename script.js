// When clicking a navigation link, smoothly scroll to the specific section
const linksElements = document.querySelectorAll('.links a')
linksElements.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault()
        const sectionID = link.getAttribute('href')
        const sectionElement = document.querySelector(sectionID)
        // Subtract 50 pixels to account for the fixed header height
        const offsetTop = sectionElement.offsetTop - 50
        scroll({
            top: offsetTop,
            behavior: 'smooth'
        })
    })
})