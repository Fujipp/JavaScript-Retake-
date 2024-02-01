const book1 = { isbn: 3245, title: "Earth", author: "Fuji", number: 34 };
const book2 = { isbn: 234, title: "Ploy" };

function merge(book1, book2) {
    let merge ={...book1,...book2}
    return merge
}
console.log(merge(book1, book2));
