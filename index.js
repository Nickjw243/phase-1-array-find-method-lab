// code your solution here
function superbowlWin(record) {
    record = record.find(obj => obj.result === "W")
    if (record) {
        return record.year
    } else {
        return undefined
    }
}
