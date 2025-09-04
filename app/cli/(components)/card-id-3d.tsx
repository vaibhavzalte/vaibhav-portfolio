import Tilt from "react-parallax-tilt";
import Image from "next/image";
import ProfileCard from "@/components/custom/ProfileCard";
const IdCard3d = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <ProfileCard
        name="Vaibhav Zalte"
        title="Software Developer"
        handle="coder_vaibhav"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/photo_vaibhav.png"
        iconUrl="/image.png"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log('Contact clicked')}
        />
        </div>
    // <div className="flex-1 flex justify-center items-center border-t-2 border-green-400 bg-gray-100 dark:bg-black py-10">
    //   <Tilt
    //     glareEnable={true}
    //     glareColor="rgba(255,255,255,0.2)"
    //     glareMaxOpacity={0.45}
    //     scale={1.05}
    //     transitionSpeed={2000}
    //     tiltMaxAngleX={12}
    //     tiltMaxAngleY={12}
    //     className="w-80 h-[460px]"
    //   >
    //     <div className="relative w-full h-full bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-green-400 flex flex-col items-center overflow-hidden">

    //       <div className="absolute -top-10 w-24 h-10 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-green-500 dark:to-green-600 rounded-t-full shadow-md"></div>

    //       <div className="w-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-green-600 dark:to-green-400 p-3 text-center">
    //         <h1 className="text-white font-bold text-lg tracking-wider">
    //           TECH IDENTITY
    //         </h1>
    //       </div>

    //       <div className="mt-4">
    //         <Image
    //           src="/photo_vaibhav.JPG"
    //           alt="Vaibhav"
    //           width={120}
    //           height={140}
    //           className="w-[120px] h-[140px] object-cover rounded-md border-4 border-blue-500 dark:border-green-400 shadow-lg"
    //         />
    //       </div>

    //       <div className="mt-3 text-center">
    //         <h2 className="text-xl font-bold text-gray-900 dark:text-white">
    //           Vaibhav Zalte
    //         </h2>
    //         <p className="text-sm text-gray-600 dark:text-gray-300">
    //           Full-Stack Developer
    //         </p>
    //       </div>

    //       <div className="mt-4 px-6 text-sm w-full">
    //         <p className="mb-1">⚙️ Java / Spring Boot / PostgreSQL</p>
    //         <p className="mb-1">☁️ DevOps / Jenkins / Docker / GCP</p>
    //         <p className="mb-1">💻 React / Next.js</p>
    //         <p>💻 C / Python</p>
    //       </div>

    //       <div className="mt-auto flex flex-col items-center mb-4">
    //         <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
    //           @github/vaibhavzalte
    //         </p>
    //       </div>
    //     </div>
    //   </Tilt>
    // </div>
  );
};

export default IdCard3d;
