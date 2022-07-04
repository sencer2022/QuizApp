function Soru(soruMetni,cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("1-Hangisi Javascript paket yönetim uygulamasıdır?", {a: "NodeJS", b: "Typscript", c: "Npm", d: "Nuget"}, "c"),
    new Soru("2-Hangisi Javascript paket yönetim uygulamasıdır?", {a: "NodeJS", b: "Typscript", c: "Npm"}, "c"),
    new Soru("3-Hangisi Javascript paket yönetim uygulamasıdır?", {a: "NodeJS", b: "Typscript", c: "Npm"}, "c"),
    new Soru("4-Hangisi Javascript paket yönetim uygulamasıdır?", {a: "NodeJS", b: "Typscript", c: "Npm"}, "c"),
];

function Quiz(sorular){   // "Quiz" constructor'ının içine "sorular" dizisini attık ki o dizinin elamanları da "Soru" constructor'ı ile oluşturulmuştur.
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function(){
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);


document.querySelector(".btn-start").addEventListener("click", function(){
    document.querySelector('.quiz_box').classList.add("active");
    soruGoster(quiz.soruGetir());
});

document.querySelector(".next_btn").addEventListener("click", function(){
    if (quiz.sorular.length != quiz.soruIndex+1){
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir());
    }else{
        console.log("Quiz bitti")
    }
});

function soruGoster(soru){
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for (let cevap in soru.cevapSecenekleri){
        options += 
            `
                <div class="option">
                    <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                </div>

            `;
    }

    document.querySelector(".question-text").innerHTML = question;
    document.querySelector(".option-list").innerHTML = options;

}