import React, { useState } from 'react';

export default function Traditional({ article }) {
	console.log({ article });

	const [showDetails, setShowDetails] = useState(false);
	function toggle() {
		setShowDetails(!showDetails);
	}

	if (article.length === 0) {
		return <div>Loading .....</div>;
	}

	// const { omnivore } = article.fields;
	// if (omnivore === 3) {
	return (
		<div>
			{article !== [] &&
				article.map((artic, index) => (
					<div key={index} className='recipe'>
						<h2>{artic.fields.name}</h2>

						<img src={artic.fields.image.fields.file.url} alt='' />
						<br />
						<button onClick={toggle}>Details</button>
						{showDetails && (
							<div className='ingredient-text'>{artic.fields.description}</div>
						)}

						{artic.fields.omnivore}
					</div>
				))}
		</div>
	);
}
