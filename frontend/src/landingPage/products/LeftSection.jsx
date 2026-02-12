export default function LeftSection({
  imgURL,
  productName,
  ProductDescription,
  tryDemo,
  LearnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-6  ">
          <img className="me-5" src={imgURL} alt="Product image" />
        </div>
        <div className="col-6 pt-5">
          <h1>{productName}</h1>
          <p>{ProductDescription}</p>
          <a className="text-decoration-none" href={tryDemo}>
            tryDemo <i className="fa-solid fa-right-long"></i>
          </a>
          <a className="mx-4 px-5 text-decoration-none" href={LearnMore}>
            LearnMore <i className="fa-solid fa-right-long"></i>
          </a>
          <br />
          <img className="mt-3" src={googlePlay} alt="googlePlay image" />
          <img className="mt-3 ps-3" src={appStore} alt="appStore image" />
        </div>
      </div>
    </div>
  );
}
