import { DELETE_ALL } from "../constants/action-types";
export function deleteAll(payload) {
  return { type: DELETE_ALL, payload };
}