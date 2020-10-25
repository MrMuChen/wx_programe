import request from "../utils/request";
import { stringify } from"../utils/util"

export function getAllAreas(data) {
  return request(`/api/getBusiness?${stringify(data)}`)
}

export function getBusinessByArea(data) {
  return request(`/api/getBusiness?${stringify(data)}`)
}

export function getBusinessDetails(data) {
  return request(`/api/getBusinessDetails?${stringify(data)}`)
}