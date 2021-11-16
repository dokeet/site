import Layout from "components/Layout";
import React from "react";
import userConfig from "user-config";

export default function Synthwave() {
  return (
    <div className="mt-12 mx-auto">
      <h1 className="text-white">{userConfig.name}</h1>
    </div>
  );
}

Synthwave.Layout = Layout;
