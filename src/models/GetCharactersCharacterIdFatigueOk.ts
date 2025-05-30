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
 * @interface GetCharactersCharacterIdFatigueOk
 */
export interface GetCharactersCharacterIdFatigueOk {
    /**
     * Character's jump fatigue expiry
     * @type {Date}
     * @memberof GetCharactersCharacterIdFatigueOk
     */
    jumpFatigueExpireDate?: Date;
    /**
     * Character's last jump activation
     * @type {Date}
     * @memberof GetCharactersCharacterIdFatigueOk
     */
    lastJumpDate?: Date;
    /**
     * Character's last jump update
     * @type {Date}
     * @memberof GetCharactersCharacterIdFatigueOk
     */
    lastUpdateDate?: Date;
}

/**
 * Check if a given object implements the GetCharactersCharacterIdFatigueOk interface.
 */
export function instanceOfGetCharactersCharacterIdFatigueOk(value: object): value is GetCharactersCharacterIdFatigueOk {
    return true;
}

export function GetCharactersCharacterIdFatigueOkFromJSON(json: any): GetCharactersCharacterIdFatigueOk {
    return GetCharactersCharacterIdFatigueOkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdFatigueOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdFatigueOk {
    if (json == null) {
        return json;
    }
    return {
        
        'jumpFatigueExpireDate': json['jump_fatigue_expire_date'] == null ? undefined : (new Date(json['jump_fatigue_expire_date'])),
        'lastJumpDate': json['last_jump_date'] == null ? undefined : (new Date(json['last_jump_date'])),
        'lastUpdateDate': json['last_update_date'] == null ? undefined : (new Date(json['last_update_date'])),
    };
}

export function GetCharactersCharacterIdFatigueOkToJSON(json: any): GetCharactersCharacterIdFatigueOk {
    return GetCharactersCharacterIdFatigueOkToJSONTyped(json, false);
}

export function GetCharactersCharacterIdFatigueOkToJSONTyped(value?: GetCharactersCharacterIdFatigueOk | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'jump_fatigue_expire_date': value['jumpFatigueExpireDate'] == null ? undefined : ((value['jumpFatigueExpireDate']).toISOString()),
        'last_jump_date': value['lastJumpDate'] == null ? undefined : ((value['lastJumpDate']).toISOString()),
        'last_update_date': value['lastUpdateDate'] == null ? undefined : ((value['lastUpdateDate']).toISOString()),
    };
}

