import supabase from "./supabase";

export async function getCabins() {
    
let { data: cabins, error } = await supabase
  .from('cabins')
        .select('*')
    
    if (error) {
        console.error(error) 
        throw new Error('Cabins could not be loaded')
    }

    return cabins;
}

export async function deleteCabins(id) {
  const {data, error } = await supabase.from('cabins').delete().eq('id', id)
  if (error) {
        console.error(error) 
        throw new Error('Cabins could not be deleted')
    }
  return data
}