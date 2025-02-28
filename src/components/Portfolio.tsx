import GalleryPortfolio from './GalleryPortfolio'


export default function Portfolio() {
  return (
    <div id='PROJETOS' className="bg-[#f0efeb]   py-24 sm:py-32 sm:pb-72 pb-40">
      <div className="mx-auto pb-40 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-base/7 font-semibold text-Blue_Primary">O que fazemos</h2>
      <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
        Descubra como nossas soluções podem transformar o seu negócio
      </p>
      <p className="mt-6 text-lg/8 text-gray-600">
        Explore nossos serviços personalizados para impulsionar o seu sucesso digital com inovação e tecnologia de ponta.
      </p>
    </div>
        {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-Blue_Primary">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div> */}
        <GalleryPortfolio/>
      </div>
    </div>
  )
}
