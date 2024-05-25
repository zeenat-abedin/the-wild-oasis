import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    getCabins().then((data)=> console.log(data))
  }, [])
  
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://gmdbcmlihuxelbjjczws.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-05-25T04%3A29%3A01.798Z" alt="img-1" />
    </Row>
  );
}

export default Cabins;