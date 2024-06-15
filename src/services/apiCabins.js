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

export async function createCabin(newCabin) {
  //1. Create cabin
  const { data, error } = await supabase
  .from('cabins').insert([newCabin])
  
  if (error) {
    console.error(error) 
    throw new Error('Cabin could not be created')
  }

  //2. Upload image

  return data      
}

export async function deleteCabins(id) {
  const {data, error } = await supabase.from('cabins').delete().eq('id', id)
  if (error) {
        console.error(error) 
        throw new Error('Cabin could not be deleted')
    }
  return data
}