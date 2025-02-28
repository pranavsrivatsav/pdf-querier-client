export const SESSION_STORAGE_KEY = 'pdfQuerierReduxState';

// Load state from sessionStorage
export const loadStateFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error('Error loading state from sessionStorage:', error);
    return undefined;
  }
};

