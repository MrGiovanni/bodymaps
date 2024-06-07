import React, { useEffect, useRef } from 'react';
import { Niivue, NVMesh} from '../../niivue-lib/index.js';
import './CTScanMesh.css';
import { organ_indices } from './organInfo';

const meshDict = {};

function CTScanMesh() {
    const nv1 = useRef(null);
    const canvasRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const initNiivue = async () => {
        nv1.current = new Niivue({
            backColor: [0.9, 0.9, 0.9, 1],
            // isOrientCube: true,
            // show3Dcrosshair: true,
        });

        nv1.current.attachToCanvas(canvasRef.current);

        for (const [key, value] of Object.entries(organ_indices)) {
            await nv1.current.addMeshFromUrl({url: value[1], rgba255: value[2], name: key})
        }

        // Set default values
        nv1.current.setHighResolutionCapable(true); // Defaulting to true
        nv1.current.opts.meshXRay = 0.02; // Defaulting to a value of 0.02
        nv1.current.setSliceType(nv1.current.sliceTypeRender);
        nv1.current.setClipPlane([-0.1, 270, 0]);

        // Apply shader to all meshes
        nv1.current.meshes.forEach(mesh => {
            nv1.current.setMeshShader(mesh.id, organ_indices[mesh.name][3]);
            meshDict[mesh.name] = mesh.id;
        });
        
        // nv1.current.loadMatCapTexture("Plastic.jpg");

        nv1.current.drawScene();
        };

        initNiivue();
    }, []);

    const showOrgan = () => {
        const organ = inputRef.current.value;
        if (organ === "all_ribs") {
            Object.keys(meshDict).forEach((key) => {
                if (key.includes('rib') && organ === 'all_ribs') {
                nv1.current.setMeshProperty(meshDict[key], 'visible', true);
                }
            });
        } else if (organ === "all_vertebrae") {
            Object.keys(meshDict).forEach((key) => {
                if (key.includes('vertebrae') && organ === 'all_vertebrae') {
                nv1.current.setMeshProperty(meshDict[key], 'visible', true);
                }
            });
        } else {
            nv1.current.setMeshProperty(meshDict[organ], 'visible', true);
        }
    }

    const hideOrgan = () => {
        const organ = inputRef.current.value;
        if (organ === "all_ribs") {
            Object.keys(meshDict).forEach((key) => {
                if (key.includes('rib') && organ === 'all_ribs') {
                nv1.current.setMeshProperty(meshDict[key], 'visible', false);
                }
            });
        } else if (organ === "all_vertebrae") {
            Object.keys(meshDict).forEach((key) => {
                if (key.includes('vertebrae') && organ === 'all_vertebrae') {
                nv1.current.setMeshProperty(meshDict[key], 'visible', false);
                }
            });
        } else {
            nv1.current.setMeshProperty(meshDict[organ], 'visible', false);
        }
    }

    const showAll = () => {
        Object.keys(meshDict).forEach((key) => {
            nv1.current.setMeshProperty(meshDict[key], 'visible', true);
        });
    }
    
    return (
        <div>
            <main style={{ backgroundColor: 'black' }}>
                <canvas ref={canvasRef} width="550" height="550"/>
            </main>
            <div className="niivue-control">
                <h3>Body Part Selector</h3>
                <select ref={inputRef}> 
                    {Object.keys(organ_indices).map((organ, index) => (
                        <option key={index} value={organ}>{organ}</option>
                    ))}
                    <option value="all_ribs">All Ribs</option>
                    <option value="all_vertebrae">All Vertebrae</option>
                </select>
                <button className="btn add-organ-btn" onClick={showOrgan}>Show Part</button>
                <button className="btn remove-organ-btn" onClick={hideOrgan}>Hide Part</button>
                <button className="btn show-all-btn" onClick={showAll}>Show All</button>
            </div>
        </div>
    );
}

export default CTScanMesh;