// get DOM elements
const generateQuoteBtn = document.querySelector('[data-generate-quote-btn]')
const quoteText = document.querySelector('[data-quote-text]')

// declare globals
const apiURL = 'https://api.quotable.io/quotes/random'

// define function that updates the DOM with the quote data
const generateQuote = (data) => {
    const content = data[0].content
    const author = data[0].author

    quoteText.innerText = `\"${content}\"\n- ${author}`
}

// define function that fetches quote data using only then and catch
const fetchData1 = () => {
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not fetch resource')
            }
            return response.json()
        })
        .then(data => generateQuote(data))
        .catch(error => console.error(error))
}

// define function that fetches quote data using async / await
const fetchData2 = async () => {
    try {
        const response = await fetch(apiURL)
        if (!response.ok) {
            throw new Error('Could not fetch resource')
        }
        const data = await response.json()
        generateQuote(data)
    }
    catch(error) {
        console.error(error)
    }
}

// handle generate quote button being clicked
generateQuoteBtn.addEventListener('click', (e) => {
    // fetchData1()
    fetchData2()
})