import {$host} from "./index";
import {$authHost} from "./index";

export const createAutoPart = async(autoPart) => {
    const {data} = await $authHost.post("api/autoPart", autoPart)
    return data
}

export const fetchAutoParts = async(page, limit, car, typeId) => {
    const {data} = await $host.get("api/autoPart", {params: {page, limit, car, typeId}})
    return data
}

export const fetchAutoPart = async(id) => {
    const {data} = await $host.get("api/autoPart", {params: {id}})
    return data
}