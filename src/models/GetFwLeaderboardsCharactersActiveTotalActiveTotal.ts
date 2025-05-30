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
 * active_total object
 * @export
 * @interface GetFwLeaderboardsCharactersActiveTotalActiveTotal
 */
export interface GetFwLeaderboardsCharactersActiveTotalActiveTotal {
    /**
     * Amount of kills
     * @type {number}
     * @memberof GetFwLeaderboardsCharactersActiveTotalActiveTotal
     */
    amount?: number;
    /**
     * character_id integer
     * @type {number}
     * @memberof GetFwLeaderboardsCharactersActiveTotalActiveTotal
     */
    characterId?: number;
}

/**
 * Check if a given object implements the GetFwLeaderboardsCharactersActiveTotalActiveTotal interface.
 */
export function instanceOfGetFwLeaderboardsCharactersActiveTotalActiveTotal(value: object): value is GetFwLeaderboardsCharactersActiveTotalActiveTotal {
    return true;
}

export function GetFwLeaderboardsCharactersActiveTotalActiveTotalFromJSON(json: any): GetFwLeaderboardsCharactersActiveTotalActiveTotal {
    return GetFwLeaderboardsCharactersActiveTotalActiveTotalFromJSONTyped(json, false);
}

export function GetFwLeaderboardsCharactersActiveTotalActiveTotalFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFwLeaderboardsCharactersActiveTotalActiveTotal {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
        'characterId': json['character_id'] == null ? undefined : json['character_id'],
    };
}

export function GetFwLeaderboardsCharactersActiveTotalActiveTotalToJSON(json: any): GetFwLeaderboardsCharactersActiveTotalActiveTotal {
    return GetFwLeaderboardsCharactersActiveTotalActiveTotalToJSONTyped(json, false);
}

export function GetFwLeaderboardsCharactersActiveTotalActiveTotalToJSONTyped(value?: GetFwLeaderboardsCharactersActiveTotalActiveTotal | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': value['amount'],
        'character_id': value['characterId'],
    };
}

