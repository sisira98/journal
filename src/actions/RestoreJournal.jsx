export const restoreEntry = (entryId, accessToken) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:8080/journal/${entryId}/restore`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
                },
            });

            if (response.ok) {
                dispatch({ type: 'RESTORE_ENTRY_SUCCESS', payload: entryId });
                window.location.reload();
            } else {
                console.error('Error restoring entry:', response.statusText);
            }
        } catch (error) {
            console.error('Error restoring entry:', error);
        }
    };
};
