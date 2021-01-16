import axios from "react-native-axios";
import { API_KEY_YELP } from "@env";


/**
 * Input:
 *  filter: string => Categories separated by comma(,) (ex: getRestaurantIdsWithFilter("sushi,japanese"))
 * Output:
 *  Returns an array containing 20 restaurant id's that match the passed in filter
 */
const getRestaurantIdsWithFilter = (filter) => {
  let businesses = [];
  const location = "vancouver, BC";
  return axios
    .get(
      `https://api.yelp.com/v3/businesses/search?location=${location}&categories=${filter}&limit=10`,
      {
        headers: { Authorization: `Bearer ${API_KEY_YELP}` },
      }
    )
    .then((res) => {
      for (const item of res.data.businesses) {
        businesses.push(item.id);
      }

      return businesses;
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  getRestaurantIdsWithFilter
}