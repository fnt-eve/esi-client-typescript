/* tslint:disable */
/* eslint-disable */
/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * The version of the OpenAPI document: 1.33
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * The defending corporation or alliance that declared this war, only contains either corporation_id or alliance_id
 * @export
 * @interface GetWarsWarIdDefender
 */
export interface GetWarsWarIdDefender {
    /**
     * Alliance ID if and only if the defender is an alliance
     * @type {number}
     * @memberof GetWarsWarIdDefender
     */
    allianceId?: number;
    /**
     * Corporation ID if and only if the defender is a corporation
     * @type {number}
     * @memberof GetWarsWarIdDefender
     */
    corporationId?: number;
    /**
     * ISK value of ships the defender has killed
     * @type {number}
     * @memberof GetWarsWarIdDefender
     */
    iskDestroyed: number;
    /**
     * The number of ships the defender has killed
     * @type {number}
     * @memberof GetWarsWarIdDefender
     */
    shipsKilled: number;
}

/**
 * Check if a given object implements the GetWarsWarIdDefender interface.
 */
export function instanceOfGetWarsWarIdDefender(value: object): value is GetWarsWarIdDefender {
    if (!('iskDestroyed' in value) || value['iskDestroyed'] === undefined) return false;
    if (!('shipsKilled' in value) || value['shipsKilled'] === undefined) return false;
    return true;
}

export function GetWarsWarIdDefenderFromJSON(json: any): GetWarsWarIdDefender {
    return GetWarsWarIdDefenderFromJSONTyped(json, false);
}

export function GetWarsWarIdDefenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetWarsWarIdDefender {
    if (json == null) {
        return json;
    }
    return {
        
        'allianceId': json['alliance_id'] == null ? undefined : json['alliance_id'],
        'corporationId': json['corporation_id'] == null ? undefined : json['corporation_id'],
        'iskDestroyed': json['isk_destroyed'],
        'shipsKilled': json['ships_killed'],
    };
}

export function GetWarsWarIdDefenderToJSON(json: any): GetWarsWarIdDefender {
    return GetWarsWarIdDefenderToJSONTyped(json, false);
}

export function GetWarsWarIdDefenderToJSONTyped(value?: GetWarsWarIdDefender | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'alliance_id': value['allianceId'],
        'corporation_id': value['corporationId'],
        'isk_destroyed': value['iskDestroyed'],
        'ships_killed': value['shipsKilled'],
    };
}

