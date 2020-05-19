import { useRouter } from "next/router";
import Link from "next/link";
import fetch from "node-fetch";

const Index = ({ stars }) => {
	const router = useRouter();
	const { id } = router.query;

	if (id) {
		const res = await fetch("https://api.github.com/repos/zeit/next.js");
		const json = await res.json();

		router.push(json.url)
	}
	

	return <p>Post: {pid}</p>;

	return (
		<div>
			<p>Next.js has {stars} ⭐️</p>
			<Link href="/preact-stars">
				<a>How about preact?</a>
			</Link>
		</div>
	);
};

export default Index;
