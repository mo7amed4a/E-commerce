'use client'
import React from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function Hamo({data}:{data:string}) { 
    let a = false
  return (
    <div>
        <MarkdownPreview source={data}  />
    </div>
  )
}
