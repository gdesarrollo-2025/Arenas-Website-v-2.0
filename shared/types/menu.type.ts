export type quickItem = {
    content: React.ReactNode,
}

export type MenuItem = {
    name: string,
    pages: pageItem[];
}

type pageItem = {
    name: string,
    link: string,
}
