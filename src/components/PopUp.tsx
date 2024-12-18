import { FC, FormEvent } from "react";
import Image from "next/image";
import Vector from "public/assets/Vector.svg";

interface props {
  isOpen: boolean;
  onClose: () => void;
}

const PopUp: FC<props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Return null if the modal is closed

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onClose(); // Close the modal after form submission
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white px-16 py-8 rounded-lg shadow-lg w-full max-w-lg">
        {/* <div className="flex justify-between items-center mb-0">


        </div> */}
        <div className="flex justify-end ">
          <button onClick={onClose}>
            <div className="bg-gray-300 p-2 rounded-full">
              <Image
                src={Vector}
                alt="vector"
                // className=" rounded-full"
              />
            </div>
          </button>
        </div>
        <h2 className="text-3xl font-bold text-center">Add Category</h2>
        <p className="mt-0 mb-10 p-0 text-center">
          Add a new category for your menu item.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-24">
            <input
              type="text"
              id="categoryName"
              className="w-full p-3 focus:outline-green bg-light rounded-lg"
              placeholder="Enter category name"
            />
          </div>

          <button
            className="bg-green text-white py-3 px-6 font-bold rounded-lg w-full"
            onClick={onClose}
          >
            + Add new category
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUp;

// const AddCategory = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);

//     return (
//       <div>
//         {/* Add Category Button */}
//         <button
//           onClick={openModal}
//           className="text-green-500 flex items-center py-2"
//         >
//           + Add Category
//         </button>

//         {/* Modal */}
//         <Modal isOpen={isModalOpen} onClose={closeModal} />
//       </div>
//     );
//   };
