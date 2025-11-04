const getTheTitles = function() {
const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]
    
    titlearray = []
    for (i= 0;i<books.length;i++){
        titlearray.push(books[i].title)
    }
    return titlearray
};
getTheTitles()
// Do not edit below this line
module.exports = getTheTitles;
