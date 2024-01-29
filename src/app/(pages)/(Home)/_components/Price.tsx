type PriceType = {
  price: number;
  discount: number;
  size?: 'lg';
  className?: string
}

export function disCountFun(price: number, discount: number) {
  let lastPrice = discount ? price - (price * (discount / 100)) : price
  return Math.ceil( lastPrice * 100) / 100
}

export default function Price({price, discount, size, className}: PriceType) {

  return (
    <div className={`flex items-center ${size === 'lg' ? 'space-x-2' : 'justify-between'}`}>
      <div className="flex space-x-2 items-center">
        <span className={`${size === 'lg' ? 'text-2xl': "text-xl"} font-bold ${className}`}>{discount ? '$'+disCountFun(price, discount) : price === 0 ? <span className="badge badge-success text-white">Free</span> : '$'+price}</span>
        {discount > 0 && <span className="text-base-content/50 line-through">${price}</span>}
      </div>
      {discount > 0 && <span className="text-success font-medium">{discount}%</span>}
    </div>
  )
}
