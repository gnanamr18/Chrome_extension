// src/components/AmazonKindleBook.js
import React from "react";

const Books = () => {
  const kindleBookUrl =
    "https://read.amazon.in/sample/B071KG3793?f=1&r=378d309e&sid=260-8064960-1969514&rid=&cid=A1MXN6G2MZG6KR&clientId=kfw&l=en_IN&asin=B071KG3793&revisionId=378d309e&format=1&depth=";
  return (
    <div>
      <div>
        <div className="card m-4" style={{ width: "18rem", height: "18rem" }}>
          <iframe
            src={kindleBookUrl}
            className="card-img-top"
            width="960px"
            height="240px"
            allowFullScreen
            title="Amazon Kindle Book"
          ></iframe>
          <div className="card-body">
            <p className="card-title text text-danger">Kindle Book</p>
            <a
              href={kindleBookUrl}
              className="btn btn-sm btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read on Amazon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
