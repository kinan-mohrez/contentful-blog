import React, { useState } from 'react';

export default function Vegetarian({ article }) {
	console.log({ article });

	const [showDetails, setShowDetails] = useState(false);
	function toggle() {
		setShowDetails(!showDetails);
	}

	if (article.length === 0) {
		return <div>Loading .....</div>;
	}

	const { name, image, description, omnivore } = article.fields;
	if (omnivore === 2) {
		return (
			<div className='recipe'>
				<h2>{name}</h2>

				<img src={image.fields.file.url} alt={name} />
				<br />
				<button onClick={toggle}>Details</button>
				{showDetails && <div className='ingredient-text'>{description}</div>}

				{omnivore}
			</div>
		);
	}
}
