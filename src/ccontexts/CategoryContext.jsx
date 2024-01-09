import { createContext, useState } from "react";
import { categoryService } from "../services/category.service";

const CategoryContext= createContext();

function CategoryProvider({children}) {
     
     const [data, setData]= useState([])

     function add(item){
          let oldDataJson=null
          let oldData= localStorage.getItem('category')
          if(oldData){
               oldDataJson= JSON.parse(oldData)
          } else {
               oldDataJson= null
          } if(oldDataJson != null){
               oldDataJson.push(item)
          } else {
               oldDataJson= []
               oldDataJson.push(item)
          }
          localStorage.setItem('category', JSON.stringify(oldDataJson))
          getData()
     }

     function getData(){
          const x= localStorage.getItem('category')
          if(x){
               const xJson=JSON.parse(x)
          } else{
               setData([])
          }
     }

     return (
          <CategoryContext.Provider value={{ data, add, getData }}>
              {children}
          </CategoryContext.Provider>
      );
}

const CategoryCP = { CategoryContext, CategoryProvider }
export default CategoryCP