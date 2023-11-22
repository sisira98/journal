export const listCategory = (accessToken) => {
    return async (dispatch) => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
            };

            const response = await fetch('http://localhost:8080/category/list', {
                headers,
            });

            if (response.ok) {
                const data = await response.json();
                dispatch({ type: 'LIST_CATEGORIES_SUCCESS', payload: data });
            } else {
                console.error('Error fetching categories.', response.status);
                console.error('Response text:', await response.text());
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
};
