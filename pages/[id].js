import axios from "axios";
import Index from "./index";

const Redirect = () => {
	return <Index />;
};

Redirect.getInitialProps = ({ query, res }) => {
	const { id } = query;

	if (!id.includes(".")) {
		if (res) {
			axios
				.get(`/api/link/${id}`)
				.then(response => {
					if (response.status !== 200 && response.status !== 201)
						response.writeHead(301, { Location: "/404" });
					else return response.json();
				})
				.then(json => {
					res.writeHead(301, {
						Location: json.url,
					});
				});
			return query;
		}
	} else {
		return query;
	}
};

export default Redirect;
