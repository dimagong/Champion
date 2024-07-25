export interface ITeamStatistics {
    team: string,
    matches: number,
    draw: number,
    lost: number,
    won: number,
    points: number
    id: string,
}

export type ITeamsStatistics = ITeamStatistics[]