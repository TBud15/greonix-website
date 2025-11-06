import Image from "next/image";

export default function ProductDetails() {
  return (
    <div>
      <h1>Подробнее</h1>

      <div className="flex font-inter text-white bg-[#307032] pl-60">
        {/* Left side description*/}
        <div>
          <p className="text-">Get Started</p>
          <h1>What level of hiker are you</h1>
          <p>
            Determining what level of hiker you are can be an important tool
            when planning future hikes. This hiking level guide will help you
            plan hikes according to different hike ratings set by various
            websites like All Trails and Modern Hiker. What type of hiker are
            you - novice, moderate, advanced moderate, expert, or expert
            backpacker?
          </p>
        </div>

        {/* Right side Image */}
        <div>
          <Image
            src="/CrumbRubberPage/Product.png"
            width={1000}
            height={300}
            alt="Picture"
          />
        </div>
      </div>
    </div>
  );
}
