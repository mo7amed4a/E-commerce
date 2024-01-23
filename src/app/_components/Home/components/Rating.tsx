
type RateType = {
    rateNum: number;
    num: number;
    half: number;
    name: number
}

export default function Rating({rate, className}:{rate:number, className?: string}) {
    function Star({rateNum, num, half, name}: RateType){
        return rateNum >= num ? (
                <>
                    <input type="radio" name={"rating-"+name} className="bg-warning mask mask-star-2 mask-half-1" defaultChecked/>
                    <input type="radio" name={"rating-"+name} className="bg-warning mask mask-star-2 mask-half-2" defaultChecked/>
                </>
            ) : rateNum >= half ? (
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
    const randomNumber = Math.floor(Math.random() * 4515448810451)
  return (
    <div className={`rating rating-xs rating-half items-center ${className}`}>
        <input type="radio" name="rating-10" className="rating-hidden" />
        <Star rateNum={rate} num={1} name={randomNumber} half={0.5}/>
        <Star rateNum={rate} num={2} name={randomNumber} half={1.5}/>
        <Star rateNum={rate} num={3} name={randomNumber} half={2.5}/>
        <Star rateNum={rate} num={4} name={randomNumber} half={3.5}/>
        <Star rateNum={rate} num={5} name={randomNumber} half={4.5}/>
        <span className="text-gray-500 text- ml-2">{rate}</span>
    </div>
  )
}

