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
 * yesterday object
 * @export
 * @interface GetFwLeaderboardsCharactersYesterdayYesterday1
 */
export interface GetFwLeaderboardsCharactersYesterdayYesterday1 {
    /**
     * Amount of victory points
     * @type {number}
     * @memberof GetFwLeaderboardsCharactersYesterdayYesterday1
     */
    amount?: number;
    /**
     * character_id integer
     * @type {number}
     * @memberof GetFwLeaderboardsCharactersYesterdayYesterday1
     */
    characterId?: number;
}

/**
 * Check if a given object implements the GetFwLeaderboardsCharactersYesterdayYesterday1 interface.
 */
export function instanceOfGetFwLeaderboardsCharactersYesterdayYesterday1(value: object): value is GetFwLeaderboardsCharactersYesterdayYesterday1 {
    return true;
}

export function GetFwLeaderboardsCharactersYesterdayYesterday1FromJSON(json: any): GetFwLeaderboardsCharactersYesterdayYesterday1 {
    return GetFwLeaderboardsCharactersYesterdayYesterday1FromJSONTyped(json, false);
}

export function GetFwLeaderboardsCharactersYesterdayYesterday1FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFwLeaderboardsCharactersYesterdayYesterday1 {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
        'characterId': json['character_id'] == null ? undefined : json['character_id'],
    };
}

export function GetFwLeaderboardsCharactersYesterdayYesterday1ToJSON(json: any): GetFwLeaderboardsCharactersYesterdayYesterday1 {
    return GetFwLeaderboardsCharactersYesterdayYesterday1ToJSONTyped(json, false);
}

export function GetFwLeaderboardsCharactersYesterdayYesterday1ToJSONTyped(value?: GetFwLeaderboardsCharactersYesterdayYesterday1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': value['amount'],
        'character_id': value['characterId'],
    };
}

