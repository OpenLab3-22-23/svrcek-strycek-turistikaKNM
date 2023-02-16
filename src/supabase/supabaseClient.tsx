import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPA_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPA_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function HikesDataGPS() {
    const { data, error} = await supabase.from("Hikes").select('GPS');
    return {data, error};
}

export async function getHikes() {
    const { data, error} = await supabase.from("Hikes").select();
    return {data, error};
}