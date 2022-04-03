import React from 'react';
import useReview from '../../Hooks/useReview';
import image from '../Assets/mack.png'
import DisplayHomeReview from '../DisplayHomeReview/DisplayHomeReview';

const Home = () => {

    const [review, setReview] = useReview([]);

    // console.log(review);

    const homeReviewData = review.slice(0, 3);

    // console.log(homeReviewData);

    return (
        <div>
            <div className="flex flex-col md:flex-row text-left items-center mx-auto  h-[91vh]">

                <div className="md:ml-44 m-16 order-2 md:order-1">
                    <h1 className="text-6xl font-mono font-bold text-blue-400 mb-5">This is laptop is your <br /> next laptop</h1>
                    <p className="text-xl font-serif text-gray-500 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est hic ab excepturi molestiae sint nisi doloribus, dolor explicabo temporibus nam!</p>
                    <button className="p-4 bg-blue-400 font-serif text-xl text-white rounded-lg hover:bg-green-300 ">Live Demo</button>
                </div>

                <div className="order-1 md:order-2">
                    <img className="w-[900px]" src={image} alt="" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                {
                    homeReviewData.map(review => <DisplayHomeReview
                        key={review._id}
                        reviews={review}
                    >
                    </DisplayHomeReview>)
                }
            </div>
        </div>
    );
};

export default Home;