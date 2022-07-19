
const header = document.getElementById("#header")
const listElement = document.getElementById('#list');
const listItem1 = document.getElementById('#lettuce');
const listItem2= document.getElementById('#tomato');
const listItem3 = document.getElementById('#cheese');
const listItem4 = document.getElementById('#burger');

header.innerText = "Toppings"; // did i add a header with this?

listItem4.className= "list-item"; // would this set the class for the burger element?

const newListItem = document.createElement('li');
document.querySelector('ul').appendChild(newListItem) // would these two steps create a new item and append it to the list?






