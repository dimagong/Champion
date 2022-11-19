import axios from "axios";

export const client = axios.create({
    baseURL: 'https://sutaze.api.sportnet.online/api/v1/public/lfz-liptovsky-mikulas.futbalnet.sk/competitions/',
    headers: {
        "Content-type": "application/json"
      }
})

export const receiveStatistics = async () => {
        const { data } = await client.get("62a034ea7163293609a7144b/parts/62a0351c78fdf23f5007d361")
        //const { results } = data.resultsTable
        //console.log('results', results)
        return data
}

//https://api.sportnet.online/v1/ppo/futbalsfz.sk/related-ppos/tj-maj-ruzomberok-cernova.futbalnet.sk
//https://sutaze.api.sportnet.online/api/v1/public/lfz-liptovsky-mikulas.futbalnet.sk/competitions/62a034ea7163293609a7144b/parts/62a0351c78fdf23f5007d361
//https://sutaze.api.sportnet.online/api/v1/club/tj-maj-ruzomberok-cernova.futbalnet.sk/competitions?ownerPPO=futbalsfz.sk%2Cissf_union_51
//https://sutaze.api.sportnet.online/api/v1/competitions?ownerPPO=futbalsfz.sk%2Cissf_union_51&seasonNames=2022%2C2022%2F2023
//profile
// https://api.sportnet.online/v1/ppo/tj-maj-ruzomberok-cernova.futbalnet.sk/invoice-profile
//https://sutaze.api.sportnet.online/api/v1/public/lfz-liptovsky-mikulas.futbalnet.sk/competitions/62a034ea7163293609a7144b/parts/62a0351c78fdf23f5007d361
