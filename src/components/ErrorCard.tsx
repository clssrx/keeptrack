import React from "react";

interface ErrorCardType {
  errorMessage: string | undefined;
  dimension?: 'large',
}

const ErrorCard = ({ errorMessage, dimension }: ErrorCardType) => {
  return (
    <div className="row">
      <div className={"card error" + dimension}>
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
