console.log('It works');

const products = [
    {
        image: 'burger.png',
        name: 'Burger',
        quantity: 1,
        price: 8.50,
    },
    {
        image: 'french fries.png',
        name: 'French Fries',
        quantity: 2,
        price: 5.50,
    },
    {
        image: 'kebab.png',
        name: 'Kebab',
        quantity: 3,
        price: 7.00,
    },
    {
        image: 'pizza.png',
        name: 'Pizza',
        quantity: 4,
        price: 10.00,
    }
];
console.log(products);

let itemElemets = document.getElementById('items')
console.log(itemElemets);

itemElemets.innerHTML = `${products.length} items`;
console.log(itemElemets);

const tableEl = document.querySelector("table > tbody");
console.log(tableEl);
// la funzione render stampa una riga nuova all'interno della mia table(@todo :attenzione: è ancora statica)
/**
 * Stamp a line with my products info, enable buttons and change values
 * @param {Object} product 
 */
function render(product) {

    let { image, name, quantity, price } = product;

    const markup = `<tr>
        <td class="df"> <img src="./assets/img/${image}" alt="">
            <div class="align-self-center">
                <h3>${name}</h3>
                <div><button class='remove-all'>Remove</button></div>
            </div>
        </td>
        <td class="textalign-center">
            <button class="remove-button" class="quantity_button" data-name="${name}" data-quantity="${quantity}">-</button>
            <input type="number" disabled class="quantity_input" value="${quantity}">
            <button class="add-button" class="quantity_button" data-name="${name}" data-quantity="${quantity}">+</button>
        </td>
        <td class="textalign-center">${(price).toFixed(2)}€</td>
        <td class="price-cell textalign-center"></td>
    </tr>`;
    tableEl.innerHTML += markup;
    console.log(product);

    // accedo agli elementi + & - 
    let addButton = document.querySelector('.add-button');
    const removeButton = document.querySelector('.remove-button');
    // accedo all'elemento INPUT (DISABLED)
    let quantityInput = document.querySelector('.quantity_input')
    // accedo all'elemento PRICE
    let priceEl = document.querySelector('.price-cell')
    // accedo all'elemento REMOVE  
    const removeProduct = document.querySelector('.remove-all')


    //Al click del pulsante "+" : Incrementa di uno il valore
    addButton.addEventListener('click', function () {
        //stampa in pagina
        quantityInput.innerHTML += quantityInput.value++
        priceEl.innerHTML = quantityInput.value * price + '€'
    })

    //Al click del pulsante "-"  : 
    removeButton.addEventListener('click', function () {
        //se il valore è diverso da 0, decrementa il valore
        if (quantityInput.value > 0) {
            //stampa in pagina
            quantityInput.innerHTML += quantityInput.value--
            priceEl.innerHTML = price * quantityInput.value + '€'
            if (quantityInput.value == 0) {
                priceEl.innerHTML = '';

            }
        }
    })
    //SE il valore dell'input è diverso da '0'
    if (quantityInput.value != 0) {
        //abilita il pulsante 'REMOVE'
        removeProduct.addEventListener('click', function () {
            //aggiorna il valore dell'input a '0'
            quantityInput.value = 0;
            //stampa in console il prodotto eliminato
            console.log(`removed all ${products[0].name}`);
            //aggiorna il valore del totale a '' (EMPTY)
            priceEl.innerHTML = '';


        })
    }
}

products.forEach((product) => {
    render(product)
})
