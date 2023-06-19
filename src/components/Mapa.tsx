import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabaseClient';

export default function Mapa({ id }) {

  const navigate = useNavigate();

  useEffect(() => {
    const fetchGPS = async () => {
      const { data, error } = await supabase.from('Hikes').select('GPSE, GPSN').eq('id', id).single();

      if (error) {
        navigate('/', { replace: true });
      }

      if (data) {
        var stred = window.SMap.Coords.fromWGS84(data.GPSE, data.GPSN);
        var m = new SMap(JAK.gel('mapa'), stred, 14);

        m.addDefaultLayer(SMap.DEF_OPHOTO);
        m.addDefaultLayer(SMap.DEF_TURIST).enable();
        m.addDefaultLayer(SMap.DEF_TURIST_WINTER);
        m.addDefaultLayer(SMap.DEF_BASE);

        var layerSwitch = new SMap.Control.Layer({
          width: 65,
          items: 4,
          page: 4
        });
        layerSwitch.addDefaultLayer(SMap.DEF_BASE);
        layerSwitch.addDefaultLayer(SMap.DEF_OPHOTO);
        layerSwitch.addDefaultLayer(SMap.DEF_TURIST);
        layerSwitch.addDefaultLayer(SMap.DEF_TURIST_WINTER);
        m.addControl(layerSwitch, { left: "8px", top: "9px" });

        m.addDefaultControls();

      }

    }
    fetchGPS();
  }, [navigate])

  return (
    <div id="mapa" style={{ width: 600, height: 400 }}>

    </div>
  );
}