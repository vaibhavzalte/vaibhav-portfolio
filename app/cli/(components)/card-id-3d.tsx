import Tilt from "react-parallax-tilt";

const IdCard3d = () => {
  return (
    <div className="flex-1 flex justify-center items-center  bg-blue-400 dark:bg-black ">
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
          {/* Top Section */}
          <div className="flex flex-col items-center">
            <img
              src="https://avatars.githubusercontent.com/u/000000?v=4" // <-- Replace with your image
              alt="Vaibhav"
              className="
                w-24 h-24 rounded-full shadow-lg border-4 
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
            <p>💻 React / Next.js / React Native</p>
            <p>⚙️ Spring Boot / PostgreSQL / DynamoDB</p>
            <p>☁️ AWS / GCP</p>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              vaibhav.dev | @github
            </p>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default IdCard3d;
