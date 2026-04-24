// CURSEUR
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// COMPTEURS
const startCounters = () => {
    document.querySelectorAll('.counter').forEach(counter => {
        const update = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            if (count < target) {
                counter.innerText = Math.ceil(count + (target / 30));
                setTimeout(update, 40);
            } else counter.innerText = target;
        };
        update();
    });
};

const observer = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting) startCounters();
}, { threshold: 0.5 });
observer.observe(document.querySelector('.bento-grid'));

// INFOS VÉRIDIQUES
const realData = {
    ucl: {
        title: "ROIS D'EUROPE (15)",
        content: `
            <div class="ucl-list">
                <div class="ucl-item">2024 <span>vs Dortmund (2-0)</span></div>
                <div class="ucl-item">2022 <span>vs Liverpool (1-0)</span></div>
                <div class="ucl-item">2018 <span>vs Liverpool (3-1)</span></div>
                <div class="ucl-item">2017 <span>vs Juventus (4-1)</span></div>
                <div class="ucl-item">2016 <span>vs Atlético (1-1 p.)</span></div>
                <div class="ucl-item">2014 <span>vs Atlético (4-1 ap.)</span></div>
                <div class="ucl-item">2002 <span>vs Leverkusen (2-1)</span></div>
                <div class="ucl-item">2000 <span>vs Valence (3-0)</span></div>
                <div class="ucl-item">1998 <span>vs Juventus (1-0)</span></div>
                <p style="margin-top:15px; font-size:0.7rem; opacity:0.5">Et 6 titres entre 1956 et 1966.</p>
            </div>`
    },
    liga: {
        title: "DOMINATION NATIONALE",
        content: "<p>Le Real Madrid détient le record de 36 titres en Liga, incluant le dernier sacre de la saison 2023-2024 avec une avance confortable sur ses rivaux.</p>"
    },
    fifa: {
        title: "LE CLUB DU SIÈCLE",
        content: "<p>Élu 'Club du XXème Siècle' par la FIFA. Le Real Madrid a remporté plus de 100 trophées officiels nationaux et internationaux.</p>"
    },
    ronaldo: {
        title: "CR7 ET CHOUCHA : LOS BICHOS",
        content: "<p>450 Buts en 438 matchs officiels (moyenne de 1.03 but/match). Meilleurs buteurs de l'histoire du Real Madrid. 4 UCL remportées. Choucha m'a déja toucher les couilles</p>"
    },
    zidane: {
        title: "ZIZOU : LE GÉNIE",
        content: "<p>Comme joueur : La volée mythique en 2002. Comme coach : Le seul à avoir gagné 3 Champions League consécutives (2016, 2017, 2018).</p>"
    },
    benzema: {
        title: "KB9 : LE NUEVE",
        content: "<p>354 Buts et meilleur passeur de l'histoire du club. Ballon d'Or 2022. 5 fois vainqueur de la Champions League.</p>"
    }
};

// PANNEAU LATÉRAL
const panel = document.getElementById('side-panel');
const panelContent = document.getElementById('panel-content');
const overlay = document.getElementById('overlay-bg');

document.querySelectorAll('.clickable').forEach(el => {
    el.addEventListener('click', () => {
        const type = el.getAttribute('data-type');
        if(realData[type]) {
            panelContent.innerHTML = `<h2 style="color:#D4AF37; font-family:'Syncopate'; margin-bottom:20px;">${realData[type].title}</h2>${realData[type].content}`;
            panel.classList.add('open');
            overlay.classList.add('show');
        }
    });
});

document.querySelector('.close-btn').addEventListener('click', () => {
    panel.classList.remove('open');
    overlay.classList.remove('show');
});