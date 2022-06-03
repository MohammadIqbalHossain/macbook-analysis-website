import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import image from '../Assets/mack.png'
import DisplayHomeReview from '../DisplayHomeReview/DisplayHomeReview';

const Home = () => {

    const [review, setReview] = useReview([]);

    const homeReviewData = review.slice(0, 3);

    const navigate = useNavigate();

    return (
        <div>
            <div className="flex flex-col sm:flex-row text-left items-center mx-auto  h-[91vh]">

                <div className="md:ml-44 m-16 order-2 md:order-1">
                    <h1 className="text-6xl font-mono font-bold text-[#54bd79] mb-5 uppercase">So, This is the laptop you're gonna buy next</h1>

                    <p className="text-xl font-serif text-gray-500 mb-5">This is a review page of apple macbook air laptop. If you want to buy a mackbook air, see what others people says about us. May be it's gonna help  you buy our products. We are promised to our customers. good luck!</p>

                    <button  className="px-5 py-3 bg-green-400 font-serif text-xl text-white rounded hover:bg-green-600 ">
                        <a href="https://www.youtube.com/watch?v=NQesyAf849Q">Live Demo</a>    
                    </button>
                </div>

                <div className="order-1 sm:order-2">
                    <img className="w-[1400px]" src={image} alt="" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-4 mt-80 sm:mt-0">
                {
                    homeReviewData.map(review => <DisplayHomeReview
                        key={review._id}
                        reviews={review}
                    >
                    </DisplayHomeReview>)
                }
            </div>

            <button onClick={() => navigate(`/reviews`)} className="p-4 bg-green-400 font-serif text-xl text-white rounded-lg hover:bg-green-600 mb-5">
                See All Reviews
            </button>
        </div>
    );
};

export default Home;