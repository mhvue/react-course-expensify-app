import moment from "moment";
//get visibile expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);

      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day"): true;
     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
     console.log(expense)

      return startDateMatch && endDateMatch && textMatch;

   }).sort((a,b) => {
    if(sortBy === "date") {
        //return -1 if "a" should come first and return 1 if "b" should come first 
        return a.createdAt < b.createdAt ? 1  : -1;
    }
    else if(sortBy === "amount") {
        return a.amount  < b.amount ? 1 : -1;
    }
   });
  };