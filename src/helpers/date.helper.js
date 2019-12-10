const monthsToString = {
  '1': 'Янв',
  '2': 'Фев',
  '3': 'Март',
  '4': 'Апр',
  '5': 'Май',
  '6': 'Июнь',
  '7': 'Июль',
  '8': 'Авг',
  '9': 'Сент',
  '10': 'Окт',
  '11': 'Нояб',
  '12': 'Дек'
}

export const formatCardDateRange = ({ date_start, date_end }) => {
  if(date_start && date_end){
    const startDataArray = date_start.split('.')
    date_start = startDataArray[0] + ' ' + monthsToString[startDataArray[1]]
    const endDateArray = date_end.split('.')
    date_end = endDateArray[0] + ' ' + monthsToString[endDateArray[1]]
    return date_start + '-' + date_end
  }
  
  console.error('Empty params in function: ', this, date_start, date_end)
}