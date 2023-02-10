declare module "*.module.css";
declare module "*.module.scss";


declare module '*.svg'
declare module '*.png'
// typings.d.ts
declare module '*.svg' {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}