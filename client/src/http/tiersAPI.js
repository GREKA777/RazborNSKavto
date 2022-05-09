import {$host} from "./index";
import {$authHost} from "./index";

export const createTiers = async(tiers) => {
    const {data} = await $authHost.post("api/tiers", tiers)
    return data
}

export const fetchTiers = async(page, limit, profile, width, diameter) => {
    const {data} = await $host.get("api/tiers", {params: {page, limit, profile, width, diameter}})
    return data
}

export const fetchTier = async(id) => {
    const {data} = await $host.get("api/tiers", {params: {id}})
    return data
}