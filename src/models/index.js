// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Meal } = initSchema(schema);

export {
  Meal
};