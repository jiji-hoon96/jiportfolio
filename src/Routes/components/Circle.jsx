import { v4 } from "uuid";
import allIcons from 'simple-icons';
import { IconCloud } from "react-icon-cloud";

const tagCanvasOptions = {
    clickToFront: 500,
    depth: 1,
    imageScale: 2.3,
    initial: [0.3, -0.3],
    outlineColour: '#0000',
    reverse: true,
    tooltip: 'native', 
    tooltipDelay: 0,    
    wheelZoom: false,
  }

const iconSlugs = [
    "typescript",
    "javascript",
    "tailwindcss",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "pug",
    "express",
    "nextdotjs",
    "npm",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "git",
    "materialui",
    "postcss",
    "github",
    "gitlab",
    "styledcomponents",
    "visualstudiocode",
    "heroku",
    "apollographql"
  ];
function Circle (){
    const iconTags = iconSlugs.map((slug) => ({
        id: slug,
        simpleIcon: allIcons.Get(slug)
      }));
    return(
        <IconCloud
        key={v4()}
        id={"icon"}
        minContrastRatio={1}
        iconSize={50}
        backgroundHexColor={"#FFF"}
        fallbackHexColor={"#000"}
        tags={iconTags}
        tagCanvasOptions={tagCanvasOptions}
        />
    )
}

export default Circle