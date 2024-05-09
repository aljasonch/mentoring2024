import "./style.css"

export function Gallery() {
    return (
      <div className="surround">
        <div>
          <h1 className="headertext">Gallery</h1>
        </div>
        <div className="canvas">
          <div className="gallerybox"></div>
          <div className="gallerybox"></div>
          <div className="gallerybox"></div>
          <div className="gallerybox"></div>
        </div>
      </div>
    );
}