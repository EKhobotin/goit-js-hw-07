// 1-1
const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

/*console.log(`Number of categories: ${document.querySelectorAll('.item').length}`)*/

// 1-2
categories.forEach(li => {
    const titleCategory = li.firstElementChild.textContent
    console.log(`Category: ${titleCategory}`);
    const countCategoryItems = li.lastElementChild.children.length
    console.log(`Elements: ${countCategoryItems}`);    
})

/*categories.forEach(li =>console.log(`Category: ${li.firstElementChild.textContent}\n Elements: ${li.lastElementChild.children.length}`))*/

