import Image from "next/image";

interface BannerProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}


const BannerSite = ({backgroundImage, title, subtitle}: BannerProps) => {
  return(
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}
    bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 ">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-orange-50 p-4">
            <Image 
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
const Banner = () => {
  return (
    <section id="banner" className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <BannerSite 
          backgroundImage="bg-bg-img-1"
          title="blablabla website"
          subtitle="blabala"
        />
        <BannerSite 
          backgroundImage="bg-bg-img-2"
          title="blablabla2 website"
          subtitle="blablabla.id"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-orange-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Overwhelmed</strong> Managing Online Traffic?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Starting from the frustration of businesses struggling with high online traffic, the potential for system overload and customer dissatisfaction is significant. That's why we created the antrein application for those of you who want to optimize your online operations and enhance customer experience
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>

      </div>

    </section>
  )
}

export default Banner