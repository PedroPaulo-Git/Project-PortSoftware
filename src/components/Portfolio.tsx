import GalleryPortfolio from "./GalleryPortfolio";

export default function Portfolio() {
  return (
    <div id="PROJETOS" className="bg-[#f0efeb]   py-24 sm:py-32 sm:pb-72 pb-40">
      <div className="mx-auto pb-40 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-Blue_Primary">
            O que fazemos
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Descubra como nossas soluções podem transformar o seu negócio
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Explore nossos serviços personalizados para impulsionar o seu
            sucesso digital com inovação e tecnologia de ponta.
          </p>
        </div>
        <GalleryPortfolio />
      </div>
    </div>
  );
}
