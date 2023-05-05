import React from "react";
import clientPromise from "@/app/api/connectMongo";

function page({ params }) {
	getChapters();
	return <div>page id</div>;
}

export async function getChapters(req, res) {
	try {
		console.log("CONNECTING");
		const client = await clientPromise;
		const db = await client.db("bookchapters");
		const collection = db.collection("chapters");
		// example to get a doc in collection
		const doc = await collection.findOne({ query: "" });
		console.log(doc);
	} catch (error) {
		console.log(error);
	}
}

export default page;
