import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import Mac16 from "../models/Macbook-16";
import Mac14 from "../models/Macbook-14";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Animation = 1;
const Offset = 5;

const fadeMeshes = (group , opacity) => {
    if (!group) return;
    group.traverse((child) => {
        if (child.isMesh){
            child.material.transparent = true;
            gsap.to(child.material,{opacity,duration:Animation})
        }
    })
}

const moveGroup = (group,x) => {
    if (!group) return;
    gsap.to(group.position,{x,duration:Animation})
}

const ModelSwitch = ({scale,isMobile}) => {
    const smallMac = useRef();
    const largeMac = useRef();

    const showMac = scale === 0.08 || scale === 0.05 ;
    useGSAP(() => {
        if(showMac){
            moveGroup(smallMac.current,-Offset);
            moveGroup(largeMac.current,0);
            fadeMeshes(smallMac.current,0);
            fadeMeshes(largeMac.current,1);
        }else{
            moveGroup(smallMac.current,0);
            moveGroup(largeMac.current,Offset);
            fadeMeshes(smallMac.current,1);
            fadeMeshes(largeMac.current,0);
        }
       
    },[scale])
    const controlFig = {
        snap : true,
        speed : 1,
        zoom : 1,
        azimuth : [-Infinity,Infinity],
        config : {mass : 1,tension : 0, friction : 26}
    }
  return (
    <>
        <PresentationControls {...controlFig}>
            <group ref={largeMac}>
                <Mac16 scale = {isMobile ? 0.05 : 0.08}/>
            </group>
        </PresentationControls>
        <PresentationControls {...controlFig}>
            <group ref={smallMac}>
                <Mac14 scale = {isMobile ? 0.03 : 0.06}/>
            </group>
        </PresentationControls>
        
    </>

  )
}

export default ModelSwitch
