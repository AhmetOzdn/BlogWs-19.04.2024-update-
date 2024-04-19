export interface SubjectDetailsListModel {
    id: [string ,number],
    userId: number,
    firstName: string,
    lastName: string,
    email: string,
    categoryId: number,
    categoryName: string,
    subjectImageFileId:number,
    subjectImageFileUrl:string,
    title: string,
    text: string,
    summary: string,
    createdDate: Date,
}