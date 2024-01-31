'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function HiddenInput({children}: {children: React.ReactNode}) {
    const pathname = usePathname()
    return pathname != "/search" && <>{children}</>
}
