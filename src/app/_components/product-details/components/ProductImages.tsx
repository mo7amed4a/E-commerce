'use client'
import { ImageType } from "@/types";
import Image from "next/image"
import { useState } from "react"


export default function ProductImages({images}: {images: ImageType[]}) {
  const [imageSrc, setImageSrc] = useState<ImageType|null>(images.length > 0 ? images[0] : null);
  function isFive() : ImageType[] {
    return images.length >= 5 ? images.slice(0, 5) : images
  }
  return (
    <div className="w-full md:w-[31.25rem]">
       {imageSrc ? <Image priority={true} className="border rounded-box w-full" src={imageSrc.attributes.url} width={500} height={400} alt={imageSrc.attributes.url} /> : 
         <span className="text-xl font-bold text-base-content/50" >No Image</span>
       }
       <div className="mt-2 join join-horizontal divide-x border">
         {images ? isFive().map((image, index) => (
           <Image priority={true} onClick={() => setImageSrc(images[index])} key={index} className={`join-item cursor-pointer w-1/${isFive().length}`} src={image.attributes.url} width={100} height={100} alt={image.attributes.name} />
         )) : <div className="p-2">
                 <span className="text-xl font-bold text-base-content/50" >No Images</span>
               </div>}
       </div>
    </div>
  )
}
