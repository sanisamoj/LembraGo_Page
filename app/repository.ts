import axios, { AxiosInstance } from "axios"
import { Config } from "./Config"
import { Version } from "./Version"

export class GlobalRepository {
    private static instance: GlobalRepository | null = null

    private api: AxiosInstance = axios.create({
        baseURL: Config.API_URL,
        timeout: 2500,
        headers: {
            'Content-Type': 'application/json',
        }
    })

    private constructor() { }

    public static getInstance(): GlobalRepository {
        if (!GlobalRepository.instance) {
            GlobalRepository.instance = new GlobalRepository()
        }
        return GlobalRepository.instance
    }

    public async getLatestVersion(): Promise<Version> {
        const response = await this.api.get("/versions/latest")
        return response.data
    }

    public async getAllVersions(): Promise<Version[]> {
        const response = await this.api.get("/versions")
        return response.data
    }
}