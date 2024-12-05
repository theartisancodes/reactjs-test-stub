import React, { useEffect, useRef, useState } from 'react';

import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import 'bpmn-js/dist/assets/bpmn-js.css';
import 'bpmn-js/dist/assets/diagram-js.css';
import Modeler from 'bpmn-js/lib/Modeler';

import { Button } from '@lib/Button';

import initialDiagram from './resources/initialDiagram';
import styles from './styles.module.scss';

const initiateDownload = (fileUrl, fileName) => {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ModelerPage = () => {
  const modelerRef = useRef(null);
  const modelerInstance = useRef(null);
  const [downloadLinks, setDownloadLinks] = useState({
    diagram: null,
    svg: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    modelerInstance.current = new Modeler({
      container: modelerRef.current,
      keyboard: {
        bindTo: document,
      },
    });

    modelerInstance.current.importXML(initialDiagram).catch((err) => {
      setError(err.message);
      console.error('Error importing diagram:', err);
    });

    return () => {
      modelerInstance.current?.destroy();
    };
  }, []);

  const exportArtifacts = async () => {
    try {
      const { xml } = await modelerInstance.current.saveXML({ format: true });
      const { svg } = await modelerInstance.current.saveSVG();
      setDownloadLinks({
        diagram: `data:application/bpmn20-xml;charset=UTF-8,${encodeURIComponent(xml)}`,
        svg: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
      });
      initiateDownload(downloadLinks.diagram, 'diagram.bpmn');
    } catch (err) {
      console.error('Error exporting artifacts:', err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Modeler</h1>
      <div
        ref={modelerRef}
        className={styles.bpmnContainer}
        data-testid="bpmn-container"
      ></div>
      <div className={styles.buttonContainer}>
        <Button styleType="secondary" small onClick={exportArtifacts}>
          Download
        </Button>
      </div>

      {error && <div className="bpmn-error">Error: {error}</div>}
    </div>
  );
};

export default ModelerPage;
