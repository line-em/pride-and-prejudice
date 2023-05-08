import { createClient } from "contentful";
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const token = process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN;

const client = createClient({
	space: space,
	accessToken: token
});

export async function fetchEntries() {
	console.log("started");
	const entries = await client.getEntries({
		content_type: "chapters"
	});
	if (entries.items) return entries.items;
	console.log(`Error getting Entries for ${contentType.name}.`);
}

export default { fetchEntries };

// PEGAR OUTRO TOOLTIP
