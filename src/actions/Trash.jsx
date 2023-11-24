export const addToTrash = (entryId, accessToken) => {
    return async (dispatch) => {
        try {
            const headers = {
                ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
            };
            const response = await fetch(`http://localhost:8080/journal/${entryId}`, {
                method: 'PATCH',
                headers,

            });

            if (response.ok) {
                dispatch({ type: 'ADDED_TO_TRASH_SUCCESS', payload: entryId });
                window.location.reload();
            } else {
                console.error('Error deleting entry:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting entry:', error);
        }
    };
};
