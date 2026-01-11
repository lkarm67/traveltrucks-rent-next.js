import React from "react";
import css from "./LoadMore.module.css";

type LoadMoreProps = {
  onClick: () => void;
  loading?: boolean;
};

const LoadMore: React.FC<LoadMoreProps> = ({ onClick, loading }) => (
  <button className={css.loadMoreBtn} onClick={onClick} disabled={loading}>
    {loading ? "Loading..." : "Load More"}
  </button>
);

export default LoadMore;
