import "./spinner.css";

const LoaderrSpinner = () => {
  return (
    <>
      <div className="spinner">
        <div className="wrapper">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <span className="loading text-xl">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default LoaderrSpinner;
