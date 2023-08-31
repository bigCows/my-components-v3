export interface isShowType {
  sortShow: boolean
  selectionShow: boolean
  detailShow: boolean
}

export interface tableDataType {
  id:number,
  name:string,
  description:string,
  is_use:number,
  sex: number
}

export interface pagenationType {
  pageSize: number,
  pageNum: number,
}
