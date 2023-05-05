import { Schema, model, models } from "mongoose";

const wordSchema = new Schema({
	word: String,
	definition: String
});

export const Word = model("Word", wordSchema);
// export const Word = models.Word || model("Word", wordSchema);

const bookSchema = new Schema({
	id: { type: Number, required: true },
	text: String
});

export const Chapter = model("Chapter", bookSchema);
// export const Chapter = models.Chapter || model("Chapter", bookSchema);
