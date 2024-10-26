const ClientReviewCard = ({clientReview}) => {
    const {image, name, review} = clientReview
  return (
    <div>
      <div
        className="border-2 border-sky-800  flex w-full flex-col rounded-xl bg-transparent 
         text-gray-700 h-full"
      >
        <div className=" p-4 flex items-center justify-between gap-4  text-gray-700  rounded-xl ">
          <div className="h-[58px] w-[58px] rounded-full">
            <img
              src={clientReview.image}
              className="h-[58px] w-[58px] border-[3px] border-sky-500 inline-block rounded-full object-cover object-center"
            />
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-star text-xl text-[#ff6347]"></i>
            <i className="fa-solid fa-star text-xl text-[#ff6347]"></i>
            <i className="fa-solid fa-star text-xl text-[#ff6347]"></i>
            <i className="fa-regular fa-star-half-stroke text-xl text-[#ff6347]"></i>
            <i className="fa-regular fa-star-half-stroke text-xl text-[#ff6347]"></i>
          </div>
        </div>
        <div className="">
          <h5 className=" text-xl font-bold text-[#008080] px-4">
          {clientReview.name}
          </h5>
          <p className=" px-4 py-2 mb-4 text-justify">
          {clientReview.review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewCard;
