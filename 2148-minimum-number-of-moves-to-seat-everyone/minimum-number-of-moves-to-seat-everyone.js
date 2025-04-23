/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    let result = 0;
    seats = seats.sort((a, b) => { return a - b });
    students = students.sort((a, b) => { return a - b });
    for (let i = 0; i < seats.length; i++) {
        result += Math.abs(seats[i] - students[i])
    }
    return result;
};