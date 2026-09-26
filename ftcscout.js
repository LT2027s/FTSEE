//function getTeamBasics which uses team number
export async function getTeamBasics(teamNumber) {
  //Waits until connected with API and that the API recieves the all of the data
  const response = await fetch('https://api.ftcscout.org/graphql', {
    //Method POST to send the GrahpQL query
    method: 'POST',
    //tells server that the query is formatted in JSON
    headers: { 'Content-Type': 'application/json' },
    //turn the query into a JSON string for the HTTP
    body: JSON.stringify({
      //the query that is sent to FTCscout API
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
//Waits till data from API processed and sent back
  const result = await response.json();
  //Gets the return values. If value doesnt exist then set it to null
  return result.data?.teamByNumber?? null;
}

//function getTeamStats which uses team number and season
export async function getTeamStats(teamNumber, season) {
  //Waits until connected with the API recieves the data
  const response = await fetch('https://api.ftcscout.org/graphql', {
        //Method POST to send the GrahpQL query
    method: 'POST',
        //tells server that the query is formatted in JSON
    headers: { 'Content-Type': 'application/json' },
     //turn the query into a JSON string for the HTTP
    body: JSON.stringify({
            //the query that is sent to FTCscout API
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
//Waits till data from API processed and sent back
  const result = await response.json();
    //Gets the return values. If value doesnt exist then set it to null
  return result.data?.teamByNumber?.quickStats?? null;
}