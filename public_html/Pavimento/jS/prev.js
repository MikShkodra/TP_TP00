

class Pavimento {

    constructor(nome, lunghezza, larghezza, cosmq) {
        this.nome = nome.toUpperCase();
        this.lungheza = lunghezza*1;
        this.larghezza= larghezza* 1;
        this.cosmq = cosmq* 1;
    }

    prezzoFinale() {
        let ris = "";

        ris = this.nome + ":" + "<br/>" 
                + "dimensioni" + this.lungheza + "x" + this.larghezza + "<br/>" 
                + "Costo al mq" + this.cosmq + "€"
                + "Costo totale:" + (this.lungheza*this.larghezza*this.cosmq) + "€"
        ;

        return ris;
    }


}

