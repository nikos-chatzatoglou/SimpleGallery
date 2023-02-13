const Portfolio = () => {
	const pictures = [
		"https://firebasestorage.googleapis.com/v0/b/my-app-6756c.appspot.com/o/12042159_10204704818006965_1670278508_n.jpg?alt=media&token=789e3d9c-b9d4-4f6e-9704-1385411aa07a",
		"https://firebasestorage.googleapis.com/v0/b/my-app-6756c.appspot.com/o/12062706_10204704905729158_47603712_o.jpg?alt=media&token=6b7fe53b-1e85-4d66-8b42-86e9bcd0c22a",
		"https://firebasestorage.googleapis.com/v0/b/my-app-6756c.appspot.com/o/12076381_10204704905169144_1916087971_o%20(1).jpg?alt=media&token=c8e80b43-2f0e-40e3-b677-b574fbb38794",
		"https://firebasestorage.googleapis.com/v0/b/my-app-6756c.appspot.com/o/20151018_110659.jpg?alt=media&token=693c53d8-e997-4215-8a0b-fc0e7655e8fa",
	];
	return (
		<section className='bg-gradient-to-b from-dutch-white to-midnight-green h-screen'>
			<section className='text-4xl font-metalMania flex m-2 p-10 justify-center'>
				<h1>Pictures from nature</h1>
			</section>
			<div class='container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-4'>
				<div class='w-full rounded hover:shadow-2xl'>
					<img className='rounded-xl' src={pictures[0]} alt='image' />
				</div>
				<div class='w-full  hover:shadow-2xl'>
					<img className='rounded-xl' src={pictures[1]} alt='image' />
				</div>
				<div class='w-full rounded hover:shadow-2xl'>
					<img className='rounded-xl' src={pictures[2]} alt='image' />
				</div>
				<div class='w-full rounded hover:shadow-2xl'>
					<img className='rounded-xl' src={pictures[3]} alt='image' />
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
