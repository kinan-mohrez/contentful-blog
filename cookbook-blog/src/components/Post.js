import React from 'react';

export default function Post({ article }) {
	// return <div>post</div>;
	console.log({ article });
	if (article.length === 0) {
		return <div>Loading .....</div>;
	}

	return (
		<div>
			{article.map((artic, index) => (
				<div key={index}>
					{artic.fields.name}

					<img src={artic.fields.image.fields.file.url} alt='' />

					{artic.fields.description}

					{artic.fields.omnivore}
				</div>
			))}
		</div>
	);
}
