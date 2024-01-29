'use client'

import { useState } from "react"

export default function IcrAndDec() {
    const [count, setCount] = useState<number>(0)
  return (
    <div className="join w-32">
        <button onClick={() => setCount(prev => prev > 0 ? --prev : 0)} className="btn btn-square join-item">-</button>
        <input defaultValue={count} className="input input-bordered join-item min-w-16 px-2" type="number" min={0} max={100} placeholder="0"/>
        <button onClick={() => setCount(prev => prev < 100 ? ++prev : 100)} className="btn btn-square join-item">+</button>
    </div>
  )
}
