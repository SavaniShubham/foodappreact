import Itemlist from "./Itemlist";


const Rescategory = ({item})=>
    {
        console.log(item);
        return(
            <div >
                <div className="w-6/12 mx-auto my-4 bg-gray-100  p-4 shadow-lg ">
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">{item.title} ({item.itemCards.length})</span>
                    <span className=" cursor-pointer">▼</span>
                  </div> 
                <Itemlist itemCards={item.itemCards}/>

                </div>


            </div>
        )
    }

export default Rescategory ;