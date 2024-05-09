import { ExpandingClickablePhoto } from "../../components/gallerycomponents/ExpandingClickablePhoto";
import "./style.css"

const data = {
  tutorial: {
    title: "Tutorial Stage",
    widecover: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  stage1: {
    title: "Stage 1",
    widecover: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  stage2: {
    title: "Stage 2",
    widecover: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  stage3: {
    title: "Stage 3",
    widecover: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
};

export function Gallery() {


    return (
      <div className="surround">
        <div>
          <div className="headertext">Gallery</div>
          <div className="captiontext">
            CHARACTER BUILDING MENTORING UMN 2024
          </div>
          <div className="boldcaption">SELECT YOUR EVENT</div>
        </div>
        <div className="canvas">
          <div className="gallerybox">
            <ExpandingClickablePhoto data={data.tutorial} />
          </div>
          <div className="gallerybox">
            <ExpandingClickablePhoto data={data.stage1} />
          </div>
          <div className="gallerybox">
            <ExpandingClickablePhoto data={data.stage2} />
          </div>
          <div className="gallerybox">
            <ExpandingClickablePhoto data={data.stage3} />
          </div>
        </div>
      </div>
    );
}