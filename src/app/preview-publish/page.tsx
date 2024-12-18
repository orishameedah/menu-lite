import React from "react";
import AddMenuSideBar from "@/components/AddMenuSideBar";
import Image from "next/image";
// import FoodImg from "public/assets/Burger & Cheese.PNG";

const page = () => {
  // const FoodImg = import(`/public/assets/Burger & Cheese.PNG`);
  return (
    <main>
      <div className="flex flex-1 min-h-screen overflow-y-auto">
        <AddMenuSideBar />

        <div className="flex-col mx-auto px-4 w-4/6 mb-4">
          <div className="">
            <h2 className="text-right mt-4 cursor-pointer text-gray-700 text-xl">
              Save as Draft
            </h2>
            <h1 className="text-3xl font-bold mt-7">Preview & Publish</h1>
            <p className="text-base text-gray-700 mt-2 mb-3">
              Please confirm that all the details you added earlier are correct
              before you publish item.
            </p>
          </div>
          <div className="overflow-hidden my-3">
            <Image
              src="/assets/Burger & Cheese.PNG"
              alt="food"
              width={450}
              height={350}
              className="p-0 m-0 h-auto object-cover block rounded-xl"
            />
          </div>

          <h2 className="text-2xl font-bold mb-2">Double Cheeseburger</h2>
          <p className="text-green text-xl font-semibold mb-2">NGN 4,500</p>
          <p className="text-gray-600 w-2/3 mb-6">
            Your choice of Canadian, Swiss, or cheddar cheese, served with
            lettuce, tomato, red onions, and pickles on a brioche bun.
          </p>
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

export default page;
