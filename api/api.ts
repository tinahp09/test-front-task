import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'


export default class Api {
  private caller: AxiosInstance
  constructor(private readonly config: Partial<AxiosRequestConfig> | null = null) {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJJbnZlbnRvcnlTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiIxNWYyZmRmYy1lOWE4LTQyZmEtYmQyYy0xOTJhMDVkMmQ0N2IiLCJpYXQiOiIyLzI0LzIwMjQgOToyMzowNSBBTSIsIm1vYmlsZSI6Ik1MQkM5QWplaFZVTVZaMVZhWmxWNDEwTVdkbFVxSjFjS3hHVmhoWGJXbG5Xc1psVkcxbVZ5cEZiV0ZHZXRaRlV3dG1ZWEpsYlVsWFZ4WVZZMDFtVkpONyIsInNpdGVudW1iZXIiOiIwIiwiZXhwIjoxNzQwMzg4OTg1LCJpc3MiOiJJbnZldG9yeUF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSW52ZXRvcnlTZXJ2aWNlUG9zdG1hbkNsaWVudCJ9.q3_eAPohf-cZGVK_pp4iI0rRe9HOIVqbBuPksghAmN4'
    if (!this.config) {
      this.config = {}
      this.config.baseURL = process.env.API_URL
    }

    this.config.headers = {
      Authorization: 'Bearer ' + token,
      accept: 'application/json',
      'content-type': 'application/json'
    }

    this.caller = axios.create(this.config)
  }

 

  protected async post<TD, TR>(
    url: string,
    data?: TD,
    config?: AxiosRequestConfig
  ) {
    try {
      const response = await this.caller.post(url, data, config)
      return response.data
    } catch (e: any) {
      throw new Error(e)
    }
  }

 
}