import connectMongo from "../connectMongo";
import { Word } from "../models/models";
import { NextResponse } from "next/server";

export async function POST(req, res) {
	console.log("POST");
	try {
		console.log("CONNECTING TO MONGO");
		await connectMongo();
		const content = await req.text();
		const JSONcontent = JSON.parse(content);

		const existingWord = await Word.findOne({ word: JSONcontent.word });
		console.log(existingWord);

		if (existingWord) {
			throw new Error("Word already exists");
		} else {
			const newWord = await Word.create(JSONcontent);
			console.log(newWord);
			console.log("CREATED DOCUMENT");
			return NextResponse.json({ newWord });
		}
	} catch (error) {
		console.log(error);
		res.json({ error });
	}
}

export async function GET(req, res) {
	console.log("GET");
	try {
		console.log("CONNECTING TO MONGO");
		await connectMongo();
		const words = await Word.find();
		console.log(words);
		return NextResponse.json({ words });
	} catch (error) {
		console.log(error);
		res.json({ error });
	}
}
