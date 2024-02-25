let bagItems;
onLoad();


function onLoad(itemId){
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayHomePage();
    displayBagIcon();

}
// MAde By Prince Kumar

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();

}

function displayBagIcon(){
    let bagCount = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagCount.style.visibility = 'visible';
        bagCount.innerText = bagItems.length;
    }
    else{
        bagCount.style.visibility = 'hidden';
    }

}


function displayHomePage() {
    let itemContainerElement = document.querySelector('.items-container');
    if (!itemContainerElement) {
        return;
    }

    let innerHtml = '';

    items.forEach(item => {
        innerHtml += `<div class="item-container">
    <img class="item-image" src="${item.image}" alt="item image" >
    <div class="item-rating">
    ${item.rating.stars}🎩| ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">${item.current_price}</span>
        <span class="actual-price">${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% off)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id});" >ADD TO CART</button>
</div>`;
    });
    itemContainerElement.innerHTML = innerHtml;

}

