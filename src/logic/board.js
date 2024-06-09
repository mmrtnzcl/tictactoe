import { WINNER_COMBOS } from "../constants"

export   const checkWinner = (newboard) => {
    for (let combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(
        newboard[a] &&
        newboard[a] === newboard[b] &&
        newboard[a] === newboard[c]
      ){
        return newboard[a]
      }
    }
    return null
  }