import Image from "next/image";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-zinc-900">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src="https://cdn-images.imagevenue.com/dd/3f/2d/ME18C3BP_o.jpg" width="550" height="550" className="rounded-lg min-[100vw] shadow-2xl lg:max-w-lg" />
        <div>
          <h1 className="text-3xl font-bold text-center text-white lg:text-6xl lg:text-start">Lorem ipsum <span className="text-indigo-700">dolor!</span> </h1>
          <p className="py-3 text-start lg:py-6 lg:text-start">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
