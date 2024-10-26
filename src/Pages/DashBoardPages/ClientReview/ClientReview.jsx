import { useEffect, useState } from "react";
import ClientReviewCard from "./ClientReviewCard";

const ClientReview = () => {
  const [clientReviews, setClientReviews] = useState([]);
  useEffect(() => {
    fetch("/clientReviews.json")
      .then((res) => res.json())
      .then((data) => setClientReviews(data));
  }, []);
  return (
    <div>
      {/*----------User-----------*/}
      <div>
        <h1 className="text-2xl font-bold text-sky-800">Client Review</h1>
        <h4 className="text-xl text-slate-900 py-1">
          Hi, Samantha. Wellcome back to Client Review!
        </h4>
      </div>
      {/*----------User-----------*/}

      {/*-----------Cliebt-------Review-------Start----*/}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-10">
        {clientReviews.map((clientReview) => (
          <ClientReviewCard
            key={clientReview.id}
            clientReview={clientReview}
          ></ClientReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
