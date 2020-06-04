function play(item) {
    let element = document.getElementById(item);
    element.play();
    element.currentTime = 0;
}

Array.from(document.getElementsByClassName("item"))
    .forEach((item) => {
        item.addEventListener("click", () => {
            let itemName = item.dataset.name;

            item.classList.add(`pop${itemName}`);
            setTimeout(() => {
                item.classList.remove(`pop${itemName}`);
            }, 0.1 * 1000);
        });
    });