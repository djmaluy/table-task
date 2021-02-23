import Spinner from "react-bootstrap/Spinner";

export const Loader = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};
