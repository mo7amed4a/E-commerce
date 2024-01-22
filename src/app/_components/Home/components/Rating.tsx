import React from 'react'

type RateType = {
    rate: number;
    num: number;
    half: number;
    name: number
}

export default function Rating({num}:{num:number}) {
    function Star({rate, num, half, name}: RateType){
        return rate >= num ? (
                <>
                    <input type="radio" name={"rating-"+name} className="bg-warning mask mask-star-2 mask-half-1" defaultChecked/>
                    <input type="radio" name={"rating-"+name} className="bg-warning mask mask-star-2 mask-half-2" defaultChecked/>
                </>
            ) : rate >= half ? (
                <>
                    <input type="radio" name={"rating-"+name} className="bg-warning mask mask-star-2 mask-half-1" defaultChecked/>
                    <input type="radio" name={"rating-"+name} className="bg-warning mask mask-star-2 mask-half-2" />
                </>
            ) : (
                <>
                    <input type="radio" name={"rating-"+name} className="bg-warning mask mask-star-2 mask-half-1" />
                    <input type="radio" name={"rating-"+name} className="bg-warning mask mask-star-2 mask-half-2" />
                </>
            )
    }
    
  return (
    <div className="rating rating-xs rating-half">
        <input type="radio" name="rating-10" className="rating-hidden" />
        <Star rate={1.5} num={1} name={num} half={0.5}/>
        <Star rate={1.5} num={2} name={num} half={1.5}/>
        <Star rate={1.5} num={3} name={num} half={2.5}/>
        {/* <Star rate={4} num={4} half={3.5}/>
        <Star rate={4} num={5} half={4.5}/> */}
    </div>
  )
}



// function BookRating({rating, review}) {
//   function Star({rate, num, half}){
//     return rate >= num ? (
//         <span className="bi bi-star-fill text-yellow-500"></span>
//       ) : rate >= half ? (
//         <span className="bi bi-star-half text-yellow-500"></span>
//       ) : (
//         <span className="bi bi-star text-gray-300"></span>
//       )
//   }
//   return (
//         <div className="stars">
//             <Star rate={rating} num={1} half={0.5}/>
//             <Star rate={rating} num={2} half={1.5}/>
//             <Star rate={rating} num={3} half={2.5}/>
//             <Star rate={rating} num={4} half={3.5}/>
//             <Star rate={rating} num={5} half={4.5}/>
//             <span className="text-gray-500 text-xs ml-2">({review})</span>
//         </div>
//   )
// }

// export default BookRating