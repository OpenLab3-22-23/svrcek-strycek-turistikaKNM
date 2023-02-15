import { useEffect } from 'react';

export default function Mapa() {
  useEffect(() => {
    var stred = window.SMap.Coords.fromWGS84(18.78, 49.31);
    var mapa = new SMap(JAK.gel('mapa'), stred, 11);
    mapa.addDefaultLayer(SMap.DEF_BASE).enable();
    mapa.addDefaultControls();
  }, []);

  return <div id="mapa" style={{ width: 600, height: 400 }}></div>;
}