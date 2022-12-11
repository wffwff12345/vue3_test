import request from "@/utils/request";
import { USERLIST } from "@/constants/api";
export function getUsers(data:any): any {
  return request({
    url: USERLIST,
    method: "post",
    data,
  })
}