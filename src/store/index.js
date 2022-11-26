import { createStore } from "vuex";
import country from "./country";
import paging from "./paging";
export default createStore({
  modules: {
    country,
    paging
  
  },
});
