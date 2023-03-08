class Banque {
    constructor(nom, montant) {
        this.nom = nom;
        this.montant = montant;
        console.log(`-------------solde initial: ${this.montant}`);
    }

    afficherMontant() {
        console.log("le solde actuel est :" + " " + this.montant + " " + "Euros");

    }

    depot(depotArgent) {
        console.log(`-------------depot de: ${depotArgent}`);
        this.montant += depotArgent;
        this.afficherMontant();

    }

    retrait(retraitArgent) {
        console.log(`-------------retrait de: ${retraitArgent}`);
        if (retraitArgent > this.montant) {
            console.log("Opération refusé");
        } else {
            this.montant -= retraitArgent;
            this.afficherMontant();
        }


    }
}

const b = new Banque("Samba", 50000);

b.depot(50000);
b.retrait(10000);

