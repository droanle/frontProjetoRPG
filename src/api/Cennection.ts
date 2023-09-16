/**
 * @packageDocumentation
 */

import axios, { AxiosInstance } from "axios";
import {
  responseInterceptor,
  errorInterceptor,
} from "@utils/errorhandling/axios";

/**
 * Object to connect with API
 * @class Connection
 */
class Connection {
  private api: AxiosInstance;

  public constructor() {
    this.api = axios.create({
      baseURL: process.env.API_BASE_URL,
    });
    console.log(process.env.API_BASE_URL);
  }

  public useApiResult(
    request: Object,
    settings: Object | null
  ): Promise<[any, number]> {
    var api = this.api;

    if (settings != null) {
      api = axios.create(settings);
    }

    api.interceptors.response.use(
      (response) => responseInterceptor(response),
      (error) => errorInterceptor(error)
    );

    return new Promise((resolve, reject) => {
      try {
        api(request)
          .then(async (res) => {
            if (res.data.error) reject([res.data.data, res.data.status]);
            else resolve([res.data.data, res.data.status]);
          })
          .catch((res) => {
            reject(["ola", 500]);
            console.log(res);
          });
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default new Connection();
