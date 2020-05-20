const MongoClient = require("mongodb").MongoClient;
const crypto = require("crypto");

const connectToDatabase = async uri => {
	const client = await MongoClient.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	const db = await client.db();

	return db;
};

const generate = async () => {
	let code = crypto.randomBytes(5).toString("hex");
	const link = await Link.findOne({ id: code });
	if (link) return generate();
	else return code;
};

export default async (req, res) => {
	const db = await connectToDatabase(process.env.CONNECTION_STRING);
	const links = await db.collection("links");

	if (req.method === "POST") {
		let url = req.body.url.toString();

		if (!url.startsWith("https://") && !url.startsWith("http://"))
			return res.status(403).json({ message: "Not a URL!" });
		if (url.lenth > 2083)
			return res.status(403).json({ message: "URL Too long!" });

		generate().then(code => {
			let newLink = { id: code, url: url };
			links.insertOne(newLink, (err, res) => {
				if (err) throw err;
				res.status(201).json(newLink);
				db.close();
			});
		});
	}
};
