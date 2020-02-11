/*
GAMBIARRA MODE: ON
*/

window.addEventListener("load", (e) => {
    const allGameItems = document.querySelectorAll(".game-list-item");
    for(let i=0; i<allGameItems.length; i++) {
        allGameItems[i].addEventListener("click", (e) => {
            window.location.href = "game.html";
        });
    }

    const allBackButtons = document.querySelectorAll(".back-icon.icon-back");
    for(let i=0; i<allBackButtons.length; i++) {
        allBackButtons[i].addEventListener("click", (e) => {
            window.location.href = "index.html";
        });
    }
});
