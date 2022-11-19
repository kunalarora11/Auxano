export const validateTime = (time) => {
    if (time) {
        const timeReg = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9]):([0-5][0-9])?$/
        return timeReg.test(time)
    } else return false
}

export const changeUtcToIst = date => {
    let dateIST = date ? new Date(date) : new Date();
  
    return new Date(new Date(dateIST).toLocaleString("en-US", { timeZone: 'Asia/Kolkata' }))
}

export const isMagicTime = date => {
    try {

        let time = null

        date = new Date(date).toLocaleTimeString().split(' ')[0]
        time = date
        date = date.replace(/:/g, '')
        date = Array.from(date)
        date = [... new Set(date)]

        if (date.length > 2) return {
            flag: false,
            time: time
        }
        else return {
            flag: true,
            time: time
        }

    } catch (error) {
        console.log('error in isMagicTime', error)
        throw error
    }
}