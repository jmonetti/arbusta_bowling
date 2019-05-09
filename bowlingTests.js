describe("Escenario: 01 Juego Nulo", function() {
	describe("Dado que el juego recien empiza", function() {
        beforeEach(function() {
					  juegoBowling = new Game();
		    });

        describe("Cuando tiro 20 veces 0 pinos", function () {
            beforeEach(function() {
                tirarPinos(juegoBowling, 20, 0);
	          });

            it("Entonces el resultado es 0", function() {
                expect(juegoBowling.calcularPuntos()).toBe(0);
            });
        });
    });
});

describe("Escenario: 02 Juego Simple todos unos", function() {

	describe("Dado que el juego recien empiza", function() {
        beforeEach(function() {
            juegoBowling = new Game();
        });

        describe("Cuando tiro 20 veces 1 pino", function () {
            beforeEach(function() {
                tirarPinos(juegoBowling, 20, 1);
	        });

            it("Entonces el resultado es 20", function() {
                expect(juegoBowling.calcularPuntos()).toBe(20);
            });
        });
    });
});

// instancia del juego de Bowling
var juegoBowling = null;

/*
Funcion tirarPinos
- juegoBowling: una instancia del juego de bowling
- cantTiros: la cantidad de veces que vamos a tirar
- pinos: la cantidad de pinos tirados por tiro
*/
function tirarPinos(juegoBowling, cantTiros, pinos) {
	for(i = 0; i < cantTiros; i++) {
		juegoBowling.roll(pinos);
	}
};
