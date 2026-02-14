// section heading component with decorative corners
export default function SectionHeading({ title }: { title: string }) {
    return (
        <div className="relative mb-20 px-10 py-3 z-10">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-3 border-l-3 border-[#6fc33e] rounded-tl-xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-3 border-r-3 border-[#6fc33e] rounded-br-xl" />
            <h2 className="sm:text-4xl text-3xl font-semibold tracking-tight">{title}</h2>
        </div>
    )
}