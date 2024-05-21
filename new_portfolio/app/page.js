import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center p-0 bg-zinc-900">
      <div className="xl:container flex flex-col lg:text-6xl sm:text-4xl">
        <h1 className="lg:text-white uppercase text-start mb-5">Hello I am</h1>
        <h1 className="text-white uppercase text-start">Brandon Roulstone <span className="text-indigo-700">.</span></h1>
      </div>
        <Image height={500} width={500} src="https://cdn-images.imagevenue.com/dd/3f/2d/ME18C3BP_o.jpg" className="absolute right-0 h-screen object-cover grayscale" alt="My_Image"/>
    </div>
  );
}
