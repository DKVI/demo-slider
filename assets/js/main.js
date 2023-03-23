const btns = document.querySelectorAll ('a')
const container = document.querySelector ('#container')
const loadingScreen = document.querySelector ('.loading-screen')
const loading = document.querySelector ('.loading-inner')
const percent = document.querySelector ('.loading-percent')
let pc = 0;
const App = {

    callAnimation (URL) {
        URL = '#' + URL
        console.log (URL)
        return new Promise((resolve, reject) => {
            document.querySelector('.screen.active').classList.remove("active")
            if (!document.querySelector('.screen.active')) {
                resolve(true)
            }
            reject (false)
        })
        .then (() => {
            document.querySelector (`${URL}`).classList.add ('active')
        })
    },

    handleEvent() {
        Array.from (btns).forEach ((btn) => {
            btn.onclick = () => {
                this.callAnimation(btn.href.split('#')[1])
                document.querySelector('a .op-content.active').classList.remove('active')
                btn.querySelector('.op-content').classList.add('active')
            }
        })   
    }    ,
    start () {
        this.handleEvent();
    }
}


const setLoading = setInterval(() => {
    pc+= 1;
    loading.style.width = pc+'%'
    percent.innerHTML = pc+'%'
    if (pc === 99) {
        clearInterval(setLoading)
    }
}, 300);

window.onload = () => {
    clearInterval(setLoading)
    loadingScreen.style.display = 'none'
    container.style.display = 'flex';
    App.start ();
}
