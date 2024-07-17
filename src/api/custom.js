import axios from "axios";

export async function makeQuestion(question, summary, file) {
	console.log(import.meta.env.VITE_TOKEN);
	try {
		const res = await axios.post(import.meta.env.VITE_API_URL + "/s3", file, {
			headers: { "Content-Type": "multipart/form-data" },
		});

		await axios.post(
			import.meta.env.VITE_API_URL + "/question",
			{
				question,
				summary,
				imoji: res.data,
			},
			{
				headers: { Authorization: `Bearer ${import.meta.env.VITE_TOKEN}` },
			},
		);
	} catch (e) {
		console.log(e);
	}
}
