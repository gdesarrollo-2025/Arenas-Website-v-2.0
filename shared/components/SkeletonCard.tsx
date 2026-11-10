export default function SkeletonCard({ className = "" }: { className?: string }) {
    return <div className={`place-self-center w-full h-full rounded-xl shadow-lg/40 bg-secondary/10 animate-pulse ${className}`} />
}