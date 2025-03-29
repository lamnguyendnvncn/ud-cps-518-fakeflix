import React from "react";
import "./skeletonElement.scss";

const SkeletonElement = ({ type }) => <div className={`Skeleton ${type}`} data-testid={`skeleton-${type}`} />;

export default SkeletonElement;
