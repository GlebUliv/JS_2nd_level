    let menuContainer = document.getElementById('menu')
    let act = document.getElementsByClassName('anchor')
    for (let i = 0; i < act.length; i++) {
        act[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
// document.links[0].onclick = selectAction;