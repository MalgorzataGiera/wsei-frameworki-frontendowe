const TableDataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_INITIAL_DATA':
            return action.initialData;

        case 'SORT_BY_USER':
            return [...state].sort((a, b) => {
                if (action.order === 'asc') {
                    return a.user.name.localeCompare(b.user.name);
                } else if (action.order === 'desc') {
                    return b.user.name.localeCompare(a.user.name);
                }
                return 0;
            });

        case 'SORT_BY_TITLE':
           
            return [...state].sort((a, b) => {
                const titleA = a.post.title.toLowerCase();
                const titleB = b.post.title.toLowerCase();
                console.log(titleA[0], titleB[0]);


                if (action.order === 'asc') {
                    return titleA.localeCompare(titleB);
                } else if (action.order === 'desc') {
                    return titleB.localeCompare(titleA);
                }
                return 0; // natural -> nie sortujemy
            });

        case 'SORT_BY_COMMENTS':
            return [...state].sort((a, b) => {
                if (action.order === 'asc') {
                    return a.comments.length - b.comments.length;
                } else if (action.order === 'desc') {
                    return b.comments.length - a.comments.length;
                }
                return 0; // natural -> nie sortujemy
            });

        default:
            return state;
    }
};

export default TableDataReducer;
