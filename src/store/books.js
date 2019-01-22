/**
 * action types
 */
export const Types = {
  GET_Podcasts: 'Podcasts/GET_Podcasts',
  GET_Podcasts_SUCCESS: 'Podcasts/GET_Podcasts_SUCCESS',
  GET_Podcasts_FAILURE: 'Podcasts/GET_Podcasts_FAILURE',

  GET_PAGINATE_Podcasts: 'Podcasts/GET_PAGINATE_Podcasts',
  GET_PAGINATE_Podcasts_SUCCESS: 'Podcasts/GET_PAGINATE_Podcasts_SUCCESS',
  GET_PAGINATE_Podcasts_FAILURE: 'Podcasts/GET_PAGINATE_Podcasts_FAILURE'
};

/**
 * initial state
 */
const initialState = {
  loading: false,
  data: [],
  error: ''
};

/**
 * reducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_Podcasts:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case Types.GET_Podcasts_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: ''
      };
    case Types.GET_Podcasts_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case Types.GET_PAGINATE_Podcasts:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case Types.GET_PAGINATE_Podcasts_SUCCESS:
      return {
        loading: false,
        data: [
          ...state.data.filter(i => i.id),
          ...action.payload
        ],
        error: ''
      };
    case Types.GET_PAGINATE_Podcasts_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

/**
 * action creators
 */
export const fetchPodcasts = Podcasts => ({
  type: Types.GET_Podcasts,
  payload: Podcasts
});

export const paginatePodcasts = (Podcasts, startIndex) => ({
  type: Types.GET_PAGINATE_Podcasts,
  payload: { Podcasts, startIndex }
});
