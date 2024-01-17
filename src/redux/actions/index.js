export const ADD_TO_FAV = 'ADD_TO_FAV';
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV';
export const GET_JOB = 'GET_JOB';

export const addToFav = jobFav => {
    return {
        type: ADD_TO_FAV,
        payload: jobFav,
    };
};

export const removeFav = i => {
    return {
        type: REMOVE_FROM_FAV,
        payload: i,
    };
};

export const jobGet = searchQuery => {
    return async dispatch => {
        try {
            const url = `https://strive-benchmark.herokuapp.com/api/jobs?company=${searchQuery}`;
            console.log('URL:', url);

            let response = await fetch(url);
            if (response.ok) {
                let jobs = await response.json();
                console.log('Jobs fetched:', jobs);

                dispatch({
                    type: GET_JOB,
                    payload: jobs.data,
                });
            } else {
                throw new Error('Errore nel recupero dati');
            }
        } catch (error) {
            console.error(error);
        }
    };
};