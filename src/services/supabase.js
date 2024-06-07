
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gmdbcmlihuxelbjjczws.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtZGJjbWxpaHV4ZWxiampjendzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NjQ1NDEsImV4cCI6MjAzMjA0MDU0MX0.yW7DNdFruC1YfAZ0e2Ok9MYfmrXkby37NgR0lJ_Iwig'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase