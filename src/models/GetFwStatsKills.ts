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
 * Summary of kills against an enemy faction for the given faction
 * @export
 * @interface GetFwStatsKills
 */
export interface GetFwStatsKills {
    /**
     * Last week's total number of kills against enemy factions
     * @type {number}
     * @memberof GetFwStatsKills
     */
    lastWeek: number;
    /**
     * Total number of kills against enemy factions since faction warfare began
     * @type {number}
     * @memberof GetFwStatsKills
     */
    total: number;
    /**
     * Yesterday's total number of kills against enemy factions
     * @type {number}
     * @memberof GetFwStatsKills
     */
    yesterday: number;
}

/**
 * Check if a given object implements the GetFwStatsKills interface.
 */
export function instanceOfGetFwStatsKills(value: object): value is GetFwStatsKills {
    if (!('lastWeek' in value) || value['lastWeek'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('yesterday' in value) || value['yesterday'] === undefined) return false;
    return true;
}

export function GetFwStatsKillsFromJSON(json: any): GetFwStatsKills {
    return GetFwStatsKillsFromJSONTyped(json, false);
}

export function GetFwStatsKillsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFwStatsKills {
    if (json == null) {
        return json;
    }
    return {
        
        'lastWeek': json['last_week'],
        'total': json['total'],
        'yesterday': json['yesterday'],
    };
}

export function GetFwStatsKillsToJSON(json: any): GetFwStatsKills {
    return GetFwStatsKillsToJSONTyped(json, false);
}

export function GetFwStatsKillsToJSONTyped(value?: GetFwStatsKills | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'last_week': value['lastWeek'],
        'total': value['total'],
        'yesterday': value['yesterday'],
    };
}

