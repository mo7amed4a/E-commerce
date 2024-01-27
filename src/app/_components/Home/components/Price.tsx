type PriceType = {
  price: number;
  discount: number;
  size?: 'lg';
  className?: string
}

export default function Price({price, discount, size, className}: PriceType) {
  function disCountFun() {
    let lastPrice = discount ? price - (price * (discount / 100)) : price
    return Math.ceil( lastPrice * 100) / 100
  }
  return (
    <div className={`flex items-center ${size === 'lg' ? 'space-x-2' : 'justify-between'}`}>
      <div className="flex space-x-2 items-center">
        <span className={`${size === 'lg' ? 'text-2xl': "text-xl"} font-bold ${className}`}>${discount ? disCountFun() : price}</span>
        {discount > 0 && <span className="text-base-content/50 line-through">${price}</span>}
      </div>
      {discount > 0 && <span className="text-success font-medium">{discount}%</span>}
    </div>
  )
}
