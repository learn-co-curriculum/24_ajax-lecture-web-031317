$(document).ready(function(){
  console.log('Document ready!')

  const $input = $('input#query')
  const $bookList = $('ul#books')
  const $form = $('form#book-search')

  function fetchAndRenderBooks(e){
    e.preventDefault()
    console.log("Form submitted!!")
    const url = `https://www.googleapis.com/books/v1/volumes?q=${$input.val()}`

    $.ajax({
      method: 'GET',
      url: url,
      success: renderBooks
    })
  }

  function renderBooks (data){
    console.log('response received!')
    console.log(data)
    const bookListItems = data.items.map(function(book){
      return `<li>${book.volumeInfo.title}</li>`
    })

    $bookList.html(bookListItems.join(''))
  }

  $form.on('submit', fetchAndRenderBooks)
})
