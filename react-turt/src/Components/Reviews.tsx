import { ReviewList } from "./scene/ReviewList";

const ReviewViaGmail = () => {
    const email = "your@email.com";
    const subject = encodeURIComponent("Review for Your Website");
    const body = encodeURIComponent("Hi, I’d like to leave the following review:");
  
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  
    return (
        <>
        <div className="inner-review">
            {ReviewList.map((review, index)=>(
                <div key={review.id} className="review-card">
                    <h2 className="text-lg font-semibold">{review.name}</h2>
                    <p className="text-gray-600">{review.review}</p>
                    <p className="text-gray-500">{review.date}</p>
                </div>
            ))}
             </div>
      <a href={gmailLink} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Leave a Review via Gmail
        </button>
      </a>
      </>
     
    );
  };
  export default ReviewViaGmail;
  