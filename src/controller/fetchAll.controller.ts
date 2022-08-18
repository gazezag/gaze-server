import { fetchAllServer } from '../server/fetchAll.server';

/**
 * @description get all table data with server function
 * @param { String } begin the time starting of this inquiry
 * @param { String } end the time end of this query
 */
export const fetchAllController = async (begin: string, end: string) => {
  return await fetchAllServer(parseInt(begin), parseInt(end));
};
