import AnimationWrapper from "./animation/animation-wrapper";

const Footer = () => {
  return (
    <AnimationWrapper>
      <footer className="w-full h-20 flex items-center justify-center  mt-12">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Mohak Gupta. All rights reserved.
        </p>
      </footer>
    </AnimationWrapper>
  );
};

export default Footer;
