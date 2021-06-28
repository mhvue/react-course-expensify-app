//so we can force a specific moment in time 

const moment = jest.requireActual("moment");

export default (timestamp) => {
    return moment(timestamp)
}