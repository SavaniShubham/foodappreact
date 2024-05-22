
const  Contect =()=>
    {
        return(
        <div>
          
        <h1 className=" font-bold text-lg m-4 p-4">this is contect us page</h1>

        <form className=" m-4 border border-black w-1/4">
            <div>
                <label className="p-4">name :</label>
                <input type="text" placeholder="name"  className="m-4 p-4 border border-black"></input>
            </div>
            <div>
                <label className="p-4">Email :</label>
                <input type="email" placeholder="@gmail.com"  className="m-4 p-4 border border-black"></input>
            </div>
            <div>
               
               <button className="m-4 p-4 border border-black rounded-xl">submit</button>
            </div>
        </form>
        </div>
        )
    }

export default Contect ;