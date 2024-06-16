import supabase, { supabaseUrl } from "./supabase";

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

export async function createEditCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '')
  
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

 //https://gmdbcmlihuxelbjjczws.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  //1. Create cabin
  const { data, error } = await supabase
    .from('cabins').insert([{ ...newCabin , image: imagePath }]).select().single()
  
  if (error) {
    console.error(error) 
    throw new Error('Cabin could not be created')
  }

  //2. Upload image
  const { error: storageError } = await supabase
  .storage
  .from('cabin-images')
  .upload(imageName, newCabin.image)
  
  //3. Delete the cabin if there was an error uploading the image
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id)
    console.error(storageError) 
    throw new Error('Cabin image could not be uploaded and the abin was not created')
  }

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