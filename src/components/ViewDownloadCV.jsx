import cv_url from "../assets/files/cv.pdf"

const ViewDownloadCV = () => {
    const cvUrl = cv_url; 
  
    return (
        <div className="fixed bottom-10 right-20 m-4 bg-black  rounded shadow-lg w-fit">
          <div className="cv-div flex space-x-2">
            <a 
              href={cvUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className=" text-white text-sm  block text-center mr-5 hover:scale-125"
            >
              View CV
            </a>
            <a 
              href={cvUrl} 
              download="Dil_CV.pdf" 
              className=" text-white text-sm rounded  block text-center hover:scale-125"
            >
              Download CV
            </a>
          </div>
        </div>
      );
    };
    
    export default ViewDownloadCV;