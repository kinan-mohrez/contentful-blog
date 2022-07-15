import React, { useState } from 'react';

export default function Vegan({ article }) {
	// console.log({ article });

	const [showDetails, setShowDetails] = useState(false);
	function toggle() {
		setShowDetails(!showDetails);
	}

	if (article.length === 0) {
		return <div>Loading .....</div>;
	}

	return (
		<div className='recipes'>
			{article !== [] &&
				article.map(
					(artic, index) =>
						artic.fields.omnivore === 1 && (
							<div key={index} className='recipe'>
								<h2>{artic.fields.name}</h2>

								<img src={artic.fields.image.fields.file.url} alt='' />
								<br />
								<button onClick={toggle}>Details</button>
								{showDetails && (
									<div className='ingredient-text'>
										{artic.fields.description}
									</div>
								)}

								{artic.fields.omnivore}
							</div>
						)
				)}
		</div>
	);
}
