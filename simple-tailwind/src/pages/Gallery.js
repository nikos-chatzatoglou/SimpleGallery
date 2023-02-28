import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import Loader from "../components/Loader";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

const Gallery = () => {
	const [data, setData] = useState([]);
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

	const slides = data.map((photo) => {
		return {
			src: photo.link,
			title: photo.title,
			description: photo.description,
		};
	});

	return (
		<div className='bg-gradient-to-b from-dutch-white to-midnight-green'>
			<section className='text-4xl font-metalMania flex m-2 p-10 justify-center'>
				<h1>Gallery</h1>
			</section>
			{loading && <Loader />}
			<div className='container mx-auto space-y-2 lg:space-y-0 lg:gap-2 grid lg:grid-cols-4 md:grid-cols-3 md:gap-4 sm:grid-cols-2 sm:gap-10'>
				{data.map((photo, index) => (
					<div key={photo.id} className=' rounded hover:shadow-2xl'>
						<img
							className='rounded-xl object-cover object-center lg:w-[16rem] lg:h-[16rem] md:w-[8rem] md:h-[8rem] '
							src={photo.link}
							alt={photo.title}
							onClick={() => setIndex(index)}
						/>
					</div>
				))}
			</div>
			<Lightbox
				index={index}
				open={index >= 0}
				close={() => setIndex(-1)}
				slides={slides}
				plugins={[Captions]}
			/>
		</div>
	);
};

export default Gallery;
