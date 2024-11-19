import { Link } from 'react-router-dom';

const MyPath = () => {
	return (
		<>
			<h1>Hello from My Path!</h1>
			<p>Everybody has their path and this one is mine.</p>
			<Link to={"/"}>Go back traveller...</Link>
		</>
	)
}

export default MyPath;