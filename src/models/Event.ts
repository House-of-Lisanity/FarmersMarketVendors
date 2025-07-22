import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const EventSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true }, // ISO string
  location: { type: String, required: true },
  description: { type: String },
  isPublished: { type: Boolean, default: true },
});

export const Event = models.Event || model("Event", EventSchema);
