import CONFIG from '../../config/envs.config'

export const getSheet = async () => {
  const response = await fetch(CONFIG.API_URL+'/pathfinder', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  })

  return response.json()
}

export const getPlayerData = async (playerId = 1) => {
  const response = await fetch(`${CONFIG.API_URL}player/${playerId}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  })

  return response.json()
}