export type ImageType = {
    id: number
    attributes: {
        name: string
        alternativeText: string | null
        caption: string | null
        width: number
        height: number
        formats: []
        hash: string
        ext: string
        mime: string
        size: number
        url: string
        previewUrl: any
        provider: string
        provider_metadata: []
        createdAt: string
        updatedAt: string
    }
}

export type CategoryType = {
    id: number
    attributes: {
        name: string
        slug: string
        createdAt: string
        updatedAt: string
        publishedAt: string
        products: []
        image: {data : ImageType}
    }
}



export type productType = {
    id: number
    attributes: {
        title: string
        description: string
        // smallDescription: string
        price: number
        createdAt: string
        updatedAt: string
        publishedAt: string
        discount: number
        rating: number
        banner: {data: ImageType[]}
        category: {data : CategoryType}
    }
}

export type CartType = {
    id: number
    attributes: {
        email: string
        username: string
        createdAt: string
        updatedAt: string
        publishedAt: string
        products: {data : productType[]}
    }
}