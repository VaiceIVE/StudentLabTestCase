interface IFeedback
{
    username: string,
    email: string,
    payload: IQuestion[]
}

interface IQuestion
{
    number: number,
    answer: Set<number> | Set<string> | number | string 
}
export default IFeedback;

