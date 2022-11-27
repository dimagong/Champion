import axios from "axios";
import { useSyncExternalStore } from "react";

export const client = axios.create({
    baseURL: 'https://sutaze.api.sportnet.online/api/v1',
    headers: {
        "Content-type": "application/json"
      }
})

export const receiveStatistics = async () => {
  try {
    const { data } = await client.get("/public/lfz-liptovsky-mikulas.futbalnet.sk/competitions/62a034ea7163293609a7144b/parts/62a0351c78fdf23f5007d361")
        const { results} = data.resultsTable
        return results
    
  } catch (error) {
    console.log('Error service receiveStatistics', error)
    return Promise.reject(error)
  }
}

export const receiveNextMatches = async () => {
  try {
    const { data } = await client.get("/matches?playerAppSpace=tj-maj-ruzomberok-cernova.futbalnet.sk&competitionId=4096&withDate=true&closed=false&teamId=51251&offset=0&limit=8")
        const { matches} = data
        return matches
    
  } catch (error) {
    console.log('Error service receiveNextMatches', error)
    return Promise.reject(error)
  }
}

//https://api.sportnet.online/v1/ppo/futbalsfz.sk/related-ppos/tj-maj-ruzomberok-cernova.futbalnet.sk
//https://sutaze.api.sportnet.online/api/v1/public/lfz-liptovsky-mikulas.futbalnet.sk/competitions/62a034ea7163293609a7144b/parts/62a0351c78fdf23f5007d361
//https://sutaze.api.sportnet.online/api/v1/club/tj-maj-ruzomberok-cernova.futbalnet.sk/competitions?ownerPPO=futbalsfz.sk%2Cissf_union_51
//https://sutaze.api.sportnet.online/api/v1/competitions?ownerPPO=futbalsfz.sk%2Cissf_union_51&seasonNames=2022%2C2022%2F2023
//profile
// https://api.sportnet.online/v1/ppo/tj-maj-ruzomberok-cernova.futbalnet.sk/invoice-profile
//https://sutaze.api.sportnet.online/api/v1/public/lfz-liptovsky-mikulas.futbalnet.sk/competitions/62a034ea7163293609a7144b/parts/62a0351c78fdf23f5007d361
//next match
//https://sutaze.api.sportnet.online/api/v1/matches?playerAppSpace=tj-maj-ruzomberok-cernova.futbalnet.sk&competitionId=4096&withDate=true&closed=false&teamId=51251&offset=0&limit=8