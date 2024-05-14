
  

//we crete this to handle concept of bundling 
//without the lazy loading it have only foodapp.js file in the dlist and it conatain all the data of all the component 
//suppose this component have so many other component in that by that  app become slow
//for spliting the data /dynamic bundling wwe use lazy()  component it come with Suspence to use with it 
const Grocery = ()=>
    {
        return(
            <div>
                <h1>this is grocery page in that it has also so many  component in that  </h1>
                <h2>menu of grocery </h2>
            </div>
        )
    }
export default Grocery;