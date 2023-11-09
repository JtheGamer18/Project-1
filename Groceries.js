function addItem() {
    var item = document.getElementById('item').value;
    if (item !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.onclick = toggleItem;
        document.getElementById('groceries').appendChild(listItem);
        document.getElementById('item').value = '';
    }
}
function toggleItem() {
    this.classList.toggle('flexbox-container');
}
function showAll() {
    var items = document.getElementById('groceries').getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = 'list-item';
    }
}
function showRemaining() {
    showAll();
    var items = document.getElementById('groceries').getElementsByClassName('flexbox-container');
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }
}
function showPurchased() {
    showAll();
    var items = document.getElementById('groceries').getElementsByClassName('flexbox-container');
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = 'list-item';
    }
}