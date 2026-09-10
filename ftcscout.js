export async function getTeamBasics(teamNumber) {
  const response = await fetch('https://api.ftcscout.org/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query GetTeam($number: Int!) {
          teamByNumber(number: $number) {
            number
            name
            location {
              country
            }
          }
        }
      `,
      variables: { number: teamNumber}
    })
  });

  const result = await response.json();
  return result.data.teamByNumber;
}
export async function getTeamStats(teamNumber, season) {
  const response = await fetch('https://api.ftcscout.org/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query GetTeam($number: Int!, $season: Int!) {
          teamByNumber(number: $number) {
            quickStats(season: $season) {
              tot { value rank }
              auto { value rank }
              dc { value rank }
              eg { value rank }
            }
          }
        }
      `,
      variables: { number: teamNumber, season: season }
    })
  });

  const result = await response.json();
  return result.data.teamByNumber;
}