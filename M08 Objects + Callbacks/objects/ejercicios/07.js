// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    propiedad1: 'valor1',
    propiedad2: 'valor 2',
    propiedad3: {
        propiedad4: 'valor 3',
        propiedad5: 'valor 4',
        propiedad6: {
            propiedad7: 'valor5',
            propiedad8: 'valor6',
            propiedad9: function () {
                return 'valor7'
            }
        }
    },
};


module.exports = objetoAnidado;
