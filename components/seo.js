import { NextSeo } from "next-seo";

export default () => (
	<NextSeo
		title="Shorter"
		description="🔗 A simple link shortener app."
		canonical="https://shorter.gq/"
		openGraph={{
			url: "https://shorter.gq/",
			title: "Shorter",
			description: "🔗 A simple link shortener app.",
			images: [
				{
					url: "https://i.imgur.com/5GTU5r0.png",
					width: 1024,
					height: 1024,
					alt: "Shorter Logo",
				},
			],
			site_name: "Shorter",
		}}
		twitter={{
			handle: "@datejer",
			site: "@datejer",
			cardType: "summary_large_image",
		}}
	/>
);
