"use client";

import React, { useState } from "react";
import AddMenuSideBar from "@/components/AddMenuSideBar";
import { PlusIcon, TrashIcon } from "lucide-react";

type ModifierOption = {
  name: string;
  price: string;
};
const setModifiers = () => {
  // State to manage the modifier group name
  const [modifierGroupName, setModifierGroupName] = useState("");
  // State to manage the list of modifiers (name and prices)
  const [modifiers, setModifiers] = useState<ModifierOption[]>([
    { name: "Onions", price: "0.00" },
    { name: "Onions", price: "0.00" },
  ]);
  // State to manage the modifier type
  const [modifierType, setModifierType] = useState("Add-ons");
  // Function to add a new empty option
  const addModifiers = () => {
    setModifiers([...modifiers, { name: "", price: "0.00" }]);
  };

  const removeModifiers = (index: number) => {
    setModifiers(modifiers.filter((_, i) => i !== index));
  };

  return (
    <main>
      <div className="flex flex-1 min-h-screen overflow-y-auto">
        <AddMenuSideBar />

        <div className="flex-col items-center px-4 mx-auto w-4/6 mb-4">
          <div className="justify-center ">
            <h2 className="text-right mt-4 cursor-pointer text-gray-700 text-xl">
              Save as Draft
            </h2>
            <h1 className="text-3xl font-bold mt-7">Set Modifiers</h1>
            <p className="text-base text-gray-700 mt-2 mb-6">
              Add options or modifications for this item. Examples include size
              (small, medium, large), extra toppings etc...
            </p>
          </div>

          <hr className="border-1" />
          <div className="flex space-x-4 mt-5 mb-5">
            <button className="bg-green text-white px-4 py-2 rounded-full">
              Add-ons
            </button>
            <button className="text-gray-600 px-4 py-2 rounded-full border">
              Variance
            </button>
            <button className="text-gray-600 px-4 py-2 rounded-full border">
              Single choice
            </button>
            <button className="bg-green text-white px-4 py-2 rounded-full">
              Multiple choice
            </button>
          </div>
          <hr className="border-1" />

          <input
            type="text"
            placeholder="Modifier group name"
            className="w-3/4 p-3 mb-6 mt-6 focus:outline-none bg-gray-200 rounded-lg"
            value={modifierGroupName}
            onChange={(e) => setModifierGroupName(e.target.value)}
          />

          <div className="mb-4">
            <div className="flex font-semibold space-x-3 mb-2">
              <div className="w-1/4">Options</div>
              <div className="w-1/4">Price</div>
            </div>
            {modifiers.map((modifier, index) => (
              <div key={index} className="flex mb-2 space-x-4">
                <input
                  type="text"
                  className="w-1/4 px-2 py-3 bg-gray-200 rounded-lg focus:outline-none"
                  value={modifier.name}
                  //changing or adding a new name
                  onChange={(e) => {
                    const newModifiers = [...modifiers];
                    newModifiers[index].name = e.target.value;
                    setModifiers(newModifiers);
                  }}
                />
                <input
                  type="text"
                  className="w-1/4 px-2 py-3 bg-gray-200 rounded-lg focus:outline-none"
                  value={modifier.price}
                  //changing or adding a new price
                  onChange={(e) => {
                    const newModifiers = [...modifiers];
                    newModifiers[index].price = e.target.value;
                    setModifiers(newModifiers);
                  }}
                />
                <button
                  className="text-green px-2 py-3 w-1/6 border-green border-2 rounded-lg focus:outline-none"
                  onClick={() => {}}
                >
                  Save
                </button>
                <button
                  className="ml-2  text-red-500"
                  onClick={() => removeModifiers(index)}
                >
                  <TrashIcon className="h-6 w-6 fill-red-500" />
                </button>
              </div>
            ))}
          </div>

          <button
            className="w-1/2 bg-green mt-6 text-white p-3 rounded-lg flex space-x-2 items-center justify-center focus:outline-none"
            onClick={addModifiers}
          >
            <PlusIcon className="h-5 w-5" /> Add Option
          </button>
        </div>
      </div>

      {/* <div className="flex mt-3 justify-between p-12">
        <button className="w-52 p-4 rounded-lg bg-gray-400 text-black">
          Cancel
        </button>
        <button className="w-52 p-4 rounded-lg bg-green text-white">
          Proceed
        </button>
      </div> */}
    </main>
  );
};

export default setModifiers;
