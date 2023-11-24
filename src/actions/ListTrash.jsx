export const listTrash = (accessToken) => {
    return async (dispatch) => {
        try {

            const headers = {
                'Content-Type': 'application/json',
                ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
            };

            const response = await fetch(`http://localhost:8080/journal/trash-list`, {
                headers,
            });

            if (response.ok) {
                const data = await response.json();
                dispatch({ type: 'LIST_TRASH_SUCCESS', payload: data });
            } else {
                console.error('Error fetching trash.', response.status);
                console.error('Response text:', await response.text());
            }
        } catch (error) {
            console.error('Error fetching trash:', error);
        }
    };
};
