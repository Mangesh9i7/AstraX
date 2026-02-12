export default function RightSection({
  productName,
  ProductDescription,
  LearnMore,
  imgURL,
}) {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-6 mt-5 pt-5">
          <h1>{productName}</h1>
          <p>{ProductDescription}</p>
          <a className="text-decoration-none" href={LearnMore}>
            LearnMore <i className="fa-solid fa-right-long"></i>
          </a>
        </div>
        <div className="col-6  ">
          <img className="me-5" src={imgURL} alt="Product image" />
        </div>
      </div>
    </div>
  );
}
