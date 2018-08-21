import axios from 'axios';

// TODO: separate storage methods in a different file.
const tryGetFromStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};

const saveStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const CommicService = number => (dispatch, getState) => {
    const state = getState();

    // Try to get data from the storage
    const item = tryGetFromStorage(number);
    if (item) {
        console.info(`Image ${number} loaded from storage`);

        dispatch(
            comicInfo(number, item)
        );
        return Promise.resolve();
    }

    // Get data server and store the information
    return axios
        .get(
            number ? `${number}/info.0.json` : 'info.0.json'
        )
        .then(response => {
            const comicNumber = number || response.data.num;
            const comicData = response.data;

            dispatch(
                comicInfo(comicNumber, comicData)
            );

            // Save on storage
            saveStorage(comicNumber, comicData);
        });
}

export const comicInfo = ({ number, data }) => ({
    type: 'COMIC',
    number,
    data
});