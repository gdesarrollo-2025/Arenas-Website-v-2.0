type phone = {
    team?: string,
    number: string,
}

export type branch = {
    name?: string,
    address: string,
    phones: phone[]
}

export type location = {
    city: string,
    branches: branch[]
}