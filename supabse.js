import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://cpkdhpflgpdftyeosdld.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwa2RocGZsZ3BkZnR5ZW9zZGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkxNTY2MjgsImV4cCI6MjAzNDczMjYyOH0.0MtG2HJLN7j6nEtRZsha-MgFPY5lKCRTj0064SrNOF8";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
