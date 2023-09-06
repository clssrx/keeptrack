import React from "react";

interface ErrorCardType {
  errorMessage: string | undefined;
}

const ErrorCard = ({ errorMessage }: ErrorCardType) => {
  return (
    <div className="row">
      <div className="card large error">
        <section>
          <p>
            <span className="icon-alert inverse "></span>
            {errorMessage}
          </p>
        </section>
      </div>
    </div>
  );
};

export default ErrorCard;
