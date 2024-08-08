import axios from 'axios';
import {useSyncExternalStore} from 'react';

const TEAM_NAME = 'tj-druzstevnik-liptovska-stiavnica';
const TEAM_ID = '63363';
const COMPETITION_ID = '4894&';
const COMPETITIONS = '6658c823f8f64d2a885563b4';
//'6658c823f8f64d2a885563b4'
//'647c3f337b634444d1521c15'
//5e416c914522ef74eb959496
const PART_ID = '665eb0eac1e318dcfc5be3ec';
//'647c3fb176d0d348cd096270'
const PARENT_RELATION = 'SsFZ';
const DATA_TO = '2024-01-14T14%3A46%3A00.000Z';
const OFFSET = '0';

export const clientSportNet = axios.create({
    baseURL: 'https://sutaze.api.sportnet.online/api/v1',
    headers: {
        'Content-type': 'application/json',
    },
});

export const clientArticlesFirebase = axios.create({
    baseURL: 'http://172.28.112.1:5050',
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
});

//https://sutaze.api.sportnet.online/api/v1/matches?playerAppSpace=tj-druzstevnik-liptovska-stiavnica.futbalnet.sk&dateTo=2023-08-28T14%3A25%3A00.000Z&withDate=true&closed=true&teamId=57224&offset=0&limit=8
//https://sutaze.api.sportnet.online/api/v1/matches?playerAppSpace=tj-druzstevnik-liptovska-stiavnica.futbalnet.sk&dateTo=2024-01-14T14%3A46%3A00.000Z&withDate=true&closed=true&teamId=57224&offset=8&limit=8
//https://sutaze.api.sportnet.online/api/v1/matches?playerAppSpace=tj-druzstevnik-liptovska-stiavnica.futbalnet.sk&dateTo=2024-01-14T14%3A46%3A00.000Z&withDate=true&closed=true&teamId=57224&offset=0
//========
//====
//===
//https://sportnet.sme.sk/futbalnet/k/tj-druzstevnik-liptovska-stiavnica/tim/63363/tabulky/?sutaz=4894
//https://sutaze.api.sportnet.online/api/v1/public/SsFZ/competitions/6658c823f8f64d2a885563b4/parts/665eb0eac1e318dcfc5be3ec

export const receiveStatistics = async () => {
    try {
        const {data} = await clientSportNet.get(
            `public/${PARENT_RELATION}/competitions/${COMPETITIONS}/parts/${PART_ID}`,
        );
        //const { data } = await clientSportNet.get(`matches?playerAppSpace=${TEAM_NAME}.futbalnet.sk&dateTo=${DATA_TO}&withDate=true&closed=true&teamId=${TEAM_ID}&offset=${OFFSET}`)

        const {results} = data.resultsTable;
        console.log('Matches===', results);
        return results;
    } catch (error) {
        console.log('Error service receiveStatistics', error);
        return Promise.reject(error);
    }
};

//https://sutaze.api.sportnet.online/api/v1/matches?playerAppSpace=tj-druzstevnik-liptovska-stiavnica.futbalnet.sk&competitionId=4894&withDate=true&closed=false&teamId=63363&offset=0&limit=8
export const receiveNextMatches = async () => {
    try {
        const {data} = await clientSportNet.get(
            `/matches?playerAppSpace=${TEAM_NAME}.futbalnet.sk&competitionId=${COMPETITION_ID}&withDate=true&closed=false&teamId=${TEAM_ID}&offset=0&limit=8`,
        );
        console.log('receiveNextMatches===data', data);
        const {matches} = data;

        return matches;
    } catch (error) {
        console.log('Error service receiveNextMatches', error);
        return Promise.reject(error);
    }
};

export const receiveArticles = async () => {
    try {
        const {data} = await clientArticlesFirebase.get(`/articles`);
        console.log('data receiveArticles======', data);
        return data;
    } catch (error) {
        console.log('Error service receiveArticles======', error);
        return Promise.reject(error);
    }
};

//https://api.sportnet.online/v1/ppo/futbalsfz.sk/related-ppos/tj-maj-ruzomberok-cernova.futbalnet.sk
//https://sutaze.api.sportnet.online/api/v1/public/lfz-liptovsky-mikulas.futbalnet.sk/competitions/62a034ea7163293609a7144b/parts/62a0351c78fdf23f5007d361
//https://sutaze.api.sportnet.online/api/v1/club/tj-maj-ruzomberok-cernova.futbalnet.sk/competitions?ownerPPO=futbalsfz.sk%2Cissf_union_51
//https://sutaze.api.sportnet.online/api/v1/competitions?ownerPPO=futbalsfz.sk%2Cissf_union_51&seasonNames=2022%2C2022%2F2023
//profile
// https://api.sportnet.online/v1/ppo/tj-maj-ruzomberok-cernova.futbalnet.sk/invoice-profile
//https://sutaze.api.sportnet.online/api/v1/public/lfz-liptovsky-mikulas.futbalnet.sk/competitions/62a034ea7163293609a7144b/parts/62a0351c78fdf23f5007d361
//next match
//https://sutaze.api.sportnet.online/api/v1/matches?playerAppSpace=tj-maj-ruzomberok-cernova.futbalnet.sk&competitionId=4096&withDate=true&closed=false&teamId=51251&offset=0&limit=8
