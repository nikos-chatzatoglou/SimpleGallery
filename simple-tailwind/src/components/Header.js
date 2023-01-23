function Header() {
	return (
		<div class='p-4 w-full bg-black md:bg-midnight-green flex justify-between'>
			<h1 class='font-sans text-3xl tracking-wider text-left text-dutch-white'>
				J'zargo
			</h1>
			<div class='flex space-x-8 text-sm md:text-base text-cultured-white mr-4 '>
				<button class='bg-persian-plum border-solid border text-cultured-white px-2 md:px-4 rounded-lg hover:bg-dutch-white'>
					Bait
				</button>
				<a href='#'>About Us</a>
				<a href='#'>Contact</a>
			</div>
		</div>
	);
}
export default Header;
