import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import Loader from "../components/Loader";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

const Portfolio = () => {
	const [data, setData] = useState([]);

	const [selectedPhoto, setSelectedPhoto] = useState(null);
	const [loading, setLoading] = useState(true);
	const [index, setIndex] = useState(-1);

	useEffect(() => {
		async function fetchPhotos() {
			const querySnapshot = await getDocs(collection(db, "Gallery"));
			const newData = [];
			querySnapshot.forEach((doc) => {
				newData.push(doc.data());
			});
			setData(newData);
			setLoading(false);
		}
		fetchPhotos();
	}, []);

	const slides = data.map((item) => ({ src: item.link }));

	const handlePhotoClick = (photo) => {
		setSelectedPhoto(photo);
		setIndex();
	};

	const handleCloseModal = () => {
		setSelectedPhoto(null);
	};
	return (
		<section className='bg-gradient-to-b from-dutch-white to-midnight-green h-screen'>
			<section className='text-4xl font-metalMania flex m-2 p-10 justify-center'>
				<h1>Pictures from nature</h1>
			</section>
			{loading && <Loader />}
			<div className='container mx-auto space-y-2 lg:space-y-0 lg:gap-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
				{data.map((photo, index) => (
					<div
						key={photo.id}
						className=' rounded hover:shadow-2xl'
						onClick={() => setIndex(index)}
					>
						<img
							className='rounded-xl object-cover object-center lg:w-[16rem] lg:h-[16rem]'
							src={photo.link}
							alt={photo.title}
							//onClick={() => handlePhotoClick(photo)}
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
			<Lightbox
				index={index}
				open={index >= 0}
				close={() => setIndex(-1)}
				slides={slides}
			/>
		</section>
	);
};

export default Portfolio;
