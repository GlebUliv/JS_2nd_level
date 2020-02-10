let volume = 50
function render() {
    // можно таким образом:
    let screen = document.getElementById('screen')
    // let screen = document.getElementById('player').firstElementChild;
    let slider = document.getElementById('slider')
    // let slider = document.getElementById('player').children[1].children[1];
    screen.value = volume
    slider.value = volume

    
    
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

    let rng = document.querySelector('#player>.controls [type=range]')
    let txt = document.querySelector('.player [type=text]')

    rng.addEventListener('input', () =>
        txt.value = rng.value
    )
    txt.addEventListener('input', () =>
        rng.value = txt.value
    )

}