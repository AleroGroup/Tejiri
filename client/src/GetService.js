// eslint-disable-next-line prettier/prettier
import axios from 'axios';

const url = "http://localhost:5000/api/images/";

class GetService {
  //Getting the images
  static getImages() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(image => ({
            ...image,
            createAt: new Date(image.createAt)
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default GetService;
