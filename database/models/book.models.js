//bookName, bookAuthor, bookGenre, bookPrice 
const bookModel = (sequelize,Datatypes)=>{
    const Book = sequelize.define("book",{
        bookName: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        bookAuthor:{
            type: Datatypes.STRING,
            defaultValue : "Unknown Author",
        },
        bookGenre:{
            type: Datatypes.STRING,
        },
        bookPrice:{
            type: Datatypes.INTEGER,
            allowNull: false,
        }
    })
    return Book
}
module.exports = bookModel              