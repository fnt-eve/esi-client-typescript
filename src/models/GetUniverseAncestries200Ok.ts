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
 * @interface GetUniverseAncestries200Ok
 */
export interface GetUniverseAncestries200Ok {
    /**
     * The bloodline associated with this ancestry
     * @type {number}
     * @memberof GetUniverseAncestries200Ok
     */
    bloodlineId: number;
    /**
     * description string
     * @type {string}
     * @memberof GetUniverseAncestries200Ok
     */
    description: string;
    /**
     * icon_id integer
     * @type {number}
     * @memberof GetUniverseAncestries200Ok
     */
    iconId?: number;
    /**
     * id integer
     * @type {number}
     * @memberof GetUniverseAncestries200Ok
     */
    id: number;
    /**
     * name string
     * @type {string}
     * @memberof GetUniverseAncestries200Ok
     */
    name: string;
    /**
     * short_description string
     * @type {string}
     * @memberof GetUniverseAncestries200Ok
     */
    shortDescription?: string;
}

/**
 * Check if a given object implements the GetUniverseAncestries200Ok interface.
 */
export function instanceOfGetUniverseAncestries200Ok(value: object): value is GetUniverseAncestries200Ok {
    if (!('bloodlineId' in value) || value['bloodlineId'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function GetUniverseAncestries200OkFromJSON(json: any): GetUniverseAncestries200Ok {
    return GetUniverseAncestries200OkFromJSONTyped(json, false);
}

export function GetUniverseAncestries200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUniverseAncestries200Ok {
    if (json == null) {
        return json;
    }
    return {
        
        'bloodlineId': json['bloodline_id'],
        'description': json['description'],
        'iconId': json['icon_id'] == null ? undefined : json['icon_id'],
        'id': json['id'],
        'name': json['name'],
        'shortDescription': json['short_description'] == null ? undefined : json['short_description'],
    };
}

export function GetUniverseAncestries200OkToJSON(json: any): GetUniverseAncestries200Ok {
    return GetUniverseAncestries200OkToJSONTyped(json, false);
}

export function GetUniverseAncestries200OkToJSONTyped(value?: GetUniverseAncestries200Ok | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bloodline_id': value['bloodlineId'],
        'description': value['description'],
        'icon_id': value['iconId'],
        'id': value['id'],
        'name': value['name'],
        'short_description': value['shortDescription'],
    };
}

