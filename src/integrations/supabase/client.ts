// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lhlonqugasgtgkioyone.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxobG9ucXVnYXNndGdraW95b25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2OTI5NjEsImV4cCI6MjA2MDI2ODk2MX0.UUcR5wMiNp08laY_qAGPXiuBA2MTNTrOu_w9PVSrArA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);