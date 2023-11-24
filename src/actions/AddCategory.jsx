export const addCategory = (category, accessToken) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:8080/category/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
                },
                body: category
            });

            if (response.ok) {
                const data = await response.json();
                dispatch({ type: 'CREATE_CATEGORY_DATA', payload: data });
                console.log('Category created successfully');
            } else {
                console.error('Error creating Category:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating Category:', error);
        }
    };
};
