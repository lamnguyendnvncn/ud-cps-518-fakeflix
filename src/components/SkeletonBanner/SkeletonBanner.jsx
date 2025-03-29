import React from "react";
import SkeletonElement from "../SkeletonElement/SkeletonElement";
import "./skeletonBanner.scss";

const SkeletonBanner = () => {
  return (
    <div className="Skeleton__Banner">
      <SkeletonElement type="title" />
      <div className="Skeleton__inline">
        <SkeletonElement type="button" />
        <SkeletonElement type="button" />
      </div>
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
    </div>
  );
};

export default SkeletonBanner;
