export default class BookStoreService {
    data = [
        {id: 1, title: "Prod to Linux Mbape", author: "Susana pereyra", price: 2000, coverImage: "https://edit.org/images/cat/book-covers-big-2019101610.jpg"},
        {id: 2, title: "Prod to Microsoft", author: "Kate", price: 1989, coverImage: "https://i.pinimg.com/originals/74/13/12/74131267c53122a4040b0d62d6044efe.jpg"},
        {id: 3, title: "Miromax", author: "Kate", price: 102, coverImage: "https://img.wattpad.com/cover/44721437-352-k529080.jpg"},
    ]
    getBooks(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.data)
            }, 500)
        })
    }
}