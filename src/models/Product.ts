import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String },
  description: { type: String },
  imageUrl: { type: String }, // optional for now
  isAvailable: { type: Boolean, default: true },
});

export const Product = models.Product || model("Product", ProductSchema);
