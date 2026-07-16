import normalizeString from "./normalizeString";
export default function slugify(str: string): string {
    return normalizeString(str)
        .replace(/\s+/g, '-');
}