import React from "react";
import ItemCard from "../components/ItemCard";

const items=[
  {
  imagesrc: "https://lumiere-a.akamaihd.net/v1/images/ph044_36408265.jpeg?region=0,0,386,448",
  price: "$100",
  itemname: "Item 1",
  },
  {
    imagesrc: "https://lumiere-a.akamaihd.net/v1/images/ph045_51db93e3.jpeg?region=0,0,386,448",
    price: "$150",
    itemname: "Item 2",
  },
  {
    imagesrc: "https://lumiere-a.akamaihd.net/v1/images/ph047_ee1c0303.jpeg?region=0,0,386,448",
    price: "$220",
    itemname: "Item 3",
  },
  {
    imagesrc: "https://lumiere-a.akamaihd.net/v1/images/ph048_7b9fda81.jpeg?region=0,0,386,448",
    price: "$200",
    itemname: "Item 4",
  }
   

]

function ShopPage() {
  return (
    <div>
      <div>
        <div className="w-100% mt-10">
          <span><a href=""><img className="object-fill h-[45rem] w-full" src="https://lumiere-a.akamaihd.net/v1/images/sea-lego-x-disney_web-en_68de2f99.jpeg?region=0,0,889,764" alt="" /></a></span>
        </div>
        <div className="flex my-2">
          <div className="w-1/2 mx-2" >
          <span><a href=""><img className="object-fill h-[45rem] w-full" src="https://lumiere-a.akamaihd.net/v1/images/header-mickey-01_fff86b33.jpeg?region=0,0,1600,500" alt="" /></a></span>
          </div>
          <div className="block w-1/2 mx-2 h-[45rem]">
            <div className="h-1/2 mx-2 p-1">
            <span><a href=""><img className="object-fill h-full w-full" src="https://lumiere-a.akamaihd.net/v1/images/sea-lego-x-disney_web-en_68de2f99.jpeg?region=0,0,889,764" alt="" /></a></span>
            </div>
            <div className="h-1/2 mx-2 p-1">
            <span><a href=""><img className="object-fill h-full w-full" src="https://lumiere-a.akamaihd.net/v1/images/sea-lego-x-disney_web-en_68de2f99.jpeg?region=0,0,889,764" alt="" /></a></span>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-4"> 
          {items.map((item, index) => (
             <div className="h-48 m-3 "><ItemCard key={index} props={item} /></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
