import { validateTime, changeUtcToIst, isMagicTime } from './helper'

export const magicalTime = async (req, res) => {
  try {

    let { startTime, endTime } = req.body

    if (!startTime || !endTime) return res.status(400).json({ error: true, message: 'Check the paylaod' })

    let isStartTimeValid = validateTime(startTime)
    let isEndTimeValid = validateTime(endTime)

    if (!isStartTimeValid || !isEndTimeValid) return res.status(400).json({ error: true, message: 'Start/ End time is not valid. Enter it in format - 11:00:00' })

    let t1 = startTime.split(':')
    let t2 = endTime.split(':')

    let tempStartTime = changeUtcToIst(new Date().setHours(t1[0], t1[1], t1[2])).getTime()
    let tempEndTime = changeUtcToIst(new Date().setHours(t2[0], t2[1], t2[2])).getTime()

    for (let i = tempStartTime; i < tempEndTime;) {

      let isMagicalTime = isMagicTime(i)

      if (isMagicalTime && isMagicalTime.flag) console.log('Magical Time: ', isMagicalTime.time)

      i = i + 1000
    }

    return res.status(200).json({ success: true, message: 'Processed. Kindly check the console' })

  } catch (error) {
    console.log('error in masgical time', error);
    return res.status(500).json({ error: true, message: error.message })
  }
}
