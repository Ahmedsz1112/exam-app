import Image from "next/image";
import { IDiploma } from "../types/diploma";
import { cn } from "@/shared/lib/utils/tailwind-cn";

interface DiplomaItemProps {
  diploma: IDiploma;
}

export default function DiplomaItem({ diploma }: DiplomaItemProps) {
  return (
    <article className={cn("min-h-96 p-2.5 flex flex-col justify-end relative" , !diploma.image && "bg-blue-50")}>
      {/* Image */}
      {diploma.image && (
        <Image
          src={diploma.image}
          alt={diploma.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 90vw, 400px"
        />
      )}

      <div className="space-y-1 max-h-24.5 hover:max-h-69.5 group">
        {/* title */}
        <p className="text-xl font-semibold  ">{diploma.title}</p>

        {/* description */}
        <p className="text-sm line-clamp-2 group-hover:overflow-auto group-hover:line-clamp-none">{diploma.description}</p>
      </div> 
    </article>
  );
}
