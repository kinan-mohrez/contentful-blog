import React from 'react';

export default function Traditional({ article }) {
	// return <div>traditional</div>;

	console.log({ article });
	if (article.length === 0) {
		return <div>Loading .....</div>;
	}

	return (
		<div>
			{article.map((artic, index) => (
				<div key={index}>
					{artic.fields.omnivore === 3 ? (
						<div>
							<div>{artic.fields.name}</div>

							<div>
								<img src={artic.fields.image.fields.file.url} alt='' />
							</div>

							<div>{artic.fields.description}</div>

							<div>{artic.fields.omnivore}</div>
						</div>
					) : (
						console.log('tarditional')
					)}
				</div>
			))}
		</div>
	);
}
