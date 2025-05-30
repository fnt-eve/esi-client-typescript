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
import type { GetFwLeaderboardsCorporationsVictoryPoints } from './GetFwLeaderboardsCorporationsVictoryPoints';
import {
    GetFwLeaderboardsCorporationsVictoryPointsFromJSON,
    GetFwLeaderboardsCorporationsVictoryPointsFromJSONTyped,
    GetFwLeaderboardsCorporationsVictoryPointsToJSON,
    GetFwLeaderboardsCorporationsVictoryPointsToJSONTyped,
} from './GetFwLeaderboardsCorporationsVictoryPoints';
import type { GetFwLeaderboardsCorporationsKills } from './GetFwLeaderboardsCorporationsKills';
import {
    GetFwLeaderboardsCorporationsKillsFromJSON,
    GetFwLeaderboardsCorporationsKillsFromJSONTyped,
    GetFwLeaderboardsCorporationsKillsToJSON,
    GetFwLeaderboardsCorporationsKillsToJSONTyped,
} from './GetFwLeaderboardsCorporationsKills';

/**
 * 200 ok object
 * @export
 * @interface GetFwLeaderboardsCorporationsOk
 */
export interface GetFwLeaderboardsCorporationsOk {
    /**
     * 
     * @type {GetFwLeaderboardsCorporationsKills}
     * @memberof GetFwLeaderboardsCorporationsOk
     */
    kills: GetFwLeaderboardsCorporationsKills;
    /**
     * 
     * @type {GetFwLeaderboardsCorporationsVictoryPoints}
     * @memberof GetFwLeaderboardsCorporationsOk
     */
    victoryPoints: GetFwLeaderboardsCorporationsVictoryPoints;
}

/**
 * Check if a given object implements the GetFwLeaderboardsCorporationsOk interface.
 */
export function instanceOfGetFwLeaderboardsCorporationsOk(value: object): value is GetFwLeaderboardsCorporationsOk {
    if (!('kills' in value) || value['kills'] === undefined) return false;
    if (!('victoryPoints' in value) || value['victoryPoints'] === undefined) return false;
    return true;
}

export function GetFwLeaderboardsCorporationsOkFromJSON(json: any): GetFwLeaderboardsCorporationsOk {
    return GetFwLeaderboardsCorporationsOkFromJSONTyped(json, false);
}

export function GetFwLeaderboardsCorporationsOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFwLeaderboardsCorporationsOk {
    if (json == null) {
        return json;
    }
    return {
        
        'kills': GetFwLeaderboardsCorporationsKillsFromJSON(json['kills']),
        'victoryPoints': GetFwLeaderboardsCorporationsVictoryPointsFromJSON(json['victory_points']),
    };
}

export function GetFwLeaderboardsCorporationsOkToJSON(json: any): GetFwLeaderboardsCorporationsOk {
    return GetFwLeaderboardsCorporationsOkToJSONTyped(json, false);
}

export function GetFwLeaderboardsCorporationsOkToJSONTyped(value?: GetFwLeaderboardsCorporationsOk | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'kills': GetFwLeaderboardsCorporationsKillsToJSON(value['kills']),
        'victory_points': GetFwLeaderboardsCorporationsVictoryPointsToJSON(value['victoryPoints']),
    };
}

