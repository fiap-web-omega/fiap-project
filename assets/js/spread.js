const nationalAirCompanies = ['Azul','Gol','Latam']

const airCompanies = [
    ...nationalAirCompanies,
    'Delta',
    'Qatar',
    'Emirates',
    'United Airlines',
    'Tap'
]

console.log(airCompanies);

const [azul,voeGol,latam,delta, ...internacionais] = airCompanies;

//
//
console.log(internacionais,'Verificando as internacionais');

const user = {
    name: 'John',
    email: 'john@gmail.com'
}

const {password, ...data} = user;

console.log(data);