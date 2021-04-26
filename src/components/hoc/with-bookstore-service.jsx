import React from "react";
import {BookStoreServiceConsumer} from "../book-store-service-context/";


const WithBookstoreService = () =>(Wrapped)=>{
    return (props) =>{
        return (
            <BookStoreServiceConsumer>
                {
                    (bookStoreService)=>{
                        return (
                            <Wrapped {...props} bookstoreservice={bookStoreService}/>)
                    }
                }
            </BookStoreServiceConsumer>
        )
    }
}
export default WithBookstoreService;