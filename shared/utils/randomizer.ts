export default function randomizer(data: any[], length: number) {

    if (length > data.length) {
        throw new Error("length no puede ser mayor que data.length");
    }

    let randomData: any[] = [];
    while (randomData.length < length) {
        let random = Math.floor(Math.random() * data.length);
        let item = data[random];
        if (!randomData.some((i) => i.id == item.id)) {
            randomData.push(item)
        }
    }

    return randomData;
}