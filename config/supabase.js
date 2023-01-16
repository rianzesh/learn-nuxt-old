import { createClient } from '@supabase/supabase-js';

const supabase_url = 'https://mbfltfpzlzhszrgxfmni.supabase.co';
const supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iZmx0ZnB6bHpoc3pyZ3hmbW5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTE1MDExNTUsImV4cCI6MTk2NzA3NzE1NX0.DC3J0Ho7jTaRNuObvPG34cCOcSYV7mLtEHqxn53RElo';
const supabase = createClient(supabase_url, supabase_key);

export default supabase;