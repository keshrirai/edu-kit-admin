import React from "react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Header(props) {


  return (
    <>

      {/* Navbar */}
      <div className="relative z-10  h-16 bg-slate-700">
        <div className="flex justify-between mt-5 items-center px-4">
          <div className=" w-[102px] h-[27px]">
            <h1 className="text-white ml-5 text-lg font-medium">{props.name}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
