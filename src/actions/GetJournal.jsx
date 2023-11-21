export const getEntry = (entryId, accessToken) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/journal/${entryId}`, {
        headers: {
          'Content-Type': 'application/json',
          ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: 'GET_SELECTED_ENTRY', payload: data });
      } else {
        console.error('Error fetching selected entry:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching selected entry:', error);
    }
  };
};
