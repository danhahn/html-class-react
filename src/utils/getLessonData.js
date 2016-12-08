import moment from 'moment';

export function getLesson(data) {
  const { startDate, weeks, noClass, intros } = data;

  const momentNoClass = noClass.map( c => moment(c).format('MMMM D, YYYY'));
  let lessons = [];
  let i = 0;
  let week = 0;

  while (i < weeks) {
    const date = moment(startDate).day((week * 7) + 1);
    
    const hasNoClass = momentNoClass.includes(date.format('MMMM D, YYYY'));
    if(!hasNoClass) {
      lessons = [
        ...lessons,
        {
          lesson: i+1,
          date,
          text: intros[i].text,
        }
      ];
      i++;
    }
    week++;
  }

  return lessons;
}
