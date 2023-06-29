import React from 'react'
import { Card } from 'flowbite-react';

function ItemCard({props}) {
  return (

    <Card
    imgSrc={props.imagesrc}
    >

      <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        <p>
          {props.itemname}
        </p>
      </h5>
    </a>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900 dark:text-white">
        {props.price}
      </span>
      <a
        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        href="#"
      >
        <p>
            Add to cart
        </p>
      </a>
    </div>
    </Card>
  )
}

export default ItemCard