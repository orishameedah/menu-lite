"use server";
import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";

export async function uploadFile(formData: FormData) {
  const file = formData.get("file") as File;
  if (!file) throw new Error("No file uploaded");

  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  // Ensure the uploads directory exists
  await fs.mkdir("./public/uploads", { recursive: true });

  // Save the file in the uploads directory
  const fileName = `./public/uploads/${file.name}`;
  await fs.writeFile(fileName, buffer);

  // Revalidate the path to ensure the uploaded image shows up
  revalidatePath("/");
}
