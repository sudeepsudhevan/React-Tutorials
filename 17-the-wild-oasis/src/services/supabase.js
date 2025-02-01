import { createClient } from '@supabase/supabase-js'


export const supabaseUrl = 'https://jxfqtaudkigcewcvxmga.supabase.co'
// eslint-disable-next-line no-undef
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;