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