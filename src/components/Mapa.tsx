import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabaseClient';

export default function Mapa( { id }) {

  const navigate = useNavigate();

  useEffect(() => {
    const fetchGPS = async () => {
      const { data, error } = await supabase.from('Hikes').select('GPSE, GPSN').eq('id', id).single();

      if (error) {
        navigate('/', { replace: true });
      }

      if (data) {
        var stred = window.SMap.Coords.fromWGS84(data.GPSE, data.GPSN);
        var mapa = new SMap(JAK.gel('mapa'), stred, 14);
        mapa.addDefaultLayer(SMap.DEF_BASE).enable();
        mapa.addDefaultControls();
      }

    }
    fetchGPS();
  }, [navigate])

  return (
  <div id="mapa" style={{ width: 600, height: 400 }}>
    
  </div>
  );
}