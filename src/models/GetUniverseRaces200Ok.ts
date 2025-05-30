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
 * 200 ok object
 * @export
 * @interface GetUniverseRaces200Ok
 */
export interface GetUniverseRaces200Ok {
    /**
     * The alliance generally associated with this race
     * @type {number}
     * @memberof GetUniverseRaces200Ok
     */
    allianceId: number;
    /**
     * description string
     * @type {string}
     * @memberof GetUniverseRaces200Ok
     */
    description: string;
    /**
     * name string
     * @type {string}
     * @memberof GetUniverseRaces200Ok
     */
    name: string;
    /**
     * race_id integer
     * @type {number}
     * @memberof GetUniverseRaces200Ok
     */
    raceId: number;
}

/**
 * Check if a given object implements the GetUniverseRaces200Ok interface.
 */
export function instanceOfGetUniverseRaces200Ok(value: object): value is GetUniverseRaces200Ok {
    if (!('allianceId' in value) || value['allianceId'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('raceId' in value) || value['raceId'] === undefined) return false;
    return true;
}

export function GetUniverseRaces200OkFromJSON(json: any): GetUniverseRaces200Ok {
    return GetUniverseRaces200OkFromJSONTyped(json, false);
}

export function GetUniverseRaces200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUniverseRaces200Ok {
    if (json == null) {
        return json;
    }
    return {
        
        'allianceId': json['alliance_id'],
        'description': json['description'],
        'name': json['name'],
        'raceId': json['race_id'],
    };
}

export function GetUniverseRaces200OkToJSON(json: any): GetUniverseRaces200Ok {
    return GetUniverseRaces200OkToJSONTyped(json, false);
}

export function GetUniverseRaces200OkToJSONTyped(value?: GetUniverseRaces200Ok | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'alliance_id': value['allianceId'],
        'description': value['description'],
        'name': value['name'],
        'race_id': value['raceId'],
    };
}

