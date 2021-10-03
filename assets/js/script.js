import menuDropdown from './menu-dropdown.js'
// Open buy tickets

const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')

function showBuyTickets() {
    modal.classList.add('open')
}

for (let buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

// Close buy tickets
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

// Nghe hành vi click
modalClose.addEventListener('click', closeBuyTickets)
modal.addEventListener('click', closeBuyTickets)
modalContainer.addEventListener('click', stopPropagation)
    // Hàm đóng buy tickets
function closeBuyTickets() {
    modal.classList.remove('open')
}

function stopPropagation(event) {
    event.stopPropagation()
}

// Start: Menu dropdown
menuDropdown();
// End: Menu dropdown