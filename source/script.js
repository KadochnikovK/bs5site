const cards = document.querySelector('#cards')


const data = [
    {
       src:  "images/laptop.png",
       headlineText: "Laptops",
       textContent: "Some quick example text to build on the card title and make up the bulk of the card's content",
       btnText: "Go Sopping"
    },
    {
       src:  "images/gaming pc.png",
       headlineText: "PC",
       textContent: "Some quick example text to build on the card title and make up the bulk of the content.",
       btnText: "Go Sopping"
    },
    {
       src:  "images/vr.png",
       headlineText: "VR",
       textContent: "Some quick example text to build on the card title and make up the bulk of the card's content",
       btnText: "Go Sopping"
    },
    {
       src:  "images/acc.png",
       headlineText: "ACC",
       textContent: "Some quick example text to build on the card title and make up the bulk of the card's content",
       btnText: "Go Sopping"
    },
]

const createCard = (src, headlineText, textContent, btnText) => {

    const card = document.createElement('div')
    card.classList.add('col-lg-4', 'col-md-6', 'mt-4', 'card')

    const img = document.createElement('img')
    img.src = src
    img.classList.add('card-img-top')

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const headline = document.createElement('h5')
    headline.textContent = headlineText
    headline.classList.add('card-title')

    const paragraph = document.createElement('p')
    paragraph.classList.add('card-text')
    paragraph.textContent = textContent

    const button = document.createElement('a')
    button.classList.add('btn', 'btn-primary')
    button.textContent = btnText

    cardBody.append(headline, paragraph, button)
    card.append(img, cardBody)
    console.log('карта ', card)
    return card
}

alert('Начинаем генерить карточки')
data.forEach(element => {
    const { src, headlineText, textContent, btnText } = element
    const card = createCard(src, headlineText, textContent, btnText)
    cards.append(card)
})