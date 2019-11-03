/* show menu */
function toggleButton() {
    let menu = document.getElementById("toggle").style.display;
    if (menu == 'none') {
        document.getElementById("toggle").style.display = 'block';
    } else {
        document.getElementById("toggle").style.display = 'none';
    }
}