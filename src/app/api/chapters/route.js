import connectMongo from "../connectMongo";
import { Chapter, Word } from "../models/models";
import { NextResponse } from "next/server";

export async function POST(req, res) {
	console.log("POST");
	try {
		console.log("CONNECTING TO MONGO");
		await connectMongo();
		const content = await req.text();
		const JSONcontent = JSON.parse(content);

		const existingChapter = await Chapter.findOne({ id: JSONcontent.id });
		console.log(existingChapter);

		if (existingChapter) {
			throw new Error("Chapter already exists");
		} else {
			const newChapter = await Chapter.create(JSONcontent);
			console.log(newChapter);
			console.log("CREATED DOCUMENT");
			return NextResponse.json({ newChapter });
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
		const chapters = await Chapter.find();
		console.log(chapters);
		return NextResponse.json({ chapters });
	} catch (error) {
		console.log(error);
		res.json({ error });
	}
}
