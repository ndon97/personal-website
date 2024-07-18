import Image from "next/image";
import van1 from "@/assets/van1.png";
import van2 from "@/assets/van2.jpg";
import van3 from "@/assets/van3.jpg";
import van4 from "@/assets/van4.jpg";
import van5 from "@/assets/van5.jpg";
import van6 from "@/assets/van6.jpeg";

export default function ImageCarousel() {
  return (
    <div className="carousel carousel-vertical h-96 w-3/4 rounded-3xl">
      <div className="carousel-item">
        <Image src={van1} className="h-auto w-full" alt="van" />
      </div>
      <div className="carousel-item">
        <Image src={van2} className="h-auto w-full" alt="van" />
      </div>
      <div className="carousel-item">
        <Image src={van3} className="h-auto w-full" alt="van" />
      </div>
      <div className="carousel-item">
        <Image src={van4} className="h-auto w-full" alt="van" />
      </div>
      <div className="carousel-item">
        <Image src={van5} className="h-auto w-full" alt="van" />
      </div>
      <div className="carousel-item">
        <Image src={van6} className="h-auto w-full" alt="van" />
      </div>
    </div>
  );
}
