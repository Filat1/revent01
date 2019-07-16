import sampleData from './sampleData';

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const fetchSampleData = () => {
  //console.log('imported sample data:', sampleData)
  //throw new Error("Something bad happened.")
  return delay(500).then(() => {
    return Promise.resolve(sampleData)
  })
}