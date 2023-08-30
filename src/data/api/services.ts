import axios from "axios";
import { useSyncExternalStore } from "react";

const TEAM_NAME = 'tj-druzstevnik-liptovska-stiavnica'
const TEAM_ID = '57224'
const COMPETITION_ID = '647c3f337b634444d1521c15'
const PART_ID = '647c3fb176d0d348cd096270'
const PARENT_RELATION = 'SsFZ'

export const client = axios.create({
  baseURL: 'https://sutaze.api.sportnet.online/api/v1',
    headers: {
        "Content-type": "application/json"
      }
})

//https://sutaze.api.sportnet.online/api/v1/matches?playerAppSpace=tj-druzstevnik-liptovska-stiavnica.futbalnet.sk&dateTo=2023-08-28T14%3A25%3A00.000Z&withDate=true&closed=true&teamId=57224&offset=0&limit=8
export const receiveStatistics = async () => {
  try {
    const { data } = await client.get(`public/${PARENT_RELATION}/competitions/${COMPETITION_ID}/parts/${PART_ID}`)
        const { results} = data.resultsTable
        return results
    
  } catch (error) {
    console.log('Error service receiveStatistics', error)
    return Promise.reject(error)
  }
}

export const receiveNextMatches = async () => {
  try {
    const { data } = await client.get(`/matches?playerAppSpace=${TEAM_NAME}.futbalnet.sk&competitionId=${COMPETITION_ID}&withDate=true&closed=false&teamId=${TEAM_ID}&offset=0&limit=8`)
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