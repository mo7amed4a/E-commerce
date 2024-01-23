type PriceType = {
  price: number;
  discount?: number;
  size?: 'lg';
  className?: string
}
export default function Price({price, discount, size, className}: PriceType) {
  function disCountFun() {
    return discount ? price - (price * (discount / 100)) : price
  }
  return (
    <div className={`flex items-center ${size === 'lg' ? 'space-x-2' : 'justify-between'}`}>
      <div className="flex space-x-2 items-center">
        <span className={`${size === 'lg' ? 'text-2xl': "text-xl"} font-bold ${className}`}>${discount ? disCountFun() : price}</span>
        {discount && <span className="text-base-content/50 line-through">${price}</span>}
      </div>
      {discount && <span className="text-success font-medium">{discount}%</span>}
    </div>
  )
}
