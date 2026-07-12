import { FaArrowUp } from "react-icons/fa";
export default function Preloader() {
  return (
    <>
      <div className="wcf-preloader preloader-orbit-loading">
        <div className="orbit-loading">
          <div className="cssload-inner cssload-one" />
          <div className="cssload-inner cssload-two" />
          <div className="cssload-inner cssload-three" />
        </div>
      </div>

      <div id="wcf--top--scroll" hidden />

      <div className="wcf-scroll-to-top scroll-to-circle">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" /></svg><FaArrowUp aria-hidden="true" className="e-font-icon-svg e-fas-arrow-up" />
      </div>

    </>
  );
}
