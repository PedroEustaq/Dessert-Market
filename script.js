// Selecionar os botões de adicionar ao carrinho
var btnWaffle = document.querySelector('.addWaffle');
var btnCreme = document.querySelector('.addCreme');
var btnMacaron = document.querySelector('.addMacaron');
var btnTiramisu = document.querySelector('.addTiramisu');
var btnBaklava = document.querySelector('.addBaklava');
var btnPie = document.querySelector('.addPie');
var btnCake = document.querySelector('.addCake');
var btnBrownie = document.querySelector('.addBrownie');
var btnPanna = document.querySelector('.addPanna');
var YC = document.getElementById('seuC');

var imgWaffle = document.getElementById('imgWaffle').src;
var imgCreme = document.getElementById('imgCreme').src;
var imgMacaron = document.getElementById('imgMacaron').src;
var imgTiramisu = document.getElementById('imgTiramisu').src;
var imgBaklava = document.getElementById('imgBaklava').src;
var imgPie = document.getElementById('imgPie').src;
var imgCake = document.getElementById('imgCake').src;
var imgBrownie = document.getElementById('imgBrownie').src;
var imgPanna = document.getElementById('imgPanna').src;

// Selecionar o contêiner do carrinho
var cartItems = document.getElementById('cartItems');
var cartItemss = document.getElementById('cartItemssFinal');
var WaffleTrue = true;
var CremeTrue = true;
// Objeto para armazenar as quantidades dos itens no carrinho
var cart = {};
var variavel = 0;
var pfinal = document.getElementById('N');
var ppfinal = document.getElementById('NN');
var pedidoF = document.getElementById('OT');
var total = 0;
var confiBtn = document.getElementById('confirmar');
function sumElementsByClass() {
    // Pegue todos os elementos com a mesma classe
    var elements = document.querySelectorAll('.precofinal');
    
    // Inicialize a soma
    total = 0;
    
    // Itere sobre os elementos e some os valores
    elements.forEach(function(element) {
        total += parseFloat(element.innerText); // ou element.value dependendo de onde o valor está
    })
    pfinal.innerHTML = '$' +total;
    ppfinal.innerHTML = '$' + total;
    console.log('Soma total:', total);
}

// Chama a função a cada 5 segundos (5000 milissegundos)
setInterval(sumElementsByClass, 5);
// Função para adicionar ou atualizar itens no carrinho

function maisUPD() {
    sumElementsByClass()
    variavel += 1;
YC.innerHTML = 'Your Cart ('+ variavel + ')';
if (variavel > 0) {
    var b = document.getElementById('box');
    var c = document.getElementById('liSPAN');
    b.style.display = "none";
    c.style.display = "none";
    carbon.style.display = "block";
    pedidoF.style.display = 'block';
    confirmar.style.display = 'block';
} 
}
function menosUPD() {
    var c = document.getElementById('liSPAN');
    variavel -= 1;
YC.innerHTML = 'Your Cart ('+ variavel + ')'; 
if (variavel == 0) {
    confirmar.style.display = 'none';
    var b = document.getElementById('box');
    b.style.display = "block";
    c.style.display = "block";
    pedidoF.style.display = 'none';
    carbon.style.display = 'none';
}
}
function confirmou() {
    var escuru = document.getElementById('block');
    escuru.style.display ='block'
    var pag = document.getElementById('PedidoConcluido');
    pag.style.display = 'block' 
}


function addItemToCart(itemName, itemDescription, itemPrice,itemImg) {
  // Verifica se o item já está no carrinho
  if (!cart[itemName]) {
    // Se o item não está no carrinho, cria um novo elemento div para o item
    var itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.id = 'item-' + itemName; // ID único para facilitar a atualização
    var itemDivF = document.createElement('divF');
    itemDivF.classList.add('cart-itemF');
    itemDivF.id = 'Fitem-' + itemName; // ID único para facilitar a atualização

    // Adiciona o item ao contêiner do carrinho
    cartItems.appendChild(itemDiv);
    cartItemss.appendChild(itemDivF);
    // Adiciona o item ao objeto cart com a quantidade inicial 1
    cart[itemName] = {
      description: itemDescription,
      price: itemPrice,
      quantity: 1,
      img: itemImg
    };
    itemDiv.innerHTML = `<p id='realTipo'>${cart[itemName].description}<br><br><c id='qtn'>${cart[itemName].quantity}x&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</c> <c id='cartpreco'>$${cart[itemName].price}&nbsp&nbsp&nbsp&nbsp&nbsp</c><d>$</d><c class='precofinal'>${cart[itemName].price * cart[itemName].quantity}</c></p>`;

    itemDivF.innerHTML = `<p id='realTipo'><img src='${cart[itemName].img}' id='meno'><br>${cart[itemName].description}<br><br><c id='qtn'>${cart[itemName].quantity}x&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</c> <c id='cartpreco'>$${cart[itemName].price}&nbsp&nbsp&nbsp&nbsp&nbsp</c><d>$</d><c class='precofinal'>${cart[itemName].price * cart[itemName].quantity}</c></p>`;
  } else {
    // Se o item já está no carrinho, atualiza a quantidade
    cart[itemName].quantity += 1;

    // Atualiza o conteúdo do div do item
    var itemDiv = document.getElementById('item-' + itemName);
    var itemDivF = document.getElementById('Fitem-' + itemName);
    itemDiv.innerHTML = `<p id='realTipo'>${cart[itemName].description}<br><br><c id='qtn'>${cart[itemName].quantity}x&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</c> <c id='cartpreco'>$${cart[itemName].price}&nbsp&nbsp&nbsp&nbsp&nbsp</c><d>$</d><c class='precofinal'>${cart[itemName].price * cart[itemName].quantity}</c></p>`;

    itemDivF.innerHTML = `<p id='realTipo'><img src='${cart[itemName].img}' id='meno'>${cart[itemName].description}<br><br><c id='qtn'>${cart[itemName].quantity}x&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</c> <c id='cartpreco'>$${cart[itemName].price}&nbsp&nbsp&nbsp&nbsp&nbsp</c><d>$</d><c class='precofinal'>${cart[itemName].price * cart[itemName].quantity}</c></p>`;
  }
}
function removeItemFromCart(itemName) {
  if (cart[itemName]) {
    if (cart[itemName].quantity === 1) {
        // Remove o div do item se a quantidade for zero
        var itemDiv = document.getElementById('item-' + itemName.replace(/ /g, '-'));
        var itemDivF = document.getElementById('Fitem-' + itemName.replace(/ /g, '-'));
        itemDiv.remove();
        itemDivF.remove();
        delete cart[itemName];
    } else {
    cart[itemName].quantity -= 1;
    var itemDiv = document.getElementById('item-' + itemName);
    var itemDivF = document.getElementById('Fitem-' + itemName);
    itemDiv.innerHTML = `<p id='realTipo'>${cart[itemName].description}<br><br><c id='qtn'>${cart[itemName].quantity}x&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</c> <c id='cartpreco'>$${cart[itemName].price}&nbsp&nbsp&nbsp&nbsp&nbsp</c><d>$</d><c class='precofinal'>${cart[itemName].price * cart[itemName].quantity}</c></p>`;

    itemDivF.innerHTML = `<p id='realTipo'><img src='${cart[itemName].img}' id='meno'>${cart[itemName].description}<br><br><c id='qtn'>${cart[itemName].quantity}x&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</c> <c id='cartpreco'>$${cart[itemName].price}&nbsp&nbsp&nbsp&nbsp&nbsp</c><d>$</d><c class='precofinal'>${cart[itemName].price * cart[itemName].quantity}</c></p>`;
}
}
}
function voltar() {
    window.location.replace('index.html');
}

// Funções específicas para cada item
function WaffleMouseE() {
    var iWaffle = document.getElementById('imgWaffle');
    btnWaffle.style.border = "3px solid orangered";
    iWaffle.style.border = "3px solid orangered";
    btnWaffle.style.color = "#c83b0e";
}

function WaffleMouseL() {
    var iWaffle = document.getElementById('imgWaffle');
    btnWaffle.style.border = "0px solid #606060";
    iWaffle.style.border = "0px solid #606060";
    btnWaffle.style.color = "black";
}

function CremeMouseE() {
    var iCreme = document.getElementById('imgCreme');
    btnCreme.style.border = "3px solid orangered";
    iCreme.style.border = "3px solid orangered";
    btnCreme.style.color = "#c83b0e";
}

function CremeMouseL() {
    var iCreme = document.getElementById('imgCreme');
    btnCreme.style.border = "0px solid #606060";
    iCreme.style.border = "0px solid #606060";
    btnCreme.style.color = "black";
}

function MacaronMouseE() {
    var iMacaron = document.getElementById('imgMacaron');
    btnMacaron.style.border = "3px solid orangered";
    iMacaron.style.border = "3px solid orangered";
    btnMacaron.style.color = "#c83b0e";
}

function MacaronMouseL() {
    var iMacaron = document.getElementById('imgMacaron');
    btnMacaron.style.border = "0px solid #606060";
    iMacaron.style.border = "0px solid #606060";
    btnMacaron.style.color = "black";
}

function TiramisuMouseE() {
    var iTiramisu = document.getElementById('imgTiramisu');
    btnTiramisu.style.border = "3px solid orangered";
    iTiramisu.style.border = "3px solid orangered";
    btnTiramisu.style.color = "#c83b0e";
}

function TiramisuMouseL() {
    var iTiramisu = document.getElementById('imgTiramisu');
    btnTiramisu.style.border = "0px solid #606060";
    iTiramisu.style.border = "0px solid #606060";
    btnTiramisu.style.color = "black";
}

function BaklavaMouseE() {
    var iBaklava = document.getElementById('imgBaklava');
    btnBaklava.style.border = "3px solid orangered";
    iBaklava.style.border = "3px solid orangered";
    btnBaklava.style.color = "#c83b0e";
}

function BaklavaMouseL() {
    var iBaklava = document.getElementById('imgBaklava');
    btnBaklava.style.border = "0px solid #606060";
    iBaklava.style.border = "0px solid #606060";
    btnBaklava.style.color = "black";
}

function PieMouseE() {
    var iPie = document.getElementById('imgPie');
    btnPie.style.border = "3px solid orangered";
    iPie.style.border = "3px solid orangered";
    btnPie.style.color = "#c83b0e";
}

function PieMouseL() {
    var iPie = document.getElementById('imgPie');
    btnPie.style.border = "0px solid #606060";
    iPie.style.border = "0px solid #606060";
    btnPie.style.color = "black";
}

function CakeMouseE() {
    var iCake = document.getElementById('imgCake');
    btnCake.style.border = "3px solid orangered";
    iCake.style.border = "3px solid orangered";
    btnCake.style.color = "#c83b0e";
}

function CakeMouseL() {
    var iCake = document.getElementById('imgCake');
    btnCake.style.border = "0px solid #606060";
    iCake.style.border = "0px solid #606060";
    btnCake.style.color = "black";
}

function BrownieMouseE() {
    var iBrownie = document.getElementById('imgBrownie');
    btnBrownie.style.border = "3px solid orangered";
    iBrownie.style.border = "3px solid orangered";
    btnBrownie.style.color = "#c83b0e";
}

function BrownieMouseL() {
    var iBrownie = document.getElementById('imgBrownie');
    btnBrownie.style.border = "0px solid #606060";
    iBrownie.style.border = "0px solid #606060";
    btnBrownie.style.color = "black";
}

function PannaMouseE() {
    var iPanna = document.getElementById('imgPanna');
    btnPanna.style.border = "3px solid orangered";
    iPanna.style.border = "3px solid orangered";
    btnPanna.style.color = "#c83b0e";
}

function PannaMouseL() {
    var iPanna = document.getElementById('imgPanna');
    btnPanna.style.border = "0px solid #606060";
    iPanna.style.border = "0px solid #606060";
    btnPanna.style.color = "black";
}
function addWaffle() {
    maisUPD();
    btnWaffle.style.backgroundColor = 'orangered';
    addItemToCart('Waffle', 'Waffle with Berries', '6.50',imgWaffle);
    btnWaffle.style.color = "white";
    btnWaffle.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosWaffle()">' + cart['Waffle'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisWaffle()">';

}
// Funções para adicionar e remover Waffle
function maisWaffle() {
    maisUPD();
    addItemToCart('Waffle', 'Waffle with Berries', '6.50',imgWaffle);
    btnWaffle.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosWaffle()">' + cart['Waffle'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisWaffle()">';
}
function menosWaffle() {
    menosUPD()
    if (cart['Waffle'].quantity === 1) {
        btnWaffle.innerHTML = '<span id="btnWaffle" class="addWaffleS" onclick="addWaffle()" onmouseenter="WaffleMouseE()" onmouseleave="WaffleMouseL()">Add to Cart</span>';
        btnWaffle.style.backgroundColor = 'white';
        removeItemFromCart('Waffle');
    } else {
        removeItemFromCart('Waffle');
        btnWaffle.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosWaffle()">' + cart['Waffle'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisWaffle()">';
    }
}

// Funções para adicionar e remover Crème Brûlée
function addCreme() {
    maisUPD();
    btnCreme.style.color = "white";
    btnCreme.style.backgroundColor = 'orangered';
    addItemToCart('CrèmeBrûlée', 'Vanilla Bean Crème Brûlée', '7.00',imgCreme);
    btnCreme.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosCreme()">' + cart['CrèmeBrûlée'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisCreme()">';
}
function maisCreme() {
    maisUPD();
    addItemToCart('CrèmeBrûlée', 'Vanilla Bean Crème Brûlée', '7.00', imgCreme);
    btnCreme.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosCreme()">' + cart['CrèmeBrûlée'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisCreme()">';
}
function menosCreme() {
    menosUPD()
    if (cart['CrèmeBrûlée'].quantity === 1) {
        btnCreme.innerHTML = '<span id="btnCreme" class="addCremeS" onclick="addCreme()" onmouseenter="CremeMouseE()" onmouseleave="CremeMouseL()">Add to Cart</span>';
        btnCreme.style.backgroundColor = 'white';
        removeItemFromCart('CrèmeBrûlée');
    } else {
        removeItemFromCart('CrèmeBrûlée');
        btnCreme.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosCreme()">' + cart['CrèmeBrûlée'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisCreme()">';
    }
}

// Funções para adicionar e remover Macaron
function addMacaron() {
    maisUPD();
    btnMacaron.style.color = "white";
    btnMacaron.style.backgroundColor = 'orangered';
    addItemToCart('Macaron', 'Macaron Mix of Five', '8.00',imgMacaron);
    btnMacaron.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosMacaron()">' + cart['Macaron'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisMacaron()">';
}
function maisMacaron() {
    maisUPD();
    addItemToCart('Macaron', 'Macaron Mix of Five', '8.00',imgMacaron);
    btnMacaron.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosMacaron()">' + cart['Macaron'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisMacaron()">';
}
function menosMacaron() {
    menosUPD()
    if (cart['Macaron'].quantity === 1) {
        btnMacaron.innerHTML = '<span id="btnMacaron" class="addMacaronS" onclick="addMacaron()" onmouseenter="MacaronMouseE()" onmouseleave="MacaronMouseL()">Add to Cart</span>';
        btnMacaron.style.backgroundColor = 'white';
        removeItemFromCart('Macaron');
    } else {
        removeItemFromCart('Macaron');
        btnMacaron.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosMacaron()">' + cart['Macaron'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisMacaron()">';
    }
}

// Funções para adicionar e remover Tiramisu
function addTiramisu() {
    maisUPD();
    btnTiramisu.style.color = "white";
    btnTiramisu.style.backgroundColor = 'orangered';
    addItemToCart('Tiramisu', 'Classic Tiramisu', '5.50',imgTiramisu);
    btnTiramisu.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosTiramisu()">' + cart['Tiramisu'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisTiramisu()">';
}
function maisTiramisu() {
    maisUPD();
    addItemToCart('Tiramisu', 'Classic Tiramisu', '5.50',imgTiramisu);
    btnTiramisu.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosTiramisu()">' + cart['Tiramisu'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisTiramisu()">';
}
function menosTiramisu() {
    menosUPD()
    if (cart['Tiramisu'].quantity === 1) {
        btnTiramisu.innerHTML = '<span id="btnTiramisu" class="addTiramisuS" onclick="addTiramisu()" onmouseenter="TiramisuMouseE()" onmouseleave="TiramisuMouseL()">Add to Cart</span>';
        btnTiramisu.style.backgroundColor = 'white';
        removeItemFromCart('Tiramisu');
    } else {
        removeItemFromCart('Tiramisu');
        btnTiramisu.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosTiramisu()">' + cart['Tiramisu'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisTiramisu()">';
    }
}

// Funções para adicionar e remover Baklava
function addBaklava() {
    maisUPD();
    btnBaklava.style.color = "white";
    btnBaklava.style.backgroundColor = 'orangered';
    addItemToCart('Baklava', 'Pistachio Baklava', '4.00',imgBaklava);
    btnBaklava.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosBaklava()">' + cart['Baklava'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisBaklava()">';
}
function maisBaklava() {
    maisUPD();
    addItemToCart('Baklava', 'Pistachio Baklava', '4.00',imgBaklava);
    btnBaklava.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosBaklava()">' + cart['Baklava'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisBaklava()">';
}
function menosBaklava() {
    menosUPD()
    if (cart['Baklava'].quantity === 1) {
        btnBaklava.innerHTML = '<span id="btnBaklava" class="addBaklavaS" onclick="addBaklava()" onmouseenter="BaklavaMouseE()" onmouseleave="BaklavaMouseL()">Add to Cart</span>';
        btnBaklava.style.backgroundColor = 'white';
        removeItemFromCart('Baklava');
    } else {
        removeItemFromCart('Baklava');
        btnBaklava.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosBaklava()">' + cart['Baklava'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisBaklava()">';
    }
}

// Funções para adicionar e remover Pie
function addPie() {
    maisUPD();
    btnPie.style.color = "white";
    btnPie.style.backgroundColor = 'orangered';
    addItemToCart('Pie', 'Lemon Meringue Pie', '5.00',imgPie);
    btnPie.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosPie()">' + cart['Pie'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisPie()">';
}
function maisPie() {
    maisUPD();
    addItemToCart('Pie', 'Lemon Meringue Pie', '5.00',imgPie);
    btnPie.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosPie()">' + cart['Pie'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisPie()">';
}
function menosPie() {
    menosUPD()
    if (cart['Pie'].quantity === 1) {
        btnPie.innerHTML = '<span id="btnPie" class="addPieS" onclick="addPie()" onmouseenter="PieMouseE()" onmouseleave="PieMouseL()">Add to Cart</span>';
        btnPie.style.backgroundColor = 'white';
        removeItemFromCart('Pie');
    } else {
        removeItemFromCart('Pie');
        btnPie.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosPie()">' + cart['Pie'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisPie()">';
    }
}

// Funções para adicionar e remover Cake
function addCake() {
    maisUPD();
    btnCake.style.color = "white";
    btnCake.style.backgroundColor = 'orangered';
    addItemToCart('Cake', 'Red Velvet Cake', '4.50',imgCake);
    btnCake.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosCake()">' + cart['Cake'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisCake()">';
}
function maisCake() {
    maisUPD();
    addItemToCart('Cake', 'Red Velvet Cake', '4.50',imgCake);
    btnCake.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosCake()">' + cart['Cake'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisCake()">';
}
function menosCake() {
    menosUPD()
    if (cart['Cake'].quantity === 1) {
        btnCake.innerHTML = '<span id="btnCake" class="addCakeS" onclick="addCake()" onmouseenter="CakeMouseE()" onmouseleave="CakeMouseL()">Add to Cart</span>';
        btnCake.style.backgroundColor = 'white';
        removeItemFromCart('Cake');
    } else {
        removeItemFromCart('Cake');
        btnCake.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosCake()">' + cart['Cake'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisCake()">';
    }
}

// Funções para adicionar e remover Brownie

function addBrownie() {
    maisUPD();
    btnBrownie.style.color = "white";
    btnBrownie.style.backgroundColor = 'orangered';
    addItemToCart('Brownie', 'Salted Caramel Brownie', '4.50',imgBrownie);
    btnBrownie.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosBrownie()">' + cart['Brownie'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisBrownie()">';
}
function maisBrownie() {
    maisUPD();
    addItemToCart('Brownie', 'Salted Caramel Brownie', '4.50',imgBrownie);
    btnBrownie.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosBrownie()">' + cart['Brownie'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisBrownie()">';
}
function menosBrownie() {
    menosUPD()
    if (cart['Brownie'].quantity === 1) {
        btnBrownie.innerHTML = '<span id="btnBrownie" class="addBrownieS" onclick="addBrownie()" onmouseenter="BrownieMouseE()" onmouseleave="BrownieMouseL()">Add to Cart</span>';
        btnBrownie.style.backgroundColor = 'white';
        removeItemFromCart('Brownie');
    } else {
        removeItemFromCart('Brownie');
        btnBrownie.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosBrownie()">' + cart['Brownie'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisBrownie()">';
    }
}

// Funções para adicionar e remover Panna Cotta
function addPanna() {
    maisUPD();
    btnPanna.style.color = "white";
    btnPanna.style.backgroundColor = 'orangered';
    addItemToCart('Panna Cotta', 'Vanilla Panna Cotta', '6.50',imgPanna);
    btnPanna.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosPanna()">' + cart['Panna Cotta'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisPanna()">';
}
function maisPanna() {
    maisUPD();
    addItemToCart('Panna Cotta', 'Vanilla Panna Cotta', '6.50',imgPanna);
    btnPanna.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosPanna()">' + cart['Panna Cotta'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisPanna()">';
}
function menosPanna() {
    menosUPD()
    if (cart['Panna Cotta'].quantity === 1) {
        btnPanna.innerHTML = '<span id="btnPanna" class="addPannaS" onclick="addPanna()" onmouseenter="PannaMouseE()" onmouseleave="PannaMouseL()">Add to Cart</span>';
        btnPanna.style.backgroundColor = 'white';
        removeItemFromCart('Panna Cotta');
    } else {
        removeItemFromCart('Panna Cotta');
        btnPanna.innerHTML = '<img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/minusbutton_99725.png" alt="" id="menos" onclick="menosPanna()">' + cart['Panna Cotta'].quantity + '<img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" id="mais" onclick="maisPanna()">';
    }
}