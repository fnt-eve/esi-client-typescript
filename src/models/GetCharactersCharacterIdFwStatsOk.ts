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
import type { GetCharactersCharacterIdFwStatsKills } from './GetCharactersCharacterIdFwStatsKills';
import {
    GetCharactersCharacterIdFwStatsKillsFromJSON,
    GetCharactersCharacterIdFwStatsKillsFromJSONTyped,
    GetCharactersCharacterIdFwStatsKillsToJSON,
    GetCharactersCharacterIdFwStatsKillsToJSONTyped,
} from './GetCharactersCharacterIdFwStatsKills';
import type { GetCharactersCharacterIdFwStatsVictoryPoints } from './GetCharactersCharacterIdFwStatsVictoryPoints';
import {
    GetCharactersCharacterIdFwStatsVictoryPointsFromJSON,
    GetCharactersCharacterIdFwStatsVictoryPointsFromJSONTyped,
    GetCharactersCharacterIdFwStatsVictoryPointsToJSON,
    GetCharactersCharacterIdFwStatsVictoryPointsToJSONTyped,
} from './GetCharactersCharacterIdFwStatsVictoryPoints';

/**
 * 200 ok object
 * @export
 * @interface GetCharactersCharacterIdFwStatsOk
 */
export interface GetCharactersCharacterIdFwStatsOk {
    /**
     * The given character's current faction rank
     * @type {number}
     * @memberof GetCharactersCharacterIdFwStatsOk
     */
    currentRank?: number;
    /**
     * The enlistment date of the given character into faction warfare. Will not be included if character is not enlisted in faction warfare
     * @type {Date}
     * @memberof GetCharactersCharacterIdFwStatsOk
     */
    enlistedOn?: Date;
    /**
     * The faction the given character is enlisted to fight for. Will not be included if character is not enlisted in faction warfare
     * @type {number}
     * @memberof GetCharactersCharacterIdFwStatsOk
     */
    factionId?: number;
    /**
     * The given character's highest faction rank achieved
     * @type {number}
     * @memberof GetCharactersCharacterIdFwStatsOk
     */
    highestRank?: number;
    /**
     * 
     * @type {GetCharactersCharacterIdFwStatsKills}
     * @memberof GetCharactersCharacterIdFwStatsOk
     */
    kills: GetCharactersCharacterIdFwStatsKills;
    /**
     * 
     * @type {GetCharactersCharacterIdFwStatsVictoryPoints}
     * @memberof GetCharactersCharacterIdFwStatsOk
     */
    victoryPoints: GetCharactersCharacterIdFwStatsVictoryPoints;
}

/**
 * Check if a given object implements the GetCharactersCharacterIdFwStatsOk interface.
 */
export function instanceOfGetCharactersCharacterIdFwStatsOk(value: object): value is GetCharactersCharacterIdFwStatsOk {
    if (!('kills' in value) || value['kills'] === undefined) return false;
    if (!('victoryPoints' in value) || value['victoryPoints'] === undefined) return false;
    return true;
}

export function GetCharactersCharacterIdFwStatsOkFromJSON(json: any): GetCharactersCharacterIdFwStatsOk {
    return GetCharactersCharacterIdFwStatsOkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdFwStatsOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdFwStatsOk {
    if (json == null) {
        return json;
    }
    return {
        
        'currentRank': json['current_rank'] == null ? undefined : json['current_rank'],
        'enlistedOn': json['enlisted_on'] == null ? undefined : (new Date(json['enlisted_on'])),
        'factionId': json['faction_id'] == null ? undefined : json['faction_id'],
        'highestRank': json['highest_rank'] == null ? undefined : json['highest_rank'],
        'kills': GetCharactersCharacterIdFwStatsKillsFromJSON(json['kills']),
        'victoryPoints': GetCharactersCharacterIdFwStatsVictoryPointsFromJSON(json['victory_points']),
    };
}

export function GetCharactersCharacterIdFwStatsOkToJSON(json: any): GetCharactersCharacterIdFwStatsOk {
    return GetCharactersCharacterIdFwStatsOkToJSONTyped(json, false);
}

export function GetCharactersCharacterIdFwStatsOkToJSONTyped(value?: GetCharactersCharacterIdFwStatsOk | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'current_rank': value['currentRank'],
        'enlisted_on': value['enlistedOn'] == null ? undefined : ((value['enlistedOn']).toISOString()),
        'faction_id': value['factionId'],
        'highest_rank': value['highestRank'],
        'kills': GetCharactersCharacterIdFwStatsKillsToJSON(value['kills']),
        'victory_points': GetCharactersCharacterIdFwStatsVictoryPointsToJSON(value['victoryPoints']),
    };
}

