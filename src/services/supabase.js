import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://emhqanjouuhtbhxloptm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtaHFhbmpvdXVodGJoeGxvcHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0Nzg0OTIsImV4cCI6MjA2NTA1NDQ5Mn0.o8ogxa_Puz6sur1lBvr6h_iKlBgeJjf8rXoEhdyOcaY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
