import mongoose, { mongo } from "mongoose";

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },

})
// for not creating models we use mongoose,models.food
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)
export default foodModel