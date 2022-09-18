import React from 'react';

function ProfileImg() {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    // const handleImageUpload = e => {
    //     const [file] = e.target.files;
    //     if (file) {
    //         const reader = new FileReader();
    //         const { current } = uploadedImage;
    //         current.file = file;
    //         reader.onload = e => {
    //             current.src = e.target.result;
    //         };
    //         reader.readAsDataURL(file);
    //         console.log(file)
    //     }
    // };

    return (
        <div className='justify-center flex'>
            {/* <input
                type="file"
                accept="image/*"
                // onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                    display: "none"
                }} */}
            {/* /> */}
            <span className=' bg-gray cursor-pointer' onClick={() => imageUploader.current.click()}>
                <img ref={uploadedImage} alt="profile" className="relative rounded-full top-[-90px]  w-48 h-48 bg-slate-400 object-cover"/>
            </span>
        </div>
    );
}

export default ProfileImg;