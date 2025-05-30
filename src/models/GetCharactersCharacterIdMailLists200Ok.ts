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
 * @interface GetCharactersCharacterIdMailLists200Ok
 */
export interface GetCharactersCharacterIdMailLists200Ok {
    /**
     * Mailing list ID
     * @type {number}
     * @memberof GetCharactersCharacterIdMailLists200Ok
     */
    mailingListId: number;
    /**
     * name string
     * @type {string}
     * @memberof GetCharactersCharacterIdMailLists200Ok
     */
    name: string;
}

/**
 * Check if a given object implements the GetCharactersCharacterIdMailLists200Ok interface.
 */
export function instanceOfGetCharactersCharacterIdMailLists200Ok(value: object): value is GetCharactersCharacterIdMailLists200Ok {
    if (!('mailingListId' in value) || value['mailingListId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function GetCharactersCharacterIdMailLists200OkFromJSON(json: any): GetCharactersCharacterIdMailLists200Ok {
    return GetCharactersCharacterIdMailLists200OkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdMailLists200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdMailLists200Ok {
    if (json == null) {
        return json;
    }
    return {
        
        'mailingListId': json['mailing_list_id'],
        'name': json['name'],
    };
}

export function GetCharactersCharacterIdMailLists200OkToJSON(json: any): GetCharactersCharacterIdMailLists200Ok {
    return GetCharactersCharacterIdMailLists200OkToJSONTyped(json, false);
}

export function GetCharactersCharacterIdMailLists200OkToJSONTyped(value?: GetCharactersCharacterIdMailLists200Ok | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'mailing_list_id': value['mailingListId'],
        'name': value['name'],
    };
}

