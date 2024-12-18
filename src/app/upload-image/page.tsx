"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import img from "public/assets/image 181.svg";
import defaultImg from "public/assets/Frame 1000005714.svg";
import ReactCrop, { Crop, PixelCrop, } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Upload, X } from "lucide-react";
import AddMenuSideBar from "@/components/AddMenuSideBar"; // Your sidebar component

// Explicitly defining the Crop interface with the 'aspect' property
interface MyCrop extends Crop {
  aspect?: number; // Adding the aspect ratio property
}

function page() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null); // Selected image file
  const [previewImage, setPreviewImage] = useState<string | null>(null); // Image preview URL
  const [crop, setCrop] = useState<MyCrop>({
    unit: "%",
    width: 50,
    aspect: 16 / 9,
    x: 0, // Initial value for x-coordinate
    y: 0, // Initial value for y-coordinate
    height: 50, // Initial height value
  });
  const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null); // Final crop after user finishes resizing
  const [isCropping, setIsCropping] = useState(false); // Whether the user is cropping
  const imageRef = useRef<HTMLImageElement>(null); // Ref to store the actual image

  // Handle image selection and preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file)); // Preview image URL
      setIsCropping(true); // Start cropping after image selection
    }
  };

  // Once the image is loaded, set the crop state
  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;
    setCrop({
      unit: "%",
      width: 90,
      aspect: 16 / 9,
      x: 5,
      y: 5,
      height: (90 / width) * height, // Set initial height proportional to width
    });
  };

  // Get the cropped image from the canvas
  const getCroppedImg = (image: HTMLImageElement, crop: PixelCrop) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );
    }

    return new Promise<string>((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Canvas is empty"));
          return;
        }
        resolve(URL.createObjectURL(blob)); // Cropped image URL
      }, "image/jpeg");
    });
  };

  // Handle upload of the cropped image
  const handleUpload = async () => {
    if (imageRef.current && completedCrop) {
      try {
        const croppedImageUrl = await getCroppedImg(imageRef.current, completedCrop);
        console.log("Cropped image URL:", croppedImageUrl);
        setIsCropping(false);
        setSelectedImage(null);
      } catch (e) {
        console.error("Error cropping image:", e);
      }
    }
  };

  // Handle crop complete
  const handleCropComplete = (crop: PixelCrop) => {
    setCompletedCrop(crop);
  };
  return (
    <main>
      <div className="flex flex-1 min-h-screen overflow-y-auto">
        <AddMenuSideBar />

        <div className="flex-col items-center mx-auto w-4/6 px-4 mb-4">
          <div className="justify-center ">
            <h2 className="text-right mt-4 cursor-pointer text-gray-700 text-xl">
              Save as Draft
            </h2>
            <h1 className="text-3xl font-bold mt-7">Images</h1>
            <p className="text-base text-gray-700 mt-2 mb-6">
              Impress your customers with an image that sells your menu item on
              the go
            </p>
          </div>

          <div className="w-full max-w-lg h-80 space-y-2 border-2 border-dashed border-gray-300 rounded-lg flex flex-col justify-center items-center  cursor-pointer">
            {/* Display the uploaded image or the placeholder */}
            {previewImage ? (
            <>
              {/* Image Preview */}
              {!isCropping && (
                <div className="mt-4">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="max-w-sm mx-auto cursor-pointer"
                    onClick={() => setIsCropping(true)} // Enable cropping on click
                  />
                  <p className="text-center mt-2">Click on the image to crop</p>
                </div>
              )}

              {/* Cropping Popup Modal */}
              {isCropping && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                  <div className="bg-white rounded-lg w-full max-w-md">
                    <div className="flex justify-between items-center p-4 border-b">
                      <h2 className="text-xl font-bold">Crop Image</h2>
                      <button
                        onClick={() => setIsCropping(false)} // Close the cropping modal
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X size={24} />
                      </button>
                    </div>
                    <div className="p-4">
                      <ReactCrop
                        crop={crop}
                        onChange={(newCrop) => setCrop(newCrop)}
                        onComplete={handleCropComplete}
                        aspect={16 / 9} // Aspect ratio
                      >
                        <img
                          ref={imageRef}
                          src={previewImage}
                          onLoad={onImageLoad}
                          alt="Crop me"
                          className="max-w-full"
                        />
                      </ReactCrop>
                    </div>
                    <div className="flex font-semibold justify-between p-4 border-t">
                      <button
                        onClick={() => setIsCropping(false)} // Cancel cropping
                        className="px-6 py-2 bg-gray-300 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleUpload} // Handle upload after cropping
                        className="px-6 py-2 bg-green text-white rounded"
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <Image src={img} alt="placeholder" />
              <div className="text-center">
                <h2 className="text-lg font-semibold">Upload an image</h2>
                <p className="text-sm text-gray-600">Recommended size: up to 10MB</p>
              </div>
            </>
          )}

            {/* Click to Browse button */}
            <label
              htmlFor="fileUpload"
              className="cursor-pointer inline-block bg-gray-100 text-sm text-gray-600 px-4 py-2 mt-4 border border-gray-300 rounded-lg hover:bg-gray-200"
            >
              {previewImage ? (
                "Change Image"
              ) : (
                <div className="flex space-x-2">
                  <Upload width={20} height={15} />
                  <p>Click to browse</p>
                </div>
              )}
            </label>
            <input
              type="file"
              id="fileUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          {!selectedImage &&(
            <div className=" mt-3">
              <Image
                src={defaultImg}
                alt="default"
                className="drop-shadow-sm"
              />
              <p className="w-1/3 text-gray-600">
                This will be the default img when you don't upload one
              </p>
            </div>
          )}
          {}
        </div>
      </div>
    </main>
  );
}

export default page;
