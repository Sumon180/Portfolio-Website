import Typewriter from "typewriter-effect";

const TextType = () => {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["MERN Expert", "MERN Expert", "MERN Expert"],
          autoStart: true,
          delay: 50,
          loop: true,
        }}
      />
    </div>
  );
};

export default TextType;
