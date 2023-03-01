import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<div className='p-4 w-full fixed bg-black md:bg-midnight-green flex justify-between items-center'>
				<Link
					to='/'
					className='font-sedgwick text-2xl md:text-4xl tracking-wider text-left text-dutch-white'
				>
					J'zargo
				</Link>
				<div className='hidden md:flex md:text-base font-sedgwick text-dutch-white gap-6'>
					<Link to='/'>Home</Link>
					<Link to='/gallery'>Gallery</Link>
				</div>
				<div className='md:hidden flex justify-end'>
					<button className='p-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 text-dutch-white hover:text-midnight-green'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					</button>
				</div>
			</div>
			<div className='md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 hidden'>
				<div className='p-8'>
					<div className='flex flex-col gap-6'>
						<Link
							to='/about'
							className='font-sedgwick text-2xl tracking-wider text-dutch-white'
						>
							About Us
						</Link>
						<Link
							to='/contact'
							className='font-sedgwick text-2xl tracking-wider text-dutch-white'
						>
							Contact
						</Link>
						<Link
							to='/portfolio'
							className='font-sedgwick text-2xl tracking-wider text-dutch-white'
						>
							Portfolio
						</Link>
						<button className='bg-persian-plum border-solid border text-cultured-white px-2 rounded-lg hover:bg-dutch-white'>
							Bait
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
