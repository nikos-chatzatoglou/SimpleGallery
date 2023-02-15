import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<div className='p-4 w-full fixed bg-black md:bg-midnight-green flex justify-between items-center'>
				<Link
					to='/'
					className='font-sedgwick text-4xl tracking-wider text-left text-dutch-white'
				>
					J'zargo
				</Link>
				<div className='flex md:text-base font-sedgwick text-cultured-white gap-6'>
					<Link to='/about'>About Us</Link>
					<Link to='/contact'>Contact</Link>
					<Link to='/portfolio'>Portfolio</Link>
					<button className='bg-persian-plum border-solid border text-cultured-white px-2 md:px-6 rounded-lg hover:bg-dutch-white'>
						Bait
					</button>
				</div>
			</div>
		</>
	);
};
export default Header;
