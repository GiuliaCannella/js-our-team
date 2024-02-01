
let container = document.getElementById('card-container')





let peoples = [
    {
        nome: 'Wayne ',
        cognome: 'Barnett',
        ruolo: 'Founder & CEO',
        foto:'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela  ',
        cognome: 'Caroll',
        ruolo: 'Chief Editor',
        foto:'angela-caroll-chief-editor.jpg'  
    },
    {
        nome: 'Walter',
        cognome: 'Gordon',
        ruolo: 'Office Manager',
        foto:'walter-gordon-office-manager.jpg'  
    },
    {
        nome: 'Angela',
        cognome: 'Lopez',
        ruolo: 'Social Media Manager',
        foto:'angela-lopez-social-media-manager.jpg'  
    },
    {
        nome: 'Scott',
        cognome: 'Estrada',
        ruolo: 'Developer',
        foto:'scott-estrada-developer.jpg'  
    },
    {
        nome: 'Barbara',
        cognome: 'Ramos',
        ruolo: 'Graphic Designer',
        foto:'barbara-ramos-graphic-designer.jpg'  
    },
]

for (let i = 0; i < peoples.length; i++) {
    const people = peoples[i];
    console.log(people.nome);

    let peopleText = `
    <div class="col-4">            
        <div class="card-people rounded">
       
        <img src="img/${people.foto}" class='img-fluid' alt="">
        <div class="nome">${people.nome}</div>
        <div class="cognome">${people.cognome}</div>
        <div class="ruolo">${people.ruolo}</div>
        </div>
    </div>
    `
    container.innerHTML += peopleText;
}