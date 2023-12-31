import Image from "next/image";
import { Right } from "../icons/Right";

export const Hero = () => {
  return (
    <section className="hero mt-4">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everythig
          <br />
          is better
          <br /> with a&nbsp;
          <span className="text-primary">pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is mising piece that makes every day complete, a simple yet
          delecision joy on life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase text-white flex items-center gap-2 px-4 py-2 rounded-full">
            Order Now
            <Right />
          </button>
          <button className="flex items-center gap-2 py-2 text-gray-600 font-semibold">
            Learn More
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"Pizza"}
        />
      </div>
    </section>
  );
};
