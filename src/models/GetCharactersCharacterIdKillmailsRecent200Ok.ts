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
 * @interface GetCharactersCharacterIdKillmailsRecent200Ok
 */
export interface GetCharactersCharacterIdKillmailsRecent200Ok {
    /**
     * A hash of this killmail
     * @type {string}
     * @memberof GetCharactersCharacterIdKillmailsRecent200Ok
     */
    killmailHash: string;
    /**
     * ID of this killmail
     * @type {number}
     * @memberof GetCharactersCharacterIdKillmailsRecent200Ok
     */
    killmailId: number;
}

/**
 * Check if a given object implements the GetCharactersCharacterIdKillmailsRecent200Ok interface.
 */
export function instanceOfGetCharactersCharacterIdKillmailsRecent200Ok(value: object): value is GetCharactersCharacterIdKillmailsRecent200Ok {
    if (!('killmailHash' in value) || value['killmailHash'] === undefined) return false;
    if (!('killmailId' in value) || value['killmailId'] === undefined) return false;
    return true;
}

export function GetCharactersCharacterIdKillmailsRecent200OkFromJSON(json: any): GetCharactersCharacterIdKillmailsRecent200Ok {
    return GetCharactersCharacterIdKillmailsRecent200OkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdKillmailsRecent200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdKillmailsRecent200Ok {
    if (json == null) {
        return json;
    }
    return {
        
        'killmailHash': json['killmail_hash'],
        'killmailId': json['killmail_id'],
    };
}

export function GetCharactersCharacterIdKillmailsRecent200OkToJSON(json: any): GetCharactersCharacterIdKillmailsRecent200Ok {
    return GetCharactersCharacterIdKillmailsRecent200OkToJSONTyped(json, false);
}

export function GetCharactersCharacterIdKillmailsRecent200OkToJSONTyped(value?: GetCharactersCharacterIdKillmailsRecent200Ok | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'killmail_hash': value['killmailHash'],
        'killmail_id': value['killmailId'],
    };
}

