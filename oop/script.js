// get the UI element
 let from = document.querySelector('#book_from')

// book class
class Book{
    constructor(tittle, author, isbn){
        this.tittle=tittle;
        this.author=author;
        this.isbn=isbn;
    }
}
// UI class
class UI{
    constructor(){

    }
    addtobooklist(book){
        let list= document.querySelector('#book-list');
        let row= document.createElement("tr");
        row.innerHTML=`
        <td>${book.tittle} </td>
        <td>${book.author} </td>
        <td>${book.isbn} </td>
        <td><a href='#' class='delet'e>X</a></td>`;
        list.appendChild(row);
        //console.log(row)

    }
    clearFild(){
        document.querySelector('#tittle').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';

    }
    alart(message, calassName){
        let div= document.createElement('div');
        div.className=`alert ${calassName}`;
        div.appendChild(document.createTextNode(message));
        //console.log(div);
        let container= document.querySelector('.container');
        let from= document.querySelector('#book_from');
        container.insertBefore(div,from);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },2000)

    }

}
// Event listener
from.addEventListener('submit', newbook);

//define funcation
function newbook(e){
  tittle= document.querySelector('#tittle').value;
  author=document.querySelector('#author').value;
  isbn=document.querySelector('#isbn').value;
  let ui= new UI();
  if (tittle===''|| author==='' || isbn==='') {

      ui.alart('please filled all the filed!','error')
  }
  else{
    let new_book = new Book(tittle, author, isbn);
  
    ui.addtobooklist(new_book);
    ui.clearFild();
    ui.alart(' Add sucess','success');
 

  }
  e.preventDefault();
 
 
    

}
