import React from 'react';

export default function Vegetarian({ article }) {
	// return <div>vegetarian</div>;
	console.log({ article });
	if (article.length === 0) {
		return <div>Loading .....</div>;
	}

	return (
		<div>
			{article.map((artic, index) => (
				<div key={index}>
					{artic.fields.omnivore === 2 ? (
						<div>
							<div>{artic.fields.name}</div>

							<div>
								<img src={artic.fields.image.fields.file.url} alt='' />
							</div>

							<div>{artic.fields.description}</div>

							<div>{artic.fields.omnivore}</div>
						</div>
					) : (
						console.log('vegetarian')
					)}
				</div>
			))}
		</div>
	);
}
