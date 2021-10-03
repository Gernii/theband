const header = document.getElementById('header');

const mobileMenu = document.getElementById('mobile-menu');
const headerHeight = header.clientHeight;

const menuItems = document.querySelectorAll('#nav li a[href*="#"]');

// Đóng mở mobile menu
function openAndCloseMenu() {
    let isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = '46px';
    }

}
// Tự động đóng khi chọn menu
for (let menuItem of menuItems) {
    menuItem.onclick = function(event) {
        let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}
// sub-main Fuct
function menuDropdown() {
    mobileMenu.addEventListener('click', openAndCloseMenu);
    // console.log(menuItems);
}
export default menuDropdown;