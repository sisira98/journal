export const deleteEntry = (entryId, accessToken) => {
    return async (dispatch) => {
        try {
            const headers = {
                ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
            };
            const response = await fetch(`http://localhost:8080/journal/${entryId}`, {
                method: 'DELETE',
                headers,

            });

            if (response.ok) {
                dispatch({ type: 'DELETE_ENTRY_SUCCESS', payload: entryId });
                window.location.reload();
            } else {
                console.error('Error deleting entry:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting entry:', error);
        }
    };
};
