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
    soruNumarasiGoster(quiz.soruIndex+1, quiz.sorular.length);
    document.querySelector(".next_btn").classList.remove("show");
});

document.querySelector(".next_btn").addEventListener("click", function(){
    if (quiz.sorular.length != quiz.soruIndex+1){
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir());
        soruNumarasiGoster(quiz.soruIndex+1, quiz.sorular.length);
        document.querySelector(".next_btn").classList.toggle("show");
    }else{
        console.log("Quiz bitti")
    }
});

const option_list = document.querySelector(".option-list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';


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
    option_list.innerHTML = options;

    const option = option_list.querySelectorAll(".option");

    option.forEach(opt => {
        opt.setAttribute("onclick", "optionSelected(this)");
    })

}

function optionSelected(option){
    
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", correctIcon);
        
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", incorrectIcon);        
    }

    for (let i=0; i<option_list.children.length; i++){
        option_list.children[i].classList.add("disabled");
    }
    
    document.querySelector(".next_btn").classList.toggle("show");
}

function soruNumarasiGoster(soruSirasi, toplamSoru){
    let tag =  `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}