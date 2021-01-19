import Prismic from 'prismic-javascript'
import { Client } from '../prismicHelpers'



export const getTags = async () : Promise<Array<string>> => {


  const res : any = await Client().getApi();


  return res.tags;
}