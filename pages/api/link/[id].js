const MongoClient = require("mongodb").MongoClient;

const connectToDatabase = async uri => {
	const client = await MongoClient.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	const db = await client.db();

	return db;
};

export default async (req, res) => {
	const db = await connectToDatabase(process.env.CONNECTION_STRING);
	const links = await db.collection("links");

	if (req.method === "GET") {
		const {
			query: { id },
		} = req;

		links.findOne({ id: id }).then(link => {
			if (!link) return res.status(404).json({ message: "Link not found!" });
			else return res.status(200).json(link);
		});
	}
};
