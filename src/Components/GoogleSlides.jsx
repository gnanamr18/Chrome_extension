import React, { useState } from "react";

const GoogleSlides = () => {
  const [url, setUrl] = useState("");
  const [iframeUrl, setIframeUrl] = useState("");

  const loadSlide = () => {
    if (url) {
      setIframeUrl(url);
    } else {
      alert("Please enter a Google Slides URL.");
    }
  };

  return (
    <div>
      <div>
        
       
  <div className="card m-4" style={{width: "18rem", height: "18rem"}}>
  {/* <img src="https://docs.google.com/presentation/d/1Nfag1iCMMkkaV1F1phuRwF7XDo-ZU1tf-_06OoZXqTU/embed" className="card-img-top" alt="slide"/> */}
  <iframe
              src="https://docs.google.com/presentation/d/1Nfag1iCMMkkaV1F1phuRwF7XDo-ZU1tf-_06OoZXqTU/embed"
              className="card-img-top "
              width="960"
              height="240"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              title="Google Slide"
            ></iframe>
  <div className="card-body">
    <p classNameName="card-title text text-danger">Daily Slide</p>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href="https://docs.google.com/presentation/d/1Nfag1iCMMkkaV1F1phuRwF7XDo-ZU1tf-_06OoZXqTU/embed" class="btn btn-primary">Google slides</a>
  </div>
</div>
      </div>

      </div>

  );
};

export default GoogleSlides;
