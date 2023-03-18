function getDateString(date) {
    return date.toDateString();
}

export const saveChatList = (updatedChatList, setChatList) => {
    setChatList(updatedChatList);
    localStorage.setItem('chatList', JSON.stringify(updatedChatList));
};

export const formatDateForListDisplay = (inputDate) => {
    const date = inputDate instanceof Date ? inputDate : new Date(inputDate);

    if (isNaN(date)) {
        throw new TypeError('The date provided is not a valid Date object.');
    }

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const dateString = getDateString(date);
    const yesterdayString = getDateString(yesterday);
    const todayString = getDateString(today);

    if (dateString === yesterdayString) {
        return 'Yesterday';
    }

    if (dateString === todayString) {
        const hours = date.getHours();
        const period = hours >= 12 ? 'pm' : 'am';
        const standardHour = hours > 12 ? hours - 12 : hours;
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const timeString = `${standardHour}:${minutes} ${period}`;

        return timeString;
    }

    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().slice(-2)}`;
    return formattedDate;
}

export const formatDateToHours = (date) => {
    const hours = new Date(date).getHours();
    const period = hours >= 12 ? 'pm' : 'am';
    const standardHour = hours > 12 ? hours - 12 : hours;
    const minutes = new Date(date).getMinutes().toString().padStart(2, '0');
    const timeString = `${standardHour}:${minutes} ${period}`;

    return timeString;
}

export const formatMessageJSON = (message) => {
    return message.replace(/\n/g, '<br>');
}

export const formatMessageHTML = (message) => {
    return message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&lt;br&gt;/g, "<br>");
}