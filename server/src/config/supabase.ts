import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { Database } from '../../database.types';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_ANON_KEY as string;

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;