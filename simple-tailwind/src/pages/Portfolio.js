import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

const Portfolio = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchPhotos() {
			const querySnapshot = await getDocs(collection(db, "Gallery"));
			const newData = [];
			querySnapshot.forEach((doc) => {
				newData.push(doc.data());
			});
			setData(newData);
		}
		fetchPhotos();
	}, []);

	return (
		<section className='bg-gradient-to-b from-dutch-white to-midnight-green h-screen'>
			<section className='text-4xl font-metalMania flex m-2 p-10 justify-center'>
				<h1>Pictures from nature</h1>
			</section>
			<div className='container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-4'>
				{data.map((photo, index) => (
					<div key={index} className='w-full rounded hover:shadow-2xl'>
						<img className='rounded-xl' src={photo.link} alt={photo.title} />
					</div>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
