import { Link } from "react-router-dom";
import ram from "../images/ram.png";
const Home = () => {
	return (
		<div className='min-h-screen bg-gradient-to-b from-dutch-white to-midnight-green'>
			<div className='grid lg:grid-cols-2 grid-cols-1  text-black text-center'>
				<div className='flex items-center justify-center flex-col gap-7 rounded-xl border-solid p-10 min-h-screen'>
					<div className='flex rounded-xl border-solid bg-dutch-white p-2  w-full '>
						<h1 className='text-3xl md:text-6xl font-sedgwick'>
							Moto of the team{" "}
						</h1>
					</div>
					<div className='border-solid border-4 border-dutch-white rounded-3xl w-full min-h-24 flex flex-col items-center justify-center gap-10 p-2'>
						<h1 className=' text-2xl md:text-4xl  font-metalMania rounded-xl border-solid bg-gradient-to-r from-purple-400 md:from-yellow-500 w-full'>
							Code.
						</h1>
						<h1 className='text-2xl md:text-4xl  font-metalMania rounded-xl border-solid bg-gradient-to-r from-purple-400 md:from-yellow-500 p-2 w-full'>
							Debug/Grind.
						</h1>
						<h1 className='text-2xl md:text-4xl  font-metalMania rounded-xl border-solid bg-gradient-to-l from-purple-400 md:from-yellow-500 p-2 w-full'>
							Repeat!
						</h1>
					</div>
				</div>
				<div className='flex justify-center items-center bg-auto w-full  flex-col'>
					<img src={ram} className=' w-96' />
					<button className='mt-10 font-sedgwick text-3xl bg-gradient-to-r from-dutch-white to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl p-4'>
						Take a look
					</button>
				</div>
			</div>
		</div>
	);
};
export default Home;
