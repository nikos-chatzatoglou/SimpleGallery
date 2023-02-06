const Portfolio = () => {
	const pictures = [
		"https://firebasestorage.googleapis.com/v0/b/my-app-6756c.appspot.com/o/12042159_10204704818006965_1670278508_n.jpg?alt=media&token=535eb339-84f9-4b6a-9524-21eac0acf205",
		"https://firebasestorage.googleapis.com/v0/b/my-app-6756c.appspot.com/o/12062706_10204704905729158_47603712_o.jpg?alt=media&token=10a65562-16a7-48d3-883a-bcc628053f32",
		"https://firebasestorage.googleapis.com/v0/b/my-app-6756c.appspot.com/o/12076381_10204704905169144_1916087971_o.jpg?alt=media&token=ca86e394-dfc2-454a-ab4e-b718eab7063e",
		"https://firebasestorage.googleapis.com/v0/b/my-app-6756c.appspot.com/o/20151018_110659.jpg?alt=media&token=9a5d78e1-8d01-4eb6-afd1-9a50ca6ad21b",
	];
	return (
		<>
			<section className='bg-gradient-to-b from-dutch-white to-midnight-green h-screen'>
				<section className='text-4xl font-metalMania flex m-2 p-10 justify-center'>
					<h1>Pictures from nature</h1>
				</section>

				<section className=' mt-12 h-screen flex justify-center'>
					<div className='grid lg:grid-cols-4 md:grid-cols-3 text-black text-center '>
						<div className='rounded-xl border-solid '>
							<img
								src={pictures[0]}
								className='rounded-xl object-scale-down h-72 w-72'
							/>
						</div>
						<div className='rounded-xl border-solid p-1'>
							<img
								src={pictures[1]}
								className='rounded-xl object-scale-down h-72 w-72'
							/>
						</div>
						<div className='rounded-xl border-solid p-1'>
							<img
								src={pictures[2]}
								className='rounded-xl object-scale-down h-72 w-72'
							/>
						</div>
						<div className='rounded-xl border-solid p-1'>
							<img
								src={pictures[3]}
								className='rounded-xl object-scale-down h-72 w-72'
							/>
						</div>
					</div>
				</section>
			</section>
		</>
	);
};

export default Portfolio;
