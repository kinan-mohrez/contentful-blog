import React from 'react';
import Post from './Post';

export default function Posts({ post }) {
	return (
		<div>
			{post.map((article, index) => (
				<Post key={index} article={article} />
			))}
		</div>
	);
}
