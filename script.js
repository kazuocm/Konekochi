let healthbar = document.querySelector('#healthbar')
let active = querySelector('.active')

function acao() {
    let active = document.querySelector('.active');
    if (active) {
        if (healthbar.childElementCount >= 10) {
            return;
        }
        let c = document.createElement("div");
        c.classList.add("health")
        healthbar.appendChild(c)
        console.log("Elemento 'health' adicionado ao healthbar.");
    }
}

function left() {
    let active = document.querySelector('.active');
    if (active) {
        let previous = active.previousElementSibling;
        if (previous) {
            active.classList.remove('active');
            previous.classList.add('active');
        }
    }
}

function right() {
    let active = document.querySelector('.active');
    if (active) {
        let next = active.nextElementSibling;
        if (next) {
            active.classList.remove('active');
            next.classList.add('active');
        }
    }
}

function start() {
    let active = document.querySelector('.active');
    if (active) {
        acao();
    }
}

function perdervida() {
    let c = document.querySelector('.health');
    if (c) {
        healthbar.removeChild(c);
        console.log("Elemento 'health' removido do healthbar.");
    } else {
        console.log("Nenhum elemento 'health' encontrado para remover.");
    }
    console.log(c)
}

setInterval(() => {
    console.log("Chamando perdervida()...");
    perdervida();
}, 1000);

