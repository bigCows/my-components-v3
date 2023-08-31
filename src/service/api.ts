import { httpReq } from "@/service/request";

const commonApi = {
    getList:(params?: any) => httpReq.get("/list", {params})
}
export default commonApi;
