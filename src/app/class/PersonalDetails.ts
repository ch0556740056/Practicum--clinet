export default class PersonalDetail{
    constructor(
        public FirstName:string,
        public LastName:string,
        public Identity:string,
        public DateOfBirth:Date=new Date(),
        public Gender:number,
        public HMO:string
    ){}
}