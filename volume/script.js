let volume = 50
function render() {
    // можно таким образом:
    let screen = document.getElementById('screen');
    // let screen = document.getElementById('player').firstElementChild;
    let slider = document.getElementById('slider');
    // let slider = document.getElementById('player').children[1].children[1];
    screen.value = volume
    slider.value = volume

    screen.addEventListener('input', () =>
        slider.value = screen.value
    )
    slider.addEventListener('input', () =>
        screen.value = slider.value
    )
    
}



function up() {
    volume++
    render()
}

function down() {
    volume--
    render()
}

function change() {

}