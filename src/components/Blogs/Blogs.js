import React from 'react';

const Blogs = () => {
    return (
        <div>
          <div className="text-left p-10 md:w-[900px] mx-auto font-serif">
                <h1 className="text-4xl text-gray-400 mb-5">Answers</h1>
                <h2 className="text-3xl mb-5">What is ContextAPI?</h2>
                <p className="text-xl font-serif mb-6">
                    Context API is very useful hook when we have to send multiple data in different level of components. We can send any data with the contextAPI. Usually e use props for sending data,
                    but when we have to send data to chid of child it cause lot of efforts (prop-drilling). SO, ContextAPI makes it so easy to sent data throught different conponent.
                </p>

                <h2 className="text-3xl mb-5">What is semantic tag?</h2>
                <p className="text-xl font-serif mb-6">
                   Semantic means meanigful, A HTML semantic tags gives clear descriptive overview of what the tag is does? Using semantic tag is more useful ranther just writing code in div. it's recommended by everyone.
                   <br />
                   <br />
                   Some semantic tags here.
                   <li>Article</li> 
                   <li>Nav</li> 
                   <li>Header</li> 
                   <li>Footer</li> 
                   <li>Main</li> 
                </p>

                <h2 className="text-3xl mb-5">Differences between block an inline-block element.</h2>
                <p className="text-xl font-serif mb-6">
                 <strong>Inline element: </strong> Inline element's are comens  displays an element as an inline element. It dosen't respect any height or width.
                 <br />
                 <br />
                 <strong>Block element: </strong> Block element's are comes in one line, It will take the whole width of the screen, We can give any height and width to  a block level element.
                 <br />
                 <br />
                 <strong>Inline-block: </strong> It's kinda like inline element, but it takes height and width. 
                 </p>
            </div>
        </div>
    );
};

export default Blogs;<h1>This is blogs page.</h1>