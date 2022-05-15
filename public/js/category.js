const automotive  = document.getElementById('automotive')
automotive.addEventListener('click', viewAutomotive);

const health  = document.getElementById('health')
health.addEventListener('click', viewHealth);

const food  = document.getElementById('food')
food.addEventListener('click', viewFood);

const pets  = document.getElementById('pets')
pets.addEventListener('click', viewPets);

const homeImprovement  = document.getElementById('home-improvement')
homeImprovement.addEventListener('click', viewHomeImprovement);

const diy  = document.getElementById('diy')
diy.addEventListener('click', viewDiy);

let category = ''

async function viewAutomotive() {
    // render automotive posts
    console.log('This worked!')

    let category = 'automotive';
    
    if (category === "automotive") {
        const response = await fetch(`/api/posts/category/${category}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);
        if (!response.ok) {
            alert(response.statusText);
        }
    }
};

async function viewHealth() {
    // render health posts
    console.log('This worked!')

    let category = 'health';
    
    if (category === "health") {
        const response = await fetch(`/api/posts/Category/${category}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);
        if (!response.ok) {
            alert(response.statusText);
        }
    }
};

async function viewFood() {
    // render food posts
    console.log('This worked!')

    let category = 'food';
    
    if (category === "food") {
        const response = await fetch(`/api/posts/Category/${category}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);
        if (!response.ok) {
            alert(response.statusText);
        }
    }
};

async function viewPets() {
    // render pet posts
    console.log('This worked!')

    let category = 'pet';
    
    if (category === "pet") {
        const response = await fetch(`/api/posts/Category/${category}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);
        if (!response.ok) {
            alert(response.statusText);
        }
    }
};

async function viewHomeImprovement() {
    // render home improvement posts
    console.log('This worked!')

    let category = 'home-improvements';
    
    if (category === "home-improvements") {
        const response = await fetch(`/api/posts/Category/${category}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);
        if (!response.ok) {
            alert(response.statusText);
        }
    }
};

async function viewDiy() {
    // render diy posts
    console.log('This worked!')

    let category = 'diy';
    
    if (category === "diy") {
        const response = await fetch(`/api/posts/Category/${category}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);
        if (!response.ok) {
            alert(response.statusText);
        }
    }
};