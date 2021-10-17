import CONFIG from '../../config/envs.config'

export const getSheet = async (data = {}) => {
  const response = await fetch(CONFIG.API_URL, {
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