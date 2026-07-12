import { FaRegWindowClose } from "react-icons/fa";
export default function Popups() {
  return (
    <>
      <div className="wcf--popup-video-wrapper" id="wcf-aae-global--popup-js">
        <div className="wcf--popup-video">
          <button className="wcf--popup-close">
            <FaRegWindowClose aria-hidden="true" className="e-font-icon-svg e-far-window-close" />
          </button>
          <div className="aae-popup-content-container" />
        </div>
      </div>

      <div className="wcf-image-generator-popup">
        <div className="wcf-image-generator-popup-wrapper">
          <div className="image-generator-post-wrapper" />
        </div>
      </div>

    </>
  );
}
