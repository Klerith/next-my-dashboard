'use client';


import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/store"


export const WidgetsGrid = () => {

  const isCart = useAppSelector( state => state.counter.count );

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget 
          title={ `${isCart}` }
          subTitle="Productos agregados"
          label="Contador"
          icon={ <IoCartOutline size={ 70 } className="text-blue-600" /> }
          href="/dashboard/counter"
        />
        {/* <SimpleWidget /> */}
    </div>
  )
}
