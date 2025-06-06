import React, {useEffect, useRef} from "react";
import {Group} from "three";
import {useAnimations, useGLTF} from "@react-three/drei";

export const Model1 = () => {
    const group = useRef<Group>(null);
    const { scene, animations } = useGLTF('models/Box.glb');
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        const actionNames = Object.keys(actions || {});
        if (actionNames.length > 0) {
            const firstAction = actions?.[actionNames[0]];
            firstAction?.reset().play();
        }
    }, [actions]);

    return <primitive ref={group} object={scene} scale={2} />;
};


export const Model2 = () => {
    const group = useRef<Group>(null);
    const { scene, animations } = useGLTF('models/bb8.glb');
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        const actionNames = Object.keys(actions || {});
        if (actionNames.length > 0) {
            const firstAction = actions?.[actionNames[0]];
            firstAction?.reset().play();
        }
    }, [actions]);

    return <primitive ref={group} object={scene} scale={2} />;
};