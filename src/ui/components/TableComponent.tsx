import {DataTable, MD3Theme, Text, useTheme} from 'react-native-paper';
import {ITeamsStatistics} from 'src/interfaces';
import {StyleSheet} from 'react-native';

interface ITableComponent {
    teamsStatistics: ITeamsStatistics;
}

const makeShortName = (name: string) => {
    let nameParts = name.split(' ');
    if (nameParts[0].length < 4) {
        nameParts.shift();
    }
    return nameParts.join('');
};

const TableComponent = ({teamsStatistics}: ITableComponent) => {
    const theme: MD3Theme & {deviceWidth: number} = useTheme();
    return (
        <DataTable
            style={{
                width: theme.deviceWidth,
                paddingRight: 40,
            }}>
            <DataTable.Header style={{backgroundColor: theme.colors.gray}}>
                <DataTable.Title style={styles.cellPosition}>
                    <Text style={styles.title}> Pos</Text>
                </DataTable.Title>
                <DataTable.Title style={styles.cellTeam}>
                    <Text style={styles.title}> Team</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                    <Text style={styles.title}> P</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                    <Text style={styles.title}> W</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                    <Text style={styles.title}> GD</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                    <Text style={styles.titlePoints}> Pts</Text>
                </DataTable.Title>
            </DataTable.Header>

            {teamsStatistics.map((team, idx) => (
                <DataTable.Row key={team.id}>
                    <DataTable.Cell style={styles.cellPosition}>
                        {idx + 1}
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellTeam}>
                        {/* {team.team} */}
                        <Text style={styles.text}>
                            {makeShortName(team.team)}
                        </Text>
                    </DataTable.Cell>
                    <DataTable.Cell numeric>{team.matches}</DataTable.Cell>
                    <DataTable.Cell numeric>{team.won}</DataTable.Cell>
                    <DataTable.Cell numeric>{team.lost}</DataTable.Cell>
                    <DataTable.Cell numeric>{team.points}</DataTable.Cell>
                </DataTable.Row>
            ))}
        </DataTable>
    );
};

export default TableComponent;

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red',
    },
    cellPosition: {
        maxWidth: 20,
        width: 20,
    },
    cellTeam: {
        minWidth: 90,
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
        width: 100,
    },
    title: {
        fontWeight: '700',
        color: 'black',
        fontSize: 14,
    },
    titlePoints: {
        fontWeight: '700',
        color: 'red',
        fontSize: 14,
    },
});
