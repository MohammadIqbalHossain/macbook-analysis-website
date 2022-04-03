import React from 'react';

const DisplayHomeReview = ({reviews}) => {
    console.log(reviews);

    const {name, picture, ratings, review } = reviews;
    return (
        <div className="mx-auto w-[300px] border-2 p-3 text-lg rounded-lg">
            <img className=" w-[200px] mx-auto border-3 p-5 " src={picture}  alt="" />
            <h2 className="text-3xl font-bold font-mono">{name}</h2>
            <p className="text-lg font-bold font-mono">Ratings: {ratings}</p>
            <p className="text-left font-serif">{review}</p>
        </div>
    );
};

export default DisplayHomeReview;