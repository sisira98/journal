
export const userSignUp = (name, email, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:8080/journal/sign-up', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                dispatch({ type: 'CREATE_USER', payload: data });
                console.log('User Created');
            } else {
                console.error('Error creating User:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating User:', error);
        }
    };
};
