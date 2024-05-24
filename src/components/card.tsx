import React from "react";

interface CardProps {
  content: string;
}

const Card: React.FC<CardProps> = ({ content }) => {
  return (
    <div className="bg-[#e30512] snap-start w-screen h-screen flex flex-col justify-center items-center text-white pt-40 pb-40">
      <img
        src="https://backstagetalks.com/img/backstagetalks_cover_issue_7.png"
        alt="issue_7"
        className="w-1/4 self-center"
      />
      {content}
      <p>Issue #7</p>
      <div>
        <p>
          <a href="">BUY HERE</a> (Europe)
        </p>
        <p>
          <a href="">BUY HERE</a> (UK & Overseas)
        </p>
        <p>
          or in <a href="">selected stores</a>
        </p>
      </div>
    </div>
  );
};

export default Card;
