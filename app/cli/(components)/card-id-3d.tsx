import Tilt from "react-parallax-tilt";
import Image from "next/image";

const IdCard3d = () => {
  return (
    <div className="flex-1 flex justify-center items-center  bg-gray-200 dark:bg-black ">
      <Tilt
        glareEnable={true}
        glareColor="rgba(255,255,255,0.2)"
        glareMaxOpacity={0.5}
        scale={1.05}
        transitionSpeed={2500}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        className="w-80 h-96"
      >
        <div
          className="
            w-full h-full p-6 rounded-2xl shadow-xl flex flex-col justify-between
            bg-white text-gray-800
            dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:text-white
          "
        >
          <div className="flex flex-col items-center">
            <Image
              src="/photo_vaibhav.JPG"
              alt="Vaibhav"
              width={50}
              height={60}
              className="
                w-[120px] h-[120px] rounded-full shadow-lg border-4 
                border-blue-500 dark:border-green-400
              "
            />
            <h2 className="mt-4 text-2xl font-bold">Vaibhav</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Full-Stack Developer
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-2 text-sm">
            <p>⚙️ Java / Spring Boot / PostgreSQL</p>
            <p>☁️ devops / jenkins / docker / GCP</p>
            <p>💻 React / Next.js </p>
            <p>💻 C / Python</p>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              vaibhavzalte | @github
            </p>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default IdCard3d;
