import Image from "next/image";

export const Hero = () => {
  return (
    <section className="grid grid-cols-2">
      <div>
        <h1>Everythig is better with pizza</h1>
        <p>
          Pizza is mising piece that makes every day complete, a simple yet
          delecision joy on life
        </p>
      </div>
      <div className=" w-16 h-16 relative">
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
