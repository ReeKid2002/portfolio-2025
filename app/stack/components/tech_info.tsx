import Image from "next/image";

export default function TechInfo({ name, link, image }: { name: string, link: string, image: string }) {
    return (
        <div className="flex flex-col items-center gap-1 hover:scale-110 transition-all duration-300 cursor-pointer" onClick={() => window.open(link, "_blank")}>
            <Image src={image} alt={name} width={24} height={24} className="w-6 h-6 object-contain" />
            <h2 className="text-xs color-white">{name}</h2>
        </div>
    );
}