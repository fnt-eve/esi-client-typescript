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
import type { GetCharactersCharacterIdPlanetsPlanetIdLink } from './GetCharactersCharacterIdPlanetsPlanetIdLink';
import {
    GetCharactersCharacterIdPlanetsPlanetIdLinkFromJSON,
    GetCharactersCharacterIdPlanetsPlanetIdLinkFromJSONTyped,
    GetCharactersCharacterIdPlanetsPlanetIdLinkToJSON,
    GetCharactersCharacterIdPlanetsPlanetIdLinkToJSONTyped,
} from './GetCharactersCharacterIdPlanetsPlanetIdLink';
import type { GetCharactersCharacterIdPlanetsPlanetIdPin } from './GetCharactersCharacterIdPlanetsPlanetIdPin';
import {
    GetCharactersCharacterIdPlanetsPlanetIdPinFromJSON,
    GetCharactersCharacterIdPlanetsPlanetIdPinFromJSONTyped,
    GetCharactersCharacterIdPlanetsPlanetIdPinToJSON,
    GetCharactersCharacterIdPlanetsPlanetIdPinToJSONTyped,
} from './GetCharactersCharacterIdPlanetsPlanetIdPin';
import type { GetCharactersCharacterIdPlanetsPlanetIdRoute } from './GetCharactersCharacterIdPlanetsPlanetIdRoute';
import {
    GetCharactersCharacterIdPlanetsPlanetIdRouteFromJSON,
    GetCharactersCharacterIdPlanetsPlanetIdRouteFromJSONTyped,
    GetCharactersCharacterIdPlanetsPlanetIdRouteToJSON,
    GetCharactersCharacterIdPlanetsPlanetIdRouteToJSONTyped,
} from './GetCharactersCharacterIdPlanetsPlanetIdRoute';

/**
 * 200 ok object
 * @export
 * @interface GetCharactersCharacterIdPlanetsPlanetIdOk
 */
export interface GetCharactersCharacterIdPlanetsPlanetIdOk {
    /**
     * links array
     * @type {Array<GetCharactersCharacterIdPlanetsPlanetIdLink>}
     * @memberof GetCharactersCharacterIdPlanetsPlanetIdOk
     */
    links: Array<GetCharactersCharacterIdPlanetsPlanetIdLink>;
    /**
     * pins array
     * @type {Array<GetCharactersCharacterIdPlanetsPlanetIdPin>}
     * @memberof GetCharactersCharacterIdPlanetsPlanetIdOk
     */
    pins: Array<GetCharactersCharacterIdPlanetsPlanetIdPin>;
    /**
     * routes array
     * @type {Array<GetCharactersCharacterIdPlanetsPlanetIdRoute>}
     * @memberof GetCharactersCharacterIdPlanetsPlanetIdOk
     */
    routes: Array<GetCharactersCharacterIdPlanetsPlanetIdRoute>;
}

/**
 * Check if a given object implements the GetCharactersCharacterIdPlanetsPlanetIdOk interface.
 */
export function instanceOfGetCharactersCharacterIdPlanetsPlanetIdOk(value: object): value is GetCharactersCharacterIdPlanetsPlanetIdOk {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('pins' in value) || value['pins'] === undefined) return false;
    if (!('routes' in value) || value['routes'] === undefined) return false;
    return true;
}

export function GetCharactersCharacterIdPlanetsPlanetIdOkFromJSON(json: any): GetCharactersCharacterIdPlanetsPlanetIdOk {
    return GetCharactersCharacterIdPlanetsPlanetIdOkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdPlanetsPlanetIdOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdPlanetsPlanetIdOk {
    if (json == null) {
        return json;
    }
    return {
        
        'links': ((json['links'] as Array<any>).map(GetCharactersCharacterIdPlanetsPlanetIdLinkFromJSON)),
        'pins': ((json['pins'] as Array<any>).map(GetCharactersCharacterIdPlanetsPlanetIdPinFromJSON)),
        'routes': ((json['routes'] as Array<any>).map(GetCharactersCharacterIdPlanetsPlanetIdRouteFromJSON)),
    };
}

export function GetCharactersCharacterIdPlanetsPlanetIdOkToJSON(json: any): GetCharactersCharacterIdPlanetsPlanetIdOk {
    return GetCharactersCharacterIdPlanetsPlanetIdOkToJSONTyped(json, false);
}

export function GetCharactersCharacterIdPlanetsPlanetIdOkToJSONTyped(value?: GetCharactersCharacterIdPlanetsPlanetIdOk | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': ((value['links'] as Array<any>).map(GetCharactersCharacterIdPlanetsPlanetIdLinkToJSON)),
        'pins': ((value['pins'] as Array<any>).map(GetCharactersCharacterIdPlanetsPlanetIdPinToJSON)),
        'routes': ((value['routes'] as Array<any>).map(GetCharactersCharacterIdPlanetsPlanetIdRouteToJSON)),
    };
}

