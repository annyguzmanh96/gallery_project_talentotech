import { Link } from "react-router-dom";

import { Barranquilla } from "./Barranquilla";
import { Cartagena } from "./Cartagena";
import { Monteria } from "./Monteria";
import { Riohacha } from "./Riohacha";
import { SantaMarta } from "./SantaMarta";
import { Valledupar } from "./Valledupar";

export const Navigation = () => {
  return (
    <div className="container thumbnail-container mt-2">
      <Link to="/barranquilla" className="links">
        <figure className="thumbnail-image-size">
          <Barranquilla />
          <figcaption>Barranquilla</figcaption>
        </figure>
      </Link>
      <Link to="/cartagena" className="links">
        <figure className="thumbnail-image-size">
          <Cartagena />
          <figcaption>Cartagena</figcaption>
        </figure>
      </Link>
      <Link to="/monteria" className="links">
        <figure className="thumbnail-image-size">
          <Monteria />
          <figcaption>Monteria</figcaption>
        </figure>
      </Link>
      <Link to="/riohacha" className="links">
        <figure className="thumbnail-image-size">
          <Riohacha />
          <figcaption>Riohacha</figcaption>
        </figure>
      </Link>
      <Link to="/santaMarta" className="links">
        <figure className="thumbnail-image-size">
          <SantaMarta />
          <figcaption>SantaMarta</figcaption>
        </figure>
      </Link>
      <Link to="/valledupar" className="links">
        <figure className="thumbnail-image-size">
          <Valledupar />
          <figcaption>Valledupar</figcaption>
        </figure>
      </Link>
    </div>
  );
};
