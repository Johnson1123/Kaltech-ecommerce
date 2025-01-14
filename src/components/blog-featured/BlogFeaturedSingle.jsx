import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogFeaturedSingle = ({ singlePost }) => {
  return (
    <div className="blog-wrap mb-30 scroll-zoom">
      <div className="blog-img">
        <Link to={import.meta.env.VITE_PUBLIC_URL + singlePost.url}>
          <img
            src={import.meta.env.VITE_PUBLIC_URL + singlePost.image}
            alt=""
          />
        </Link>
        <div className="blog-category-names">
          {singlePost.category.map((singleCategory, key) => {
            return (
              <span className="purple" key={key}>
                {singleCategory}
              </span>
            );
          })}
        </div>
      </div>
      <div className="blog-content-wrap">
        <div className="blog-content text-center">
          <h3>
            <Link to={import.meta.env.VITE_PUBLIC_URL + singlePost.url}>
              {singlePost.title}
            </Link>
          </h3>
          <span>
            By{" "}
            <Link to={import.meta.env.VITE_PUBLIC_URL + singlePost.authorUrl}>
              {singlePost.author}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

BlogFeaturedSingle.propTypes = {
  singlePost: PropTypes.shape({}),
};

export default BlogFeaturedSingle;
