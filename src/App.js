function App() {
	const title = 'Blog post';
	const body = 'This is my blog post';
	const comments = [
		{ id: 1, text: 'commnet 1' },
		{ id: 2, text: 'commnet 2' },
		{ id: 3, text: 'commnet 3' },
	];

	const loading = false;
	const showComments = true;
	if (loading) return <h1>Loading...</h1>;

	return (
		<div className='container'>
			<h1>{title}</h1>
			<p>{body}</p>
			{showComments && (
				<div className='commnets'>
					<h3>Comments: ({comments.length})</h3>
					<ul>
						{comments.map((comment, index) => (
							<li key={index}>{comment.text}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default App;
