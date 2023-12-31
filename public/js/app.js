
const weatherForm = document.querySelector('form')
const searchEl = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() // prevent browser from refreshing the page upon submiting

    const location = searchEl.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('https://weak-pear-squid-hem.cyclic.cloud/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return messageOne.textContent = data.error
            }
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        })
    })
})