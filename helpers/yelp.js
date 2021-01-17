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
        businesses.push(item);
      }

      return businesses;
    })
    .catch((err) => {
      console.log(err);
    });
};

const createRestaurantProfile = (id) => {
  const restaurant = {};
  return axios
    .get(`https://api.yelp.com/v3/businesses/${id}`, {
      headers: { Authorization: `Bearer ${API_KEY_YELP}` },
    })
    .then((res) => {
      restaurant.name = res.data.name;
      restaurant.image = res.data.image_url;
      restaurant.phone = res.data.display_phone;
      restaurant.address = res.data.location.address1;
      restaurant.city = res.data.location.city;
      restaurant.rating = res.data.rating;
      restaurant.price = res.data.price;
      return restaurant;
    });
};

const buildRestaurants = (profiles) => {
  let restaurants = [];
  for (const item of profiles) {
    restaurants.push(item);
  }
  return restaurants;
};

export { getRestaurantIdsWithFilter, createRestaurantProfile, buildRestaurants };
