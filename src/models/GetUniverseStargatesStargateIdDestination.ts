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
 * destination object
 * @export
 * @interface GetUniverseStargatesStargateIdDestination
 */
export interface GetUniverseStargatesStargateIdDestination {
    /**
     * The stargate this stargate connects to
     * @type {number}
     * @memberof GetUniverseStargatesStargateIdDestination
     */
    stargateId: number;
    /**
     * The solar system this stargate connects to
     * @type {number}
     * @memberof GetUniverseStargatesStargateIdDestination
     */
    systemId: number;
}

/**
 * Check if a given object implements the GetUniverseStargatesStargateIdDestination interface.
 */
export function instanceOfGetUniverseStargatesStargateIdDestination(value: object): value is GetUniverseStargatesStargateIdDestination {
    if (!('stargateId' in value) || value['stargateId'] === undefined) return false;
    if (!('systemId' in value) || value['systemId'] === undefined) return false;
    return true;
}

export function GetUniverseStargatesStargateIdDestinationFromJSON(json: any): GetUniverseStargatesStargateIdDestination {
    return GetUniverseStargatesStargateIdDestinationFromJSONTyped(json, false);
}

export function GetUniverseStargatesStargateIdDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUniverseStargatesStargateIdDestination {
    if (json == null) {
        return json;
    }
    return {
        
        'stargateId': json['stargate_id'],
        'systemId': json['system_id'],
    };
}

export function GetUniverseStargatesStargateIdDestinationToJSON(json: any): GetUniverseStargatesStargateIdDestination {
    return GetUniverseStargatesStargateIdDestinationToJSONTyped(json, false);
}

export function GetUniverseStargatesStargateIdDestinationToJSONTyped(value?: GetUniverseStargatesStargateIdDestination | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'stargate_id': value['stargateId'],
        'system_id': value['systemId'],
    };
}

