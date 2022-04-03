import React from 'react';
import useReview from '../../Hooks/useReview';
import DisplayHomeReview from '../DisplayHomeReview/DisplayHomeReview';

const Reviews = () => {
    const [reviews, setReview] = useReview([]);
    console.log(reviews);

    return (
        <div>
            <h1 className="text-5xl font-mono font-bold text-center my-5 text-sky-300 px-5">Our Customers says...</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
                {
                    reviews.map(review => <DisplayHomeReview
                     key={review._id}
                     reviews={review}
                    
                    ></DisplayHomeReview>)
                }
            </div>

        </div>
    );
};

export default Reviews;