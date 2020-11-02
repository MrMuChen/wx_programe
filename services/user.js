import request from "../utils/request";
import { stringify } from "../utils/util"

export function login(data) {
  return request(`/api/login?${stringify(data)}`)
}

export function getCurrentUser(data) {
  return request(`/api/q/q/q?${stringify(data)}`)
}
