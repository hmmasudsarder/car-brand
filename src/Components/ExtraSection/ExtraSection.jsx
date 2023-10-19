import Marquee from "react-fast-marquee";

const ExtraSection = () => {
  return (
    <div>
        <h3 className="text-4xl text-center font-extrabold mt-4">Our New Arrival Cars</h3>
      <Marquee>
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img className="w-[55vh] h-[65vh]" src="https://i.ibb.co/wSVCYpH/download-3.jpg" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              BMW
            </h4>
            
          </div>

        </div>
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img className="w-[55vh] h-[65vh]" src="https://i.ibb.co/9GLCBS8/5ccce70fc5642b8f3f0fe0aa4db80627.png" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Toyota sedan
            </h4>
            
          </div>

        </div>
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img className="w-[55vh] h-[65vh]" src="https://i.ibb.co/KFWFsbk/47eb7001aa5a69cf56e22798fd7da9aa.png" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Toyota Gip
            </h4>
            
          </div>

        </div>
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img className="w-[55vh] h-[65vh]" src="https://i.ibb.co/XS4pBpb/images-1.jpg" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Ferrari
            </h4>
            
          </div>

        </div>
        
      </Marquee>
    </div>
  );
};

export default ExtraSection;
