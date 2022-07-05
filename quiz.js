function Quiz(sorular){   // "Quiz" constructor'ının içine "sorular" dizisini attık ki o dizinin elamanları da "Soru" constructor'ı ile oluşturulmuştur.
    this.sorular = sorular;
    this.soruIndex = 0;
    this.dogruCevapSayisi = 0;
}

Quiz.prototype.soruGetir = function(){
    return this.sorular[this.soruIndex];
}