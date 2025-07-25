import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    product_images: { type: [String], required: true },
    product_video: String,
    product_name: { type: String, required: true },
    product_category: { type: String, required: true },
    product_description: { type: String, required: true },
    status: { type: Number, required: true },
    product_brand: { type: String, required: true },
    product_ingredient: { type: String, required: true },
    product_sku: { type: String, required: true, unique: true },
    stock: { type: Number, required: true },
    count: { type: Number, required: true },
  },
  { versionKey: "__v", timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema, "products");
