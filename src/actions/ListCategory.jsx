export const listCategory = (accessToken) => {
    return async (dispatch) => {
        try {
            console.log(pageNo);
            const headers = {
                'Content-Type': 'application/json',
                ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
            };

            const response = await fetch(`http://localhost:8080/journal/list?size=3&page=${pageNo}`, {
                headers,
            });

            if (response.ok) {
                const data = await response.json();
                dispatch({ type: 'LIST_ENTRIES_SUCCESS', payload: data });
            } else {
                console.error('Error fetching entries.', response.status);
                console.error('Response text:', await response.text());
            }
        } catch (error) {
            console.error('Error fetching entries:', error);
        }
    };
};
