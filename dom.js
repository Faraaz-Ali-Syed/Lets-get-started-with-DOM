var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';


var item2 = document.querySelector('.list-group-item:nth-child(2)');
item2.style.backgroundColor = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i =0;i<odd.length;i++)
{
    odd[i].style.backgroundColor= 'grey';
}