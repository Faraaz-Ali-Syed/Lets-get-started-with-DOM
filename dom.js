var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';


var item = document.querySelector('.list-group-item:nth-child(1)');
item.style.backgroundColor = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i =0;i<odd.length;i++)
{
    odd[i].style.backgroundColor= 'grey';
}

var newDivText = document.createTextNode("Hello World");
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDivText, h1);


var items = document.querySelector('#items');

items.insertBefore(newDivText, item);