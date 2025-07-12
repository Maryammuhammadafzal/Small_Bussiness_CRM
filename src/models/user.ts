import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  role: { type: String, default: "user" },
});

export default mongoose.models.Users || mongoose.model('Users' , UserSchema);