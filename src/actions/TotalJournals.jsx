export const listTotalEntries = (accessToken) => {
    return async (dispatch) => {
        try {

            const headers = {
                'Content-Type': 'application/json',
                ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
            };

            const response = await fetch(`http://localhost:8080/journal/list`, {
                headers,
            });

            if (response.ok) {
                const data = await response.json();
                dispatch({ type: 'TOTAL_ENTRIES_SUCCESS', payload: data });
            } else {
                console.error('Error fetching entries.', response.status);
                console.error('Response text:', await response.text());
            }
        } catch (error) {
            console.error('Error fetching entries:', error);
        }
    };
};
