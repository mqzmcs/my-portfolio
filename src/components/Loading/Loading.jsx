import "./Loading.css";

const Loading = () => {

  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="loading-bounce1"></div>
          <div className="loading-bounce2"></div>
          <div className="loading-bounce3"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
