import request from "@/utils/request";
import { ADMINUSR_LOGIN } from "@/constants/api";
import { setUser } from "@/utils/store";
export function login(data: { name: string; password: string }): any {
  return request({
    url: ADMINUSR_LOGIN,
    method: "post",
    data,
  }).then((result:any) => {
    if (result.code === 1006) {
        const temp = result.data
        setUser({name:temp.user.name,createTime:temp.user.createTime, token: temp.token })
      }
      return result;
  })
}
