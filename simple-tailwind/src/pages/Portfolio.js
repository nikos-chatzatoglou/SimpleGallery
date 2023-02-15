import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

const Portfolio = () => {
	const [data, setData] = useState([]);
	const [selectedPhoto, setSelectedPhoto] = useState(null);

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
	const handlePhotoClick = (photo) => {
		setSelectedPhoto(photo);
	};

	const handleCloseModal = () => {
		setSelectedPhoto(null);
	};
	return (
		<section className='bg-gradient-to-b from-dutch-white to-midnight-green h-screen'>
			<section className='text-4xl font-metalMania flex m-2 p-10 justify-center'>
				<h1>Pictures from nature</h1>
			</section>
			<div className='container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-4'>
				{data.map((photo, index) => (
					<div key={index} className='w-full rounded hover:shadow-2xl'>
						<img
							className='rounded-xl '
							src={photo.link}
							alt={photo.title}
							onClick={() => handlePhotoClick(photo)}
						/>
					</div>
				))}
				{selectedPhoto && (
					<div
						className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center sm:p-4'
						onClick={handleCloseModal}
					>
						<div className='bg-white rounded-lg p-6 sm:p-10'>
							<h2 className='text-xl font-bold mb-4 sm:text-3xl font-metalMania'>
								{selectedPhoto.title}
							</h2>
							<p className='text-sm sm:text-base font-sedgwick'>
								{selectedPhoto.description}
							</p>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Portfolio;
