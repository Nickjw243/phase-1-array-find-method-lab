// code your solution here
function superbowlWin(superbowlResults) {
    const winningYear = superbowlResults.find(result => result.result === "W")
    if (winningYear) {
        return winningYear.year
    }
}
