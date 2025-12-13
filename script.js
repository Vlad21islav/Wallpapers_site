let images = [
    {'name': 'красный закат', 'path': '/images/image1.jpg', 'category': 'Природа'}, 
    {'name': 'синие горы', 'path': '/images/image2.jpg', 'category': 'Природа'}, 
    {'name': 'пейзаж гор и озера', 'path': '/images/image3.jpg', 'category': 'Природа'}, 
    {'name': 'туманный вид на деревню', 'path': '/images/image4.jpg', 'category': 'Природа'},
    {'name': 'серая абстракция', 'path': '/images/image5.jpg', 'category': 'Абстракция'},
    {'name': 'minecraft закат', 'path': '/images/image6.jpg', 'category': 'Игры'},
    {'name': 'minecraft река', 'path': '/images/image7.jpg', 'category': 'Игры'},
    {'name': 'туманный лес', 'path': '/images/image8.jpg', 'category': 'Природа'},
    {'name': 'чёрная абстракция', 'path': '/images/image9.jpg', 'category': 'Абстракция'},
];

let categories = ['Все', 'Природа', 'Абстракция', 'Игры']

function renderWallpapers(list) {
    let wallpapers = document.getElementById('wallpapers');
    wallpapers.innerHTML = '';
    list.forEach((element, index) => {
        wallpapers.innerHTML += `
            <a href="${element.path}" download="${element.name}" id="downloadLink">
                <img class="wallpapers" src="${element.path}" alt="${element.name}">
            </a>
        `;
    })
}

function add_categories() {
    let categories_div = document.getElementById('categories');
    categories.forEach((element, index) => {
        categories_div.innerHTML += `
            <a id="category-${index}" class="category">${element}</a>
        `;
    })
    categories.forEach((element, index) => {
        document.getElementById(`category-${index}`).onclick = ()=> renderWallpapers(element == 'Все' ? images : images.filter((m)=>m.category==element));
    })
}

function renderTable() {
    let table = document.getElementById('table');
    images.forEach((element, index) => {
        table.innerHTML += `
            <tr>
                <th>${element.category}</td>
                <td>${element.name}</td>
                <td><img class="wallpapers" src="${element.path}" alt="${element.name}"></td>
            </tr>
        `;
    })
}

window.onload = () => {
    renderWallpapers(images);
    add_categories();
    renderTable();
};
