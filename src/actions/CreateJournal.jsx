export const shareEntry = (title, content, accessToken) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:8080/journal/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
                },
                body: JSON.stringify({
                    title,
                    content,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                dispatch({ type: 'CREATE_ENTRY_DATA', payload: data });
                window.location.reload();
                console.log('Entry created successfully');
            } else {
                console.error('Error creating entry:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating entry:', error);
        }
    };
};
