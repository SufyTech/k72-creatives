import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/projects/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Run animation only on desktop
    if (window.innerWidth >= 1024) {
      gsap.from(".hero", {
        height: "100px",
        stagger: {
          amount: 0.4,
        },
        scrollTrigger: {
          trigger: ".lol",
          start: "top 90%",
          end: "top -120%",
          scrub: true,
        },
      });
    }
  });

  return (
    
    <div className="lg:p-6 p-4 lg:mb-[2vh] mb-[10vh]">
      {/* Heading */}
      <div className="pt-[20vh] lg:pt-[40vh] text-center lg:text-left">
        <h2 className="font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[9vw] uppercase leading-tight">
          Projets
          <sup className="font-[font1] text-[6vw]">16</sup>
        </h2>
      </div>

      {/* Projects List */}
      <div className="lol mt-10 lg:-mt-5">
        {projects.map((elem, idx) => (
          <div
            key={idx}
            className="hero w-full 
              h-auto lg:h-[400px] 
              mb-6 flex flex-col lg:flex-row 
              gap-4"
          >
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
