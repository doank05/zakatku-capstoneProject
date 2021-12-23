/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class TheNews {
  static async headlineNews() {
    const response = await fetch(API_ENDPOINT.TOP_HEADLINE);
    const responseJson = await response.json();
    return responseJson;
  }
}
export default TheNews;
