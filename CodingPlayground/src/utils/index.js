const monthNames = {
    0: 'января',
    1: 'февраля',
    2: 'марта',
    3: 'апреля',
    4: 'мая',
    5: 'июня',
    6: 'июля',
    7: 'августа',
    8: 'сентября',
    9: 'октября',
    10: 'ноября',
    11: 'декабря',
};

const dayNames = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
];

export const getFormattedDate = (date = new Date()) => {
    const day = date.getDate();
    const monthName = monthNames[date.getMonth()];
    const dayName = dayNames[date.getDay()];
    return `${dayName}, ${day} ${monthName}`;
}