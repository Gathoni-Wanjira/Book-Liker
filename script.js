function fetchBooks (){
    fetch ("http://localhost:3000/books") 
        .then(res => res.json())
        .then(books => { 
            console.log(books)

        })
    }

fetchBooks()


function displayBooks(books){

    const image = document.createElement("img")
    const title = document.createElement("h2")
    const authors = document.createElement("p")
    const like = document.createElement("i.")



}

//     PSEUDOCODE. 



//      2.display(books) function 
//  *Create the nodes 
//     -addeventlistener ('click', displayDetailsBooks) on our books card element.
//     -when clicking on the books card node callback displayDetailsBooks function.
//  -img
//  -libooks
//  -authors
//  -description
//  -title
//  -no: of users  

//  *loop through the nodes

//  *assign values 

//  *append nodes  

//   3.displayDetailsBooks(bookDetails) functions
  