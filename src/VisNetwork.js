import React, { useEffect, useRef, useState } from "react";
import { Network } from "vis-network";

const VisNetwork = () => {
  const visJsRef = useRef(null);
  const [visRefInstance, setvisRefInstance] = useState();
  const DIR = "./images/indonesia/";

  const nodes = [
    {
      id: 1,
      shape: "circularImage",
      image: require(DIR + "1.png"),
      color: "#6e20d2",
    },
    {
      id: 2,
      shape: "circularImage",
      image: require(DIR + "2.png"),
      color: "#6e20d2",
    },
    {
      id: 3,
      shape: "circularImage",
      image: require(DIR + "3.png"),
      color: "#6e20d2",
    },
    {
      id: 4,
      shape: "circularImage",
      image: require(DIR + "4.png"),
      label: "pictures by this guy!",
      color: "#6e20d2",
    },
    {
      id: 5,
      shape: "circularImage",
      image: require(DIR + "5.png"),
      color: "#6e20d2",
    },
    {
      id: 6,
      shape: "circularImage",
      image: require(DIR + "6.png"),
      color: "#6e20d2",
    },
    {
      id: 7,
      shape: "circularImage",
      image: require(DIR + "7.png"),
      color: "#6e20d2",
    },
    {
      id: 8,
      shape: "circularImage",
      image: require(DIR + "8.png"),
      color: "#6e20d2",
    },
    {
      id: 9,
      shape: "circularImage",
      image: require(DIR + "9.png"),
      color: "#6e20d2",
    },
    {
      id: 10,
      shape: "circularImage",
      image: require(DIR + "10.png"),
      color: "#6e20d2",
    },
    {
      id: 11,
      shape: "circularImage",
      image: require(DIR + "11.png"),
      color: "#6e20d2",
    },
    {
      id: 12,
      shape: "circularImage",
      image: require(DIR + "12.png"),
      color: "#6e20d2",
    },
    {
      id: 13,
      shape: "circularImage",
      image: require(DIR + "13.png"),
      color: "#6e20d2",
    },
    {
      id: 14,
      shape: "circularImage",
      image: require(DIR + "14.png"),
      color: "#6e20d2",
    },
    {
      id: 15,
      shape: "circularImage",
      image: DIR + "missing.png",
      brokenImage: DIR + "missingBrokenImage.png",
      color: "#6e20d2",
    },
    {
      id: 16,
      shape: "circularImage",
      image: DIR + "anotherMissing.png",
      brokenImage: DIR + "9.png",
      color: "#6e20d2",
      borderColor: "#030404",
    },
  ];

  const edges = [
    { from: 1, to: 2, arrows: "to" },
    { from: 2, to: 3, arrows: "to" },
    { from: 2, to: 4, arrows: "to" },
    { from: 8, to: 10, arrows: "to" },
    { from: 11, to: 12, arrows: "to" },
    { from: 12, to: 13, arrows: "to" },
    { from: 13, to: 14, arrows: "to" },
    { from: 9, to: 16, arrows: "to" },
  ];

  const data = {
    nodes: nodes,
    edges: edges,
  };
  const options = {
    nodes: {
      size: 30,
      borderWidth: 5,
    },
    edges: {
      width: 1,
    },
  };

  useEffect(() => {
    const network = new Network(visJsRef.current, data, options);
    network.on("click", function (params) {
      if (params.nodes[0] !== undefined) {
        alert("click event on " + params.nodes[0]);
      }
    });
  }, [visJsRef, nodes, edges]);

  return <div ref={visJsRef} style={{ height: "750px" }} />;
};

export default VisNetwork;
