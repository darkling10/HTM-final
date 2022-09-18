import React from 'react';

function CoverImg({img=""}) {
    
    return (

        <div className='h-[30vh] object-fill bg-slate-400'>
            <div className='cursor-pointer'>
                <img src={img?img:"https://cdn.pixabay.com/photo/2020/05/04/10/21/background-5128586_960_720.jpg"} alt="CoverImage" className="w-full h-[250px] object-cover "/>
            </div>
        </div>
    );
}

export default CoverImg;