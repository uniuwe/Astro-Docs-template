export type Site = {
    title: string,
    description: string,
    image: {
        src: string,
        alt: string,
    },
    twitterHandle: string,
    socialLinks: {
        label: string,
        icon: string,
        link: string
    }[]
}

export type Writings = {
    url: string,
    title: string,
    description: string,
    publishDate: string,
    image: string,
    tags: string[]
}
